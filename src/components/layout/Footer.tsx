
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-orion-light border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="https://i.postimg.cc/gjmwVSpb/d87d89a5-b799-4255-9979-7550ee43281e.jpg" 
                alt="Orion Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Orion</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Transform your space with our modern, sleek, and beautiful home decor products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gray-600 mt-0.5" />
                <span className="text-gray-600">123 Decor Street, Design City, 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">junayedjamal2032008@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to receive updates on new products and special offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white"
              />
              <Button className="bg-orion-pastel-lavender hover:bg-orion-pastel-lavender/90 text-orion-text">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Orion Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
