import React from 'react';
import { FaClock, FaComments, FaUsers, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-wrap ">
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-blue-500 text-white p-8 flex flex-col items-center justify-center h-48">
          <FaClock size={50} />
          <div>
            <h2 className="text-xl font-bold mt-4">Consult Services</h2>
            <p className="mt-2">We offer 24 hours consult services</p>
            <FaArrowRight className="mt-4" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-red-500 text-white p-8 flex flex-col items-center justify-center h-48">
          <FaComments size={50} />
          <h2 className="text-xl font-bold mt-4">Customer Support</h2>
          <p className="mt-2">Top-notch help desk support</p>
          <FaArrowRight className="mt-4" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-blue-500 text-white p-8 flex flex-col items-center justify-center h-48">
          <FaUsers size={50} />
          <h2 className="text-xl font-bold mt-4">Global Partners</h2>
          <p className="mt-2">Numerous global clientele</p>
          <FaArrowRight className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Services;
