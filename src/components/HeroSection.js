// HeroSection.js
import React from 'react';
import InteractiveBackground from './InteractiveBackground';

const HeroSection = () => (
  <section className="relative text-white py-20 bg-black overflow-hidden">
    <InteractiveBackground />
    <div className="relative z-10 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Seatcode</h1>
      <p className="text-xl mb-8">Innovative solutions for your business needs</p>
      <a href="/contact" className="bg-white text-black py-2 px-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-200">Get in Touch</a>
    </div>
  </section>
);

export default HeroSection;
