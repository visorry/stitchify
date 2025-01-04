"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Grid, List, ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";

interface SidebarProps {
  sortBy: string;
  filterTags: string[];
  cartItems: number[];
  onSort: (sort: string) => void;
  onFilter: (tag: string) => void;
  setGridView: (isGrid: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sortBy,
  filterTags,
  cartItems,
  onSort,
  onFilter,
  setGridView,
}) => {
  const [activeCategory, setActiveCategory] = useState<"men" | "women" | null>(
    null
  );
  const allTags = ["Handmade", "Sustainable", "Limited Edition"];

  return (
    <div className="bg-background p-6 h-screen sticky top-0 overflow-y-auto space-y-8 border-r">
      <h2 className="text-2xl font-semibold mb-6">Filters</h2>

      {/* Curvy Buttons for Categories */}
      <div className="space-y-2">
        <Button
          onClick={() => setActiveCategory("men")}
          variant={activeCategory === "men" ? "curvy2" : "curvy"}
          className="w-full"
        >
          Men
        </Button>
        <Button
          onClick={() => setActiveCategory("women")}
          variant={activeCategory === "women" ? "curvy2" : "curvy"}
          className="w-full"
        >
          Women
        </Button>
      </div>

      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-lg font-medium">Sort By</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <Select value={sortBy} onValueChange={onSort}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select sorting method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="artisan">Artisan</SelectItem>
            </SelectContent>
          </Select>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="text-lg font-medium">Tags</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 space-y-2">
          {allTags.map((tag) => (
            <div key={tag} className="flex items-center space-x-2">
              <Checkbox
                id={tag}
                checked={filterTags.includes(tag)}
                onCheckedChange={() => onFilter(tag)}
              />
              <label
                htmlFor={tag}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {tag}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <div>
        <h3 className="text-lg font-medium mb-2">View</h3>
        <div className="flex space-x-2">
          <Button
            onClick={() => setGridView(true)}
            variant="outline"
            size="icon"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => setGridView(false)}
            variant="outline"
            size="icon"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Button variant="curvy" className="w-full">
        <ShoppingCart className="mr-2 h-4 w-4" />
        Cart
        <Badge variant="secondary" className="ml-2">
          {cartItems.length}
        </Badge>
      </Button>
    </div>
  );
};
