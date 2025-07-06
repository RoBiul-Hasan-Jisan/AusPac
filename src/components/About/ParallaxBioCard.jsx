// src/components/About/ParallaxBioCard.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const highlightKeywords = (text, keywords) => {
  let parts = [text];
  keywords.forEach((kw, kwIndex) => {
    parts = parts.flatMap((part) =>
      typeof part === 'string'
        ? part.split(new RegExp(`(${kw})`, 'gi')).map((p, i) =>
            p.toLowerCase() === kw.toLowerCase() ? (
              <span key={`${kw}-${kwIndex}-${i}`} className="font-semibold text-blue-700">
                {p}
              </span>
            ) : (
              p
            )
          )
        : [part]
    );
  });
  return parts;
};

const ParallaxBioCard = ({ name, content, index, isViewed, onView, imgSrc }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      onView(index);
    } else {
      controls.start({ opacity: 0, y: 80 });
    }
  }, [inView, controls, index, onView]);

  // Define keywords to highlight
  const keywords = ['P&I', 'AMSA', 'Chief Officer', 'ISM', 'SOLAS', 'MLC', 'Ship’s Agent'];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`p-6 rounded-2xl shadow-md mb-12 transition-colors duration-500 flex flex-col md:flex-row items-start gap-6 ${
        isViewed ? 'bg-blue-100 border border-blue-400' : 'bg-white'
      }`}
    >
      <img
        src={imgSrc}
        alt={`Photo of ${name}`}
        className="w-24 h-24 rounded-full object-cover border-2 border-blue-300 flex-shrink-0"
      />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">{name}</h2>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {highlightKeywords(content, keywords)}
        </p>
      </div>
    </motion.div>
  );
};

export default ParallaxBioCard;
