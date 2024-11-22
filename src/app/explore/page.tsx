"use client";

import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProductCard from "@/components/explore/ProductCard";
import FilterTag from "@/components/explore/FilterTag";
import Categories from "@/components/explore/Categories";
import Filters from "@/components/explore/Filters";
import Link from "next/link";

const ExplorePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(1)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])


  const products = [
    {
      id: 1,
      name: "Artisan Dress 1",
      artisan: "Artisan Studio 1",
      price: 250,
      tags: ["Handmade", "Sustainable"],
    },
    {
      id: 2,
      name: "Artisan Top 2",
      artisan: "Artisan Studio 2",
      price: 320,
      tags: ["Handmade", "Sustainable", "Limited Edition"],
    },
    {
      id: 3,
      name: "Artisan Skirt 3",
      artisan: "Artisan Studio 3",
      price: 180,
      tags: ["Handmade"],
    },
    {
      id: 4,
      name: "Artisan Accessory 4",
      artisan: "Artisan Studio 4",
      price: 400,
      tags: ["Sustainable", "Limited Edition"],
    },
    {
      id: 5,
      name: "Artisan Dress 5",
      artisan: "Artisan Studio 5",
      price: 270,
      tags: ["Handmade", "Sustainable"],
    },
    {
      id: 6,
      name: "Artisan Top 6",
      artisan: "Artisan Studio 6",
      price: 350,
      tags: ["Limited Edition"],
    },
    {
      id: 7,
      name: "Artisan Skirt 7",
      artisan: "Artisan Studio 7",
      price: 200,
      tags: ["Handmade", "Limited Edition"],
    },
    {
      id: 8,
      name: "Artisan Accessory 8",
      artisan: "Artisan Studio 8",
      price: 410,
      tags: ["Sustainable"],
    },
    {
      id: 9,
      name: "Artisan Dress 9",
      artisan: "Artisan Studio 9",
      price: 290,
      tags: ["Handmade", "Sustainable"],
    },
    {
      id: 10,
      name: "Artisan Top 10",
      artisan: "Artisan Studio 10",
      price: 370,
      tags: ["Sustainable", "Limited Edition"],
    },
    {
      id: 11,
      name: "Artisan Skirt 11",
      artisan: "Artisan Studio 11",
      price: 190,
      tags: ["Handmade"],
    },
    {
      id: 12,
      name: "Artisan Accessory 12",
      artisan: "Artisan Studio 12",
      price: 450,
      tags: ["Handmade", "Limited Edition"],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search artisan pieces..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12"
              >
                <SlidersHorizontal className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px]">
              <Filters
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Categories */}
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Active Filters */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3">
          {["Sustainable", "Under $300", "Limited Edition"].map((tag) => (
            <FilterTag key={tag} active={selectedTags.includes(tag)}>
              {tag}
            </FilterTag>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Load More Button */}
      <div className="py-12 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium inline-flex items-center gap-2"
        >
          Load More
          <ArrowUpRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Floating Cart Button */}
      <Link href="/cart">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-lg"
        >
          <ShoppingBag className="w-6 h-6" />
        </motion.button>
      </Link>
    </div>
  );
};

export default ExplorePage;
