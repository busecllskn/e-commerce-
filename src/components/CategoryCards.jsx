import React from 'react';
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import f4 from '../assets/f4.jpg';
import f5 from '../assets/f5.jpg';

const categories = [
  { id: 1, title: 'CLOTHS', items: '5 Items', img: f1 },
  { id: 2, title: 'CLOTHS', items: '5 Items', img: f2 },
  { id: 3, title: 'CLOTHS', items: '5 Items', img: f3 },
  { id: 4, title: 'CLOTHS', items: '5 Items', img: f4 },
  { id: 5, title: 'CLOTHS', items: '5 Items', img: f5 },
];

const CategoryCards = () => {
  return (
    <section className="bg-[#FAFAFA] py-6 px-6 md:px-12 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="relative group overflow-hidden cursor-pointer h-[220px] shadow-sm flex items-center justify-center"
          >
            {/* Arka Plan */}
            <img 
              src={cat.img} 
              alt={cat.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Üzerindeki Karartma */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>

            {/* İçerik (Yazılar) */}
            <div className="relative z-10 text-center text-white flex flex-col items-center justify-center">
              <h3 className="font-bold text-base tracking-wider mb-1">{cat.title}</h3>
              <p className="text-sm font-medium">{cat.items}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;