import React from 'react';
import WineYardLogo from './WineYardLogo';

export default function Hero() {
  return (
    <div className="pt-16">
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80"
            alt="Wine background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <WineYardLogo className="h-32 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Share Your Wine Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join the world's first social platform dedicated to wine enthusiasts. Create, share, and monetize your wine experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold text-lg transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 bg-black/50 hover:bg-black/70 rounded-full font-semibold text-lg border border-purple-500 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}