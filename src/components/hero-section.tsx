"use client";

import { Heart } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container mx-auto px-6 sm:px-12 lg:px-20 py-12">
      {/* Hero Section Grid */}
      <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16">
        {/* Left Side - Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-[2fr,1fr] gap-6 h-auto lg:h-[600px]">
          {/* Main Product */}
          <div className="relative group rounded-3xl overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/635d7c2bcac71a07377304c0/c8c949f9-78c3-451d-bd03-892ea6658d52/All-you-need-to-know-about-embroidery-on-clothes-as-a-beginner-of-hand-embroidery-5.jpg?format=1500w"
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
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900/70 via-navy-900/40 to-transparent">
              <h3 className="text-white text-xl font-script font-bold mb-2">
                Elegance Embodied Dress
              </h3>
              <p className="text-white/90 font-medium">$199.99</p>
            </div>
          </div>

          {/* Secondary Products */}
          <div className="grid grid-rows-2 gap-4">
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
            <div className="relative group rounded-3xl overflow-hidden">
              <Image
                src="https://i.etsystatic.com/18058357/r/il/08abfd/3114460969/il_1080xN.3114460969_bno8.jpg"
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
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900/70 via-navy-900/40 to-transparent">
                <h3 className="text-white text-lg font-script font-bold mb-1">
                  Simplicity Blouse
                </h3>
                <p className="text-white/90 font-medium">$129.99</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content & Product */}
        <div className="flex flex-col justify-between space-y-10">
          <div className="space-y-6 mb-8">
            <h1 className="text-[2.5rem] sm:text-[3.5rem] font-extrabold leading-tight font-script">
              Empowering{" "}
              <span className="bg-gradient-to-r from-navy-900 to-emerald-800 text-transparent bg-clip-text font-extrabold">
                Creators
              </span>{" "}
              and Enriching {""}
              <span className="bg-gradient-to-r from-navy-900 to-emerald-800 text-transparent bg-clip-text font-extrabold">
                Collectors
              </span>
            </h1>

            <p className="text-gray-600 text-lg">
              Where Fashion Meets Craftsmanship — Uniting Impeccable Detailing
              with Your Unique Style
            </p>
            <div className="flex gap-4">
              <button
                className="px-8 py-3.5 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 
                                  transition-colors text-sm font-medium inline-flex items-center gap-2"
              >
                Shop Now
                <span className="text-lg">→</span>
              </button>
              <button
                className="px-8 py-3.5 bg-navy-900 text-white rounded-full hover:bg-navy-700 
                                  transition-colors text-sm font-medium inline-flex items-center gap-2"
              >
                Become a Creator
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Bottom Product Card */}
          <div className="relative group rounded-3xl overflow-hidden h-[200px] sm:h-[280px]">
            <Image
              src="https://plus.unsplash.com/premium_photo-1676751758731-6c0b1bdc57b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900/70 via-navy-900/40 to-transparent">
              <h3 className="text-white text-lg font-script font-bold mb-1">
                Regal Touch Pants
              </h3>
              <p className="text-white/90 font-medium">$149.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
