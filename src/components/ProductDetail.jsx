import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

import productImg1 from '../assets/product.jpg';
import productImg2 from '../assets/product2.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    productImg1,
    productImg2
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white py-8 px-4 md:px-12 w-full font-sans">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Sol Taraf: Görsel Galerisi ve Slider */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-[400px] md:h-[450px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src={images[currentImageIndex]} 
                alt="Product" 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={prevImage} 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/25 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-black/25 transition-colors"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="flex gap-4">
              {images.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? 'border-[#23A6F0]' : 'border-transparent'}`}
                >
                  <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Sağ Taraf: Ürün Detayları ve Butonlar */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium text-[#252B42]">Floating Phone</h1>

            <div className="flex items-center gap-2">
              <div className="flex text-[#F3CD03]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
                <Star size={18} className="text-[#F3CD03]" />
              </div>
              <span className="text-sm font-bold text-[#737373]">10 Reviews</span>
            </div>

            <div className="text-2xl font-bold text-[#252B42]">$1,139.33</div>
            <div className="text-sm font-bold text-[#737373]">
              Availability : <span className="text-[#23A6F0]">In Stock</span>
            </div>

            <p className="text-sm text-[#828282] leading-relaxed border-b border-[#BDBDBD] pb-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>

            <div className="flex items-center gap-2 py-2">
              <span className="w-6 h-6 rounded-full bg-[#23A6F0] inline-block cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-[#2DC071] inline-block cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-[#E77C40] inline-block cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-[#252B42] inline-block cursor-pointer"></span>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button className="bg-[#23A6F0] text-white px-5 py-3 rounded-md font-bold text-sm hover:bg-blue-600 transition-colors">
                Select Options
              </button>
              <button className="p-3 border border-[#E8E8E8] rounded-full bg-white text-[#252B42] hover:bg-gray-50 transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-3 border border-[#E8E8E8] rounded-full bg-white text-[#252B42] hover:bg-gray-50 transition-colors">
                <ShoppingCart size={20} />
              </button>
              <button className="p-3 border border-[#E8E8E8] rounded-full bg-white text-[#252B42] hover:bg-gray-50 transition-colors">
                <Eye size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;