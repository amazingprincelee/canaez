import Image from 'next/image';

interface PartnershipProps {}

const Partnership: React.FC<PartnershipProps> = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Partnership</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
       
        <div className='font-roboto'>
          <p className="text-xl leading-relaxed text-gray-600 mb-6">
            Canaez Nig. Limited is a firm engaged in partnering with both individuals and organizations in the provision of solutions to people, structure, strategy, and management/technology-related challenges across industries in Nigeria.
          </p>
          <p className="text-xl leading-relaxed text-gray-600 mb-6">
            Our prevalent experience and expertise within the private and public sectors in Nigeria justify the capacity we deliver to our clients.
          </p>
          <p className="text-xl leading-relaxed text-gray-600 mb-6">
            Our wide range of associates from within and outside Nigeria understands the environment, the technical needs, and the management supports to deliver effectively.
          </p>
        </div>

       
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Image src="/images/gallery/phto1.jpg" alt="Business Discussion" className="rounded-lg shadow-lg" width={300} height={200} />
            <Image src="/images/gallery/phto2.jpg" alt="Business Agreement" className="rounded-lg shadow-lg" width={300} height={200} />
          </div>
          <div className="flex flex-col gap-4">
            <Image src="/images/gallery/phto3.jpg" alt="Handshake" className="rounded-lg shadow-lg" width={300} height={200} />
            <Image src="/images/gallery/phto4.jpg" alt="Helping Hand" className="rounded-lg shadow-lg" width={300} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
