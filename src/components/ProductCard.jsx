import React from 'react';

const ProductCard = ({ image, title, department, oldPrice, newPrice }) => {
  return (
    <div className="flex flex-col bg-white group cursor-pointer">
      {/* Ürün Görseli */}
      <div className="w-full h-[300px] overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Ürün Bilgileri */}
      <div className="flex flex-col items-center text-center py-6 px-4 gap-2.5">
        <h3 className="font-bold text-[#252B42] text-base">{title}</h3>
        <span className="font-bold text-[#737373] text-sm">{department}</span>
        
        {/* Fiyatlar */}
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-[#BDBDBD] line-through">{oldPrice}</span>
          <span className="text-[#23856D]">{newPrice}</span>
        </div>

        {/* Renk Paleti Noktaları */}
        <div className="flex items-center gap-1.5 mt-1">
          <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
          <span className="w-4 h-4 rounded-full bg-[#2DC071]"></span>
          <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
          <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;