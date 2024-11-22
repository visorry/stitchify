import React from "react";
import { motion } from "framer-motion";
import { Category } from "@/types/types";
import { Crown, Sparkles, Star, Tag } from "lucide-react";

interface CategoriesProps {
  activeCategory: number;
  setActiveCategory: (id: number) => void;
}

const categories: Category[] = [
  { id: 1, name: "Dresses", icon: Crown },
  { id: 2, name: "Tops", icon: Star },
  { id: 3, name: "Bottoms", icon: Tag },
  { id: 4, name: "Accessories", icon: Sparkles },
];

const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  setActiveCategory,
}) => (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.02 }}
          className={`p-8 rounded-3xl ${
            activeCategory === category.id
              ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
              : "bg-gray-100 dark:bg-gray-800"
          }`}
          onClick={() => setActiveCategory(category.id)}
        >
          <category.icon className="w-8 h-8 mb-4" />
          <h3 className="text-xl font-bold">{category.name}</h3>
          <p className="text-sm opacity-80">Handcrafted with love</p>
        </motion.button>
      ))}
    </div>
  </section>
);

export default Categories;
