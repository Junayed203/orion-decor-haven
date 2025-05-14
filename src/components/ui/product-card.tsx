
import { Link } from "react-router-dom";
import { Button } from "./button";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  description?: string;
  rating?: number;
  category?: string;
}

export function ProductCard({
  id,
  name,
  image,
  price,
  originalPrice,
  description,
  rating = 5,
  category,
}: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success("Item added to cart");
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success("Added to wishlist");
  };

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Link to={`/products/${id}`}>
      <div className="group bg-white rounded-lg overflow-hidden border border-orion-border shadow-sm card-hover">
        <div className="relative aspect-square overflow-hidden">
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-orion-pastel-peach text-orion-text text-xs font-bold px-2 py-1 rounded-full">
              {discount}% OFF
            </div>
          )}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-sm hover:bg-orion-pastel-lavender"
              onClick={handleAddToWishlist}
            >
              <Heart className="h-4 w-4 text-gray-500" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>
        </div>
        <div className="p-4">
          {category && (
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              {category}
            </p>
          )}
          <h3 className="font-medium text-gray-900 group-hover:text-orion-text transition-colors">
            {name}
          </h3>
          <div className="mt-1 flex items-center">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
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
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1">
                <span className="font-medium text-gray-900">${price.toFixed(2)}</span>
                {originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <Button
              size="sm"
              className="bg-orion-pastel-green hover:bg-orion-pastel-green/90 text-orion-text btn-hover"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
