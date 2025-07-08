import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedBioCard = ({ name, content, index, isActive, isCompleted, onNext }) => {
  const ref = useRef();
  const controls = useAnimation();

  // Animate in when active
  useEffect(() => {
    if (isActive) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
      // Scroll into view when active
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isActive, controls]);

  const handleClick = () => {
    onNext(index);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      tabIndex={0}
      aria-live={isActive ? 'polite' : 'off'}
      className={`p-6 rounded-2xl shadow-md mb-8 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isCompleted ? 'bg-blue-100 border border-blue-400' : 'bg-white'
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">{name}</h2>

      {isActive ? (
        <>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-4">{content}</p>
          <button
            type="button"
            onClick={handleClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Next
          </button>
        </>
      ) : (
        <p className="text-gray-500 italic" aria-hidden="true">
          Click “Next” on the previous card to reveal this bio.
        </p>
      )}
    </motion.article>
  );
};

export default AnimatedBioCard;
