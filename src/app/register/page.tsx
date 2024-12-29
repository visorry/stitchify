"use client";

import { AuthHeader } from "../auth/components/AuthHeader";
import { AuthForm } from "../auth/components/AuthForm";
import { Divider } from "../auth/components/Divider";
import { GoogleButton } from "../auth/components/GoogleButton";

export default function RegisterPage() {
  const handleSubmit = (data: unknown) => {
    console.log("Register data:", data);
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-[55%] xl:w-[60%] relative bg-emerald-50">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-navy-900/30" />
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070"
          alt="Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
          <h2 className="font-script text-4xl font-bold mb-4">
            Create Your Collection
          </h2>
          <p className="text-white/90 text-lg max-w-lg">
            Start your fashion journey with us. Curate your personal style and
            discover pieces that speak to your unique aesthetic.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <AuthHeader
            title="Create Account"
            subtitle="Join our community of fashion enthusiasts"
            linkText="Already have an account? Sign in"
            linkHref="/login"
          />

          <GoogleButton />
          <Divider />
          <AuthForm type="register" onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
