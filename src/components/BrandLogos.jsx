import React from 'react';

const BrandLogos = () => {
  const brands = ['hooli', 'lyft', 'vector', 'stripe', 'aws', 'reddit'];

  return (
    <div className="w-full bg-[#FAFAFA] py-16 border-t border-b border-[#ECECEC]">
      <div className="container mx-auto max-w-7xl px-4 md:px-12 flex flex-wrap items-center justify-around gap-8 opacity-60">
        {brands.map((brand, index) => (
          <span key={index} className="text-2xl font-extrabold tracking-widest text-[#737373] uppercase">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;