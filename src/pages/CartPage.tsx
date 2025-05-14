
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ChevronRight, ShoppingBag } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  category: string;
}

const initialCart: CartItem[] = [
  {
    id: "1",
    name: "Modern Bedside Lamp",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 59.99,
    quantity: 1,
    category: "Lighting",
  },
  {
    id: "5",
    name: "Geometric Planter Set",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 49.99,
    quantity: 2,
    category: "Plants & Planters",
  },
];

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // Calculate shipping cost
  const shipping = subtotal < 100 ? 9.99 : 0;
  
  // Apply discount if promo is applied
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  
  // Calculate total
  const total = subtotal - discount + shipping;

  // Function to update item quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Function to remove item from cart
  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart."
    });
  };

  // Function to apply promo code
  const applyPromo = () => {
    if (promoCode.toUpperCase() === "ORION10") {
      setIsPromoApplied(true);
      toast({
        title: "Promo code applied",
        description: "10% discount has been applied to your order.",
        variant: "default",
      });
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please enter a valid promo code.",
        variant: "destructive",
      });
    }
  };

  // Function to handle checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast({
        title: "Empty cart",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, we would save the cart data to be retrieved in the checkout page
    // For now, let's just navigate to the checkout page
    navigate("/checkout", { 
      state: { 
        cart, 
        subtotal, 
        discount, 
        shipping, 
        total 
      } 
    });
  };

  return (
    <Layout>
      <div className="bg-orion-light py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-orion-text mb-2">Your Cart</h1>
          
          {cart.length === 0 ? (
            <div className="bg-white rounded-lg border border-orion-border p-8 text-center mt-8">
              <div className="mx-auto w-16 h-16 bg-orion-pastel-lavender rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-orion-text" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button asChild>
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border border-orion-border overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-orion-border bg-orion-light">
                    <div className="col-span-6">
                      <span className="font-medium">Product</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="font-medium">Price</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="font-medium">Quantity</span>
                    </div>
                    <div className="col-span-2 text-right">
                      <span className="font-medium">Total</span>
                    </div>
                  </div>
                  
                  {/* Cart Item Rows */}
                  {cart.map((item) => (
                    <div 
                      key={item.id}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-orion-border items-center"
                    >
                      {/* Product Info */}
                      <div className="md:col-span-6 flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.category}</p>
                          <button 
                            className="text-sm text-red-500 flex items-center gap-1 mt-2 md:hidden"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                        <span className="md:hidden font-medium">Price:</span>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                      
                      {/* Quantity */}
                      <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                        <span className="md:hidden font-medium">Quantity:</span>
                        <div className="flex items-center border rounded-md">
                          <button 
                            className="px-2 py-1 border-r"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <button 
                            className="px-2 py-1 border-l"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Total */}
                      <div className="md:col-span-2 flex items-center justify-between md:justify-end">
                        <span className="md:hidden font-medium">Total:</span>
                        <div className="flex items-center">
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          <button 
                            className="ml-4 hidden md:block text-gray-500 hover:text-red-500"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
                  <div className="flex gap-4">
                    <Button variant="outline" asChild>
                      <Link to="/products">
                        Continue Shopping
                      </Link>
                    </Button>
                    <Button variant="outline" onClick={() => setCart([])}>
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg border border-orion-border p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {isPromoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Shipping
                      </span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="border-t border-orion-border pt-3 mt-3 flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Promo Code</label>
                    <div className="flex gap-2">
                      <Input 
                        type="text" 
                        placeholder="Enter code" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={isPromoApplied}
                      />
                      <Button 
                        onClick={applyPromo} 
                        disabled={!promoCode || isPromoApplied}
                      >
                        Apply
                      </Button>
                    </div>
                    {isPromoApplied && (
                      <p className="text-green-600 text-sm mt-2">
                        Promo code ORION10 applied successfully!
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full bg-orion-text hover:bg-orion-text/90"
                    onClick={handleCheckout}
                  >
                    Checkout
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  
                  <div className="mt-4 text-xs text-gray-500 text-center">
                    Secure payment processing powered by Stripe
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
