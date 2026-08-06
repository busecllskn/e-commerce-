import React, { useState } from 'react';
import ShopProductList from '../components/ShopProductList';

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="w-full bg-white font-sans">
      <ShopProductList currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default ShopPage;