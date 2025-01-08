import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import WineYardLogo from './WineYardLogo';

interface NavbarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export default function Navbar({ currentSection, setCurrentSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'explore', label: 'Explore' },
    { id: 'about', label: 'About' },
    { id: 'auth', label: 'Login / Sign Up' },
  ];

  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <WineYardLogo className="h-10" />
            <span className="ml-2 text-xl font-bold">Wine Yard</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentSection === item.id
                      ? 'bg-purple-700 text-white'
                      : 'text-gray-300 hover:bg-purple-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  currentSection === item.id
                    ? 'bg-purple-700 text-white'
                    : 'text-gray-300 hover:bg-purple-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}