import React, { memo, useMemo, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const placeholderBlur =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjY2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNjYiIGZpbGw9IiNkZDhkOGQiLz48L3N2Zz4=";

const HeroSection = () => {
  const [bgImage, setBgImage] = useState(placeholderBlur);

  useEffect(() => {
    // Swap to optimized image after mount
    setBgImage("/image/herosection3.jpg");
  }, []);

  const style = useMemo(
    () => ({
      height: "66vh",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "background-image 0.5s ease-in-out",
    }),
    [bgImage]
  );

  return (
    <>
      <Helmet>
        <title>AusPac Marine Surveyors and Consultants</title>
        <meta
          name="description"
          content="AusPac offers precision marine surveying, expert inspections, and trusted consultancy services serving the maritime industry."
        />
        <meta property="og:title" content="AusPac Marine Surveyors and Consultants" />
        <meta
          property="og:description"
          content="Precision Surveying | Expert Inspection | Trusted Consultancy serving the maritime industry with accuracy and integrity."
        />
        {/* Preload removed to avoid warning */}
      </Helmet>

      <section role="banner" className="relative w-full" style={style}>
        <span className="sr-only">Hero image showing marine surveying at sea</span>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="font-extrabold leading-tight animate-fadeIn">
            <span className="block text-4xl md:text-5xl lg:text-6xl">AusPac</span>
            <span className="block text-xl md:text-2xl lg:text-3xl">
              Marine Surveyors and Consultants
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl lg:text-2xl font-medium animate-fadeIn delay-200">
            Precision Surveying | Expert Inspection | Trusted Consultancy
          </p>
          <p className="mt-2 text-base md:text-lg max-w-2xl animate-fadeIn delay-400">
            Serving the Maritime Industry with Accuracy and Integrity
          </p>

          <a
            href="#services"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-lg animate-fadeIn delay-600"
          >
            Explore Our Services
          </a>
        </div>
      </section>
    </>
  );
};

export default memo(HeroSection);
