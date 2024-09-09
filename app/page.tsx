"use client"
import SectionHeader from "./components/SectionHeader";
import {newsData, servicesData, servicesData2} from "../data/pageData"
import Slide from "./components/Slider"
import CardSection from "./components/CardSection";
import NCBuildingCompany from "./components/NcbuildingCompany";
import PartnersAndTestimonials from "./components/PartnersAndTestimonials";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    
    <main>
      <Slide />
      <SectionHeader 
      title="Our Services"
      />
     <CardSection
        data={servicesData}
        renderCard={(service, index) => (
          <div key={index} className="card">
            <img src={service.imageSrc} alt={service.title} />
            <h3 className="font-roboto font-bold text-xl m-3">{service.title}</h3>
            <p className="mb-4">{service.description}</p>
            <button className="btn text-white bg-cyan-500 hover:bg-cyan-700">View Details</button>
          </div>
        )} title={""}      />
     <CardSection
        data={servicesData2}
        renderCard={(service, index) => (
          <div key={index} className="card">
            <img src={service.imageSrc} alt={service.title} />
            <h3 className="font-roboto font-bold text-xl m-3">{service.title}</h3>
            <p >{service.description}</p>
            <button className="btn text-white bg-cyan-500 hover:bg-cyan-700">View Details</button>
          </div>
        )} title={""}      />
        <NCBuildingCompany />
        
        <PartnersAndTestimonials />
        
       
      <CardSection
        title="News Update"
        data={newsData}
        renderCard={(news, index) => (
          <div key={index} className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={news.imageSrc}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-roboto font-bold text-xl m-3 h-15 " >{news.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{news.date}</p>
              <p className="m-4">{news.description}</p>
              <a
                href={news.readMoreLink}
                className="btn text-white bg-cyan-500 hover:bg-cyan-800"
              >
                Read more
              </a>
            </div>
          </div>
        )}
      />

      <Services />
      <ScrollToTop />
    

    </main>
  );
}
