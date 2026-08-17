import React from 'react';
import Slider from '../components/Slider';
import EditorsPick from '../components/EditorsPick';
import BestSellerProducts from '../components/BestSellerProducts';
import GreenBanner from '../components/GreenBanner';
import NeuralUniverse from '../components/NeuralUniverse';
import FeaturedPosts from '../components/FeaturedPosts';


const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <Slider />
      <EditorsPick />
      <BestSellerProducts />
      <GreenBanner />
      <NeuralUniverse />
      <FeaturedPosts />
      <section className="py-20 text-center">
        <h3 className="text-sm text-[#737373] uppercase tracking-wider mb-2">Featured Products</h3>
        <h2 className="text-2xl font-bold text-[#252B42] mb-2">BESTSELLER PRODUCTS</h2>
        <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
      </section>
    </div>
  );
};

export default HomePage;