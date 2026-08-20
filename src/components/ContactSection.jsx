import React from 'react';
import contactImage from '../assets/contact1.png';

const ContactSection = () => {
  return (
    <div className="w-full bg-[#0b2b3c] text-white flex justify-center">
      
      {/* Ana İçerik */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between w-full">
        
        {/* Başlık, Açıklama ve Buton */}
        <div className="flex flex-col items-start text-left max-w-sm gap-4 w-full lg:w-[38%] py-8 lg:py-10 z-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase">
            CONTACT US
          </h1>
          <p className="text-gray-100 text-lg sm:text-xl font-normal leading-relaxed max-w-xs">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <button className="bg-[#23A6F0] hover:bg-[#1a8cd8] text-white font-semibold px-7 py-3 rounded-md transition-colors uppercase text-base tracking-wide">
            CONTACT US
          </button>
        </div>

        {/* Görsel + Ofis Bilgileri Alanı */}
        <div className="relative w-full lg:w-[58%] flex items-center justify-center">
          
          {/* Arkaplan Görseli */}
          <img
            src={contactImage}
            alt="Contact Us Model"
            className="w-full h-auto object-cover object-top hidden lg:block"
          />

          {/* Ofis Bilgileri Grid */}
          <div className="absolute inset-0 flex items-center px-4 lg:px-8 z-20">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full max-w-md">
              
              {/* Paris */}
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl tracking-wide text-white">Paris</h3>
                <p className="text-base sm:text-lg text-white font-normal">1901 Thorn ridge Cir.</p>
                <p className="text-base sm:text-lg text-white font-normal">75000 Paris</p>
                <p className="text-base sm:text-lg font-normal text-white pt-1">Phone ; +451 215 215</p>
                <p className="text-base sm:text-lg font-normal text-white">Fax : +451 215 215</p>
              </div>

              {/* New York */}
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl tracking-wide text-white">New York</h3>
                <p className="text-base sm:text-lg text-white font-normal">2715 Ash Dr. San Jose,</p>
                <p className="text-base sm:text-lg text-white font-normal">75000 Paris</p>
                <p className="text-base sm:text-lg font-normal text-white pt-1">Phone ; +451 215 215</p>
                <p className="text-base sm:text-lg font-normal text-white">Fax : +451 215 215</p>
              </div>

              {/* Berlin */}
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl tracking-wide text-white">Berlin</h3>
                <p className="text-base sm:text-lg text-white font-normal">4140 Parker Rd.</p>
                <p className="text-base sm:text-lg text-white font-normal">75000 Paris</p>
                <p className="text-base sm:text-lg font-normal text-white pt-1">Phone ; +451 215 215</p>
                <p className="text-base sm:text-lg font-normal text-white">Fax : +451 215 215</p>
              </div>

              {/* London */}
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl tracking-wide text-white">London</h3>
                <p className="text-base sm:text-lg text-white font-normal">3517 W. Gray St. Utica,</p>
                <p className="text-base sm:text-lg text-white font-normal">75000 Paris</p>
                <p className="text-base sm:text-lg font-normal text-white pt-1">Phone ; +451 215 215</p>
                <p className="text-base sm:text-lg font-normal text-white">Fax : +451 215 215</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactSection;