import React from 'react';
import ShopCard from './ShopCard';
import CategoryCards from './CategoryCards';
import FilterBar from './FilterBar';
import Pagination from './Pagination';
import Clients from './Clients';

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

const shopProducts = [
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

const ShopProductList = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* Kategori Kartları */}
      <div className="bg-[#FAFAFA] pb-10 px-6 md:px-12 pt-6">
        <div className="container mx-auto max-w-7xl">
          <CategoryCards />
        </div>
      </div>

      {/* Filtre Barı */}
      <div className="py-6 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FilterBar />
        </div>
      </div>

      {/* 12 Ürün Grid Alanı */}
      <div className="pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {shopProducts.map((product) => (
              <ShopCard 
                key={product.id}
                image={product.img}
                title={product.title}
                department={product.department}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sayfalama */}
      <div className="pb-16 px-6 md:px-12 flex justify-center">
        <div className="container mx-auto max-w-7xl flex justify-center">
          <Pagination />
        </div>
      </div>

      {/* Marka Logoları */}
      <div className="bg-[#FAFAFA] py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default ShopProductList;