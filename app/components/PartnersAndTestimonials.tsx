import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersTestimonials = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three slides at a time
    slidesToScroll: 1,
    autoplay: true, // Automatically slide
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: false, // Hide arrows if you don't need them
  };

  return (
    <div className="bg-gray-100">
      
      <div className="container mx-auto px-4 py-10">
        <SectionHeader title="Our Partners" />

        {/* Partners Section */}
        <div className="text-center mb-10">
          <p className="text-lg text-gray-500">
            Professional Services Guaranteed
          </p>

          <div className="flex justify-center items-center mt-6">
            {/* Partner Logos */}
            <Image
              src="/images/partner-logos-1100x136.png"
              alt="partners photo"
              layout="intrinsic"
              width={1100}
              height={136}
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">Few Testimonials</h2>
          <p className="text-lg text-gray-500">What our clients say about us</p>

          {/* Testimonial Slider (Auto Slide) */}
          <div className="mt-6">
            <Slider {...settings}>
              {/* Testimonial 1 */}
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                <p className="italic text-gray-600">
                  "It was an awesome pleasure doing business with Canaez Group.... training and development process was well delivered."
                </p>
                <div className="mt-4 flex items-center">
                  <img
                    src="/images/testimonials/robert.jpg"
                    alt="Robert Jonson"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold">Robert Jonson</p>
                    <p className="text-gray-500">Advertizer, kodesolution</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                <p className="italic text-gray-600">
                  "Equipment procurement process with Canaez Group was excellent and delivered timely without issues."
                </p>
                <div className="mt-4 flex items-center">
                  <img
                    src="/images/testimonials/jamesbolon.jpg"
                    alt="James Belon"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold">James Belon</p>
                    <p className="text-gray-500">Employee, StarzMarine</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                <p className="italic text-gray-600">
                  "CCTV Surveillance system installation by Canaez Group was simply Top-Notch."
                </p>
                <div className="mt-4 flex items-center">
                  <img
                    src="/images/testimonials/smith-mark-1.png"
                    alt="Mark Smith"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold">Mark Smith</p>
                    <p className="text-gray-500">Employee, Cijo</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                <p className="italic text-gray-600">
                  "Their customer support was responsive and provided excellent solutions for our queries."
                </p>
                <div className="mt-4 flex items-center">
                  <img
                    src="/images/testimonials/rebeca.png"
                    alt="Sophia Green"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold">Sophia Green</p>
                    <p className="text-gray-500">Manager, EcoSystems</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                <p className="italic text-gray-600">
                  "Canaez Group’s expertise in oil & gas sector has been instrumental in achieving our project goals."
                </p>
                <div className="mt-4 flex items-center">
                  <img
                    src="/images/testimonials/rebeca.png"
                    alt="Liam Johnson"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold">Liam Johnson</p>
                    <p className="text-gray-500">Project Engineer, OilCorp</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersTestimonials;
