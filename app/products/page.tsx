import Image from 'next/image';

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* About Us */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 leading-loose mb-8">
            Canaez Nigeria Limited is a world-class engineering service provider dedicated to technical leadership,
            consistency, integrity, and capacity building through a continual improvement approach.
          </p>
          <div className="w-full">
            <Image src="/about-us.jpg" alt="About Us Image" width={800} height={500} className="rounded-lg shadow-md w-full h-auto" />
          </div>
        </div>
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

      {/* Services */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/consultancy.jpg" alt="Consultancy Services" width={400} height={300} className="rounded-lg w-full h-auto" />
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mt-4">Consultancy Services</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/drilling.jpg" alt="Drilling Instrumentation" width={400} height={300} className="rounded-lg w-full h-auto" />
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mt-4">Drilling Instrumentation</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/automation.jpg" alt="Automation Designs and Systems" width={400} height={300} className="rounded-lg w-full h-auto" />
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mt-4">Automation Designs & Systems</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/cctv.jpg" alt="CCTV/Surveillance Systems" width={400} height={300} className="rounded-lg w-full h-auto" />
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mt-4">CCTV/Surveillance Systems</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/control.jpg" alt="Control & Instrumentation" width={400} height={300} className="rounded-lg w-full h-auto" />
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mt-4">Control & Instrumentation</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/training.jpg" alt="Training and Development" width={400} height={300} className="rounded-lg w-full h-auto" />
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mt-4">Training & Development</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image src="/representatives.jpg" alt="Manufacturer Representatives" width={400} height={300} className="rounded-lg w-full h-auto" />
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mt-4">Manufacturer Representatives</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
