import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans mt-20">
      {/* Logo ve Sosyal Medya İkonları */}
      <div className="bg-[#FAFAFA] py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-b border-gray-100">
        <div className="text-2xl font-bold text-[#252B42] mb-4 md:mb-0">
          Bandage
        </div>
        <div className="text-[#23A6F0] flex items-center gap-5 text-2xl">
          <a href="#" className="hover:opacity-80"><FaFacebook /></a>
          <a href="#" className="hover:opacity-80"><FaInstagram /></a>
          <a href="#" className="hover:opacity-80"><FaTwitter /></a>
        </div>
      </div>

      {/* Menü Sütunları ve Abone Ol */}
      <div className="px-6 md:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-[#252B42] mb-5 text-base">Company Info</h3>
          <ul className="flex flex-col gap-3 text-[#737373] font-semibold">
            <li><Link to="/team" className="hover:text-[#252B42]">About Us</Link></li>
            <li><Link to="/team" className="hover:text-[#252B42]">Carrier</Link></li>
            <li><Link to="/contact" className="hover:text-[#252B42]">We are hiring</Link></li>
            <li><a href="#" className="hover:text-[#252B42]">Blog</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-[#252B42] mb-5 text-base">Legal</h3>
          <ul className="flex flex-col gap-3 text-[#737373] font-semibold">
            <li><Link to="/team" className="hover:text-[#252B42]">About Us</Link></li>
            <li><Link to="/team" className="hover:text-[#252B42]">Carrier</Link></li>
            <li><Link to="/contact" className="hover:text-[#252B42]">We are hiring</Link></li>
            <li><a href="#" className="hover:text-[#252B42]">Blog</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-bold text-[#252B42] mb-5 text-base">Features</h3>
          <ul className="flex flex-col gap-3 text-[#737373] font-semibold">
            <li><a href="#" className="hover:text-[#252B42]">Business Marketing</a></li>
            <li><a href="#" className="hover:text-[#252B42]">User Analytic</a></li>
            <li><a href="#" className="hover:text-[#252B42]">Live Chat</a></li>
            <li><a href="#" className="hover:text-[#252B42]">Unlimited Support</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-[#252B42] mb-5 text-base">Resources</h3>
          <ul className="flex flex-col gap-3 text-[#737373] font-semibold">
            <li><a href="#" className="hover:text-[#252B42]">IOS & Android</a></li>
            <li><a href="#" className="hover:text-[#252B42]">Watch a Demo</a></li>
            <li><a href="#" className="hover:text-[#252B42]">Customers</a></li>
            <li><a href="#" className="hover:text-[#252B42]">API</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="lg:col-span-2">
          <h3 className="font-bold text-[#252B42] mb-5 text-base">Get In Touch</h3>
          <div className="flex flex-row">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-[#E6E6E6] bg-[#F9F9F9] py-3 px-4 rounded-l-md focus:outline-none flex-1 text-sm text-[#737373]"
            />
            <button className="bg-[#23A6F0] text-white px-5 py-3 rounded-r-md font-normal text-sm hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-[#737373] text-xs mt-3">Lore imp sum dolor Amit</p>
        </div>
      </div>

      {/* Telif Hakkı Alanı */}
      <div className="bg-[#FAFAFA] py-6 px-6 md:px-12 text-[#737373] font-semibold text-sm">
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;