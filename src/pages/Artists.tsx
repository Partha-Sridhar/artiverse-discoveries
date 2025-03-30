
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { artists } from '@/data/artworks';
import { Card, CardContent } from '@/components/ui/card';

const Artists = () => {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-medium mb-4">Featured Artists</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the visionary creators behind our collections. Each artist brings a unique perspective and creative approach to their work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <Link to={`/artist/${artist.id}`} key={artist.id}>
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow artwork-card">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artist.imageUrl} 
                    alt={artist.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="font-serif text-xl font-medium mb-1">{artist.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{artist.country}</p>
                  <p className="text-sm line-clamp-3">{artist.bio}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Artists;
