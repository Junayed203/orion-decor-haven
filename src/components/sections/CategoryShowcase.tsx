
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/ui/category-card";
import { dummyCategories } from "@/data/categories";

const CategoryShowcase = () => {
  // Get first 3 categories
  const featuredCategories = dummyCategories.slice(0, 3);
  
  return (
    <section className="py-16 bg-orion-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-orion-text">Shop by Category</h2>
          <Button 
            variant="link" 
            className="text-orion-text hover:text-orion-text/80"
            asChild
          >
            <Link to="/categories">
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              image={category.image}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
