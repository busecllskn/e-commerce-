import React from 'react';
import { teamMembers } from '../data/teamData';

const TeamSection = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252B42] tracking-tight mb-3">
          Meet Our Team
        </h2>
        <p className="text-gray-500 max-w-md mx-auto text-xs sm:text-sm mb-16 leading-relaxed">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white flex flex-col items-center text-center group"
            >
              <div className="w-full h-64 sm:h-72 overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-base font-bold text-[#252B42] mb-1">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-500">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TeamSection;