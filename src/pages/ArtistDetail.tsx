
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtworkGrid from '@/components/ArtworkGrid';
import { Button } from '@/components/ui/button';
import { artists, artworks } from '@/data/artworks';

const ArtistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artist = artists.find(a => a.id === id);
  
  // Find all artworks by this artist
  const artistArtworks = artworks.filter(artwork => artwork.artistId === id);
  
  if (!artist) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-serif text-3xl font-medium mb-4">Artist Not Found</h1>
          <p className="text-muted-foreground mb-8">The artist you're looking for doesn't exist or has been removed.</p>
          <Link to="/artists">
            <Button>Browse All Artists</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-4">
          <Link to="/artists" className="text-muted-foreground hover:text-accent1 transition-colors">
            ← Back to Artists
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={artist.imageUrl} 
                alt={artist.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="font-serif text-3xl font-medium mb-2">{artist.name}</h1>
            <p className="text-muted-foreground mb-6">{artist.country}</p>
            
            <div className="mb-8">
              <h2 className="font-serif text-xl font-medium mb-3">Biography</h2>
              <p className="text-muted-foreground">{artist.bio}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Artworks</p>
                <p className="font-medium">{artistArtworks.length}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Country</p>
                <p className="font-medium">{artist.country}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="font-serif text-2xl font-medium mb-6">Artworks by {artist.name}</h2>
          
          {artistArtworks.length > 0 ? (
            <ArtworkGrid artworks={artistArtworks} />
          ) : (
            <div className="text-center py-12 bg-gallery-100 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No artworks available</h3>
              <p className="text-muted-foreground">Check back soon for new additions</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArtistDetail;
