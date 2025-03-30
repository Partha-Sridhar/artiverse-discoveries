
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-4 sm:px-6 md:px-8 border-b border-border sticky top-0 bg-background z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-serif text-2xl font-bold mr-8">Artiverse</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-accent1 transition-colors">Home</Link>
            <Link to="/discover" className="text-foreground hover:text-accent1 transition-colors">Discover</Link>
            <Link to="/auctions" className="text-foreground hover:text-accent1 transition-colors">Auctions</Link>
            <Link to="/artists" className="text-foreground hover:text-accent1 transition-colors">Artists</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent1 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Button>
          </Link>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-3 px-2 space-y-3 border-t mt-4 animate-fade-in">
          <Link to="/" className="block py-2 px-3 text-foreground hover:bg-accent/10 rounded-md" onClick={toggleMenu}>Home</Link>
          <Link to="/discover" className="block py-2 px-3 text-foreground hover:bg-accent/10 rounded-md" onClick={toggleMenu}>Discover</Link>
          <Link to="/auctions" className="block py-2 px-3 text-foreground hover:bg-accent/10 rounded-md" onClick={toggleMenu}>Auctions</Link>
          <Link to="/artists" className="block py-2 px-3 text-foreground hover:bg-accent/10 rounded-md" onClick={toggleMenu}>Artists</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
