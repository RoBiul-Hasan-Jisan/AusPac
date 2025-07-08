import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ParallaxBioCard from '../components/About/ParallaxBioCard';
import bios from '../data/bios';


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
    <HelmetProvider>
      <Helmet>
        <title>About Us - Meet Our Marine Experts</title>
        <meta
          name="description"
          content="Learn more about our marine experts and their bios on our About page."
        />
        <meta property="og:title" content="About Us - Meet Our Marine Experts" />
        <meta
          property="og:description"
          content="Learn more about our marine experts and their bios on our About page."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
        {/* Sticky TOC */}
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
    </HelmetProvider>
  );
};

export default About;