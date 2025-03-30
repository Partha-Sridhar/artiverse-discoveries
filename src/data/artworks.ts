
import { Artist, Artwork } from "@/types";

export const artists: Artist[] = [
  {
    id: "artist1",
    name: "Elena Ramirez",
    country: "Spain",
    bio: "Elena Ramirez is a contemporary Spanish artist known for her vibrant abstract compositions and exploration of cultural identity.",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "artist2",
    name: "Marcus Chen",
    country: "Singapore",
    bio: "Marcus Chen blends Eastern and Western artistic traditions in his breathtaking landscape paintings, inspired by his travels across Asia and Europe.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "artist3",
    name: "Amara Okafor",
    country: "Nigeria",
    bio: "Amara Okafor creates powerful portraits and installations that examine social issues, identity, and the African diaspora experience.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
  },
  {
    id: "artist4",
    name: "Julian Frost",
    country: "Canada",
    bio: "Julian Frost's minimalist sculptures and installations explore the relationship between space, light, and form using industrial materials.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "artist5",
    name: "Sofia Nakamura",
    country: "Japan",
    bio: "Sofia Nakamura's mixed media works combine traditional Japanese techniques with contemporary themes of technology and environmental change.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  }
];

const getArtist = (id: string): Artist => {
  return artists.find(artist => artist.id === id) || artists[0];
};

export const artworks: Artwork[] = [
  {
    id: "art1",
    title: "Echoes of Serenity",
    artistId: "artist1",
    artist: getArtist("artist1"),
    description: "A mesmerizing abstract expression of tranquility through fluid blue and purple tones that evoke a sense of oceanic calm.",
    category: "Painting",
    year: 2022,
    dimensions: "100 x 120 cm",
    medium: "Oil on canvas",
    imageUrl: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?q=80&w=2065&auto=format&fit=crop",
    price: 4800,
    currentBid: 5100,
    auctionEndsAt: "2023-12-31T23:59:59Z",
    isAuction: true,
    viewCount: 245
  },
  {
    id: "art2",
    title: "Urban Fragments",
    artistId: "artist2",
    artist: getArtist("artist2"),
    description: "A dynamic collage capturing the essence of metropolitan life through fragmented architectural elements and vibrant color fields.",
    category: "Mixed Media",
    year: 2021,
    dimensions: "80 x 100 cm",
    medium: "Mixed media on panel",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2145&auto=format&fit=crop",
    price: 3200,
    isAuction: false,
    viewCount: 187
  },
  {
    id: "art3",
    title: "Ancestral Whispers",
    artistId: "artist3",
    artist: getArtist("artist3"),
    description: "A powerful portrait series exploring cultural heritage and identity through masterful use of light and shadow.",
    category: "Photography",
    year: 2023,
    dimensions: "60 x 90 cm",
    medium: "Digital photography, archival print",
    imageUrl: "https://images.unsplash.com/photo-1578926288207-32356a48ac12?q=80&w=1936&auto=format&fit=crop",
    price: 2300,
    currentBid: 2800,
    auctionEndsAt: "2024-01-15T23:59:59Z",
    isAuction: true,
    viewCount: 324
  },
  {
    id: "art4",
    title: "Geometric Harmony",
    artistId: "artist4",
    artist: getArtist("artist4"),
    description: "A minimalist sculpture exploring the perfect balance between geometric forms, creating a harmonious interplay of light and shadow.",
    category: "Sculpture",
    year: 2020,
    dimensions: "45 x 30 x 30 cm",
    medium: "Polished bronze",
    imageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1980&auto=format&fit=crop",
    price: 5900,
    isAuction: false,
    viewCount: 156
  },
  {
    id: "art5",
    title: "Digital Dreamscape",
    artistId: "artist5",
    artist: getArtist("artist5"),
    description: "An immersive digital artwork blending traditional Japanese motifs with futuristic elements, creating a mesmerizing visual experience.",
    category: "Digital Art",
    year: 2023,
    dimensions: "Variable dimensions",
    medium: "Digital, NFT",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    price: 1800,
    currentBid: 2200,
    auctionEndsAt: "2024-01-10T23:59:59Z",
    isAuction: true,
    viewCount: 412
  },
  {
    id: "art6",
    title: "Fleeting Moment",
    artistId: "artist1",
    artist: getArtist("artist1"),
    description: "A delicate watercolor capturing the ephemeral beauty of cherry blossoms against a misty mountain backdrop.",
    category: "Painting",
    year: 2022,
    dimensions: "50 x 70 cm",
    medium: "Watercolor on paper",
    imageUrl: "https://images.unsplash.com/photo-1591464131895-4048487872dd?q=80&w=1972&auto=format&fit=crop",
    price: 2100,
    isAuction: false,
    viewCount: 198
  },
  {
    id: "art7",
    title: "Industrial Evolution",
    artistId: "artist4",
    artist: getArtist("artist4"),
    description: "A powerful commentary on mankind's relationship with industry, rendered in bold charcoal strokes with hints of metallic paint.",
    category: "Drawing",
    year: 2021,
    dimensions: "70 x 100 cm",
    medium: "Charcoal and metallic paint on paper",
    imageUrl: "https://images.unsplash.com/photo-1513097633097-329a3eaae2d0?q=80&w=1974&auto=format&fit=crop",
    price: 1600,
    currentBid: 1850,
    auctionEndsAt: "2023-12-25T23:59:59Z",
    isAuction: true,
    viewCount: 267
  },
  {
    id: "art8",
    title: "Ethereal Waters",
    artistId: "artist5",
    artist: getArtist("artist5"),
    description: "A hypnotic exploration of water's movement and light, creating an almost meditative visual experience.",
    category: "Video Art",
    year: 2023,
    dimensions: "Variable dimensions",
    medium: "4K video loop, 5 minutes",
    imageUrl: "https://images.unsplash.com/photo-1551913902-c92207136625?q=80&w=2069&auto=format&fit=crop",
    price: 3400,
    isAuction: false,
    viewCount: 189
  }
];

export const categories = ["All", "Painting", "Sculpture", "Photography", "Digital Art", "Mixed Media", "Drawing", "Video Art"];
