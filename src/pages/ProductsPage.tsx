
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/product-card";
import { dummyProducts } from "@/data/products";
import { dummyCategories } from "@/data/categories";
import { Check, ChevronDown, SlidersHorizontal } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 150]);

  // Filter products based on category and price range
  const filteredProducts = dummyProducts.filter((product) => {
    const matchesCategory = !selectedCategory || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        // "featured" is default
        return 0;
    }
  });

  // Function to handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // Function to reset filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 150]);
  };

  return (
    <Layout>
      <div className="bg-orion-light py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-orion-text mb-2">Shop All Products</h1>
          <p className="text-gray-600 mb-6">Discover our curated collection of modern home decor</p>

          {/* Mobile Filter Button */}
          <div className="flex md:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex-1">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Narrow down products based on your preferences
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <Accordion type="single" collapsible defaultValue="category" className="w-full">
                    <AccordionItem value="category">
                      <AccordionTrigger>Categories</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {dummyCategories.map((category) => (
                            <div 
                              key={category.id}
                              className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                                selectedCategory === category.id 
                                  ? "bg-orion-pastel-lavender text-orion-text" 
                                  : "hover:bg-gray-100"
                              }`}
                              onClick={() => handleCategoryChange(category.id)}
                            >
                              <span>{category.name}</span>
                              {selectedCategory === category.id && (
                                <Check className="h-4 w-4" />
                              )}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="price">
                      <AccordionTrigger>Price Range</AccordionTrigger>
                      <AccordionContent>
                        <div className="px-2">
                          <div className="mb-4">
                            <Slider 
                              defaultValue={priceRange} 
                              min={0} 
                              max={150} 
                              step={5}
                              onValueChange={setPriceRange}
                            />
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="mt-6 flex justify-center">
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <div className="ml-2 flex-1">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Sidebar Filters */}
            <div className="w-full md:w-64 hidden md:block">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-orion-border">
                <div className="mb-6">
                  <h2 className="font-medium text-lg mb-3">Categories</h2>
                  <div className="space-y-2">
                    {dummyCategories.map((category) => (
                      <div 
                        key={category.id}
                        className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                          selectedCategory === category.id 
                            ? "bg-orion-pastel-lavender text-orion-text" 
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => handleCategoryChange(category.id)}
                      >
                        <span>{category.name}</span>
                        {selectedCategory === category.id && (
                          <Check className="h-4 w-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="font-medium text-lg mb-3">Price Range</h2>
                  <div className="px-2">
                    <div className="mb-4">
                      <Slider 
                        defaultValue={priceRange} 
                        min={0} 
                        max={150} 
                        step={5}
                        onValueChange={setPriceRange}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <Button onClick={resetFilters} variant="outline" className="w-full">
                  Reset Filters
                </Button>
              </div>
            </div>

            <div className="flex-1">
              {/* Desktop Sort Options */}
              <div className="hidden md:flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {sortedProducts.length} products
                </p>
                <div className="w-64">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="name">Name: A to Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Products Grid */}
              {sortedProducts.length === 0 ? (
                <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-orion-border">
                  <h3 className="text-lg font-medium">No products found</h3>
                  <p className="text-gray-600 mt-2">
                    Try adjusting your filters or check back later for new products.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map((product) => (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
