import React, { useEffect, useRef } from 'react';
import { SiAffinitydesigner } from 'react-icons/si';
import { FaPeopleGroup, FaTruck, FaBox } from 'react-icons/fa6';

const NCBuildingCompany = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndex = useRef(0); // Using useRef to maintain the current index between renders

  const startAutoSlide = () => {
    if (carouselRef.current) {
      const totalItems = carouselRef.current.children.length;

      intervalRef.current = setInterval(() => {
        currentIndex.current = (currentIndex.current + 1) % totalItems;
        const offset = -currentIndex.current * 100;

        if (carouselRef.current) {
          carouselRef.current.style.transform = `translateX(${offset}%)`;
          carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
        }
      }, 3000); // Change slide every 3 seconds
    }
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-8">
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            NC ROYAL BUILDING COMPANY
          </h1>
          <p className="text-gray-600 text-sm mt-2">(A Division of Canaez Nig. Limited)</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <div className="bg-gray-100 p-4 rounded-full">
                <SiAffinitydesigner size={30} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Architectural Designs</h3>
                <p className="text-gray-600 text-sm">Building Constructions & Merchants</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-100 p-4 rounded-full">
                <FaBox size={30} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Project Management</h3>
                <p className="text-gray-600 text-sm">Tendering & Project Control</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-100 p-4 rounded-full">
                <FaTruck size={30} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Procurement & Logistics</h3>
                <p className="text-gray-600 text-sm">Purchase, Delivery and Installation</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gray-100 p-4 rounded-full">
                <FaPeopleGroup size={30} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">Clientele Representatives</h3>
                <p className="text-gray-600 text-sm">Manufacturer Representatives</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 overflow-hidden">
          <div
            ref={carouselRef}
            className="flex w-full"
          >
            <div className="w-full flex-shrink-0">
              <img
                src="/images/nroyal/ny5-480x360.jpg"
                className="rounded-box object-cover w-80 h-60"
                alt="Bulldozer"
              />
            </div>
            <div className="w-full flex-shrink-0">
              <img
                src="/images/nroyal/ny3-480x360.jpg"
                className="rounded-box object-cover w-80 h-60"
                alt="Crane"
              />
            </div>
            <div className="w-full flex-shrink-0">
              <img
                src="/images/nroyal/construction-480x360.jpg"
                className="rounded-box object-cover w-80 h-60"
                alt="Excavator"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NCBuildingCompany;
