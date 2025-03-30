
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gallery-100 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-medium mb-4">Artiverse</h3>
            <p className="text-sm text-gallery-600 max-w-xs">
              Discover and collect exceptional artwork from emerging and established artists around the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-base font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/discover" className="text-gallery-600 hover:text-accent1 transition-colors">Browse Artworks</Link></li>
              <li><Link to="/auctions" className="text-gallery-600 hover:text-accent1 transition-colors">Live Auctions</Link></li>
              <li><Link to="/artists" className="text-gallery-600 hover:text-accent1 transition-colors">Featured Artists</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-base font-medium mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gallery-600 hover:text-accent1 transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gallery-600 hover:text-accent1 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gallery-600 hover:text-accent1 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-base font-medium mb-4">Subscribe</h4>
            <p className="text-sm text-gallery-600 mb-4">
              Stay updated with new artworks and upcoming auctions.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-sm border border-gallery-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent1 focus:border-accent1 w-full"
              />
              <button className="bg-accent1 text-white px-4 py-2 text-sm rounded-r-md hover:bg-accent1/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gallery-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gallery-500">© 2023 Artiverse. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gallery-500 hover:text-accent1 transition-colors">Terms</a>
            <a href="#" className="text-gallery-500 hover:text-accent1 transition-colors">Privacy</a>
            <a href="#" className="text-gallery-500 hover:text-accent1 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
