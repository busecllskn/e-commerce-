import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import elipsonu from '../assets/elips5.png';
import letgrowmodel from '../assets/model20.png';
import videoresmi from '../assets/video5.jpg';
import hooli from '../assets/hooli.png';
import lyft from '../assets/lyft.png';
import robinhood from '../assets/logo.png';
import stripe from '../assets/stripe.png';
import aws from '../assets/aws.png';
import reddit from '../assets/teletabi.png';


const AboutUs = () => {
  return (
    <div className="w-full font-sans bg-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white relative">
        <div className="flex flex-col items-start text-left max-w-xl z-10">
          <span className="text-[#737373] font-bold text-sm tracking-widest uppercase mb-4">
            ABOUT COMPANY
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#252B42] mb-6 leading-tight">
            ABOUT US
          </h1>
          <p className="text-[#737373] text-base md:text-lg mb-8">
            We know how large objects will act, but things on a small scale
          </p>
          <Link
            to="/contact"
            className="bg-[#23A6F0] hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-md transition-colors"
          >
            Get Quote Now
          </Link>
        </div>

        {/* Görsel ve Elipsler */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0">
          <div className="relative flex justify-center items-center">
            
            {/* Büyük Ana Pembe Daire (#FFE9EA) */}
            <div className="absolute w-[225px] h-[225px] md:w-[300px] md:h-[300px] bg-[#FFE9EA] rounded-full inset-0 m-auto -z-0"></div>
            
            {/* Sol Üst Küçük Soluk Pembe Daire */}
            <div className="absolute w-12 h-12 md:w-14 md:h-14 bg-[#FFE9EA] rounded-full top-2 left-2 -z-0"></div>

            {/* Küçük Mor Daireler */}
            <div className="absolute w-2.5 h-2.5 bg-[#9B51E0] rounded-full top-[20%] left-4 z-20"></div>
            <div className="absolute w-2.5 h-2.5 bg-[#9B51E0] rounded-full top-[30%] right-4 z-20"></div>
            <div className="absolute w-3 h-3 bg-[#FFE9EA] rounded-full bottom-[25%] right-2 z-20"></div>

            {/* Kadın Görseli */}
            <img
              src={elips5}
              alt="About Us Shopping"
              className="w-full max-h-[680px] scale-125 object-contain relative z-10"
            />
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="px-6 md:px-20 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <div>
              <span className="text-[#E74040] text-sm font-bold block mb-2">Problems trying</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#252B42] leading-snug">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </h2>
            </div>
            <div>
              <p className="text-[#737373] text-sm md:text-base leading-relaxed pt-1">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-8">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-2">15K</h3>
              <p className="text-[#737373] font-bold text-sm">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-2">150K</h3>
              <p className="text-[#737373] font-bold text-sm">Monthly Visitors</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-2">15</h3>
              <p className="text-[#737373] font-bold text-sm">Countries Worldwide</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-2">100+</h3>
              <p className="text-[#737373] font-bold text-sm">Top Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="px-6 md:px-20 py-12 flex justify-center bg-white">
        <div className="relative w-full max-w-5xl h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-200">
          <img
            src={video5}
            alt="Video Thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <button className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-[#23A6F0] hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl transition-transform hover:scale-110">
            <Play size={28} className="translate-x-0.5 fill-current" />
          </button>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252B42] tracking-tight mb-3">
            Meet Our Team
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-xs sm:text-sm mb-16 leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={index} className="bg-white flex flex-col items-center text-center group">
                <div className="w-full h-80 overflow-hidden mb-6 bg-gray-100 rounded-lg">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-base font-bold text-[#252B42] mb-1">{member.name}</h3>
                <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-4">{member.role}</p>
                <div className="flex items-center gap-4 text-[#23A6F0]">
                  <a href="#"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.5 5 15.5 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg></a>
                  <a href="#"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                  <a href="#"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG COMPANIES SECTION */}
      <section className="bg-[#FAFAFA] py-20 px-6 md:px-20 text-center">
        <div className="max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-4">Big Companies Are Here</h2>
          <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60">
          <img src={hooli} alt="hooli" className="h-8 object-contain" />
          <img src={lyft} alt="lyft" className="h-8 object-contain" />
          <img src={robinhood} alt="robinhood" className="h-8 object-contain" />
          <img src={stripe} alt="stripe" className="h-8 object-contain" />
          <img src={aws} alt="aws" className="h-8 object-contain" />
          <img src={reddit} alt="reddit" className="h-8 object-contain" />
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="flex flex-col md:flex-row w-full min-h-[400px]">
        <div className="bg-[#2A7CC7] w-full md:w-1/2 flex flex-col justify-center items-start px-10 md:px-24 py-20 text-white">
          <span className="font-bold text-sm tracking-widest uppercase mb-4">WORK WITH US</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Now Let's grow Yours</h2>
          <p className="text-sm text-gray-100 mb-8 max-w-sm">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.</p>
          <Link to="/contact" className="border border-white hover:bg-white hover:text-[#2A7CC7] font-bold px-6 py-3 rounded-md transition-colors">Button</Link>
        </div>
        <div className="w-full md:w-1/2 bg-gray-300 min-h-[300px]">
          <img src={model20} alt="Work with us" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
