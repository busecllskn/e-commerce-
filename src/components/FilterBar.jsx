import React from 'react';

const FilterBar = () => {
  return (
    <div className="container mx-auto py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-[#ECECEC]">
      <p className="text-sm font-bold text-[#737373]">Showing all 12 results</p>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <div className="flex items-center gap-2">
          <button className="border border-[#DDDDDD] p-2 rounded text-[#737373] hover:bg-gray-100">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/></svg>
          </button>
          <button className="border border-[#DDDDDD] p-2 rounded text-[#737373] hover:bg-gray-100">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"/></svg>
          </button>
        </div>
        <select className="border border-[#DDDDDD] rounded px-4 py-2 text-sm text-[#737373] bg-[#F9F9F9] focus:outline-none">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <button className="bg-[#23A6F0] text-white px-5 py-2 rounded text-sm font-bold hover:bg-[#1a88c7] transition-colors">
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterBar;