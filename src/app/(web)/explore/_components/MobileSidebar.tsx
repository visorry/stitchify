import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  sortBy: string;
  filterTags: string[];
  cartItems: number[];
  onSort: (sort: string) => void;
  onFilter: (tag: string) => void;
  setGridView: (isGrid: boolean) => void;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  ...sidebarProps
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <Sidebar {...sidebarProps} />
      </SheetContent>
    </Sheet>
  );
};

