"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star, Diamond } from "lucide-react"; // Import trendy icons
import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";
import CarouselSection from "./Hero-caurosel";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 w-full font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
        {/* Hero Text */}
        <div className="lg:col-span-2 flex flex-col justify-center space-y-4 h-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight mb-6 text-gray-900"
          >
            WEAR THE
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              &nbsp;ARTISTRY
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 max-w-xl"
          >
            A community-driven platform where creators showcase unique,
            sustainable fashion, and buyers discover one-of-a-kind items.
          </motion.p>
        </div>

        <CarouselSection />

        {/* Explore Marketplace */}
        <div className="lg:col-start-3 lg:row-start-1 flex flex-col justify-between h-full">
          <div className="bg-purple-600 p-4 rounded-2xl flex-grow text-gray-50">
            <h3 className="font-semibold mb-2 flex items-center">
              <Diamond className="mr-2 h-5 w-5" />
              Explore the Marketplace
            </h3>
            <p className="text-sm">
              Discover unique pieces from fashion designers, artisans, and
              resellers.
            </p>
            <Button
              variant={"outline"}
              className="mt-4 flex items-center bg-purple-600 text-white px-4 py-2 rounded-full"
            >
              View All Fashion Items
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Additional Content */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-pink-500 p-4 rounded-2xl flex items-center space-x-4 text-gray-50">
            <div className="bg-white p-2 rounded-full">
              <Star className="text-yellow-500 h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold flex items-center">
                Fashion Challenges
              </h3>
              <p className="text-sm">
                Join design challenges and showcase your creativity.
              </p>
              <Link
                href="#"
                className="text-sm font-medium flex items-center mt-2 text-gray-100 hover:text-gray-300 transition-colors"
              >
                Join Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-purple-600 p-4 rounded-2xl flex items-center space-x-4 h-full text-gray-50">
            <div className="bg-white p-2 rounded-full">
              <Diamond className="text-blue-500 h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold flex items-center">
                Spotlight on Designers
              </h3>
              <p className="text-sm">
                Learn more about the vision and work of our featured creators.
              </p>
              <Link
                href="#"
                className="text-sm font-medium flex items-center mt-2 text-gray-100 hover:text-gray-300 transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Artist Highlight */}
        <div className="lg:col-start-3 lg:row-start-2 lg:row-span-2 bg-blue-500 p-4 rounded-2xl flex flex-col justify-between h-full text-gray-50">
          <div>
            <div className="flex space-x-2 mb-2">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 text-xs px-3 py-0.5 rounded-full text-gray-50 font-bold">
                🌟 Featured
              </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-xs px-3 py-0.5 rounded-full text-gray-50 font-bold">
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
          <Image
            src="https://picsum.photos/300/300"
            alt="Featured Designer"
            width={300}
            height={300}
            className="rounded-xl mt-4 self-center"
          />
        </div>
      </div>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#000000"
      />
    </main>
  );
}
