import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetail';
import ProductDescription from '../components/ProductDescription';
import ProductCardList from '../components/ProductCardList';
import BrandLogos from '../components/BrandLogos';
import { ChevronRight } from 'lucide-react';

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-sans">
      
      {/* Üst Kısım: Breadcrumb ve Arama */}
      <div className="bg-[#FAFAFA] py-6 px-6 md:px-12 w-full border-b border-[#ECECEC]">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
          
          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2 text-sm font-bold">
              <span className="text-[#252B42]">Home</span>
              <ChevronRight className="w-4 h-4 text-[#BDBDBD]" />
              <span className="text-[#BDBDBD]">Shop</span>
            </div>

            <div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-[#23A6F0] bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modüler İçerik Bileşenleri */}
      <main className="flex-grow flex flex-col">
        <ProductDetail />
        <ProductDescription />
        <ProductCardList />
        <BrandLogos />
      </main>

    </div>
  );
};

export default ProductsPage;