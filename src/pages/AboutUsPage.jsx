import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { teamMembers } from '../data/teamData';

const AboutUs = () => {
  return (
    <div className="w-full font-sans bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-20 py-12 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white">
        <div className="flex flex-col items-start text-left max-w-xl">
          <span className="text-[#737373] font-bold text-sm tracking-widest uppercase mb-4">
            ABOUT COMPANY
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-6 leading-tight">
            ABOUT US
          </h1>
          <p className="text-[#737373] text-lg mb-8">
            We know how large objects will act, but things on a small scale
          </p>
          <Link
            to="/contact"
            className="bg-[#23A6F0] hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-md transition-colors"
          >
            Get Quote Now
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-md lg:max-w-none flex justify-center">
            <div className="absolute -z-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#FFE9EA] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="https://picsum.photos/500/600?random=about"
              alt="About Us Shopping"
              className="w-full max-h-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. PROBLEMS / STATISTICS SECTION */}
      <section className="px-6 md:px-20 py-12 md:py-16 bg-white">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
          <div>
            <span className="text-[#E74040] text-sm font-medium">Problems trying</span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#252B42] mt-2 max-w-md">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-[#737373] text-sm md:text-base leading-relaxed">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-12">
          <div>
            <h3 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-2">15K</h3>
            <p className="text-[#737373] font-bold text-sm">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-2">150K</h3>
            <p className="text-[#737373] font-bold text-sm">Monthly Visitors</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-2">15</h3>
            <p className="text-[#737373] font-bold text-sm">Countries Worldwide</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-2">100+</h3>
            <p className="text-[#737373] font-bold text-sm">Top Partners</p>
          </div>
        </div>
      </section>

      {/* 3. VIDEO SECTION */}
      <section className="px-6 md:px-20 py-12 flex justify-center bg-white">
        <div className="relative w-full max-w-5xl h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-200">
          <img
            src="https://picsum.photos/1000/500?random=video"
            alt="Video Thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <button className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-[#23A6F0] hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl transition-transform hover:scale-110">
            <Play size={28} className="translate-x-0.5 fill-current" />
          </button>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252B42] tracking-tight mb-3">
            Meet Our Team
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-xs sm:text-sm mb-16 leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white flex flex-col items-center text-center group"
              >
                <div className="w-full h-80 overflow-hidden mb-6 bg-gray-100 rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-base font-bold text-[#252B42] mb-1">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-4">
                  {member.role}
                </p>
                
                {/* Sosyal Medya İkonları (SVG) */}
                <div className="flex items-center gap-4 text-[#23A6F0]">
                  <a href="#" className="hover:opacity-75">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
                  </a>
                  <a href="#" className="hover:opacity-75">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="hover:opacity-75">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BIG COMPANIES SECTION */}
      <section className="bg-[#FAFAFA] py-20 px-6 md:px-20 text-center">
        <div className="max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4">Big Companies Are Here</h2>
          <p className="text-[#737373] text-sm">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60">
          <span className="font-bold text-xl text-gray-500">hooli</span>
          <span className="font-bold text-xl text-gray-500">LYFT</span>
          <span className="font-bold text-xl text-gray-500">PIPE</span>
          <span className="font-bold text-xl text-gray-500">Stripe</span>
          <span className="font-bold text-xl text-gray-500">AWS</span>
          <span className="font-bold text-xl text-gray-500">Reddit</span>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="flex flex-col md:flex-row w-full min-h-[400px]">
        <div className="bg-[#2A7CC7] w-full md:w-1/2 flex flex-col justify-center items-start px-10 md:px-24 py-20 text-white">
          <span className="font-bold text-sm tracking-widest uppercase mb-4">WORK WITH US</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Now Let's grow Yours</h2>
          <p className="text-sm text-gray-100 mb-8 max-w-sm">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
          </p>
          <Link
            to="/contact"
            className="border border-white hover:bg-white hover:text-[#2A7CC7] font-bold px-6 py-3 rounded-md transition-colors"
          >
            Button
          </Link>
        </div>
        <div className="w-full md:w-1/2 bg-gray-300 min-h-[300px]">
          <img 
            src="https://picsum.photos/800/600?random=cta" 
            alt="Work with us" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

    </div>
  );
};

export default AboutUs;