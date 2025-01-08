import React from 'react';

export default function About() {
  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            The Wine Yard Story
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Born from a passion for wine and community, Wine Yard is where enthusiasts become creators,
            and wine lovers find their tribe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-3 text-purple-400">Our Vision</h3>
              <p className="text-gray-300">
                To create a vibrant ecosystem where wine culture thrives through authentic connections,
                expert knowledge sharing, and innovative content creation.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-3 text-purple-400">Our Mission</h3>
              <p className="text-gray-300">
                Empowering wine enthusiasts to share their passion, build their brand, and create
                meaningful connections while exploring the world of wine.
              </p>
            </div>
          </div>

          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80"
              alt="Wine cellar"
              className="rounded-lg shadow-xl transition-transform group-hover:scale-105 duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3 text-center">Community First</h3>
            <p className="text-gray-300 text-center">
              A platform built on authentic connections and shared experiences in the world of wine.
            </p>
          </div>

          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3 text-center">Creator Economy</h3>
            <p className="text-gray-300 text-center">
              Enabling wine enthusiasts to monetize their expertise and build their personal brand.
            </p>
          </div>

          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3 text-center">Innovation</h3>
            <p className="text-gray-300 text-center">
              Leveraging technology to create unique wine experiences and connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}