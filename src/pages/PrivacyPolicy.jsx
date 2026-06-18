import React from "react";
import Banner from "@/assets/Policy/Banner.webp";
import Link from "next/link";

function PrivacyPolicy() {
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
              <h1 className="font-outfit font-semibold ">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome to Sudha Fertility Centre! */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              Welcome to Sudha Fertility Centre!
            </h2>
          </div>

          <div className="description mt-4">
            <h4 className="font-outfit font-semibold ">
              PRIVACY POLICY – SUDHA FERTILITY CENTRE{" "}
            </h4>
            <p className="flex mx-auto mt-5 text-gray-600">
              Sudha Fertility Centre is committed to respecting the privacy of
              every individual who shares information or data with us.
              Protecting your privacy is of utmost importance to us, and we take
              all reasonable measures to safeguard the information received from
              our users.
            </p>
            <p>We comply with the following applicable laws in India: </p>
            <ul>
              <li>The Information Technology Act, 2000 – Section 43A </li>
              <li>
                The Information Technology (Reasonable Security Practices and
                Procedures and Sensitive Personal Information) Rules, 2011{" "}
              </li>
            </ul>
            <p className="mt-5 text-gray-600">
              This Privacy Policy governs the collection, storage, processing,
              disclosure, and transfer of Personal Information when you access
              or use the website{" "}
              <Link href="https://sudhafertilitycentre.com/">
                https://sudhafertilitycentre.com/
              </Link>{" "}
              or avail of any services provided by Sudha Fertility Centre.
            </p>
            <p className="mt-5 text-gray-600">
              Throughout this Policy, “You” refers to the users of the website
              and “We”, “Us”, or “Our” refers to Sudha Fertility Centre.
            </p>
          </div>
        </div>
      </div>

      {/* Website Visitors */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              ACCESS TO PERSONAL INFORMATION{" "}
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              We may collect Personal Information directly from you, from
              authorized third parties, or through our website. This may include
              information such as the type of device used, login time, IP
              address, and other related details.
            </p>
            <p className="mt-5 text-gray-600">
              You may access, review, modify, or update the Personal Information
              shared with us by writing to amc@sudhahospitals.com. You may also
              provide additional information through the same communication
              channel.
            </p>
          </div>
        </div>
      </div>

      {/* Gathering of Personally-Identifying Information */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold  ">CONSENT</h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              By submitting your information through website forms, phone calls,
              emails, WhatsApp, or any other medium, you expressly consent to
              the collection, storage, processing, disclosure, and transfer of
              your Personal Information in accordance with this Privacy Policy
              and applicable laws.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              You acknowledge that the information shared has been provided
              voluntarily and with full knowledge of how it will be used. Sudha
              Fertility Centre shall not be held responsible for any loss caused
              due to incorrect or incomplete information provided by you.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              Sensitive personal information will be shared only with your
              explicit consent.
            </p>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              CHANGES TO THE PRIVACY POLICY{" "}
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Sudha Fertility Centre reserves the right to modify or update this
              Privacy Policy from time to time. Any changes will be published on
              the website along with the date of the latest update. Your rights
              under this Policy will not be altered without your consent.
            </p>
          </div>
        </div>
      </div>

      {/* Advertisements */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              PERSONAL INFORMATION COLLECTED{" "}
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              The Personal Information collected may include, but is not limited
              to:
            </p>
            <ul>
              <li>✅ Patient name</li>
              <li>✅ Age / date of birth </li>
              <li>✅ Gender</li>
              <li>✅ Address (including country and postal code) </li>
              <li>✅ Phone number / mobile number </li>
              <li>✅ Email address </li>
              <li>✅ Medical history and health-related information</li>
              <li>✅ Medical reports and treatment records </li>
              <li>✅ Financial and billing information</li>
              <li>✅ Login credentials </li>
              <li>✅ Usage data related to website interaction</li>
              <li>✅ Biometrics and genetic data (where applicable) </li>
              <li>✅ Any other information voluntarily shared by you </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Links To External Sites */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              HOW WE COLLECT PERSONAL INFORMATION
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Personal Information may be collected through:
            </p>
            <ul>
              <li>✅ Registration forms </li>
              <li>✅ Interactions with Sudha Fertility Centre representatives </li>
              <li>✅ Website registrations </li>
              <li>✅ During medical consultations or treatment </li>
              <li>✅ Website usage and features </li>
              <li>✅ Cookies and similar technologies </li>
              <li>✅ Access granted to third-party platforms </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sudha Fertility Centre uses Google AdWords for remarketing */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              USE OF PERSONAL INFORMATION
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Your Personal Information may be used for the following purposes:
            </p>
            <ul>
              <li>✅ To provide and improve medical and support services </li>
              <li>✅ To operate and enhance the website experience </li>
              <li>✅ To conduct research and analysis </li>
              <li>✅ To schedule appointments and send reminders </li>
              <li>✅ To communicate via phone, SMS, WhatsApp, or email </li>
              <li>✅ To share updates, offers, and health-related information</li>
              <li>✅ For billing, payments, and administrative purposes </li>
              <li>✅ In the event of mergers, acquisitions, or restructuring </li>
              <li>✅ To comply with legal and regulatory requirements </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Aggregated Statistics */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              SHARING AND TRANSFER OF PERSONAL INFORMATION
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              With your consent, Sudha Fertility Centre may share or transfer
              your Personal Information with affiliates, service providers,
              cloud service providers, financial institutions, communication
              partners, or regulatory authorities, within or outside India,
              strictly for purposes outlined in this Policy.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              We ensure contractual safeguards are in place to protect your data
              during such transfers.
            </p>
          </div>
        </div>
      </div>

      {/* Cookies */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">USE OF COOKIES </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Sudha Fertility Centre may use cookies to enhance user experience.
              Cookies do not store personally identifiable information. You may
              choose to disable cookies through your browser settings, though
              certain website features may be limited as a result.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              We are not responsible for cookies placed by third-party websites
              linked from our platform.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Changes */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">SECURITY</h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              We implement reasonable security practices including restricted
              access, password protection, and encryption to safeguard your
              Personal Information. Access is provided strictly on a
              need-to-know basis.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              While we strive to protect your data, no internet transmission is
              completely secure. Sudha Fertility Centre shall not be liable for
              any unintended loss or breach beyond reasonable control.
            </p>
          </div>
        </div>
      </div>

      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">THIRD-PARTY LINKS</h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Our website may contain links or references to third-party
              websites. Sudha Fertility Centre does not endorse or take
              responsibility for the content, privacy practices, or policies of
              such third-party sites.
            </p>
          </div>
        </div>
      </div>

      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              RECTIFICATION OF PERSONAL INFORMATION
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              You may request corrections or updates to your Personal
              Information by contacting amc@sudhahospitals.com. We will process
              such requests within a reasonable timeframe.
            </p>
          </div>
        </div>
      </div>
      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">COMPLIANCE WITH LAWS</h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Use of this website must comply with all applicable laws. Users
              are prohibited from accessing services if such use violates legal
              requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              RETENTION OF PERSONAL INFORMATION
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Personal Information may be retained for a minimum period of three
              (3) years from the last interaction or for such duration as
              required by applicable laws.
            </p>
          </div>
        </div>
      </div>
      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">GRIEVANCE REDRESSAL</h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              For grievances or concerns, please contact the Patient
              Relationship Manager / Centre Manager at:
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              <b>Email:</b> info@sudhafertilitycentre.com
            </p>
          </div>
        </div>
      </div>

      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              TERMS AND CONDITIONS – SUDHA FERTILITY CENTRE
            </h2>
            <h3 className="font-outfit font-semibold ">INTRODUCTION</h3>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              By accessing or using this website, you agree to be bound by these
              Terms and Conditions. If you do not agree, please refrain from
              using the website.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              You must be at least 18+ years of age to use this website
            </p>
          </div>
        </div>
      </div>
      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              INTELLECTUAL PROPERTY
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              All content on https://sudhafertilitycentre.com/ is owned by or
              licensed to Sudha Fertility Centre. You may view or download
              content for personal, non-commercial use only.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              You must not reproduce, distribute, modify, sell, or exploit any
              content without written consent.
            </p>
          </div>
        </div>
      </div>

      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">ACCEPTABLE USE</h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              You must not use the website for unlawful, fraudulent, harmful, or
              malicious activities, including:
            </p>
            <ul>
              <li>Data scraping or automated data extraction </li>
              <li>Distribution of malware or viruses </li>
              <li>Unauthorised marketing or promotions </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">RESTRICTED ACCESS</h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Sudha Fertility Centre reserves the right to restrict access to
              any part of the website at its discretion. Users are responsible
              for maintaining confidentiality of login credentials.
            </p>
          </div>
        </div>
      </div>
      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">USER CONTENT</h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Any content submitted by users grants Sudha Fertility Centre a
              non-exclusive, royalty-free license to use, publish, or distribute
              such content.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              User content must not infringe any laws or third-party rights.
            </p>
          </div>
        </div>
      </div>

      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              DISCLAIMER AND LIMITATION OF LIABILITY
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              The website is provided “as is” without warranties of any kind.
              Sudha Fertility Centre is not liable for direct, indirect,
              incidental, or consequential damages arising from website usage.
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              Medical information provided on the website does not constitute
              professional medical advice.
            </p>
          </div>
        </div>
      </div>
      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">INDEMNITY</h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              You agree to indemnify and hold harmless Sudha Fertility Centre
              from any claims arising out of your misuse of the website or
              violation of these Terms.
            </p>
          </div>
        </div>
      </div>
      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              GOVERNING LAW AND JURISDICTION
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of India, and disputes shall be subject
              to the exclusive jurisdiction of courts in Tamil Nadu / Karnataka
              (as applicable).
            </p>
          </div>
        </div>
      </div>


      {/* Credit & Contact Information */}
      <div className="container mx-auto relative h-full mb-[70px] md:mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
           CONTACT DETAILS 
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              <b>Registered Address:</b>
              Sudha Fertility centre, 181 Edayankattuvalasu, Erode 638001 – Tamil Nadu, India. 
            </p>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Email: amc@sudhahospitals.com
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
              Phone: 7670076006. 
            </p>
            <p>Sudha Fertility Centre offers advanced infertility treatments with high success rates. Book your consultation today! </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
