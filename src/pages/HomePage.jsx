import React from 'react';
import Slider from '../components/Slider';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Slider />
      
      <section className="py-20 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Featured Products</h2>
          <p className="text-gray-600 mt-4">Problems trying to resolve the conflict between...</p>
      </section>
    </div>
  );
};

export default HomePage;