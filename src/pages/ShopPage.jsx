import React, { useState } from 'react';
import CategoryCards from '../components/CategoryCards';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import Clients from '../components/Clients';

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="w-full bg-white font-sans">
      <CategoryCards />
      <FilterBar />
      <ProductCard />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Clients />
    </div>
  );
};

export default ShopPage;