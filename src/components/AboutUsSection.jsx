import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Sol Metin Alanı */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10 mb-12 lg:mb-0">
          <h5 className="text-xs sm:text-sm font-bold text-[#737373] tracking-widest uppercase mb-3">
            ABOUT COMPANY
          </h5>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#252B42] tracking-tight mb-6">
            ABOUT US
          </h1>
          <p className="text-[#737373] text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
            We know how large objects will act, but things on a small scale
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-block bg-[#23A6F0] hover:bg-[#1b8bc9] text-white font-bold text-sm px-6 py-3 rounded-md transition-colors duration-200 shadow-sm"
            >
              Get Quote Now
            </Link>
          </div>
        </div>

        {/* Sağ Görsel Alanı */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="absolute w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-[#FFE9EA] rounded-full -z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          <img 
            src="/assets/about-hero.png" 
            alt="About Us Shopping" 
            className="relative z-10 max-w-full h-auto object-contain max-h-[500px]"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutUsSection;