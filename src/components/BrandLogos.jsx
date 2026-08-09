import React from 'react';
import hooli from '../assets/hooli.png';
import lyft from '../assets/lyft.png';
import robinhood from '../assets/logo.png';
import stripe from '../assets/stripe.png';
import aws from '../assets/aws.png';
import reddit from '../assets/teletabi.png';

const BrandLogos = () => {
  const clients = [
    { id: 1, name: 'Hooli', img: hooli },
    { id: 2, name: 'Lyft', img: lyft },
    { id: 3, name: 'Logo', img: robinhood },
    { id: 4, name: 'Stripe', img: stripe },
    { id: 5, name: 'AWS', img: aws },
    { id: 6, name: 'Teletabi', img: reddit },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] py-16 border-t border-b border-[#ECECEC]">
      <div className="container mx-auto max-w-7xl px-4 md:px-12 flex flex-wrap items-center justify-around gap-8">
        {clients.map((client) => (
          <div key={client.id} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <img 
              src={client.img} 
              alt={client.name} 
              className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;