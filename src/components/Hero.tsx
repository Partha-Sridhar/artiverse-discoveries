
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1536924430914-91f9e2041b83?q=80&w=2066&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)',
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 lg:py-48 text-white">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6 animate-fade-in">
          Discover Extraordinary Art from Around the World
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Explore curated collections, bid in exclusive auctions, and connect with visionary artists shaping contemporary culture.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Link to="/discover">
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
              Explore Collection
            </Button>
          </Link>
          <Link to="/auctions">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Current Auctions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
