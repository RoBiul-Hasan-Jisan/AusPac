import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function PartnershipSection() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>AusPac Partnership – Trusted Marine Surveyors Australia</title>
        <meta
          name="description"
          content="AusPac partners with Cargo Care Pty Ltd, providing trusted marine surveying and consultancy services across Australia."
        />
        <meta
          property="og:title"
          content="AusPac Partnership – Trusted Marine Surveyors Australia"
        />
        <meta
          property="og:description"
          content="AusPac partners with Cargo Care Pty Ltd, providing trusted marine surveying and consultancy services across Australia."
        />
      </Helmet>

      <section
        aria-labelledby="partnership-heading"
        className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Text Column */}
        <div>
          <h2
            id="partnership-heading"
            className="text-3xl font-bold mb-6 text-gray-900"
          >
            WE LOOK FORWARD TO DEVELOPING OUR PARTNERSHIP
          </h2>
          <p className="text-gray-700 mb-4">
            Independent Owner and Operator Klaus Wermuth established Cargo Care
            Pty Ltd as a fully registered limited Company in Brisbane Australia
            in 1993. Klaus retired in 2009 when the company was acquired by
            Capt. Olav Castellino.
          </p>
          <p className="text-gray-700 mb-4">
            The principal surveyor of the company is Capt. Olav Castellino who
            has 40 years’ experience in the shipping industry and has sailed in
            various ascending capacities at sea including the rank of Master.
          </p>
          <p className="text-gray-700 mb-6">
            The company has grown out of Brisbane and now operates in all states
            of Australia with offices in Brisbane, Sydney, Port Kembla and
            Melbourne.
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Read More
          </Link>
        </div>
        {/* Right Image Column */}
        <div className="flex space-x-6">
          <div className="w-1/2 rounded-lg shadow-lg overflow-hidden aspect-video">
            <img
              src="/image/office_brisbane.jpeg"
              alt="AusPac Brisbane Office Building"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-1/2 rounded-lg shadow-lg overflow-hidden aspect-w-16 aspect-h-9">
            <img
              src="/image/maritime_survey.jpeg"
              alt="Marine Survey Team Conducting Inspection"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}
