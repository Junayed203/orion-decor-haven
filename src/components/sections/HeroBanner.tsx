
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative bg-orion-pastel-lavender/20 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block bg-orion-pastel-peach text-orion-text text-sm px-3 py-1 rounded-full font-medium">
              New Collection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orion-text tracking-tight">
              Elevate Your <span className="text-orion-pastel-lavender">Space</span> With Modern Decor
            </h1>
            <p className="text-gray-600 text-lg max-w-lg">
              Transform your home with our curated collection of contemporary decor pieces designed to add elegance and style.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-orion-text hover:bg-orion-text/90 text-white btn-hover" 
                size="lg"
                asChild
              >
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-hover"
                asChild
              >
                <Link to="/categories">Explore Categories</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Modern home decor" 
              className="rounded-lg shadow-xl"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
              }}
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-orion-border hidden md:block">
              <p className="font-medium text-orion-text">Premium Quality</p>
              <p className="text-sm text-gray-500">100% satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroBanner;
