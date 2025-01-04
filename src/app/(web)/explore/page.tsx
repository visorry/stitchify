"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Sidebar } from "./_components/Sidebar";
import { MobileSidebar } from "./_components/MobileSidebar";
import { ProductsGrid } from "@/components/ProductsGrid";
import { ArrowRight } from "lucide-react";

const ExplorePage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Artisan Dress 1",
      artisan: "Artisan Studio 1",
      price: 250,
      tags: ["Handmade", "Sustainable"],
      image: "/hero/hero1-Photoroom.png",
      category: "Category 1",
      rating: 4.5,
      isNew: true,
    },
    {
      id: 2,
      name: "Artisan Top 2",
      artisan: "Artisan Studio 2",
      price: 320,
      tags: ["Handmade", "Sustainable", "Limited Edition"],
      image: "/hero/hero1-Photoroom.png",
      category: "Category 2",
      rating: 4.0,
      isNew: false,
    },
    {
      id: 3,
      name: "Artisan Skirt 3",
      artisan: "Artisan Studio 3",
      price: 180,
      tags: ["Handmade"],
      image: "/hero/hero1-Photoroom.png",
      category: "Category 3",
      rating: 3.5,
      isNew: false,
    },
    {
      id: 4,
      name: "Artisan Accessory 4",
      artisan: "Artisan Studio 4",
      price: 400,
      tags: ["Sustainable", "Limited Edition"],
      image: "/hero/hero1-Photoroom.png",
      category: "Category 4",
      rating: 4.8,
      isNew: false,
    },
    {
      id: 5,
      name: "Artisan Dress 5",
      artisan: "Artisan Studio 5",
      price: 270,
      tags: ["Handmade", "Sustainable"],
      image: "/hero/hero1-Photoroom.png",
      category: "Category 5",
      rating: 4.2,
      isNew: true,
    },
    {
      id: 6,
      name: "Artisan Top 6",
      artisan: "Artisan Studio 6",
      price: 350,
      tags: ["Limited Edition"],
      image: "/hero/hero1-Photoroom.png",
      category: "Category 6",
      rating: 4.1,
      isNew: false,
    },
    {
      id: 7,
      name: "Artisan Skirt 7",
      artisan: "Artisan Studio 7",
      price: 200,
      tags: ["Handmade", "Limited Edition"],
      image: "/hero/hero1-Photoroom.png",
      category: "Category 7",
      rating: 3.9,
      isNew: false,
    },
    {
      id: 8,
      name: "Artisan Accessory 8",
      artisan: "Artisan Studio 8",
      price: 410,
      tags: ["Sustainable"],
      image: "/hero/hero1-Photoroom.png",
      category: "Category 8",
      rating: 4.7,
      isNew: false,
    },
    {
      id: 9,
      name: "Artisan Dress 9",
      artisan: "Artisan Studio 9",
      price: 290,
      tags: ["Handmade", "Sustainable"],
      image: "/hero/hero1-Photoroom.png",
      category: "Category 9",
      rating: 4.3,
      isNew: true,
    },
    {
      id: 10,
      name: "Artisan Top 10",
      artisan: "Artisan Studio 10",
      price: 370,
      tags: ["Sustainable", "Limited Edition"],
      image: "/placeholder.svg",
      category: "Category 10",
      rating: 4.6,
      isNew: false,
    },
    {
      id: 11,
      name: "Artisan Skirt 11",
      artisan: "Artisan Studio 11",
      price: 190,
      tags: ["Handmade"],
      image: "/placeholder.svg",
      category: "Category 11",
      rating: 3.8,
      isNew: false,
    },
    {
      id: 12,
      name: "Artisan Accessory 12",
      artisan: "Artisan Studio 12",
      price: 450,
      tags: ["Handmade", "Limited Edition"],
      image: "/placeholder.svg",
      category: "Category 12",
      rating: 4.9,
      isNew: false,
    },
  ];

  const [sortBy, setSortBy] = useState("name");
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [gridView, setGridView] = useState(true);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleSort = (sort: string) => {
    setSortBy(sort);
    // Implement sorting logic here
  };

  const handleFilter = (tag: string) => {
    setFilterTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    // Implement filtering logic here
  };

  const handleAddToCart = (productId: number) => {
    setCartItems((prev) => [...prev, productId]);
  };

  const toggleMobileFilter = () => {
    setMobileFilterOpen(!mobileFilterOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar
          sortBy={sortBy}
          filterTags={filterTags}
          cartItems={cartItems}
          onSort={handleSort}
          onFilter={handleFilter}
          setGridView={setGridView}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Button
          variant="default"
          onClick={toggleMobileFilter}
          className="fixed top-64 -left-4 z-50 w-12 h-12 rounded-r-full bg-navy-900/75"
        >
          <ArrowRight />
        </Button>
        <MobileSidebar
          isOpen={mobileFilterOpen}
          onClose={toggleMobileFilter}
          sortBy={sortBy}
          filterTags={filterTags}
          cartItems={cartItems}
          onSort={handleSort}
          onFilter={handleFilter}
          setGridView={setGridView}
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Explore Artisan Products</h1>
        <ProductsGrid products={products} gridView={gridView} />
      </div>
    </div>
  );
};

export default ExplorePage;
