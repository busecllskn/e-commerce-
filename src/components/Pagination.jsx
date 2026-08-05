import React from 'react';

const Pagination = () => {
  return (
    <div className="container mx-auto pb-16 px-6 md:px-12 flex justify-center">
      <div className="flex border border-[#BDBDBD] rounded-md overflow-hidden">
        <button className="px-5 py-4 bg-[#F3F3F3] text-[#BDBDBD] font-bold text-sm border-r border-[#BDBDBD] hover:bg-gray-200">First</button>
        <button className="px-4 py-4 bg-[#23A6F0] text-white font-bold text-sm border-r border-[#BDBDBD]">1</button>
        <button className="px-4 py-4 bg-white text-[#23A6F0] font-bold text-sm border-r border-[#BDBDBD] hover:bg-gray-50">2</button>
        <button className="px-4 py-4 bg-white text-[#23A6F0] font-bold text-sm border-r border-[#BDBDBD] hover:bg-gray-50">3</button>
        <button className="px-5 py-4 bg-white text-[#23A6F0] font-bold text-sm hover:bg-gray-50">Next</button>
      </div>
    </div>
  );
};

export default Pagination;