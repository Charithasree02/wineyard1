import React, { useState } from 'react';
import { Wine, Youtube, Instagram, Twitter, Facebook, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explore from './components/Explore';
import About from './components/About';
import Auth from './components/Auth';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-purple-900 text-white">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {currentSection === 'home' && <Hero />}
      {currentSection === 'explore' && <Explore />}
      {currentSection === 'about' && <About />}
      {currentSection === 'auth' && <Auth />}
      
      <Footer />
    </div>
  );
}

export default App;