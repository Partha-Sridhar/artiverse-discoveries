
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuctionProvider } from "@/contexts/AuctionContext";

import Index from "./pages/Index";
import Discover from "./pages/Discover";
import ArtworkDetail from "./pages/ArtworkDetail";
import Auctions from "./pages/Auctions";
import Artists from "./pages/Artists";
import ArtistDetail from "./pages/ArtistDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <AuctionProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/artwork/:id" element={<ArtworkDetail />} />
              <Route path="/auctions" element={<Auctions />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artist/:id" element={<ArtistDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuctionProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
