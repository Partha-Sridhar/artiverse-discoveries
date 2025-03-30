
import React from 'react';
import { Artist } from '@/types';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface FeaturedArtistProps {
  artist: Artist;
}

const FeaturedArtist: React.FC<FeaturedArtistProps> = ({ artist }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/3">
        <div className="rounded-full overflow-hidden aspect-square">
          <img 
            src={artist.imageUrl} 
            alt={artist.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="w-full md:w-2/3">
        <h3 className="font-serif text-2xl font-medium mb-2">{artist.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{artist.country}</p>
        <p className="text-sm mb-6">{artist.bio}</p>
        <Link to={`/artist/${artist.id}`}>
          <Button variant="outline">View Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArtist;
