
export interface Artist {
  id: string;
  name: string;
  country: string;
  bio: string;
  imageUrl: string;
}

export interface Artwork {
  id: string;
  title: string;
  artistId: string;
  artist: Artist;
  description: string;
  category: string;
  year: number;
  dimensions: string;
  medium: string;
  imageUrl: string;
  price: number;
  currentBid?: number;
  auctionEndsAt?: string;
  isAuction: boolean;
  viewCount: number;
}

export interface CartItem {
  artworkId: string;
  artwork: Artwork;
  quantity: number;
}
