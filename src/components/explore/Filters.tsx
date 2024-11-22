import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Palette, Leaf, ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface FiltersProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

const Filters: React.FC<FiltersProps> = ({
  priceRange,
  setPriceRange,
  selectedTags,
  setSelectedTags,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>(priceRange);
  const [localTags, setLocalTags] = useState<string[]>(selectedTags);

  const MIN_PRICE = 0;
  const MAX_PRICE = 1000;

  useEffect(() => {
    setLocalPriceRange(priceRange);
    setLocalTags(selectedTags);
  }, [priceRange, selectedTags]);

  const handlePriceChange = (newValues: number[]) => {
    setLocalPriceRange([newValues[0], newValues[1]]);
  };

  const handleTagChange = (tag: string) => {
    setLocalTags(
      localTags.includes(tag)
        ? localTags.filter((t) => t !== tag)
        : [...localTags, tag]
    );
  };

  const handleApplyFilters = () => {
    setPriceRange(localPriceRange);
    setSelectedTags(localTags);
  };

  const handleResetFilters = () => {
    const defaultPriceRange: [number, number] = [MIN_PRICE, MAX_PRICE];
    setLocalPriceRange(defaultPriceRange);
    setPriceRange(defaultPriceRange);
    setLocalTags([]);
    setSelectedTags([]);
  };

  const sustainabilityTags = [
    "Eco-friendly",
    "Recycled",
    "Organic",
    "Fair Trade"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Refine Your Search</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          {isOpen ? (
            <>
              Hide <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show <ChevronDown className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {/* Price Range Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold">Price Range</h3>
            </div>
            <div className="px-2">
              <div className="flex justify-between mb-2 text-sm text-gray-600 dark:text-gray-400">
                <span>${localPriceRange[0]}</span>
                <span>${localPriceRange[1]}</span>
              </div>
              <Slider
                value={[localPriceRange[0], localPriceRange[1]]}
                min={MIN_PRICE}
                max={MAX_PRICE}
                step={10}
                onValueChange={handlePriceChange}
                className="mt-6"
              />
            </div>
          </div>

          {/* Sustainability Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold">Sustainability</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {sustainabilityTags.map((tag) => (
                <motion.div
                  key={tag}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-2"
                >
                  <Checkbox
                    id={tag}
                    checked={localTags.includes(tag)}
                    onCheckedChange={() => handleTagChange(tag)}
                    className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                  />
                  <Label
                    htmlFor={tag}
                    className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
                  >
                    {tag}
                  </Label>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <Button
              onClick={handleApplyFilters}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-full"
            >
              Apply Filters
            </Button>
            <Button
              onClick={handleResetFilters}
              variant="outline"
              className="flex items-center gap-2 rounded-full border-gray-300 dark:border-gray-700"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Filters;