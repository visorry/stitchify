import React from 'react';

const LogoComponent = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80" className="w-full h-full">
      <defs>
        <radialGradient id="brand-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#DB2777" />
        </radialGradient>
        
        <linearGradient id="needle-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#C0C0C0" />
        </linearGradient>
        
        <linearGradient id="thread-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="50%" stopColor="#DB2777" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
        
        {/* Shadow for depth */}
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="3" dy="3" stdDeviation="5" floodColor="rgba(0,0,0,0.2)" />
        </filter>
      </defs>

      <g transform="translate(30, 10)" filter="url(#shadow)">
        {/* Outer Hoop */}
        <circle 
          cx={30} 
          cy={30} 
          r={25} 
          fill="none" 
          stroke="url(#brand-gradient)" 
          strokeWidth={4}
        />
        
        {/* Inner Hoop with Thread Pattern */}
        <circle 
          cx={30} 
          cy={30} 
          r={22} 
          fill="none" 
          stroke="url(#thread-gradient)" 
          strokeWidth={1} 
          strokeDasharray="2,3"
        />
        
        {/* X Shape in the middle using the same gradient */}
        <g transform="translate(30, 30)">
          <line 
            x1="-15" 
            y1="-15" 
            x2="15" 
            y2="15" 
            stroke="url(#brand-gradient)" 
            strokeWidth={3} 
          />
          <line 
            x1="-15" 
            y1="15" 
            x2="15" 
            y2="-15" 
            stroke="url(#brand-gradient)" 
            strokeWidth={3} 
          />
        </g>
        
        {/* Scissors and Needle in Cross */}
        <g transform="translate(30, 30)">
          {/* Scissors */}
          <g transform="rotate(45)">
            <path
              d="M-10,0 L10,0 M0,-10 L0,10"
              stroke="#C0C0C0"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="-10" cy="0" r="2" fill="url(#needle-gradient)" />
            <circle cx="10" cy="0" r="2" fill="url(#needle-gradient)" />
          </g>
          
          {/* Needle */}
          <rect 
            x={-15} 
            y={-1} 
            width={30} 
            height={2} 
            rx={1} 
            fill="url(#needle-gradient)"
          />
          <path 
            d="M15,-1 L20,0 L15,1 Z" 
            fill="url(#needle-gradient)"
          />
        </g>
      </g>
    </svg>
  );
};

export default LogoComponent;
