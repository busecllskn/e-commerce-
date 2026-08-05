import React from 'react';
import { ChevronRight } from 'lucide-react';

const ShopHeader = () => {
  return (
    <div className="bg-[#FAFAFA] py-8 px-6 md:px-12 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-[#252B42]">Home</span>
          <ChevronRight className="w-4 h-4 text-[#BDBDBD]" />
          <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;