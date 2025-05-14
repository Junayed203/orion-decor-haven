
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Grid, ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: <Home className="h-5 w-5" />, label: "Home", path: "/" },
    { icon: <ShoppingBag className="h-5 w-5" />, label: "Products", path: "/products" },
    { icon: <Grid className="h-5 w-5" />, label: "Categories", path: "/categories" },
    { icon: <ShoppingCart className="h-5 w-5" />, label: "Cart", path: "/cart" },
    { icon: <User className="h-5 w-5" />, label: "Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      isActive(item.path) 
                        ? "bg-orion-pastel-lavender text-orion-text font-medium" 
                        : "hover:bg-muted"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://i.postimg.cc/gjmwVSpb/d87d89a5-b799-4255-9979-7550ee43281e.jpg" 
              alt="Orion Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold hidden sm:inline-block">Orion</span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                isActive(item.path) 
                  ? "bg-orion-pastel-lavender text-orion-text font-medium" 
                  : "hover:bg-muted"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="relative animate-fade-in">
              <Input 
                type="search" 
                placeholder="Search..." 
                className="w-[200px] md:w-[300px]" 
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orion-pastel-peach text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
