import React from 'react';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';
import p10 from '../assets/p10.jpg';
import p11 from '../assets/p11.jpg';
import p12 from '../assets/p12.jpg';

const products = [
  { id: 1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p1 },
  { id: 2, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p2 },
  { id: 3, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p3 },
  { id: 4, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p4 },
  { id: 5, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p5 },
  { id: 6, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p6 },
  { id: 7, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p7 },
  { id: 8, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p8 },
  { id: 9, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p9 },
  { id: 10, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p10 },
  { id: 11, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p11 },
  { id: 12, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", img: p12 },
];

const ProductCard = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-12 w-full font-sans">
      <div className="container mx-auto">
        
        {/* Ürün Grid Alanı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center bg-white group cursor-pointer">
              
              {/* Ürün Görseli */}
              <div className="w-full h-[300px] bg-gray-100 overflow-hidden mb-4">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Ürün Bilgileri */}
              <h3 className="font-bold text-[#252B42] text-base mb-1">{product.title}</h3>
              <p className="font-bold text-[#737373] text-sm mb-2">{product.department}</p>
              
              {/* Fiyatlar */}
              <div className="flex items-center gap-2 text-sm font-bold mb-3">
                <span className="text-[#BDBDBD] line-through">{product.oldPrice}</span>
                <span className="text-[#23856D]">{product.newPrice}</span>
              </div>

              {/* Renk Seçenekleri */}
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#23A6F0] inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-[#23856D] inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-[#E77C40] inline-block"></span>
                <span className="w-4 h-4 rounded-full bg-[#252B42] inline-block"></span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;