
import { createContext, useContext, useState, ReactNode } from 'react';
import { Artwork, CartItem } from '@/types';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (artwork: Artwork) => void;
  removeFromCart: (artworkId: string) => void;
  updateQuantity: (artworkId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (artwork: Artwork) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.artworkId === artwork.id);
      
      if (existingItem) {
        toast({
          title: "Already in cart",
          description: `${artwork.title} is already in your cart.`,
        });
        return prevItems;
      }
      
      toast({
        title: "Added to cart",
        description: `${artwork.title} has been added to your cart.`,
      });
      
      return [...prevItems, { artworkId: artwork.id, artwork, quantity: 1 }];
    });
  };

  const removeFromCart = (artworkId: string) => {
    setCartItems((prevItems) => {
      const item = prevItems.find(item => item.artworkId === artworkId);
      if (item) {
        toast({
          title: "Removed from cart",
          description: `${item.artwork.title} has been removed from your cart.`,
        });
      }
      return prevItems.filter(item => item.artworkId !== artworkId);
    });
  };

  const updateQuantity = (artworkId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(artworkId);
      return;
    }
    
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.artworkId === artworkId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.artwork.isAuction 
        ? (item.artwork.currentBid || item.artwork.price) * item.quantity
        : item.artwork.price * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
