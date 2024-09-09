import Image from 'next/image';
import { trainingDetails } from '../../data/pageData';

const TrainingComponent: React.FC = () => {
  const images = [
    { src: '/images/training/training4.jpg', alt: 'Training image 1' },
    { src: '/images/training/training4.jpg', alt: 'Training image 2' },
    { src: '/images/training/training4.jpg', alt: 'Training image 3' },
    { src: '/images/training/training4.jpg', alt: 'Training image 4' }
  ];

  return (
    <section className="flex flex-col items-center justify-center py-8 px-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{trainingDetails.title}</h1>
      <p className="text-lg text-gray-700 text-center mb-4">{trainingDetails.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-64">
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-2 font-semibold">Mission</p>
        <p className="text-base text-gray-600 mb-4">{trainingDetails.mission}</p>
        <p className="text-lg text-gray-700 mb-2 font-semibold">Our Services</p>
        <p className="text-base text-gray-600">{trainingDetails.services}</p>
      </div>
    </section>
  );
};

export default TrainingComponent;
