
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal 
  } = useCart();

  return (
    <div>
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-3xl font-medium mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-gallery-100 rounded-lg">
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Add some beautiful artworks to your cart.</p>
            <Link to="/discover">
              <Button>Browse Artworks</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted py-4 px-6 border-b hidden md:grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-7">
                    <p className="font-medium">Product</p>
                  </div>
                  <div className="md:col-span-2 text-center">
                    <p className="font-medium">Quantity</p>
                  </div>
                  <div className="md:col-span-2 text-center">
                    <p className="font-medium">Price</p>
                  </div>
                  <div className="md:col-span-1"></div>
                </div>
                
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.artworkId} className="py-4 px-6 md:grid md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-7 flex items-center space-x-4">
                        <div className="w-20 h-20 flex-shrink-0">
                          <Link to={`/artwork/${item.artworkId}`}>
                            <img 
                              src={item.artwork.imageUrl} 
                              alt={item.artwork.title}
                              className="w-full h-full object-cover rounded"
                            />
                          </Link>
                        </div>
                        <div>
                          <Link to={`/artwork/${item.artworkId}`}>
                            <h3 className="font-medium hover:text-accent1 transition-colors">{item.artwork.title}</h3>
                          </Link>
                          <p className="text-sm text-muted-foreground">{item.artwork.artist.name}</p>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 flex justify-center mt-4 md:mt-0">
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 rounded-r-none"
                            onClick={() => updateQuantity(item.artworkId, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <Input 
                            type="text" 
                            value={item.quantity}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (!isNaN(value) && value > 0) {
                                updateQuantity(item.artworkId, value);
                              }
                            }}
                            className="h-8 w-12 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 rounded-l-none"
                            onClick={() => updateQuantity(item.artworkId, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 text-center mt-4 md:mt-0">
                        <p className="font-medium">
                          ${((item.artwork.isAuction ? (item.artwork.currentBid || item.artwork.price) : item.artwork.price) * item.quantity).toLocaleString()}
                        </p>
                      </div>
                      
                      <div className="md:col-span-1 flex justify-end mt-4 md:mt-0">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeFromCart(item.artworkId)}
                        >
                          <Trash2 className="h-5 w-5 text-muted-foreground" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-gallery-100 rounded-lg p-6">
                <h2 className="font-serif text-xl font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Subtotal</p>
                    <p className="font-medium">${getCartTotal().toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Shipping</p>
                    <p className="font-medium">$50.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Tax</p>
                    <p className="font-medium">${(getCartTotal() * 0.1).toLocaleString()}</p>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-medium">
                      <p>Total</p>
                      <p>${(getCartTotal() + 50 + getCartTotal() * 0.1).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
