// src/components/EditorsPick.jsx
import React from 'react';
import menImg from '../assets/left_image.png';
import womenImg from '../assets/right_image.png';
import accessoriesImg from '../assets/cardigan.png';
import kidsImg from '../assets/yellow_shirt.png';

const EditorsPick = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-4 md:px-12">
      {/* Başlık */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-2xl font-bold text-[#252B42] tracking-wide mb-2">
          EDITOR'S PICK
        </h2>
        <p className="text-[#737373] text-sm max-w-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Kartlar Alanı */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl">
        
        {/* Men */}
        <div className="relative md:col-span-2 h-[500px] overflow-hidden group bg-gray-200">
          <img 
            src={menImg} 
            alt="Men Fashion" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-6 left-6 bg-white py-3 px-10 shadow-md">
            <span className="font-bold text-[#252B42] text-base tracking-wider">MEN</span>
          </div>
        </div>

        {/* Women */}
        <div className="relative md:col-span-1 h-[500px] overflow-hidden group bg-gray-200">
          <img 
            src={womenImg} 
            alt="Women Fashion" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-6 left-6 bg-white py-3 px-8 shadow-md">
            <span className="font-bold text-[#252B42] text-base tracking-wider">WOMEN</span>
          </div>
        </div>

        {/* Accessories & Kids */}
        <div className="flex flex-col gap-6 md:col-span-1 h-[500px]">
          
          {/* Accessories */}
          <div className="relative h-1/2 overflow-hidden group bg-gray-200">
            <img 
              src={accessoriesImg} 
              alt="Accessories" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 bg-white py-2 px-6 shadow-md">
              <span className="font-bold text-[#252B42] text-sm tracking-wider">ACCESSORIES</span>
            </div>
          </div>

          {/* Kids */}
          <div className="relative h-1/2 overflow-hidden group bg-gray-200">
            <img 
              src={kidsImg} 
              alt="Kids Fashion" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 bg-white py-2 px-6 shadow-md">
              <span className="font-bold text-[#252B42] text-sm tracking-wider">KIDS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EditorsPick;