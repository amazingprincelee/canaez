import React from "react";
import {  FaFacebook, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <Image
            src="/canaez.png" // Replace with your actual image path
            alt="Canaez Logo"
            width={160}
            height={160}
          />
          <p className="mt-4 text-gray-400">
            World class engineering service provider through Technical leadership,
            Consistency, and Integrity.
          </p>
          <div className="mt-4">
            <p className="flex items-center space-x-2">
              <span>📞</span>
              <a href="tel:+2348157227777" className="text-gray-400 hover:text-white">
                +234 815 722 7777
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <FaMailBulk className="text-gray-400" />
              <a href="mailto:info@canaezgroup.com" className="text-gray-400 hover:text-white">
                info@canaezgroup.com
              </a>
            </p>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Twitter">
              <FaXTwitter className="text-gray-400 hover:text-white" size={24} />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-gray-400 hover:text-white" size={24} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-gray-400 hover:text-white" size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-gray-400 hover:text-white" size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-bold mb-8 border-b-2 border-blue-400 inline-block pb-1">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-4">
  <li>
    <a href="/" className="text-gray-400 hover:text-white">Home</a>
  </li>
  <li>
    <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
  </li>
  <li>
    <a href="/services" className="text-gray-400 hover:text-white">Services</a>
  </li>
  <li>
    <a href="/partnership" className="text-gray-400 hover:text-white">Products</a>
  </li>
  <li>
    <a href="/contact" className="text-gray-400 hover:text-white">Partnership</a>
  </li>
  <li>
    <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
  </li>
</ul>

        </div>

        {/* Products */}
        <div>
          <h4 className="text-white text-lg font-bold mb-8 border-b-2 border-blue-400 inline-block pb-1">Products</h4>
          <ul className="space-y-2">
            <li className="flex space-x-2">
              <Image src="/product4-100x70.jpg" alt="Product 1" width={120} height={120} />
              <div>
                <a href="#" className="text-gray-400 hover:text-white">
                  Canaez Variable Power Supply
                </a>
                <p className="text-sm text-gray-500">April 8, 2020</p>
              </div>
            </li>
            <li className="flex space-x-2">
              <Image src="/product3-100x70.jpg" alt="Product 2" width={120} height={120} />
              <div>
                <a href="#" className="text-gray-400 hover:text-white">
                  Canaez Loop Simulator
                </a>
                <p className="text-sm text-gray-500">April 8, 2020</p>
              </div>
            </li>
            <li className="flex space-x-2">
              <Image src="/product2-100x70.jpg" alt="Product 3" width={120} height={120} />
              <div>
                <a href="#" className="text-gray-400 hover:text-white">
                  Canaez Fire & Gas Detection
                </a>
                <p className="text-sm text-gray-500">April 8, 2020</p>
              </div>
            </li>
          </ul>
        </div>

       {/* Opening Hours */}
<div className=" p-4 rounded-md w-full max-w-md">
  <h4 className="text-white text-lg font-bold mb-5 border-b-2 border-blue-400 inline-block pb-1 ">Opening Hours</h4>
  <ul className="space-y-2 text-gray-300">
    <li className="flex justify-between">
      <span>Monday - Tuesday</span>
      <span>9.00 - 17.00</span>
    </li>
    <li className="flex justify-between">
      <span>Wednesday - Friday</span>
      <span>9.00 - 17.00</span>
    </li>
    <li className="flex justify-between">
      <span>Saturday</span>
      <span>10.00 - 16.00</span>
    </li>
    <li className="flex justify-between">
      <span>Sunday</span>
      <span>Closed</span>
    </li>
  </ul>
</div>

      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-500 border-t border-gray-800 pt-4">
        ©2024 Canaez Group. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
