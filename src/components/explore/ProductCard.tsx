/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    artisan: string;
    price: number;
    tags: string[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    whileHover={{ y: -10 }}
    className="group relative"
  >
    <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
      <img
        src="/api/placeholder/600/750"
        alt={product.name}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
      <button className="absolute top-4 right-4 bg-white dark:bg-black text-black dark:text-white p-2 rounded-full">
        <Heart className="w-5 h-5" />
      </button>
    </div>
    <div className="mt-4">
      <h4 className="text-lg font-semibold">{product.name}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {product.artisan}
      </p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xl font-bold">${product.price}</span>
        <div className="flex gap-2 flex-wrap">
          {product.tags.map((tag) => (
            <Badge
              key={tag}
              className="bg-gradient-to-br from-purple-500 to-pink-500 text-white 
                 shadow-[3px_3px_0px_#6B46C1] hover:shadow-[4px_4px_0px_#805AD5] 
                 hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProductCard;
