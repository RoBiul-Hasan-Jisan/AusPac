// src/components/About/AnimatedBioCard.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBioCard = ({ name, content, index, isActive, isCompleted, onNext }) => {
  const ref = useRef();

  const handleClick = () => {
    onNext(index);
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`p-6 rounded-2xl shadow-md mb-8 transition-all duration-300 ${
        isCompleted ? 'bg-blue-100 border border-blue-400' : 'bg-white'
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">{name}</h2>

      {isActive ? (
        <>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-4">{content}</p>
          <button
            onClick={handleClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
          >
            Next
          </button>
        </>
      ) : (
        <p className="text-gray-500 italic">Click “Next” on the previous card to reveal this bio.</p>
      )}
    </motion.div>
  );
};

export default AnimatedBioCard;
