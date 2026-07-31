import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sliderImage from '../assets/carousel-desktop.png';

const Slider = () => {
  const slides = [
    {
      season: "SUMMER 2020",
      title: "NEW COLLECTION",
      description: "We know how large objects will act, but things on a small scale.",
      image: sliderImage
    }
  ];

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ clickable: true }}
        className="w-full h-[550px] md:h-[650px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* İçerik Alanı*/}
              <div className="container mx-auto px-6 md:px-12 lg:px-24 text-white flex flex-col items-start gap-6 max-w-7xl">
                <span className="font-bold text-sm tracking-widest">{slide.season}</span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-wide">{slide.title}</h1>
                <p className="text-lg md:text-xl max-w-lg font-normal text-gray-100">
                  {slide.description}
                </p>
                <button className="bg-[#2DC071] text-white font-bold px-8 py-4 rounded text-lg hover:bg-opacity-90 transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Özel Sağ / Sol Ok Butonları */}
      <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white p-2 rounded-full cursor-pointer hover:bg-black/20 transition-colors">
        <ChevronLeft size={48} />
      </button>
      <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white p-2 rounded-full cursor-pointer hover:bg-black/20 transition-colors">
        <ChevronRight size={48} />
      </button>
    </div>
  );
};

export default Slider;