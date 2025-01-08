import React from 'react';

const features = [
  {
    title: "Creator's Hub",
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80",
    description: "Start your journey as a wine content creator and build your audience."
  },
  {
    title: "Wine Reviews",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80",
    description: "Share your tasting experiences and discover new favorites."
  },
  {
    title: "Virtual Tastings",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80",
    description: "Host and join live wine tasting sessions with enthusiasts worldwide."
  }
];

export default function Explore() {
  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Explore Wine Yard
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/30 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}