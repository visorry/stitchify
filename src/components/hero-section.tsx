"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Diamond,
  Sparkles,
  Palette,
  Brush,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, ReactNode } from "react";
import { Button } from "./ui/button";
import clsx from "clsx";

// Define prop types for WhimsyBox
type WhimsyBoxProps = {
  children: ReactNode;
  className?: string;
};

const WhimsyBox: React.FC<WhimsyBoxProps> = ({ children, className = "" }) => (
  <div className={clsx("bg-white rounded-3xl p-6 overflow-hidden", className)}>
    {children}
  </div>
);

export default function WhimsicalHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 py-16 w-full font-sans relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full">
        {/* Main Heading Box */}
        <WhimsyBox className="md:col-span-2 lg:col-span-2 flex flex-col justify-center space-y-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight mb-6 text-gray-900">
            WEAR THE{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              ARTISTRY
              <Sparkles className="text-yellow-400 inline ml-2" size={40} />
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            A community-driven platform where creators showcase unique,
            sustainable fashion, and buyers discover one-of-a-kind items.
          </p>
        </WhimsyBox>

        {/* Marketplace Box */}
        <WhimsyBox className="bg-gradient-to-br from-purple-600 to-pink-600 text-white flex flex-col justify-between relative overflow-hidden">
          <Image
            src="https://picsum.photos/400/400"
            alt="Marketplace Background"
            width={400}
            height={400}
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black 50%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 50%)",
            }}
          />
          <h3 className="font-semibold mb-2 flex items-center relative z-10">
            <Diamond className="mr-2 h-5 w-5" />
            Explore the Marketplace
          </h3>
          <p className="text-sm mb-4 relative z-10">
            Discover unique pieces from fashion designers, artisans, and
            resellers.
          </p>
          <Button
            className="mt-auto flex items-center bg-white text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-full relative z-10"
            aria-label="View All Fashion Items"
          >
            View All Fashion Items
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </WhimsyBox>

        {/* Fashion Challenges Box */}
        <WhimsyBox className="bg-gradient-to-br from-pink-500 to-red-500 text-white flex flex-col justify-between">
          <div className="bg-white p-2 rounded-full w-min">
            <Star className="text-yellow-500 h-6 w-6" />
          </div>
          <div className="mt-4">
            <h3 className="font-semibold flex items-center">
              Fashion Challenges
            </h3>
            <p className="text-sm mt-2">
              Join design challenges and showcase your creativity.
            </p>
          </div>
          <Link
            href="#"
            className="text-sm font-medium flex items-center mt-4 text-white"
            aria-label="Join Fashion Challenges"
          >
            Join Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </WhimsyBox>

        {/* Spotlight Box */}
        <WhimsyBox className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex flex-col justify-between relative overflow-hidden p-6">
          {/* Background Image with Gradient Mask */}
          <Image
            src="https://picsum.photos/300/300"
            alt="Spotlight Background"
            width={300}
            height={300}
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black 50%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 50%)",
            }}
          />

          {/* Decorative Icon */}
          <div className="bg-white p-2 rounded-full w-min relative z-10 shadow-md">
            <Palette className="text-blue-500 h-6 w-6" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 mt-6 text-shadow-sm">
            <h3 className="font-semibold text-lg flex items-center">
              Spotlight on Designers
            </h3>
            <p className="text-sm mt-2">
              Dive deep into the vision and creative process of our featured
              artists.
            </p>
          </div>

          {/* CTA Link */}
          <Link
            href="#"
            className="text-sm font-medium flex items-center mt-4 text-white relative z-10 underline decoration-white"
            aria-label="Discover Featured Designers"
          >
            Discover Creators
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </WhimsyBox>

        {/* Featured Designer Box */}
        <WhimsyBox className="md:col-span-2 bg-gradient-to-br from-green-400 to-blue-500 text-white flex flex-row justify-between relative overflow-hidden p-6">
          {/* Text Section */}
          <div className="flex flex-col justify-start z-10 w-2/3">
            <div className="flex space-x-2 mb-2">
              <span className="bg-white text-green-600 text-xs px-3 py-0.5 rounded-full font-bold">
                🌟 Featured
              </span>
              <span className="bg-white text-pink-600 text-xs px-3 py-0.5 rounded-full font-bold">
                Exclusive
              </span>
            </div>
            <h3 className="font-bold text-xl mb-2">
              FEATURED DESIGNER OF THE WEEK
            </h3>
            <p className="text-sm">
              Explore the latest collection from one of our top fashion
              designers.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-1/3 flex items-end justify-end">
            <Image
              src="https://picsum.photos/300/300"
              alt="Featured Designer"
              width={300}
              height={300}
              className="rounded-full border-4 border-white shadow-lg"
              priority
            />
          </div>
        </WhimsyBox>

        {/* Minimal Brush Icon Box */}
        <WhimsyBox
          className="bg-yellow-400 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          aria-label="Create with Brush"
        >
          <Brush className="text-white" size={40} />
        </WhimsyBox>
      </div>
    </main>
  );
}
