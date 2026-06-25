"use client";

import { useState, useEffect, useRef } from "react";
import { X, ArrowUp, MessageCircle, Maximize2, Minimize2 } from "lucide-react";
import { branchtableListEndpoint } from "@/pages/api/shipapi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./fertilityChatbot.css";
import DatePicker from "../DatePicker/datePicker";
import SearchableSelect from "../searchAndSelect/SearchableSelect";
import { websiteleadCreateListEndpoint } from '@/pages/api/shipapi';



// Dynamic branching conversational flow configurations
const FLOWS = {
  welcome: {
    text: "Welcome to Sudha Fertility. You are not alone anymore. Let’s take the first step together.",
    options: [
      { label: "We have been trying for a long time", nextFlow: "trying_long" },
      { label: "taken fertility treatments previously", nextFlow: "prev_treatment" },
      { label: "We are just starting our journey", nextFlow: "starting_journey" },
      { label: "We just want a fertility check-up", nextFlow: "fertility_checkup" },
      { label: "Know your nearest branch", nextFlow: "nearest_branch" }
    ]
  },
  trying_long: {
    steps: [
      {
        key: "waitingDuration",
        text: "We understand your pain. How long have you been waiting?",
        type: "buttons",
        options: ["Under 1 year", "1 to 3 years", "Over 3 years"]
      },
      {
        key: "seenDoctor",
        text: "You are incredibly strong. Seen a doctor before?",
        type: "buttons",
        options: ["Yes, we have", "No, not yet"]
      }
    ]
  },
  prev_treatment: {
    steps: [
      {
        key: "pastTreatment",
        text: "Thank you for sharing. What did you try earlier?",
        type: "buttons",
        options: ["Tablets / Tracking", "IUI Cycle", "IVF / ICSI"]
      },
      {
        key: "secondOpinion",
        text: "Don’t lose heart. Are you seeking a second opinion?",
        type: "buttons",
        options: ["Yes, need clarity", "Failed elsewhere"]
      }
    ]
  },
  starting_journey: {
    steps: [
      {
        key: "triedDuration",
        text: "Welcome! Let’s keep things simple. How long have you tried?",
        type: "buttons",
        options: ["Few months", "Around 6 months", "Just planning"]
      },
      {
        key: "healthConcerns",
        text: "Perfect timing. Any known health concerns like PCOS?",
        type: "buttons",
        options: ["Yes, we do", "No, everything normal", "We aren’t sure"]
      }
    ]
  },
  fertility_checkup: {
    steps: [
      {
        key: "cycleConcerns",
        text: "Smart choice. Clear reports bring peace of mind. Any cycle concerns?",
        type: "buttons",
        options: ["Yes, some concerns", "No, routine check", "We don’t know"]
      },
      {
        key: "visitTiming",
        text: "Our advanced labs give absolute clarity. When would you like to visit?",
        type: "buttons",
        options: ["This week", "This month", "Just checking"]
      }
    ]
  },
  nearest_branch: {
    text: "We are close to your home. Search and select your location for instant branch directions.",
    type: "branch_lookup"
  }
};

const COMMON_REG_QUESTIONS = [
  {
    key: "name",
    text: "👤 Your journey matters. Let’s find answers together. May I know your full name?",
    type: "text",
    placeholder: "Enter your full name"
  },
  {
    key: "whatsapp",
    text: "📱 Please share your WhatsApp number for a private call.",
    type: "tel",
    placeholder: "Enter your WhatsApp number"
  },
  {
    key: "branch",
    text: "🏥 Please select your preferred branch.",
    type: "select",
    placeholder: "Select Location"
  },
  {
    key: "appointmentDate",
    text: "📅 What is your preferred appointment date?",
    type: "date",
    placeholder: "Select Date"
  }
];

const CITY_MAP_LINKS = {
  "Chennai":    { map: "https://maps.app.goo.gl/ooLkknzC2oPQDU7L9", web: "/fertility-centre-in-chennai" },
  "Coimbatore": { map: "https://maps.app.goo.gl/FzY9JxNQMHxAPzzv9", web: "/fertility-centre-in-coimbatore" },
  "Madurai":    { map: "https://maps.app.goo.gl/2S83qpF2nRqjFg4c7", web: "/fertility-centre-in-madurai" },
  "Trichy":     { map: "https://maps.app.goo.gl/jP1sDSHqVXsXmdvK8", web: "/fertility-centre-in-trichy" },
  "Bengaluru":  { map: "https://maps.app.goo.gl/GZSDWRzyTaZgY3Le8", web: "/fertility-centre-in-bangalore" },
  "Hyderabad":  { map: "https://maps.app.goo.gl/1j6HjWA7kSvZW7LNA", web: "/fertility-centre-in-hyderabad" }
};

