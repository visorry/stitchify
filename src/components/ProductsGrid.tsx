import React from "react";
import { AnimatePresence } from "framer-motion";
import ProductCard from "./explore/ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  artisan: string;
  tags: string[];
  category: string;
  rating: number;
  isNew: boolean;
  image: string;
}

interface ProductsGridProps {
  products: Product[];
  gridView: boolean;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  gridView,
}) => (
  <div
    className={`grid gap-6 ${
      gridView
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
        : "grid-cols-1"
    }`}
  >
    <AnimatePresence>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </AnimatePresence>
  </div>
);
