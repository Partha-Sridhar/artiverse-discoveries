
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useAuction } from '@/contexts/AuctionContext';
import { artworks } from '@/data/artworks';
import { Button } from '@/components/ui/button';
import { Heart, Eye } from 'lucide-react';
import AuctionBidder from '@/components/AuctionBidder';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = artworks.find(art => art.id === id);
  const { addToCart } = useCart();
  
  if (!artwork) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-serif text-3xl font-medium mb-4">Artwork Not Found</h1>
          <p className="text-muted-foreground mb-8">The artwork you're looking for doesn't exist or has been removed.</p>
          <Link to="/discover">
            <Button>Browse All Artworks</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(artwork);
  };

  return (
    <div>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-4">
          <Link to="/discover" className="text-muted-foreground hover:text-accent1 transition-colors">
            ← Back to Discover
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artwork Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src={artwork.imageUrl} 
              alt={artwork.title}
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Artwork Details */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-serif text-3xl font-medium">{artwork.title}</h1>
                <Link to={`/artist/${artwork.artistId}`}>
                  <p className="text-lg text-muted-foreground hover:text-accent1 transition-colors">{artwork.artist.name}</p>
                </Link>
              </div>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center mt-2 text-sm text-muted-foreground">
              <p>{artwork.category}</p>
              <span className="mx-2">•</span>
              <p>{artwork.year}</p>
              <span className="mx-2">•</span>
              <p>{artwork.dimensions}</p>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <p>{artwork.viewCount}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-serif text-xl font-medium mb-2">About this work</h3>
              <p className="text-muted-foreground">{artwork.description}</p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Medium</p>
                <p>{artwork.medium}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Dimensions</p>
                <p>{artwork.dimensions}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p>{artwork.year}</p>
              </div>
            </div>
            
            <div className="mt-8">
              {artwork.isAuction ? (
                <AuctionBidder artwork={artwork} />
              ) : (
                <div>
                  <div className="flex items-end mb-6">
                    <p className="text-sm text-muted-foreground mr-2">Price</p>
                    <p className="text-3xl font-medium">${artwork.price.toLocaleString()}</p>
                  </div>
                  
                  <Button className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArtworkDetail;
