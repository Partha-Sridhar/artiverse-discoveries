
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtworkGrid from '@/components/ArtworkGrid';
import { artworks } from '@/data/artworks';

const Auctions = () => {
  // Filter to auction items only
  const auctionArtworks = artworks.filter(art => art.isAuction);
  
  // Separate active and ended auctions
  const now = new Date();
  const activeAuctions = auctionArtworks.filter(art => 
    art.auctionEndsAt && new Date(art.auctionEndsAt) > now
  );
  
  const endedAuctions = auctionArtworks.filter(art => 
    art.auctionEndsAt && new Date(art.auctionEndsAt) <= now
  );

  return (
    <div>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-medium mb-4">Live Auctions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bid on extraordinary artworks from emerging and established artists. Our curated auctions feature exclusive pieces that you won't find anywhere else.
          </p>
        </div>
        
        {/* Active Auctions */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-medium mb-6">Active Auctions</h2>
          {activeAuctions.length > 0 ? (
            <ArtworkGrid artworks={activeAuctions} />
          ) : (
            <div className="text-center py-12 bg-gallery-100 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No active auctions</h3>
              <p className="text-muted-foreground">Check back soon for new auctions</p>
            </div>
          )}
        </div>
        
        {/* Ended Auctions */}
        {endedAuctions.length > 0 && (
          <div>
            <h2 className="font-serif text-2xl font-medium mb-6">Recently Ended</h2>
            <ArtworkGrid artworks={endedAuctions} />
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Auctions;
