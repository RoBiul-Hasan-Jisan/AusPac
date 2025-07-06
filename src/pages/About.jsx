// src/pages/About.jsx
import React, { useState, useEffect } from 'react';
import ParallaxBioCard from '../components/About/ParallaxBioCard';

const bios = [
  {
    name: 'CAPT. OLAV CASTELLINO',
    content: `Olav Castellino has sailed on various types of vessels engaged in ocean going and coastal trades. He has been involved with the implementation of ISO and ISM procedures on vessels from 1986-1995. The achievement of his sailing career was as the chief officer of the world’s largest tanker, the Jahre Viking.

As a claims handler, Olav has handled complex claim matters, and as a marine surveyor, he has conducted numerous P&I surveys, break bulk surveys, oil & gas quantity and quality checks, and container surveys on behalf of Owners, Charterers, and P&I Clubs.

He has also been part of the shipbuilding and ship repair industry, involved in various projects and dry-docking of vessels in Singapore, Dubai, and Bahrain.

Captain Castellino has more than 20 years of experience in marine surveying and is a member of the Australasian Institute of Marine Surveyors.`,
     imgSrc: '/image/olav.jpeg'
  },
  {
    name: 'CAPT. ARIF SHEIKH',
    content: `Arif Sheikh joined Cargo Care in November 2020 and manages the Brisbane Cargo Care office.

Professionally qualified as a Master <3000GT, with a Bachelor degree in science from Mangalore University, India, Higher National Diploma in Nautical science from Southampton Solent University, UK, DNV Certified ISM, ISPS and MLC Auditor, Flag State Inspector for Marshall Islands, and a member of Australasian Institute of Marine Surveyors.

He started his shipping career with Dockendale Shipping Management in 2003, and later worked for many shipping companies, with 16 years of experience in shipping. He has sailed as an officer on Bulk Carriers, Dredgers, Reefer Containers, and Ro-Ro vessels.

He joined Mitsui OSK Lines (MOL) in 2012 and was promoted to Chief Officer in 2017. He has mastered resourceful short courses like Risk Management & Incident Investigation, Human Element, Leadership & Management.

He is very well versed with both old and new Navigational equipment and industry standards such as SOLAS, ISM, ISPS, MARPOL, MLC, etc. He specializes in Car Ships and Ro-Ro cargoes, P&I Club Surveys, OOG Cargo & Lashing Surveys, Pre-AMSA Inspections, Container Cargo Damage Surveys & Inspections, Port Captaincy / Cargo Superintendence, Draught and Bunker Surveys.`,
     imgSrc: '/image/olav.jpeg'
  },
  {
    name: 'CAPT. LIONEL RODRIGUES',
    content: `Lionel Rodrigues joined Cargo Care in 2019 and currently operates the Melbourne office.

His career in the Merchant Navy began in 2008 as a cadet with Anglo Eastern Ship Management Pvt Ltd. After completing his Bachelor of Nautical Science, he sailed on General Cargo and Container vessels, becoming Chief Officer in 2016.

He then joined Sapura Energy, sailing on Class 3 DP vessels for subsea construction projects. His achievements include working on the TANAP project aboard 'Sapurakencana 1200'.

He later worked with Wilhelmsen Ship Management as a Ship’s Agent, gaining experience in LNG, Tankers, Container, and Bulk vessels at Australia’s fifth-largest multi-commodity port.

In 2019, Lionel joined Cargo Care as a Marine Surveyor and Consultant. He specializes in grain loading advisory, draft surveys, container damage inspections, and P&I surveys.

He is a fully accredited grain surveyor and a member of the Australasian Institute of Marine Surveyors.`,
     imgSrc: '/image/olav.jpeg'
  },
  {
    name: "GLEN OWEN D'SOUZA",
    content: `Glen Owen D'Souza is a maritime industry professional with over 30 years of experience.

His seagoing career began in 1984 as a Marine Radio Communications and Electronics Officer with World Wide Shipping Co. Ltd., serving on bulk and tanker vessels.

In 2006, he moved to Australia to work with Maersk Line as National Vessel Operations and Stowage Planner, handling container vessel stowage, terminal liaison, and port productivity.

In 2011, he returned to sea with CSL and Inco Shipping, overseeing safety equipment and pollution plans during bunkering operations.

Later, as Assistant Manager of a Floating Offshore Transfer Barge, he managed iron ore transshipment, control room operations, and barge-vessel movements.

He joined Cargo Care in 2012 and remains a key member of the team. Glen is a Master <3000GT, holds degrees from Mangalore University and Southampton Solent University, and certifications including DNV ISM, ISPS, and MLC auditor. He is a Flag State Inspector for Marshall Islands and a member of the Australasian Institute of Marine Surveyors.`,
    imgSrc: '/image/olav.jpeg'
  },
];

const About = () => {
  const [viewed, setViewed] = useState([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleView = (index) => {
    if (!viewed.includes(index)) {
      setViewed((prev) => [...prev, index]);
    }
  };

  const scrollToBio = (index) => {
    const element = document.getElementById(`bio-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
      {/* Sticky TOC - desktop only */}
      <nav className="hidden md:block sticky top-20 self-start w-64 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-6 text-blue-800">Our Team</h2>
        <ul className="space-y-4">
          {bios.map((bio, i) => (
            <li key={i}>
              <button
                onClick={() => scrollToBio(i)}
                className="text-blue-600 hover:underline focus:outline-none"
              >
                {bio.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bios section */}
      <main className="flex-1">
        <h1 className="text-4xl font-extrabold mb-12 text-center md:text-left text-gray-800">
          Meet Our Marine Experts
        </h1>
        {bios.map((bio, i) => (
          <div key={i} id={`bio-${i}`}>
            <ParallaxBioCard
              index={i}
              name={bio.name}
              content={bio.content}
              isViewed={viewed.includes(i)}
              onView={handleView}
              imgSrc={bio.imgSrc}
            />
          </div>
        ))}
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default About;
