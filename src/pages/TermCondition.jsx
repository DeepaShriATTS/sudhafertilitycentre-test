import React from "react";
import Banner from "@/assets/Term-Conditions/Banner.webp";
import Link from "next/link";

function TermCondition() {
  return (
    <>
      {/* Banner  */}

      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center -top-28  md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "fill",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-40 mt-16">
            <div className="text-white text-center px-4 font-outfit">
              <h1 className="font-outfit font-semibold ">Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer  */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">Terms and Conditions</h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Welcome to Sudha Fertility Centre. These Terms and Conditions
              (“Terms”) govern your access to and use of the website{" "}
              <Link href="https://sudhafertilitycentre.com/">
                https://sudhafertilitycentre.com/
              </Link>{" "}
              (“Website”) and any information, content, services, or features
              made available through the Website.
            </p>
            <p className="mt-4 text-gray-600">
              By accessing, browsing, or using this Website in any manner, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms. If you do not agree to these Terms, you are
              advised not to access or use this Website.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer  */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              Definitions and Interpretation
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              “Sudha Fertility Centre”, “Sudha”, “we”, “us”, or “our” refers to
              Sudha Fertility Centre, its clinics, hospitals, affiliates,
              subsidiaries, partners, and authorized representatives.
            </p>
            <p className="mt-4 text-gray-600">
              “User”, “you”, or “your” refers to any individual or entity
              accessing or using this Website.
            </p>
            <p className="mt-4 text-gray-600">
              “Website” or “Site” refers to https://sudhafertilitycentre.com/
              and all related webpages, content, features, and services.
            </p>
            <p className="mt-4 text-gray-600">
              “Content” includes all text, images, videos, graphics, logos,
              icons, medical information, forms, software, and other material
              displayed or available on the Website.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy and Usage Policy  Enquiry Forms */}

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              Scope and Purpose of the Website
            </h2>
            <h3 className="font-outfit font-semibold mt-2">
              The Website is intended to provide general information about Sudha
              Fertility Centre, including but not limited to:
            </h3>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Fertility and reproductive healthcare services
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              IVF and related treatment options
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              Educational and awareness content
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              Appointment and enquiry facilitation
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              Hospital updates, news, and announcements
            </p>
            <p>
              All content is provided for informational and educational purposes
              only and is not intended to replace professional medical advice,
              diagnosis, or treatment.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Privacy and Usage Policy  Enquiry Forms */}

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">Medical Disclaimer</h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              ✔ The information provided on this Website does not constitute
              medical advice.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              ✔ Medical conditions, fertility outcomes, and treatment results
              vary from person to person.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              ✔ Users should always consult a qualified doctor or healthcare
              professional for diagnosis, treatment decisions, or medical
              concerns
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              ✔ Sudha Fertility Centre does not guarantee specific treatment
              outcomes or success rates based on information presented on the
              Website.
            </p>

            <p className="flex mx-auto mt-5 text-gray-600">
              ✔ Use of this Website does not create a doctor-patient
              relationship between you and Sudha Fertility Centre.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Reliability of Information  */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              Eligibility and User Responsibilities
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              By using this Website, you represent and warrant that:
            </p>

            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ You are legally competent to enter into a binding agreement
                under applicable laws.
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ The information provided by you through enquiry forms,
                appointment requests, or other submissions is accurate,
                complete, and truthful.
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ You will not use the Website for any unlawful, misleading,
                abusive, or unauthorised purpose.
              </li>
            </ul>

            <p className="flex mx-auto mt-5 text-gray-600">You agree not to:</p>
            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Attempt to gain unauthorised access to the Website, servers,
                or systems
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Upload or transmit viruses, malware, or harmful code
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Misuse the Website in any way that could disrupt its
                functionality or security.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reliability of Information  */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              Appointments, Enquiries, and Communication Consent
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              When you submit an enquiry, appointment request, or contact form
              on the Website:
            </p>

            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ You authorize Sudha Fertility Centre to contact you via phone
                call, SMS, email, WhatsApp, or other communication channels.
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Such communication may include appointment confirmations,
                medical service updates, follow-ups, promotional information, or
                patient education.
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Submission of personal details does not guarantee appointment
                confirmation or medical consultation.
              </li>
            </ul>

            <p className="flex mx-auto mt-5 text-gray-600">
              Sudha reserves the right to accept or decline appointments at its
              discretion.
            </p>
          </div>
        </div>
      </div>

      {/* Logged Information */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              Privacy and Data Protection
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Your use of the Website is also governed by our Privacy Policy,
              which outlines how personal data is collected, stored, processed,
              and protected.
            </p>
          </div>
        </div>
      </div>

      {/* Exclusion of Liability */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              By using the Website, you consent to:
            </h2>
          </div>
          <div className="description">
            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Collection and use of your personal information for legitimate
                medical, administrative, and communication purposes;{" "}
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Processing of information in accordance with applicable Indian
                data protection laws.{" "}
              </li>
            </ul>
            <p className="flex mx-auto mt-5 text-gray-600">
              Sudha takes reasonable security measures to protect personal
              information, but does not guarantee absolute security against
              cyber threats.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* PC-PNDT Act */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              Intellectual Property Rights
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              All content on the Website is the exclusive property of Sudha
              Fertility Centre or its licensors and is protected under:
            </p>
            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Copyright laws
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Trademark laws
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Intellectual property and proprietary rights laws
              </li>
            </ul>
            <p className="flex mx-auto mt-5 text-gray-600">
              You may view content only for reference.{" "}
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              You may not, without prior written consent:{" "}
            </p>
            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">
                Reproduce, copy, modify, distribute, publish, or commercially
                exploit any content
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                Use the Sudha name, logo, branding, or trademarks in any form.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* PC-PNDT Act */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              Intellectual Property Rights
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              All content on the Website is the exclusive property of Sudha
              Fertility Centre or its licensors and is protected under:
            </p>
            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Copyright laws
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Trademark laws
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                ✔ Intellectual property and proprietary rights laws
              </li>
            </ul>
            <p className="flex mx-auto mt-5 text-gray-600">
              You may view content only for reference.{" "}
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              You may not, without prior written consent:{" "}
            </p>
            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">
                Reproduce, copy, modify, distribute, publish, or commercially
                exploit any content
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                Use the Sudha name, logo, branding, or trademarks in any form.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Video Disclaimer */}
      <div className="container mx-auto relative h-full mb-[70px] md:mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              Third-Party Links and External Websites
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              The Website may include links to third-party websites for
              informational purposes. Sudha Fertility Centre:
            </p>
            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">Does not control or endorse third-party websites;</li>
              <li className="flex mx-auto mt-5 text-gray-600">
                Is not responsible for the content, accuracy, policies, or
                practices of such websites;
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                Shall not be liable for any loss or damage arising from your use
                of third-party links.
              </li>
            </ul>
            <p className="flex mx-auto mt-5 text-gray-600">Accessing external websites is at your own risk. </p>
          </div>
        </div>
      </div>
      {/* Video Disclaimer */}
      <div className="container mx-auto relative h-full mb-[70px] md:mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              Website Availability and Modifications
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Sudha Fertility Centre reserves the right to:
            </p>
            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">
                Modify, update, suspend, or discontinue any part of the Website
                without prior notice;{" "}
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">Change content, services, or features at any time</li>
            </ul>
            <p className="flex mx-auto mt-5 text-gray-600">
              We do not guarantee uninterrupted or error-free access to the
              Website and are not liable for temporary unavailability due to
              maintenance, technical issues, or external factors.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Video Disclaimer */}
      <div className="container mx-auto relative h-full mb-[70px] md:mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              Disclaimer of Warranties
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              The Website and its content are provided on an “as is” and “as
              available” basis.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              Sudha Fertility Centre makes no warranties or representations
              regarding:
            </p>
            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">Accuracy or completeness of content; </li>
              <li className="flex mx-auto mt-5 text-gray-600">Availability or reliability of the Website; </li>
              <li className="flex mx-auto mt-5 text-gray-600">Fitness of information for a particular purpose.</li>
            </ul>
            <p className="flex mx-auto mt-5 text-gray-600">
              All implied warranties are expressly disclaimed to the fullest
              extent permitted by law.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Video Disclaimer */}
      <div className="container mx-auto relative h-full mb-[70px] md:mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              Limitation of Liability
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              To the maximum extent permitted under applicable law, Sudha
              Fertility Centre shall not be liable for any:
            </p>

            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">
                Direct, indirect, incidental, consequential, or punitive
                damages;{" "}
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                Loss of data, revenue, profits, or business opportunities;{" "}
              </li>
              <li className="flex mx-auto mt-5 text-gray-600">
                Damages arising from reliance on Website content or services.
              </li>
            </ul>
            <p className="flex mx-auto mt-5 text-gray-600">
              This limitation applies even if Sudha has been advised of
              potential damages.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Video Disclaimer */}
      <div className="container mx-auto relative h-full mb-[70px] md:mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">Indemnification</h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              You agree to indemnify and hold harmless Sudha Fertility Centre,
              its doctors, staff, affiliates, and partners from any claims,
              liabilities, damages, losses, or expenses arising out of:
            </p>

            <ul>
              <li className="flex mx-auto mt-5 text-gray-600">Your misuse of the Website;</li>
              <li className="flex mx-auto mt-5 text-gray-600">Violation of these Terms;</li>
              <li className="flex mx-auto mt-5 text-gray-600">Submission of false or misleading information</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Video Disclaimer */}
      <div className="container mx-auto relative h-full mb-[70px] md:mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              Governing Law and Jurisdiction
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              These Terms shall be governed by and construed in accordance with
              the laws of India.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              Any disputes arising from or relating to the Website or these
              Terms shall be subject to the exclusive jurisdiction of courts
              located in India.
            </p>
          </div>
        </div>
      </div>
      {/* Video Disclaimer */}
      <div className="container mx-auto relative h-full mb-[70px] md:mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              Changes to Terms and Conditions
            </h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Sudha Fertility Centre reserves the right to revise these Terms at
              any time. Updated Terms will be posted on this page with a revised
              effective date.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              Continued use of the Website after such changes constitutes
              acceptance of the revised Terms.
            </p>
          </div>
        </div>
      </div>

      {/* Video Disclaimer */}
      <div className="container mx-auto relative h-full mb-[70px] md:mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">Contact Information</h2>
          </div>
          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              For any questions, concerns, or clarifications regarding these
              Terms, please contact:
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              <b>Sudha Fertility Centre</b>
             
            </p>
             <ul>
                <li><b>Email:</b>care@sudhahospitals.com</li>
                <li><b>Phone / WhatsApp:</b> +91-76-7007-6006</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermCondition;
