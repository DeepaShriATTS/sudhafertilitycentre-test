"use client";

import { useState, useEffect, useRef } from "react";
import { X, ArrowUp, MessageCircle, Maximize2, Minimize2 } from "lucide-react";
import { branchtableListEndpoint } from "@/pages/api/shipapi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "../DatePicker/datePicker";
import SearchableSelect from "../searchAndSelect/SearchableSelect";

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
  "Chennai": { map: "https://maps.app.goo.gl/3XgZ9N1b4GZ8pS7Q8", web: "/Branch/chennai" },
  "Coimbatore": { map: "https://maps.app.goo.gl/CoimbatoreMapLink", web: "/Branch/coimbatore" },
  "Madurai": { map: "https://maps.app.goo.gl/MaduraiMapLink", web: "/Branch/madurai" },
  "Trichy": { map: "https://maps.app.goo.gl/TrichyMapLink", web: "/Branch/trichy" },
  "Bengaluru": { map: "https://maps.app.goo.gl/BengaluruMapLink", web: "/Branch/bengaluru" },
  "Hyderabad": { map: "https://maps.app.goo.gl/HyderabadMapLink", web: "/Branch/hyderabad" }
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
        // Submit gathered info to backend
        try {
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
        } catch (err) {
          console.error("Local save data error:", err);
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
      web: `/Branch/${selectedCity.toLowerCase()}`
    };

    const messagesWithUser = [
      ...messages,
      { sender: "user", text: `City: ${selectedCity}` }
    ];

    pushBotMessage(messagesWithUser, {
      sender: "bot",
      text: `📍 Found it! Here are the links for our ${selectedCity} branch:\n\n🌐 [Branch Website](${details.web})\n🗺️ [Get Map Link](${details.map})`
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
                  {msg.text.split("\n").map((line, idx) => {
                    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                    const parts = [];
                    let lastIndex = 0;
                    let match;

                    while ((match = linkRegex.exec(line)) !== null) {
                      if (match.index > lastIndex) {
                        parts.push(line.substring(lastIndex, match.index));
                      }
                      parts.push(
                        <a
                          key={match.index}
                          href={match[2]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-semibold text-[#ffc65c] hover:text-white"
                        >
                          {match[1]}
                        </a>
                      );
                      lastIndex = linkRegex.lastIndex;
                    }
                    if (lastIndex < line.length) {
                      parts.push(line.substring(lastIndex));
                    }

                    return (
                      <p key={idx} className={idx > 0 ? "mt-1.5" : ""}>
                        {parts.length > 0 ? parts : line}
                      </p>
                    );
                  })}
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

      {/* Styles */}
      <style jsx>{`
        @keyframes expandIn {
          from { opacity: 0; transform: scale(0.85) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);     }
        }
        @keyframes popIn {
          0%   { transform: scale(0);   }
          60%  { transform: scale(1.15);}
          100% { transform: scale(1);   }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes pulseRing {
          0%   { opacity: 0.55; transform: scale(1);   }
          100% { opacity: 0;    transform: scale(1.55);}
        }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0);    opacity: 0.5; }
          30%           { transform: translateY(-5px); opacity: 1;   }
        }
        @keyframes badgePop {
          0%   { transform: scale(0);   }
          70%  { transform: scale(1.25);}
          100% { transform: scale(1);   }
        }

        .animate-expandIn { animation: expandIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .animate-popIn    { animation: popIn    0.5s  cubic-bezier(0.34,1.56,0.64,1); }

        .cb-widget {
          background: #ffffff;
          border-radius: 20px;
          box-shadow:
            0 0 0 1px rgba(23,51,102,0.12),
            0 24px 60px rgba(0,0,0,0.16);
          overflow: hidden;
          transition: width 0.3s ease, height 0.3s ease;
        }

        .cb-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          background: #173366;
          flex-shrink: 0;
        }
        .cb-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cb-title {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
        }
        .cb-subtitle {
          font-size: 0.75rem;
          color: #ffc65c;
          margin: 0;
          line-height: 1.3;
        }
        .cb-header-btn {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .cb-header-btn:hover {
          background: rgba(255,255,255,0.15);
          color: #ffffff;
        }

        .cb-messages {
          background: #f6f8fc;
        }
        .cb-bubble {
          max-width: 82%;
          padding: 10px 14px;
          border-radius: 18px;
          font-size: 0.875rem;
          line-height: 1.55;
        }
        .cb-bubble-bot {
          background: #ffffff;
          color: #1a1a2e;
          border: 1px solid #e4eaf5;
          border-bottom-left-radius: 4px;
        }
        .cb-bubble-user {
          background: #173366;
          color: #ffffff;
          border-bottom-right-radius: 4px;
        }

        /* Typing indicator dots */
        .cb-typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 14px 16px;
        }
        .cb-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #9aa8c2;
          animation: typingBounce 1.8s infinite ease-in-out;
        }
        .cb-dot:nth-child(1) { animation-delay: 0s;    }
        .cb-dot:nth-child(2) { animation-delay: 0.18s; }
        .cb-dot:nth-child(3) { animation-delay: 0.36s; }

        .cb-input-area {
          flex-shrink: 0;
          padding: 12px;
          background: #ffffff;
          border-top: 1px solid #edf0f7;
        }

        .cb-input-row {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid #B1B2B3;
          border-radius: 999px;
          padding: 5px 14px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .cb-input-row:hover {
          border-color: #9ca3af;
        }
        .cb-input-row:focus-within {
          border-color: #1C315E;
          box-shadow: 0 0 0 1px #1C315E;
        }

        .cb-input {
          flex: 1 !important;
          min-width: 0 !important;
          border: none !important;
          border-width: 0 !important;
          border-color: transparent !important;
          border-radius: 0 !important;
          outline: none !important;
          box-shadow: none !important;
          -webkit-appearance: none !important;
          appearance: none !important;
          background: transparent !important;
          font-size: 0.875rem !important;
          color: #1a1a2e !important;
          font-family: inherit !important;
          padding: 0 !important;
          line-height: 1.4 !important;
        }

        .cb-send {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #173366;
          color: #ffffff;
          transition: background 0.2s, transform 0.15s, opacity 0.2s;
        }
        .cb-send:not(:disabled):hover  { background: #0d254e; transform: scale(1.08); }
        .cb-send:not(:disabled):active { transform: scale(0.92); }
        .cb-send:disabled {
          opacity: 0.28;
          cursor: default;
        }

        .cb-chip {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1.5px solid #c7d7ef;
          background: #ffffff;
          color: #173366;
          font-size: 0.8125rem;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          transition: background 0.18s, border-color 0.18s, color 0.18s, transform 0.12s;
        }
        .cb-chip:hover  { background: #173366; border-color: #173366; color: #fff; transform: translateY(-1px); }
        .cb-chip:active { transform: scale(0.95); }

        .cb-fab {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: #173366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(23,51,102,0.38);
          transition: background 0.2s, transform 0.2s;
        }
        .cb-fab:hover  { background: #0d254e; transform: scale(1.08); }
        .cb-fab:active { transform: scale(0.94); }

        /* Pulsing ring that breathes around the closed FAB */
        .cb-fab-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #173366;
          opacity: 0;
          pointer-events: none;
          animation: pulseRing 2.6s ease-out infinite;
        }

        /* Small unread badge shown before first open */
        .cb-fab-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ff5a5f;
          border: 2px solid #ffffff;
          animation: badgePop 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.6s backwards;
        }
      `}</style>
    </>
  );
}