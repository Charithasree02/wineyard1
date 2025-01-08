import React from 'react';
import { Youtube, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Wine Yard</h3>
            <p className="text-gray-400">
              The premier social platform for wine enthusiasts and content creators.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Home</a></li>
              <li><a href="#" className="hover:text-purple-400">Explore</a></li>
              <li><a href="#" className="hover:text-purple-400">About</a></li>
              <li><a href="#" className="hover:text-purple-400">Sign Up</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Wine Yard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}