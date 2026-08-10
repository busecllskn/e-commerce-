import React from 'react';
import { ChevronRight } from 'lucide-react';
import descImage from '../assets/alan1.jpg';
const ProductDescription = () => {
  return (
    <div className="w-full bg-white py-8 border-t border-[#ECECEC]">
      <div className="container mx-auto max-w-7xl px-4 md:px-12">
        
        {/* Sekme Başlıkları */}
        <div className="flex justify-center items-center gap-8 text-sm font-semibold text-[#737373] border-b border-[#ECECEC] pb-4 mb-10">
          <button className="hover:text-[#252B42] transition-colors">Description</button>
          <button className="hover:text-[#252B42] transition-colors">Additional Information</button>
          <button className="text-[#737373] hover:text-[#252B42] transition-colors">Reviews (0)</button>
        </div>

        {/* Sekme İçeriği (Görseldeki Üç Sütunlu Yapı) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Sol: Asset'ten gelen büyük görsel */}
          <div className="rounded-lg overflow-hidden shadow-sm bg-gray-100 h-[350px]">
            <img 
              src={descImage} 
              alt="Product Description" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Orta: Metin Blokları */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[#252B42]">the quick fox jumps over</h3>
            <p className="text-sm text-[#737373] leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className="text-sm text-[#737373] leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>
          </div>

          {/* Sağ: Ok İşaretli Liste Alanları */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold text-[#252B42]">the quick fox jumps over</h3>
              {['the quick fox jumps over the lazy dog', 'the quick fox jumps over the lazy dog', 'the quick fox jumps over the lazy dog', 'the quick fox jumps over the lazy dog'].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#737373] font-semibold">
                  <ChevronRight size={16} className="text-[#737373]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold text-[#252B42]">the quick fox jumps over</h3>
              {['the quick fox jumps over the lazy dog', 'the quick fox jumps over the lazy dog', 'the quick fox jumps over the lazy dog'].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#737373] font-semibold">
                  <ChevronRight size={16} className="text-[#737373]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDescription;