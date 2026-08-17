import React, { useState } from 'react';
import { Phone, Mail, Search, ShoppingCart, Heart, User, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  
  const isGreenHeader = 
    location.pathname.startsWith('/shop') || 
    location.pathname.startsWith('/product') || 
    location.pathname.startsWith('/products') ||
    location.pathname.startsWith('/about') ||
    location.pathname.startsWith('/team');

  return (
    <header className="w-full font-sans relative z-50">
      {/* Üst İletişim Çubuğu */}
      <div className={`${isGreenHeader ? 'bg-[#23856D]' : 'bg-[#252B42]'} text-white py-3 hidden md:flex justify-between items-center px-6 lg:px-10 transition-colors duration-300`}>
        <div className="flex items-center gap-6 text-sm">
          <a href="tel:(225) 555-0118" className="flex items-center gap-2 hover:opacity-80">
            <Phone size={16} /> (225) 555-0118
          </a>
          <a href="mailto:buse.caliskan@example.com" className="flex items-center gap-2 hover:opacity-80">
            <Mail size={16} /> buse.caliskan@example.com
          </a>
        </div>
        <div className="text-sm font-medium">
          Follow Us and get a chance to win 80% off
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span>Follow Us :</span>
          <a href="#" className="hover:opacity-80"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          <a href="#" className="hover:opacity-80"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
          <a href="#" className="hover:opacity-80"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
          <a href="#" className="hover:opacity-80"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
        </div>
      </div>

      {/* Ana Navigasyon Çubuğu */}
      <div className="bg-white py-4 px-4 md:px-10 flex items-center justify-between border-b border-gray-200">
        <Link to="/" className="text-3xl font-bold text-[#252B42]">
          Bandage
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-[#737373]">
          <Link to="/" className="hover:text-[#252B42]">Home</Link>
          <Link to="/shop" className="hover:text-[#252B42] flex items-center gap-1">
            Shop <ChevronDown size={14} />
          </Link>
          <Link to="/about" className="hover:text-[#252B42]">About</Link>
          <Link to="/blog" className="hover:text-[#252B42]">Blog</Link>
          <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>
          
          {/* PAGES DROPDOWN */}
          <div className="relative">
            <button 
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              className="flex items-center gap-1 hover:text-[#252B42] focus:outline-none"
            >
              Pages <ChevronDown size={14} className={`transition-transform duration-200 ${isPagesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isPagesOpen && (
              <div className="absolute top-full left-0 mt-2 w-36 bg-white border border-gray-100 shadow-lg rounded-md py-2 flex flex-col z-50">
                <Link 
                  to="/about" 
                  onClick={() => setIsPagesOpen(false)}
                  className="px-4 py-2 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0]"
                >
                  About Us
                </Link>
                <Link 
                  to="/team" 
                  onClick={() => setIsPagesOpen(false)}
                  className="px-4 py-2 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0]"
                >
                  Team
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-4 md:gap-6 text-[#23A6F0]">
          <Link to="/login" className="flex items-center gap-2 font-medium hover:text-blue-600">
            <User size={16} /> <span className="hidden md:inline">Login / Register</span>
          </Link>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-full"><Search size={18} /></a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-full relative">
            <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-full relative">
            <Heart size={18} />
            <span className="absolute -top-1 -right-1 bg-[#23A6F0] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;