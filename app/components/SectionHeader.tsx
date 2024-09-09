// components/SectionHeader.js
import React from 'react';

const SectionHeader = ({ title = "Our Services" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-500 mb-2">
        {title}
      </h2>
      <div className="w-12 h-1 bg-cyan-500"></div>
    </div>
  );
};

export default SectionHeader;
