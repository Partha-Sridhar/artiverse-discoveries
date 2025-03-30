
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Artwork } from '@/types';
import { toast } from '@/hooks/use-toast';
import { artworks as initialArtworks } from '@/data/artworks';

interface AuctionContextType {
  artworks: Artwork[];
  placeBid: (artworkId: string, amount: number) => void;
  getTimeRemaining: (endTimeStr: string) => { days: number; hours: number; minutes: number; seconds: number } | null;
  isAuctionEnded: (endTimeStr: string) => boolean;
}

const AuctionContext = createContext<AuctionContextType | undefined>(undefined);

export const AuctionProvider = ({ children }: { children: ReactNode }) => {
  const [artworks, setArtworks] = useState<Artwork[]>(initialArtworks);

  const placeBid = (artworkId: string, amount: number) => {
    setArtworks(prevArtworks => {
      return prevArtworks.map(artwork => {
        if (artwork.id === artworkId) {
          const currentHighestBid = artwork.currentBid || artwork.price;
          
          if (amount <= currentHighestBid) {
            toast({
              title: "Bid too low",
              description: `Your bid must be higher than the current bid of $${currentHighestBid}.`,
              variant: "destructive",
            });
            return artwork;
          }
          
          toast({
            title: "Bid placed!",
            description: `Your bid of $${amount} has been placed successfully.`,
          });
          
          return { ...artwork, currentBid: amount };
        }
        return artwork;
      });
    });
  };

  const getTimeRemaining = (endTimeStr: string) => {
    const endTime = new Date(endTimeStr).getTime();
    const now = new Date().getTime();
    const distance = endTime - now;
    
    if (distance < 0) {
      return null;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  };

  const isAuctionEnded = (endTimeStr: string) => {
    return getTimeRemaining(endTimeStr) === null;
  };

  const value = {
    artworks,
    placeBid,
    getTimeRemaining,
    isAuctionEnded
  };

  return <AuctionContext.Provider value={value}>{children}</AuctionContext.Provider>;
};

export const useAuction = () => {
  const context = useContext(AuctionContext);
  if (context === undefined) {
    throw new Error('useAuction must be used within an AuctionProvider');
  }
  return context;
};
