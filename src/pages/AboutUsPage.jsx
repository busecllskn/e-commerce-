import React from 'react';
import AboutUsSection from '../components/AboutUsSection';
import AboutStats from '../components/AboutStats';

const AboutUsPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Üst Kısım (About Us / Hero) */}
      <AboutUsSection />

      {/* İstatistikler Bölümü */}
      <AboutStats />
    </div>
  );
};

export default AboutUsPage;