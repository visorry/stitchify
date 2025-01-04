"use client";

import { Crown, Heart, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-12">
      {/* Background Grid */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] grid-rows-[repeat(auto-fill,minmax(20px,1fr))] opacity-10">
        {[...Array(1000)].map((_, i) => (
          <div
            key={i}
            className="border-[0.5px] border-emerald-600"
            style={{
              animation: `pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section Grid */}
      <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 sm:gap-12 lg:gap-16 relative z-10">
        {/* Left Side - Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-[2fr,1fr] gap-8 h-auto lg:h-[600px]">
          {/* Main Product */}
          <div className="relative group rounded-3xl overflow-hidden bg-navy-900">
            <Image
              src="/hero/hero1-Photoroom.png"
              alt="Elegance Embodied Dress"
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-4 right-4 p-2.5 bg-emerald-700/10 backdrop-blur-sm rounded-full 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Heart className="w-5 h-5 text-emerald-500" />
            </button>
          </div>

          {/* Secondary Products */}
          <div className="grid grid-rows-2 gap-6">
            {/* Fashion Guide Card */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-[2.5rem] text-white relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/20"></div>
              <div className="h-full flex flex-col justify-between">
                <h3 className="text-lg font-bold leading-tight font-handwriting">
                  Comprehensive Guide To The World Of Fashion
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-5xl font-bold">1000+</span>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card */}
            <div className="relative group rounded-3xl overflow-hidden bg-navy-900">
              <Image
                src="/hero/hero2-Photoroom.png"
                alt="Simplicity Blouse"
                width={250}
                height={300}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 p-2.5 bg-emerald-700/10 backdrop-blur-sm rounded-full 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Heart className="w-5 h-5 text-emerald-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Content & Product */}
        <div className="flex flex-col justify-between space-y-8 sm:space-y-12">
          <div className="space-y-6 mb-8">
            <h1 className="text-[2rem] sm:text-[3rem] font-extrabold leading-tight font-script">
              Empowering{" "}
              <span className="bg-gradient-to-r from-navy-900 to-emerald-500 text-transparent bg-clip-text font-extrabold">
                Creators
              </span>{" "}
              and Enriching{" "}
              <span className="bg-gradient-to-r from-navy-900 to-emerald-500 text-transparent bg-clip-text font-extrabold">
                Collectors
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg">
              Where Fashion Meets Craftsmanship — Uniting Impeccable Detailing
              with Your Unique Style
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <Button variant="curvy" size="curvy">
                Collect Now <ShoppingBagIcon className="w-4 h-4" />
              </Button>
              <Button variant="curvy2" size="curvy">
                Become a Creator <Crown className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Bottom Product Card */}
          <div className="relative group rounded-3xl overflow-hidden h-[180px] sm:h-[280px] bg-navy-900">
            <Image
              src="/hero/hero3-Photoroom.png"
              alt="Regal Touch Pants"
              width={500}
              height={280}
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-4 right-4 p-2.5 bg-emerald-700/10 backdrop-blur-sm rounded-full 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Heart className="w-5 h-5 text-emerald-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
