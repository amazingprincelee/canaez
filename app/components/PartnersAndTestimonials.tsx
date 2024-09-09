import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Show only 1 slide at a time on tablets and small desktops
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Keep the same setting for tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Keep the same setting for mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      message: "Equipment procurement process with Canaez Group was excellent and delivered timely without issues.",
      name: "James Belon",
      role: "Employee, StarzMarine",
      image: "/images/testimonials/jamesbolon.jpg",
    },
    {
      message: "CCTV Surveillance system installation by Canaez Group was simply Top-Notch.",
      name: "Mark Smith",
      role: "Employee, Cijo",
      image: "/images/testimonials/smith-mark-1.png",
    },
    {
      message: "Their customer support was responsive and provided excellent solutions for our queries.",
      name: "Sophia Green",
      role: "Manager, EcoSystems",
      image: "/images/testimonials/rebeca.png",
    },
    {
      message: "Canaez Group expertise in oil & gas sector has been instrumental in achieving our project goals.",
      name: "Liam Johnson",
      role: "Project Engineer, OilCorp",
      image: "/images/testimonials/rebeca.png",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <SectionHeader title="Our Partners" />
        <div className="text-center mb-10">
          <p className="text-lg text-gray-500">Professional Services Guaranteed</p>
          <div className="flex justify-center items-center mt-6">
            <Image
              src="/images/partner-logos-1100x136.png"
              alt="Partners"
              layout="intrinsic"
              width={1100}
              height={136}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">Few Testimonials</h2>
          <p className="text-lg text-gray-500">What our clients say about us</p>
          <div className="mt-6">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                  <p className="italic text-gray-600">{testimonial.message}</p>
                  <div className="mt-4 flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersTestimonials;
