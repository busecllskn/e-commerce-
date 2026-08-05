import React from 'react';
import ShopHeader from '../components/ShopHeader';
import CategoryCards from '../components/CategoryCards';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  return (
    <div className="w-full bg-white font-sans">
      <ShopHeader />
      <CategoryCards />
      <FilterBar />
      <ProductCard />
    </div>
  );
};

export default ShopPage;