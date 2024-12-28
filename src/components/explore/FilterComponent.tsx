"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface FilterComponentProps {
  categories: string[]
  materials: string[]
  styles: string[]
  priceRange: [number, number]
  selectedCategories: string[]
  selectedMaterials: string[]
  selectedStyles: string[]
  selectedPriceRange: [number, number]
  onCategoryChange: (category: string) => void
  onMaterialChange: (material: string) => void
  onStyleChange: (style: string) => void
  onPriceRangeChange: (range: [number, number]) => void
  onClearFilters: () => void
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  categories,
  materials,
  styles,
  priceRange,
  selectedCategories,
  selectedMaterials,
  selectedStyles,
  selectedPriceRange,
  onCategoryChange,
  onMaterialChange,
  onStyleChange,
  onPriceRangeChange,
  onClearFilters,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <DialogTitle className="text-2xl font-bold mb-4">Filters</DialogTitle>
      <DialogDescription className="mb-6">
        Refine your search with our filter options.
      </DialogDescription>
      <div className="space-y-6">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger className="text-lg font-semibold">Categories</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => onCategoryChange(category)}
                    />
                    <Label htmlFor={`category-${category}`} className="text-sm">{category}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="materials">
            <AccordionTrigger className="text-lg font-semibold">Materials</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2">
                {materials.map((material) => (
                  <div key={material} className="flex items-center space-x-2">
                    <Checkbox
                      id={`material-${material}`}
                      checked={selectedMaterials.includes(material)}
                      onCheckedChange={() => onMaterialChange(material)}
                    />
                    <Label htmlFor={`material-${material}`} className="text-sm">{material}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="styles">
            <AccordionTrigger className="text-lg font-semibold">Styles</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-2">
                {styles.map((style) => (
                  <div key={style} className="flex items-center space-x-2">
                    <Checkbox
                      id={`style-${style}`}
                      checked={selectedStyles.includes(style)}
                      onCheckedChange={() => onStyleChange(style)}
                    />
                    <Label htmlFor={`style-${style}`} className="text-sm">{style}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="text-lg font-semibold">Price Range</AccordionTrigger>
            <AccordionContent>
              <Slider
                min={priceRange[0]}
                max={priceRange[1]}
                step={10}
                value={selectedPriceRange}
                onValueChange={onPriceRangeChange}
                className="mt-2"
              />
              <div className="flex justify-between mt-2 text-sm font-medium">
                <span>${selectedPriceRange[0]}</span>
                <span>${selectedPriceRange[1]}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button onClick={onClearFilters} variant="outline" className="w-full">
          Clear All Filters
        </Button>
      </div>
    </div>
  )
}

export default FilterComponent

