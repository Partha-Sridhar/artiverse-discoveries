
import React from 'react';
import { Artwork } from '@/types';
import ArtworkCard from './ArtworkCard';

interface ArtworkGridProps {
  artworks: Artwork[];
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks }) => {
  return (
    <div className="artwork-grid">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
};

export default ArtworkGrid;
