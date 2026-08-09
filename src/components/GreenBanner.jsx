import React from 'react';
import carouselImg from '../assets/carousel.png';

const GreenBanner = () => {
  return (
    <section className="w-full bg-[#23856D] text-white py-16 pl-6 pr-0 md:pl-24 md:pr-0 flex flex-col md:flex-row items-center justify-between overflow-hidden relative min-h-[550px]">
      {/* Metinler ve Fiyat/Buton */}
      <div className="flex flex-col items-start max-w-lg mb-12 md:mb-0 z-10 relative">
        <span className="text-sm uppercase tracking-widest font-normal mb-6">
          SUMMER 2020
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Vita Classic <br /> Product
        </h1>
        
        <p className="text-sm text-gray-100 mb-8 max-w-sm leading-relaxed">
          We know how large objects will act, We know how are objects will act, We know
        </p>
        
        {/* Fiyat ve Buton Alanı */}
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold">$16.48</span>
          <button className="bg-[#2DC071] hover:bg-[#26a05e] text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="relative md:absolute md:right-0 md:top-0 h-full w-full md:w-auto flex justify-end items-end z-0">
        <img 
          src={carouselImg} 
          alt="Vita Classic Product" 
          className="w-auto h-full max-h-[700px] object-contain md:object-cover object-right-bottom"
        />
      </div>
    </section>
  );
};

export default GreenBanner;