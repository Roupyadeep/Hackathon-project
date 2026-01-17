import React from 'react';

const HostelPulseLogo = ({ size = 48, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>

      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#logoGradient)"
        stroke="#ffffff"
        strokeWidth="2"
      />

      {/* Hostel bed icon */}
      <g transform="translate(25, 25)">
        {/* Bed frame */}
        <rect x="5" y="15" width="20" height="12" rx="2" fill="#ffffff" opacity="0.9" />
        {/* Mattress */}
        <rect x="6" y="16" width="18" height="8" rx="1" fill="#ffffff" />
        {/* Pillow */}
        <ellipse cx="12" cy="18" rx="3" ry="2" fill="#ffffff" opacity="0.8" />
        <ellipse cx="18" cy="18" rx="3" ry="2" fill="#ffffff" opacity="0.8" />
        {/* Blanket */}
        <path d="M7 20 Q15 18 23 20 L23 24 L7 24 Z" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Pulse/heartbeat line */}
      <g transform="translate(55, 35)">
        <path
          d="M0 10 L5 10 L8 4 L11 16 L14 10 L20 10"
          stroke="url(#pulseGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Pulse dots */}
        <circle cx="8" cy="4" r="1.5" fill="url(#pulseGradient)" />
        <circle cx="11" cy="16" r="1.5" fill="url(#pulseGradient)" />
      </g>

      {/* HostelPulse text arc */}
      <defs>
        <path id="textcircle" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
      </defs>
      <text fontSize="8" fill="#ffffff" fontWeight="bold" fontFamily="Arial, sans-serif">
        <textPath href="#textcircle" startOffset="25%">
          HOSTELPULSE
        </textPath>
      </text>

      {/* Wellness sparkle effects */}
      <g opacity="0.6">
        <circle cx="15" cy="20" r="1" fill="#FFD700" />
        <circle cx="80" cy="15" r="1.5" fill="#FFD700" />
        <circle cx="85" cy="75" r="1" fill="#FFD700" />
        <circle cx="10" cy="80" r="1.2" fill="#FFD700" />
      </g>
    </svg>
  );
};

export default HostelPulseLogo;