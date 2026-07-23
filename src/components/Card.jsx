import React from 'react';

const Card = ({ title, description, children }) => {
  return (
    <div className="group relative w-full p-[1px] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
      {/* Animated glowing border gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-500 transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
      
      {/* Inner glass card */}
      <div className="relative h-full w-full bg-[#060b17]/90 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-start z-10 transition-all duration-500 group-hover:bg-[#0a1224]/90 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] inset-shadow">
        
        {/* Glow behind text on hover */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none"></div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors drop-shadow-md z-20">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors z-20">
          {description}
        </p>
        
        <div className="z-20 mt-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
