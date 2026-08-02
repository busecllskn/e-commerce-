import React from 'react';
import containerImg from '../assets/container-img.png'; 

const NeuralUniverse = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
      {/* Görsel */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img 
          src={containerImg} 
          alt="Neural Universe Couple" 
          className="w-full max-w-lg h-auto object-contain"
        />
      </div>

      {/* Metinler ve Butonlar */}
      <div className="w-full md:w-1/2 flex flex-col items-start max-w-lg">
        <span className="text-[#BDBDBD] text-sm uppercase tracking-widest font-normal mb-4">
          SUMMER 2020
        </span>
        
        <h2 className="text-3xl md:text-5xl font-bold text-[#252B42] tracking-tight mb-6 leading-tight">
          Part of the Neural Universe
        </h2>
        
        <p className="text-[#737373] text-sm md:text-base mb-8 leading-relaxed">
          We know how large objects will act, but things on a small scale.
        </p>
        
        {/* Butonlar */}
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-[#2DC071] hover:bg-[#26a05e] text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 text-sm">
            BUY NOW
          </button>
          <button className="border-2 border-[#2DC071] text-[#2DC071] hover:bg-[#2DC071] hover:text-white font-bold py-3 px-8 rounded-md transition-all duration-300 text-sm">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeuralUniverse;