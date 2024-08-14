import React from 'react';
import ParticlesComponent  from './ParticlesComponent ';

const HeroSection = () => (
  <section className="relative text-white bg-black overflow-hidden" style={{ height: '500px' }}>
    {/* Background Particles */}
    <ParticlesComponent id="tsparticles" className="absolute top-0 left-0 w-full h-500px" />
    
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to Seatcode</h1>
      <p className="text-xl mb-8">Innovative solutions for your business needs</p>
      <a href="/contact" className="bg-white text-black py-2 px-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-200">
        Get in Touch
      </a>
    </div>
  </section>
);

export default HeroSection;