import React from 'react';
import contactImage from '../assets/contact1.png';

const ContactSection = () => {
  return (
    <div className="w-full min-h-[700px] bg-gradient-to-r from-[#0b2b3c] via-[#0f4a5c] to-[#1a7a8c] text-white flex items-center relative overflow-hidden">
      
      {/* Ana İçerik Konteyner */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between w-full z-10 py-16 lg:py-0">
        
        {/* Sol Taraf: Başlık, Açıklama ve Buton */}
        <div className="flex flex-col items-start text-left max-w-md gap-6 w-full lg:w-[40%] py-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase">
            CONTACT US
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <button className="bg-[#23A6F0] hover:bg-[#1a8cd8] text-white font-semibold px-8 py-3 rounded-md transition-colors uppercase text-sm tracking-wide">
            CONTACT US
          </button>
        </div>

        {/* Sağ Taraf: Görsel + Ofis Bilgileri Overlay */}
        <div className="relative w-full lg:w-[60%] h-[600px] lg:h-[700px] self-stretch">
          
          {/* Arkaplan Görseli */}
          <img
            src={contactImage}
            alt="Contact Us Model"
            className="absolute inset-0 w-full h-full object-cover object-right-top hidden lg:block"
          />

          {/* Ofis Bilgileri Grid (Bloklar arası boşluk biraz daha artırıldı) */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 lg:px-16 z-20">
            <div className="grid grid-cols-2 gap-x-14 gap-y-16 w-full max-w-lg">
              
              {/* Paris */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg tracking-wide text-white">Paris</h3>
                <p className="text-xs text-gray-200">1901 Thorn ridge Cir.</p>
                <p className="text-xs text-gray-200">75000 Paris</p>
                <p className="text-xs font-semibold text-white pt-1">Phone ; +451 215 215</p>
                <p className="text-xs font-semibold text-white">Fax : +451 215 215</p>
              </div>

              {/* New York */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg tracking-wide text-white">New York</h3>
                <p className="text-xs text-gray-200">2715 Ash Dr. San Jose,</p>
                <p className="text-xs text-gray-200">75000 Paris</p>
                <p className="text-xs font-semibold text-white pt-1">Phone ; +451 215 215</p>
                <p className="text-xs font-semibold text-white">Fax : +451 215 215</p>
              </div>

              {/* Berlin */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg tracking-wide text-white">Berlin</h3>
                <p className="text-xs text-gray-200">4140 Parker Rd.</p>
                <p className="text-xs text-gray-200">75000 Paris</p>
                <p className="text-xs font-semibold text-white pt-1">Phone ; +451 215 215</p>
                <p className="text-xs font-semibold text-white">Fax : +451 215 215</p>
              </div>

              {/* London */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg tracking-wide text-white">London</h3>
                <p className="text-xs text-gray-200">3517 W. Gray St. Utica,</p>
                <p className="text-xs text-gray-200">75000 Paris</p>
                <p className="text-xs font-semibold text-white pt-1">Phone ; +451 215 215</p>
                <p className="text-xs font-semibold text-white">Fax : +451 215 215</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;