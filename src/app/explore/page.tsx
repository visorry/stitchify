"use client";

import React, { useState } from "react";
import { ShoppingBag, Filter } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/explore/ProductCard";
import FilterTag from "@/components/explore/FilterTag";
import Categories from "@/components/explore/Categories";
import FilterComponent from "@/components/explore/FilterComponent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ExplorePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([0, 500]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const categories = ["Dresses", "Tops", "Skirts", "Accessories"];
  const materials = ["Cotton", "Silk", "Linen", "Wool"];
  const styles = ["Bohemian", "Minimalist", "Vintage", "Contemporary"];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleMaterialChange = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const handleStyleChange = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    setSelectedPriceRange(range);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedStyles([]);
    setSelectedPriceRange([0, 500]);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.name.split(" ")[1]);
    const materialMatch =
      selectedMaterials.length === 0 ||
      selectedMaterials.some((m) => product.tags.includes(m));
    const styleMatch =
      selectedStyles.length === 0 ||
      selectedStyles.some((s) => product.tags.includes(s));
    const priceMatch =
      product.price >= selectedPriceRange[0] &&
      product.price <= selectedPriceRange[1];
    return categoryMatch && materialMatch && styleMatch && priceMatch;
  });

  return (
    <div className="min-h-screen relative">
      {/* Categories */}
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Explore Artisan Products</h1>
        </div>

        {/* Active Filters */}
        <section className="mb-6">
          <div className="flex flex-wrap gap-3">
            {[
              ...selectedCategories,
              ...selectedMaterials,
              ...selectedStyles,
            ].map((tag) => (
              <FilterTag key={tag} active={true}>
                {tag}
              </FilterTag>
            ))}
            {(selectedPriceRange[0] > 0 || selectedPriceRange[1] < 500) && (
              <FilterTag active={true}>
                ${selectedPriceRange[0]} - ${selectedPriceRange[1]}
              </FilterTag>
            )}
          </div>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>

      {/* Floating Filter Button for Larger Screens */}
      <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DialogTrigger asChild>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="hidden lg:flex fixed top-8 left-8 w-16 h-16 rounded-full bg-black dark:bg-white text-white dark:text-black items-center justify-center shadow-lg"
          >
            <Filter className="w-6 h-6" />
          </motion.button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <FilterComponent
            categories={categories}
            materials={materials}
            styles={styles}
            priceRange={[0, 500]}
            selectedCategories={selectedCategories}
            selectedMaterials={selectedMaterials}
            selectedStyles={selectedStyles}
            selectedPriceRange={selectedPriceRange}
            onCategoryChange={handleCategoryChange}
            onMaterialChange={handleMaterialChange}
            onStyleChange={handleStyleChange}
            onPriceRangeChange={handlePriceRangeChange}
            onClearFilters={handleClearFilters}
          />
        </DialogContent>
      </Dialog>

      {/* Floating Cart Button */}
      <Link href="/cart">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="hidden lg:flex fixed bottom-8 right-8 w-16 h-16 rounded-full bg-black dark:bg-white text-white dark:text-black items-center justify-center shadow-lg"
        >
          <ShoppingBag className="w-6 h-6" />
        </motion.button>
      </Link>

      {/* Mobile Floating Filter Button (Cylinder Style) */}
      <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DialogTrigger asChild>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="lg:hidden fixed top-24 right-0 w-14 h-14 rounded-full text-black dark:text-white flex items-center justify-center shadow-lg bg-black/10 dark:bg-white/10"
          >
            <Filter className="w-6 h-6" />
          </motion.button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <FilterComponent
            categories={categories}
            materials={materials}
            styles={styles}
            priceRange={[0, 500]}
            selectedCategories={selectedCategories}
            selectedMaterials={selectedMaterials}
            selectedStyles={selectedStyles}
            selectedPriceRange={selectedPriceRange}
            onCategoryChange={handleCategoryChange}
            onMaterialChange={handleMaterialChange}
            onStyleChange={handleStyleChange}
            onPriceRangeChange={handlePriceRangeChange}
            onClearFilters={handleClearFilters}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExplorePage;
