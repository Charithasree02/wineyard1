import React from 'react';

export default function WineYardLogo({ className = "h-8" }: { className?: string }) {
  return (
    <img 
      src="https://i.ibb.co/D773g5n/wine-yard-logo.png" 
      alt="Wine Yard Logo"
      className={`${className} object-contain filter brightness-150`}
      style={{ mixBlendMode: 'lighten' }}
    />
  );
}