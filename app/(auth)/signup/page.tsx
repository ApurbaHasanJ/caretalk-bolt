"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RocketIcon } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration
    toast({
      title: "Coming soon",
      description: "Registration will be implemented in a future update.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center">
            <RocketIcon className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-2xl font-bold text-white">NexusAI</span>
          </Link>
        </div>
        
        <div className="bg-purple-900/20 p-8 rounded-lg border border-purple-800/30 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-purple-100 mb-6 text-center">
            Create Your Account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-purple-200">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-purple-900/40 border-purple-700 text-purple-100"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-purple-200">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-purple-900/40 border-purple-700 text-purple-100"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-purple-200">Company Name</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-purple-900/40 border-purple-700 text-purple-100"
                placeholder="Your Company"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-purple-200">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-purple-900/40 border-purple-700 text-purple-100"
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-500">
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-purple-300">
              Already have an account?{" "}
              <Link href="/signin" className="text-purple-400 hover:text-purple-300">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}