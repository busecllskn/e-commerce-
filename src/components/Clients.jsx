import React from 'react';
import hooli from '../assets/hooli.png';
import lyft from '../assets/lyft.png';
import robinhood from '../assets/logo.png';
import stripe from '../assets/stripe.png';
import aws from '../assets/aws.png';
import reddit from '../assets/teletabi.png';

const clients = [
  { id: 1, name: 'Hooli', img: hooli },
  { id: 2, name: 'Lyft', img: lyft },
  { id: 3, name: 'Logo', img: robinhood },
  { id: 4, name: 'Stripe', img: stripe },
  { id: 5, name: 'AWS', img: aws },
  { id: 6, name: 'Teletabi', img: reddit },
];

const Clients = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 px-6 md:px-12 w-full font-sans">
      <div className="container mx-auto flex flex-wrap items-center justify-around gap-8 md:gap-12">
        {clients.map((client) => (
          <div key={client.id} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <img 
              src={client.img} 
              alt={client.name} 
              className="h-10 md:h-12 w-auto object-contain grayscale"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;