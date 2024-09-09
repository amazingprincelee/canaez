import React from 'react';

const Products: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Products</h2>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Product A</h3>
            <p className="text-gray-600 mb-4">
              Product A is our flagship offering that provides exceptional value to our customers. 
              Designed with innovation in mind, Product A is perfect for those looking to improve their efficiency 
              and productivity. It offers a unique combination of features and benefits that set it apart 
              from competitors.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Feature 1: Detailed description of feature 1.</li>
              <li>Feature 2: Detailed description of feature 2.</li>
              <li>Feature 3: Detailed description of feature 3.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Product B</h3>
            <p className="text-gray-600 mb-4">
              Product B is a highly reliable and cost-effective solution that caters to a wide range of 
              industries. Known for its durability and performance, Product B is ideal for businesses 
              that require consistent and long-lasting solutions.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Feature 1: Detailed description of feature 1.</li>
              <li>Feature 2: Detailed description of feature 2.</li>
              <li>Feature 3: Detailed description of feature 3.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Product C</h3>
            <p className="text-gray-600 mb-4">
              Product C is an advanced solution tailored for modern challenges. It combines cutting-edge 
              technology with user-friendly features to deliver a product that not only meets but exceeds 
              expectations. Perfect for forward-thinking organizations, Product C is designed to drive success.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Feature 1: Detailed description of feature 1.</li>
              <li>Feature 2: Detailed description of feature 2.</li>
              <li>Feature 3: Detailed description of feature 3.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