// How long the bot "thinks" before each message appears (ms)
const TYPING_DELAY_MS = 900;

export default function FertilityChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentFlowKey, setCurrentFlowKey] = useState("welcome");
  const [stepIndex, setStepIndex] = useState(0); // Index of the step in the current flow
  const [isComplete, setIsComplete] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  // Form value states
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({});
  const [branchList, setBranchList] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const messagesEndRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Fetch branch list on mount
  useEffect(() => {
    async function fetchBranches() {
      try {
        const res = await fetch(branchtableListEndpoint);
        if (res.ok) {
          const data = await res.json();
          setBranchList(data?.data?.list || []);
        }
      } catch (err) {
        console.error("Fetch branches error:", err);
      }
    }
    fetchBranches();
  }, []);

  // Initialize welcome flow when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: FLOWS.welcome.text,
          type: "buttons",
          options: FLOWS.welcome.options
        }
      ]);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom (also fires while the typing indicator is showing)
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isBotTyping]);

  // Focus input automatically on text steps
  useEffect(() => {
    if (isOpen && !isComplete && !isBotTyping) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [stepIndex, isOpen, isComplete, isBotTyping]);

  // Clean up any pending typing timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };
  const handleClose = () => {
    setIsOpen(false);
    setIsExpanded(false);
  };
  const handleToggleExpand = () => setIsExpanded((v) => !v);

  // Pushes the immediate (e.g. user) messages, shows a typing indicator,
  // then appends the bot's reply after a short delay.
  const pushBotMessage = (immediateMessages, botMsg) => {
    setMessages(immediateMessages);
    setIsBotTyping(true);

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      setIsBotTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, TYPING_DELAY_MS);
  };

  // Resolve current active question config
  const getCurrentQuestion = () => {
    if (currentFlowKey === "welcome") {
      return { type: "buttons", options: FLOWS.welcome.options };
    }

    const flow = FLOWS[currentFlowKey];
    if (currentFlowKey === "nearest_branch") {
      return { type: "branch_lookup" };
    }

    const initialStepsCount = flow.steps.length;
    if (stepIndex < initialStepsCount) {
      return flow.steps[stepIndex];
    }

    const commonIndex = stepIndex - initialStepsCount;
    if (commonIndex < COMMON_REG_QUESTIONS.length) {
      return COMMON_REG_QUESTIONS[commonIndex];
    }

    return null;
  };

  const currentQuestion = getCurrentQuestion();

  // Submit current step answer
  const submitAnswer = async (value) => {
    const trimmedVal = typeof value === "string" ? value.trim() : value;
    if (trimmedVal === "" && currentQuestion?.type !== "date" && currentQuestion?.type !== "select") return;

    // Save answer data
    const questionKey = currentQuestion?.key || `step_${stepIndex}`;
    const updatedForm = { ...formData, [questionKey]: trimmedVal };
    setFormData(updatedForm);

    // Show the user's message immediately
    const messagesWithUser = [...messages, { sender: "user", text: trimmedVal }];
    const nextIndex = stepIndex + 1;
    setStepIndex(nextIndex);
    setInputValue("");

    // Determine the next question
    const flow = FLOWS[currentFlowKey];
    const initialStepsCount = flow?.steps?.length || 0;

    if (currentFlowKey === "welcome") {
      // Welcome phase options transition
      const selectedOption = FLOWS.welcome.options.find(opt => opt.label === value);
      const nextFlowKey = selectedOption?.nextFlow || "welcome";
      setCurrentFlowKey(nextFlowKey);
      setStepIndex(0);

      const targetFlow = FLOWS[nextFlowKey];
      let botMsg;
      if (nextFlowKey === "nearest_branch") {
        botMsg = {
          sender: "bot",
          text: targetFlow.text,
          type: "branch_lookup"
        };
      } else {
        const firstQuestion = targetFlow.steps[0];
        botMsg = {
          sender: "bot",
          text: firstQuestion.text,
          type: "buttons",
          options: firstQuestion.options
        };
      }
      pushBotMessage(messagesWithUser, botMsg);
    } else {
      // Phase 2 conversational questions
      const nextQuestionIndex = nextIndex;
      const nextQuestion =
        nextQuestionIndex < initialStepsCount
          ? flow.steps[nextQuestionIndex]
          : COMMON_REG_QUESTIONS[nextQuestionIndex - initialStepsCount];

      if (nextQuestion) {
        pushBotMessage(messagesWithUser, {
          sender: "bot",
          text: nextQuestion.text,
          type: nextQuestion.type,
          options: nextQuestion.options
        });
      } else {
        // Submit gathered info to backend and CRM
        try {
          // 1. Normalize date
          const d = updatedForm.appointmentDate ? new Date(updatedForm.appointmentDate) : null;
          const appointmentDate = d
            ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
            : "";

          // 2. Submit to local API for logging
          await fetch("/api/saveData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: updatedForm.name,
              mobile: updatedForm.whatsapp,
              branch: updatedForm.branch,
              appointmentDate: updatedForm.appointmentDate,
              formType: "Chatbot Lead - " + currentFlowKey
            })
          });

          // 3. Submit to CRM
          const cleanMobile = updatedForm.whatsapp ? updatedForm.whatsapp.replace(/\D/g, "") : "";
          const phoneWithoutCountryCode = cleanMobile.startsWith("91") && cleanMobile.length === 12
            ? cleanMobile.substring(2)
            : cleanMobile;

          const selectedBranch = branchList.find(b => b.branch_name === updatedForm.branch);
          const branchId = selectedBranch ? selectedBranch.id : updatedForm.branch;

          const crmBody = {
            name: updatedForm.name,
            branch: branchId,
            mobile: phoneWithoutCountryCode,
            appointment_date: appointmentDate,
            source_type: "21",
            lead_type: "4",
          };

          await fetch(websiteleadCreateListEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(crmBody),
          });

        } catch (err) {
          console.error("Submission error:", err);
        }

        // Phase 3: The Peaceful Goodbye
        pushBotMessage(messagesWithUser, {
          sender: "bot",
          text: "Thank you. Your story is safe with us. Our coordinator will call you within 24 hours. Rest easy tonight. Your miracle is closer. 🤍"
        });
        setIsComplete(true);
      }
    }
  };

  const handleBranchLookup = (e) => {
    e.preventDefault();
    if (!selectedCity) return;

    const details = CITY_MAP_LINKS[selectedCity] || {
      map: `https://www.google.com/maps/search/?api=1&query=Sudha+Fertility+Centre+${selectedCity}`,
      web: `/fertility-centre-in-${selectedCity.toLowerCase()}`
    };

    const messagesWithUser = [
      ...messages,
      { sender: "user", text: `City: ${selectedCity}` }
    ];

    pushBotMessage(messagesWithUser, {
      sender: "bot",
      text: `📍 Found it! Here are the links for our ${selectedCity} branch:`,
      type: "branch_links",
      links: [
        { label: "Branch Website", icon: "🌐", href: details.web, external: false },
        { label: "Get Map Link",   icon: "🗺️", href: details.map, external: true  }
      ]
    });
    setIsComplete(true);
  };

  const widgetW = isExpanded ? "w-[480px]" : "w-96";
  const widgetH = isExpanded ? "h-[700px]" : "h-[580px]";

 


  return (
    <>
      {/* Closed State Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-4 z-50">
          <button
            ref={toggleBtnRef}
            onClick={handleOpen}
            aria-label="Open appointment chat"
            className="cb-fab animate-popIn"
          >
            <span className="cb-fab-ring" aria-hidden="true" />
            <MessageCircle className="w-5 h-5" aria-hidden="true" style={{ position: "relative", zIndex: 1 }} />
            {hasUnread && <span className="cb-fab-badge" aria-hidden="true" />}
          </button>
        </div>
      )}

      {/* Open State Widget */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed bottom-6 right-4 z-50 animate-expandIn ${widgetW} ${widgetH} flex flex-col cb-widget`}
        >
          {/* Header */}
          <div className="cb-header" role="banner">
            <div className="flex items-center gap-3">
              <div className="cb-avatar">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="cb-title">Sudha Fertility</h2>
                <p className="cb-subtitle">Appointment Booking</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button onClick={handleToggleExpand} className="cb-header-btn">
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button onClick={handleClose} className="cb-header-btn">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 cb-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
                style={{ animation: "slideUp 0.28s ease-out backwards" }}
              >
                <div className={`cb-bubble ${msg.sender === "bot" ? "cb-bubble-bot" : "cb-bubble-user"}`}>
                  {/* Render branch link cards */}
                  {msg.type === "branch_links" ? (
                    <>
                      <p>{msg.text}</p>
                      <div className="cb-branch-links">
                        {msg.links.map((link, li) => (
                          <a
                            key={li}
                            href={link.href}
                            target={link.external ? "_blank" : "_self"}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="cb-branch-link-item"
                          >
                            <span className="cb-link-icon">{link.icon}</span>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    /* Standard text messages */
                    msg.text.split("\n").map((line, idx) => (
                      <p key={idx} className={idx > 0 ? "mt-1.5" : ""}>
                        {line}
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isBotTyping && (
              <div
                className="flex justify-start"
                style={{ animation: "slideUp 0.28s ease-out backwards" }}
              >
                <div className="cb-bubble cb-bubble-bot cb-typing">
                  <span className="cb-dot" />
                  <span className="cb-dot" />
                  <span className="cb-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Conversational Input Area */}
          {!isComplete && currentQuestion && !isBotTyping && (
            <div className="cb-input-area">
              {/* BUTTONS / CHIPS INPUT */}
              {currentQuestion.type === "buttons" && currentQuestion.options && (
                <div className="flex flex-col gap-2">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => submitAnswer(option.label || option)}
                      className="cb-chip text-left justify-start w-full py-2.5 px-4"
                      style={{ animation: `slideUp 0.3s ease-out ${idx * 0.06}s backwards` }}
                    >
                      {option.label || option}
                    </button>
                  ))}
                </div>
              )}

              {/* BRANCH LOOKUP SPECIAL DROPDOWN (Option 5) */}
              {currentQuestion.type === "branch_lookup" && (
                <form onSubmit={handleBranchLookup} className="space-y-3">
                  <SearchableSelect
                    options={Object.keys(CITY_MAP_LINKS).map(city => ({ city_name: city }))}
                    value={selectedCity}
                    onChange={(val) => setSelectedCity(val)}
                    placeholder="Select City"
                    labelKey="city_name"
                    valueKey="city_name"
                    theme="light"
                    align="top"
                  />
                  <button
                    type="submit"
                    className="w-full text-white h-10 rounded-lg transition-all flex justify-center items-center font-medium bg-[#173366] hover:bg-[#1f4285] text-sm"
                  >
                    Get Map Link
                  </button>
                </form>
              )}

              {/* TEXT INPUT (e.g. Name) */}
              {currentQuestion.type === "text" && (
                <div className="cb-input-row">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder={currentQuestion.placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.replace(/[^a-zA-Z\s.]/g, ""))}
                    onKeyDown={(e) => e.key === "Enter" && submitAnswer(inputValue)}
                    className="cb-input"
                    required
                  />
                  <button
                    onClick={() => submitAnswer(inputValue)}
                    disabled={!inputValue.trim()}
                    className="cb-send"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* WHATSAPP NUMBER PHONE INPUT */}
              {currentQuestion.type === "tel" && (
                <div className="flex gap-2 items-center">
                  <div className="flex-1">
                    <PhoneInput
                      country="in"
                      value={inputValue}
                      onChange={(val) => setInputValue(val)}
                      placeholder={currentQuestion.placeholder}
                      inputStyle={{
                        width: "100%",
                        height: "40px",
                        borderRadius: "999px",
                        borderColor: "#B1B2B3",
                        backgroundColor: "#ffffff",
                        fontSize: "14px",
                        color: "#262626",
                        paddingLeft: "48px"
                      }}
                      containerStyle={{
                        width: "100%",
                      }}
                      buttonStyle={{
                        borderRadius: "999px 0 0 999px",
                        borderRight: "none"
                      }}
                      required
                    />
                  </div>
                  <button
                    onClick={() => submitAnswer(inputValue)}
                    disabled={inputValue.length < 5}
                    className="cb-send h-10 w-10 flex-shrink-0 rounded-full"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* SELECT LOCATION DROPDOWN */}
              {currentQuestion.type === "select" && (
                <div className="flex gap-2 items-center w-full">
                  <div className="flex-grow">
                    <SearchableSelect
                      options={branchList}
                      value={inputValue}
                      onChange={(val) => setInputValue(val)}
                      placeholder="Select Location"
                      labelKey="branch_name"
                      valueKey="branch_name"
                      theme="light"
                      align="top"
                    />
                  </div>
                  <button
                    onClick={() => submitAnswer(inputValue)}
                    disabled={!inputValue}
                    className="cb-send h-10 w-10 flex-shrink-0 rounded-full"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* DATEPICKER INPUT */}
              {currentQuestion.type === "date" && (
                <div className="flex gap-2 items-center w-full">
                  <div className="flex-grow">
                    <DatePicker
                      value={inputValue ? new Date(inputValue) : null}
                      onChange={(date) => {
                        if (date) {
                          const y = date.getFullYear();
                          const m = String(date.getMonth() + 1).padStart(2, "0");
                          const d = String(date.getDate()).padStart(2, "0");
                          setInputValue(`${y}-${m}-${d}`);
                        } else {
                          setInputValue("");
                        }
                      }}
                      placeholder="Select Date"
                      required
                      align="top"
                    />
                  </div>
                  <button
                    onClick={() => submitAnswer(inputValue)}
                    disabled={!inputValue}
                    className="cb-send h-10 w-10 flex-shrink-0 rounded-full"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

    </>
  );
}