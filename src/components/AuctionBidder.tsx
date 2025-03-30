
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuction } from '@/contexts/AuctionContext';
import { Artwork } from '@/types';

interface AuctionBidderProps {
  artwork: Artwork;
}

const AuctionBidder: React.FC<AuctionBidderProps> = ({ artwork }) => {
  const { placeBid, isAuctionEnded, getTimeRemaining } = useAuction();
  const [bidAmount, setBidAmount] = useState<string>('');
  
  const currentBid = artwork.currentBid || artwork.price;
  const minBid = currentBid + 100;
  
  const handleBidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setBidAmount(value);
  };
  
  const handlePlaceBid = () => {
    const amount = parseInt(bidAmount);
    if (amount && amount >= minBid) {
      placeBid(artwork.id, amount);
      setBidAmount('');
    }
  };
  
  if (!artwork.isAuction || !artwork.auctionEndsAt) {
    return null;
  }
  
  const ended = isAuctionEnded(artwork.auctionEndsAt);
  const timeRemaining = getTimeRemaining(artwork.auctionEndsAt);
  
  return (
    <div className="bg-gallery-100 p-6 rounded-lg">
      <h3 className="font-serif text-xl font-medium mb-4">Auction Details</h3>
      
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Current Bid</p>
        <p className="text-2xl font-medium">${currentBid.toLocaleString()}</p>
      </div>
      
      {ended ? (
        <div className="bg-gallery-200 p-4 rounded text-center mb-4">
          <p className="font-medium">Auction Ended</p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-2">Time Remaining</p>
            <div className="grid grid-cols-4 gap-2 text-center">
              {timeRemaining && (
                <>
                  <div className="bg-white p-2 rounded">
                    <p className="text-lg font-medium">{timeRemaining.days}</p>
                    <p className="text-xs text-muted-foreground">Days</p>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <p className="text-lg font-medium">{timeRemaining.hours}</p>
                    <p className="text-xs text-muted-foreground">Hours</p>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <p className="text-lg font-medium">{timeRemaining.minutes}</p>
                    <p className="text-xs text-muted-foreground">Minutes</p>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <p className="text-lg font-medium">{timeRemaining.seconds}</p>
                    <p className="text-xs text-muted-foreground">Seconds</p>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">Your Bid (min. ${minBid})</p>
            <div className="flex">
              <div className="flex-shrink-0 bg-gallery-200 flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gallery-300">
                <span className="text-gallery-600">$</span>
              </div>
              <Input 
                type="text"
                value={bidAmount}
                onChange={handleBidChange}
                className="rounded-l-none focus-visible:ring-accent1"
                placeholder={`${minBid}`}
              />
            </div>
          </div>
          
          <Button
            className="w-full"
            onClick={handlePlaceBid}
            disabled={!bidAmount || parseInt(bidAmount) < minBid}
          >
            Place Bid
          </Button>
        </>
      )}
    </div>
  );
};

export default AuctionBidder;
