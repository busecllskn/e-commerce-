import React from 'react';

import urun from '../assets/urun.jpg';
import urun2 from '../assets/urun2.jpg';
import urun3 from '../assets/urun3.jpg';
import urun4 from '../assets/urun4.jpg';
import urun5 from '../assets/urun5.jpg';
import urun6 from '../assets/urun6.jpg';
import urun7 from '../assets/urun7.jpg';
import urun8 from '../assets/urun8.jpg';

const BestSellerProducts = () => {
  const products = [
    { id: 1, title: "Graphic Design", department: "English Department", price: "$16.48", discountPrice: "$6.48", image: urun },
    { id: 2, title: "Graphic Design", department: "English Department", price: "$16.48", discountPrice: "$6.48", image: urun2 },
    { id: 3, title: "Graphic Design", department: "English Department", price: "$16.48", discountPrice: "$6.48", image: urun3 },
    { id: 4, title: "Graphic Design", department: "English Department", price: "$16.48", discountPrice: "$6.48", image: urun4 },
    { id: 5, title: "Graphic Design", department: "English Department", price: "$16.48", discountPrice: "$6.48", image: urun5 },
    { id: 6, title: "Graphic Design", department: "English Department", price: "$16.48", discountPrice: "$6.48", image: urun6 },
    { id: 7, title: "Graphic Design", department: "English Department", price: "$16.48", discountPrice: "$6.48", image: urun7 },
    { id: 8, title: "Graphic Design", department: "English Department", price: "$16.48", discountPrice: "$6.48", image: urun8 },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] py-12">
      <div className="container mx-auto max-w-7xl px-4 md:px-12">
        <h2 className="text-2xl font-bold text-[#252B42] mb-8 uppercase tracking-wider">
          Bestseller Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="bg-white flex flex-col shadow-sm rounded-md overflow-hidden group">
              <div className="w-full h-[280px] bg-gray-100 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 text-center">
                <h4 className="font-bold text-[#252B42] text-base">{item.title}</h4>
                <span className="text-sm font-bold text-[#737373]">{item.department}</span>
                <div className="flex items-center justify-center gap-2 text-sm font-bold pt-1">
                  <span className="text-[#BDBDBD] line-through">{item.price}</span>
                  <span className="text-[#23856D]">{item.discountPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellerProducts;