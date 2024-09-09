import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from '@/utils/customCssClass/Slider.module.css'; // Assuming you're using CSS Modules

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="carousel w-full relative overflow-hidden">
      <div
        className={`${styles.slide} ${currentSlide === 1 ? styles.active : ''} carousel-item relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[900px]`}
      >
        <Image src="/CG4.jpg" alt="Slide 1" layout="fill" objectFit="cover" />
        <div className={`${styles.content} absolute left-5 top-1/2 transform -translate-y-1/2`}>
          <div className="lg:ml-56 lg:border-l-8 lg:border-blue-600 lg:pl-4 p-4">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4 lg:mb-7">
              WE NURTURE TRUST
            </p>
            <p className="bg-red-400 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl p-2 font-medium font-poppins">
              by maintaining strong ethics
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${styles.slide} ${currentSlide === 2 ? styles.active : ''} carousel-item relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[900px]`}
      >
        <Image src="/CG2.jpg" alt="Slide 2" layout="fill" objectFit="cover" />
        <div className={`${styles.content} absolute left-5 top-1/2 transform -translate-y-1/2`}>
          <div className="lg:ml-56 lg:border-l-8 lg:border-blue-600 lg:pl-4 p-4">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4 lg:mb-7">
              WE ARE DEPENDABLE
            </p>
            <p className="bg-red-400 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl p-2 font-medium font-poppins">
              On leading-edge delivery services
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${styles.slide} ${currentSlide === 3 ? styles.active : ''} carousel-item relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[900px]`}
      >
        <Image
          src="/sensor-bana2.jpg"
          alt="Slide 3"
          layout="fill"
          objectFit="cover"
        />
        <div className={`${styles.content} absolute left-5 top-1/2 transform -translate-y-1/2`}>
          <div className="lg:ml-56 lg:border-l-8 lg:border-blue-600 lg:pl-4 p-4">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4 lg:mb-7">
              WE ARE COMMITTED
            </p>
            <p className="bg-red-400 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl p-2 font-medium font-poppins">
              to long term alliances
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" className="btn btn-circle bg-opacity-20 hover:bg-opacity-30">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle bg-opacity-20 hover:bg-opacity-30">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slider;
