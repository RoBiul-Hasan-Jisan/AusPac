// src/components/About/BioCard.jsx
import React from 'react';

const BioCard = ({ name, title, content }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">{name}</h2>
      {title && <p className="text-lg font-semibold text-gray-700 mb-4">{title}</p>}
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">{content}</p>
    </div>
  );
};

export default BioCard;
