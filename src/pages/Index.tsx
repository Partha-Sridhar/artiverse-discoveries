
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ArtworkGrid from '@/components/ArtworkGrid';
import FeaturedArtist from '@/components/FeaturedArtist';
import { Button } from '@/components/ui/button';
import { artworks, artists } from '@/data/artworks';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  // Featured artworks - latest 4
  const featuredArtworks = artworks.slice(0, 4);
  
  // Featured artist - random one
  const featuredArtist = artists[0];
  
  // Auction artworks - filter to auction only
  const auctionArtworks = artworks.filter(art => art.isAuction).slice(0, 3);

  return (
    <div>
      <Navbar />
      
      <Hero />
      
      {/* Featured Artworks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-serif text-3xl font-medium">Featured Artworks</h2>
              <p className="text-muted-foreground mt-2">Discover our curated selection of exceptional pieces</p>
            </div>
            <Link to="/discover">
              <Button variant="link" className="text-accent1">View All</Button>
            </Link>
          </div>
          
          <ArtworkGrid artworks={featuredArtworks} />
        </div>
      </section>
      
      {/* Live Auctions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gallery-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-serif text-3xl font-medium">Live Auctions</h2>
              <p className="text-muted-foreground mt-2">Bid on these exclusive artworks before they're gone</p>
            </div>
            <Link to="/auctions">
              <Button variant="link" className="text-accent1">View All Auctions</Button>
            </Link>
          </div>
          
          <ArtworkGrid artworks={auctionArtworks} />
        </div>
      </section>
      
      {/* Featured Artist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-medium">Featured Artist</h2>
            <p className="text-muted-foreground mt-2">Get to know the visionary creators behind our collections</p>
          </div>
          
          <FeaturedArtist artist={featuredArtist} />
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent1/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-medium mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">Subscribe to receive updates on new artworks, auctions, and events.</p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent1 focus:border-accent1"
            />
            <Button className="mt-2 sm:mt-0 sm:rounded-l-none">Subscribe</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
