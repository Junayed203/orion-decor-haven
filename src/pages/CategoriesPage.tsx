
import Layout from "@/components/layout/Layout";
import { CategoryCard } from "@/components/ui/category-card";
import { dummyCategories } from "@/data/categories";

const CategoriesPage = () => {
  return (
    <Layout>
      <div className="bg-orion-light py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-orion-text mb-2">Shop by Category</h1>
          <p className="text-gray-600 mb-8">Browse our collection by category to find exactly what you're looking for</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyCategories.map((category) => (
              <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${dummyCategories.indexOf(category) * 0.1}s` }}>
                <CategoryCard
                  id={category.id}
                  name={category.name}
                  image={category.image}
                  count={category.count}
                />
                <div className="mt-3">
                  <h3 className="font-medium text-orion-text">{category.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inspiration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-orion-text mb-8">Find Your Style Inspiration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-sm border border-orion-border">
              <img 
                src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Nordic Style" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-medium text-xl mb-2">Nordic Minimalism</h3>
                <p className="text-gray-600 mb-4">
                  Clean lines, muted colors, and natural textures for a cozy yet modern atmosphere.
                </p>
                <a href="#" className="text-orion-text hover:underline font-medium">
                  Explore Nordic Style
                </a>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-sm border border-orion-border">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Elegance" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-medium text-xl mb-2">Modern Elegance</h3>
                <p className="text-gray-600 mb-4">
                  Sophisticated, refined interiors with a touch of luxury and timeless appeal.
                </p>
                <a href="#" className="text-orion-text hover:underline font-medium">
                  Explore Modern Elegance
                </a>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-sm border border-orion-border">
              <img 
                src="https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Urban Jungle" 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-medium text-xl mb-2">Urban Jungle</h3>
                <p className="text-gray-600 mb-4">
                  Bring nature indoors with plant-focused decor that creates a refreshing oasis.
                </p>
                <a href="#" className="text-orion-text hover:underline font-medium">
                  Explore Urban Jungle
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoriesPage;
