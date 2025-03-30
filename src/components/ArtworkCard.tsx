
import React from 'react';
import { Link } from 'react-router-dom';
import { Artwork } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuction } from '@/contexts/AuctionContext';

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const { isAuctionEnded, getTimeRemaining } = useAuction();
  
  const timeRemaining = artwork.isAuction && artwork.auctionEndsAt 
    ? getTimeRemaining(artwork.auctionEndsAt) 
    : null;
  
  const auctionEnded = artwork.isAuction && artwork.auctionEndsAt 
    ? isAuctionEnded(artwork.auctionEndsAt) 
    : false;

  return (
    <Card className="overflow-hidden artwork-card border border-border h-full flex flex-col">
      <Link to={`/artwork/${artwork.id}`} className="overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={artwork.imageUrl} 
            alt={artwork.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {artwork.isAuction && (
            <div className="absolute top-2 right-2 bg-accent1/90 text-white text-xs px-2 py-1 rounded-full">
              {auctionEnded ? 'Auction Ended' : 'Live Auction'}
            </div>
          )}
        </div>
      </Link>
      
      <CardContent className="pt-4 flex-grow">
        <Link to={`/artwork/${artwork.id}`}>
          <h3 className="text-lg font-medium font-serif hover:text-accent1 transition-colors">{artwork.title}</h3>
        </Link>
        <Link to={`/artist/${artwork.artistId}`}>
          <p className="text-sm text-muted-foreground hover:text-accent1 transition-colors">{artwork.artist.name}</p>
        </Link>
        <p className="text-xs text-muted-foreground mt-1">{artwork.category} • {artwork.year}</p>
        
        {artwork.isAuction ? (
          <div className="mt-2">
            <p className="text-sm font-medium">Current Bid: <span className="text-accent1">${artwork.currentBid || artwork.price}</span></p>
            {timeRemaining && !auctionEnded && (
              <p className="text-xs text-muted-foreground mt-1">
                {timeRemaining.days > 0 && `${timeRemaining.days}d `}
                {timeRemaining.hours}h {timeRemaining.minutes}m remaining
              </p>
            )}
          </div>
        ) : (
          <p className="text-sm font-medium mt-2">${artwork.price}</p>
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link to={`/artwork/${artwork.id}`} className="w-full">
          <Button variant="outline" className="w-full btn-hover-effect">
            {artwork.isAuction ? 'Place Bid' : 'View Details'}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArtworkCard;
