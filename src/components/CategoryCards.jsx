import React from 'react';

const CategoryCards = () => {
  return (
    <div className="bg-[#FAFAFA] py-6 px-6 md:px-12 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="relative h-[223px] overflow-hidden group cursor-pointer bg-gray-200">
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
              <h5 className="font-bold text-base tracking-wider">CLOTHS</h5>
              <p className="text-sm font-normal">5 Items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;