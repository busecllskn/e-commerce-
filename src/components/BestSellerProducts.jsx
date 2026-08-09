import React from 'react';
import ProductCard from './ProductCard';
import model1 from '../assets/model1.png';
import model2 from '../assets/model2.png';
import model3 from '../assets/model3.png';
import model4 from '../assets/model4.png';
import model5 from '../assets/model5.png';
import model6 from '../assets/model6.png';
import model7 from '../assets/model7.png';
import model8 from '../assets/model8.png';

const BestSellerProducts = () => {
  const products = [
    {
      id: 1,
      image: model1,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
    {
      id: 2,
      image: model2,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
    {
      id: 3,
      image: model3,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
    {
      id: 4,
      image: model4,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
    {
      id: 5,
      image: model5,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
    {
      id: 6,
      image: model6,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
    {
      id: 7,
      image: model7,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
    {
      id: 8,
      image: model8,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48"
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white">
      <div className="flex flex-col items-center text-center mb-16">
        <h3 className="text-[#737373] text-lg font-normal mb-2">Featured Products</h3>
        <h2 className="text-2xl font-bold text-[#252B42] tracking-wide mb-2">BESTSELLER PRODUCTS</h2>
        <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 max-w-7xl">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            image={product.image}
            title={product.title}
            department={product.department}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellerProducts;