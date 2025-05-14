
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { dummyProducts } from "@/data/products";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product with the matching ID
  const product = dummyProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-orion-border">
            <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-6">
              Sorry, we couldn't find the product you're looking for.
            </p>
            <Button onClick={() => navigate("/products")}>
              Go Back to Products
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Generate additional images for the carousel (since our data only has one image per product)
  const productImages = [
    product.image,
    // Add some variations of the same image as placeholders
    product.image.replace('w=800', 'w=801'),
    product.image.replace('w=800', 'w=802'),
  ];
  
  // Calculate discount percentage
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  
  const handleAddToCart = () => {
    toast.success(`${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to cart`);
  };
  
  const handleAddToWishlist = () => {
    toast.success(`${product.name} added to wishlist`);
  };
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  return (
    <Layout>
      <div className="bg-orion-light py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center"
            onClick={() => navigate("/products")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {productImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square w-full overflow-hidden rounded-xl border border-orion-border bg-white">
                        <img 
                          src={img} 
                          alt={`${product.name} - view ${index + 1}`} 
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              
              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {productImages.map((img, index) => (
                  <div 
                    key={index}
                    className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border border-orion-border cursor-pointer"
                    onClick={() => {
                      // In a real app, this would change the active image
                      toast.info(`Viewing image ${index + 1}`);
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} thumbnail ${index + 1}`} 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-orion-border">
              <div className="mb-4">
                {product.category && (
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                )}
                <h1 className="text-2xl md:text-3xl font-bold text-orion-text mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < product.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15.585l-5.902 3.097 1.125-6.563-4.777-4.656 6.601-.96L10 1.047l2.953 5.586 6.601.96-4.777 4.656 1.125 6.563z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating} stars
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-orion-text">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <Badge className="bg-orion-pastel-peach text-orion-text">
                        {discount}% OFF
                      </Badge>
                    </>
                  )}
                </div>
                
                {/* Product tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.trending && (
                    <Badge className="bg-orion-pastel-lavender text-orion-text">
                      Trending
                    </Badge>
                  )}
                  {product.new && (
                    <Badge className="bg-orion-pastel-green text-orion-text">
                      New Arrival
                    </Badge>
                  )}
                  {product.bestSeller && (
                    <Badge variant="outline" className="border-orion-pastel-peach text-orion-text">
                      Best Seller
                    </Badge>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                
                <div className="border-t border-gray-200 pt-6">
                  {/* Quantity selector */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-medium">Quantity</span>
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        className="px-3 py-1 border-r border-gray-300"
                        onClick={handleDecreaseQuantity}
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{quantity}</span>
                      <button 
                        className="px-3 py-1 border-l border-gray-300"
                        onClick={handleIncreaseQuantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button 
                      className="bg-orion-pastel-green hover:bg-orion-pastel-green/90 text-orion-text w-full"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-orion-text text-orion-text hover:bg-orion-pastel-lavender/10"
                      onClick={handleAddToWishlist}
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Add to Wishlist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
