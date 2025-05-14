
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { dummyProducts } from "@/data/products";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("trending");

  const filteredProducts = dummyProducts
    .filter(product => 
      activeTab === "trending" ? product.trending : 
      activeTab === "new" ? product.new : 
      product.bestSeller
    )
    .slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-orion-text">Featured Products</h2>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button 
              variant={activeTab === "trending" ? "default" : "outline"}
              className={activeTab === "trending" ? "bg-orion-pastel-lavender text-orion-text hover:bg-orion-pastel-lavender/90" : ""}
              onClick={() => setActiveTab("trending")}
            >
              Trending
            </Button>
            <Button 
              variant={activeTab === "new" ? "default" : "outline"}
              className={activeTab === "new" ? "bg-orion-pastel-green text-orion-text hover:bg-orion-pastel-green/90" : ""}
              onClick={() => setActiveTab("new")}
            >
              New Arrivals
            </Button>
            <Button 
              variant={activeTab === "bestSeller" ? "default" : "outline"}
              className={activeTab === "bestSeller" ? "bg-orion-pastel-peach text-orion-text hover:bg-orion-pastel-peach/90" : ""}
              onClick={() => setActiveTab("bestSeller")}
            >
              Best Sellers
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              category={product.category}
              rating={product.rating}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-orion-text hover:bg-orion-text/90 text-white"
            asChild
          >
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
