import { servicesData, servicesData2 } from '@/data/pageData';
import Image from 'next/image';
import CardSection from '../components/CardSection';
import SectionHeader from '../components/SectionHeader';
import CardWithSideImage from '../components/CardWithSideImage';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* About Us */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">About Us</h2>

        </div>

        <CardWithSideImage />
      </section>



      {/* Vision, Mission & Core Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Canaez Nigeria Limited strives to be a world-class engineering service provider through technical leadership,
              consistency, integrity, and capacity building.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To analyze, monitor, and improve our customers' present and future needs for high-quality services & products.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">Our Core Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li><strong>S -</strong> Safety</li>
              <li><strong>T -</strong> Teamwork</li>
              <li><strong>R -</strong> Respect</li>
              <li><strong>I -</strong> Integrity</li>
              <li><strong>C -</strong> Creativity</li>
              <li><strong>T -</strong> Technical Leadership</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HSE & Quality Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">HSE</h3>
            <p className="text-gray-600">
              At Canaez, we are committed to identifying, assessing, controlling, and preparing recovery measures for all
              hazards to reduce risks to as low as reasonably practicable levels. Our objectives include reduced incidents,
              zero fatalities, and minimal loss of assets.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4">Our Quality Policy</h3>
            <p className="text-gray-600">
              The management and staff of Canaez Nigeria Limited are committed to meeting and exceeding all applicable
              requirements by providing quality oil and gas engineering services through the use of certified/qualified
              personnel, improved processes, and periodic reviews for continual improvement.
            </p>
          </div>
        </div>
      </section>

      <section>
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
            <button className="btn text-white bg-blue-700 hover:bg-blue-800">View Details</button>
          </div>
        )} title={""}      />
     <CardSection
        data={servicesData2}
        renderCard={(service, index) => (
          <div key={index} className="card">
            <img src={service.imageSrc} alt={service.title} />
            <h3 className="font-roboto font-bold text-xl m-3">{service.title}</h3>
            <p >{service.description}</p>
            <button className="btn text-white bg-blue-700 hover:bg-blue-800">View Details</button>
          </div>
        )} title={""}      />
      </section>

      
    </div>
  );
}
