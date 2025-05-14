
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/sections/HeroBanner";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CategoryShowcase from "@/components/sections/CategoryShowcase";

const HomePage = () => {
  return (
    <Layout>
      <HeroBanner />
      <FeaturedProducts />
      <CategoryShowcase />
      
      {/* Feature Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-orion-text mb-12">Why Choose Orion</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-orion-light transition-colors">
              <div className="bg-orion-pastel-lavender p-3 rounded-full mb-4">
                <svg className="h-6 w-6 text-orion-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-2">Quality Design</h3>
              <p className="text-gray-600">Thoughtfully crafted products that combine form and function</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-orion-light transition-colors">
              <div className="bg-orion-pastel-green p-3 rounded-full mb-4">
                <svg className="h-6 w-6 text-orion-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0v10l-8 4m0-10L4 7m8 4v10" />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick, reliable shipping straight to your doorstep</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-orion-light transition-colors">
              <div className="bg-orion-pastel-peach p-3 rounded-full mb-4">
                <svg className="h-6 w-6 text-orion-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-2">Affordable Luxury</h3>
              <p className="text-gray-600">Premium quality products at accessible prices</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-orion-light transition-colors">
              <div className="bg-orion-pastel-lavender p-3 rounded-full mb-4">
                <svg className="h-6 w-6 text-orion-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-medium text-xl mb-2">Secure Payment</h3>
              <p className="text-gray-600">Shop with confidence with our secure payment options</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-orion-pastel-green/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-orion-text mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter and be the first to know about new collections and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-orion-border focus:ring-2 focus:ring-orion-text focus:border-transparent outline-none"
              />
              <button className="px-6 py-3 bg-orion-text text-white rounded-lg font-medium hover:bg-orion-text/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
