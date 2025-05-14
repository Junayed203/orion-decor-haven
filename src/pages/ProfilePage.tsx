
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const ProfilePage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle login form fields change
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  // Handle register form fields change
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  // Handle login submit
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginForm.email || !loginForm.password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    toast.success("Login successful!");
    setIsRegistered(true);
  };

  // Handle register submit
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registerForm.fullName || !registerForm.email || !registerForm.password || !registerForm.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    toast.success("Registration successful! Please login.");
    setIsRegistered(true);
  };

  return (
    <Layout>
      <div className="bg-orion-light min-h-[80vh] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <img 
                src="https://i.postimg.cc/gjmwVSpb/d87d89a5-b799-4255-9979-7550ee43281e.jpg" 
                alt="Orion Logo" 
                className="h-12 w-auto mx-auto mb-4"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-orion-text">
                {isRegistered ? "Welcome back!" : "Join Orion Decor"}
              </h1>
              <p className="text-gray-600 mt-2">
                {isRegistered 
                  ? "Sign in to your account to manage orders and access your wishlist" 
                  : "Create an account to start shopping and get access to exclusive offers"}
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-orion-border p-6 shadow-sm">
              {isRegistered ? (
                <form onSubmit={handleLoginSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={loginForm.email}
                        onChange={handleLoginChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-baseline">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="text-sm text-orion-text hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-orion-text hover:bg-orion-text/90">
                      Sign In
                    </Button>
                    
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setIsRegistered(false)}
                          className="text-orion-text hover:underline font-medium"
                        >
                          Sign up
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleRegisterSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={registerForm.fullName}
                        onChange={handleRegisterChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={registerForm.email}
                        onChange={handleRegisterChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Create a password"
                        value={registerForm.password}
                        onChange={handleRegisterChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={registerForm.confirmPassword}
                        onChange={handleRegisterChange}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-orion-text hover:bg-orion-text/90">
                      Create Account
                    </Button>
                    
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setIsRegistered(true)}
                          className="text-orion-text hover:underline font-medium"
                        >
                          Sign in
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              )}
              
              <div className="mt-6 pt-6 border-t border-orion-border">
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Continue with Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
