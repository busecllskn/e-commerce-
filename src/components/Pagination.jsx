import React from 'react';

const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="container mx-auto pb-16 px-6 md:px-12 flex justify-center">
      <div className="flex border border-[#BDBDBD] rounded-md overflow-hidden bg-white">
        <button 
          onClick={() => setCurrentPage(1)}
          className="px-5 py-4 bg-[#F3F3F3] text-[#737373] font-bold text-sm border-r border-[#BDBDBD] hover:bg-gray-200 transition-colors"
        >
          First
        </button>
        <button 
          onClick={() => setCurrentPage(1)}
          className={`px-4 py-4 font-bold text-sm border-r border-[#BDBDBD] transition-colors ${currentPage === 1 ? 'bg-[#23A6F0] text-white' : 'bg-white text-[#23A6F0] hover:bg-gray-50'}`}
        >
          1
        </button>
        <button 
          onClick={() => setCurrentPage(2)}
          className={`px-4 py-4 font-bold text-sm border-r border-[#BDBDBD] transition-colors ${currentPage === 2 ? 'bg-[#23A6F0] text-white' : 'bg-white text-[#23A6F0] hover:bg-gray-50'}`}
        >
          2
        </button>
        <button 
          onClick={() => setCurrentPage(3)}
          className={`px-4 py-4 font-bold text-sm border-r border-[#BDBDBD] transition-colors ${currentPage === 3 ? 'bg-[#23A6F0] text-white' : 'bg-white text-[#23A6F0] hover:bg-gray-50'}`}
        >
          3
        </button>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, 3))}
          className="px-5 py-4 bg-white text-[#23A6F0] font-bold text-sm hover:bg-gray-50 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;