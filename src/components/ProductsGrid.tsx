import React from "react";
import { AnimatePresence } from "framer-motion";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
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
    className={`grid gap-8 ${
      gridView ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
    }`}
  >
    <AnimatePresence>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </AnimatePresence>
  </div>
);
