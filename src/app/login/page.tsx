"use client";

import { AuthHeader } from "../auth/components/AuthHeader";
import { AuthForm } from "../auth/components/AuthForm";
import { Divider } from "../auth/components/Divider";
import { GoogleButton } from "../auth/components/GoogleButton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const handleSubmit = (data: unknown) => {
    console.log("Login data:", data);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <AuthHeader
            title="Welcome Back"
            subtitle="Sign in to continue shopping"
            linkText="Don't have an account? Sign up"
            linkHref="/register"
          />

          <GoogleButton />
          <Divider />
          <AuthForm type="login" onSubmit={handleSubmit} />
          <Link
            href="/"
            className="inline-flex items-center gap-2 
                transition-colors mt-4 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue as Guest
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-[55%] xl:w-[60%] relative bg-emerald-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-navy-900/30" />
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
          alt="Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <h2 className="font-script text-4xl font-bold mb-4">
            Discover Your Style
          </h2>
          <p className=" text-lg max-w-lg">
            Join our community of fashion enthusiasts and explore the latest
            trends in sustainable and ethical fashion.
          </p>
        </div>
      </div>
    </div>
  );
}
