import React from "react";
import { Button } from "@/components/ui/button";

interface CategoriesProps {
  categories: { name: string; count: number }[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => (
  <div className="mb-12 overflow-x-auto my-">
    <div className="flex gap-4 min-w-max">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant={selectedCategory === category.name ? "default" : "outline"}
          onClick={() => onSelectCategory(category.name)}
          className="rounded-full"
        >
          {category.name}
          <span className="ml-2 text-sm opacity-70">({category.count})</span>
        </Button>
      ))}
    </div>
  </div>
);
