"use client";

import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { CartItemType } from "../types";

export function CartItem({ item }: { item: CartItemType }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex gap-6 p-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-32 h-32 rounded-2xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {item.discount > 0 && (
          <div className="absolute top-2 left-2 bg-emerald-500 px-2 py-1 rounded-full text-xs font-medium">
            -{item.discount}%
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-script font-bold mb-1">{item.name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-emerald-600 font-medium">${item.price}</p>
              {item.originalPrice && (
                <p className="line-through text-sm">${item.originalPrice}</p>
              )}
            </div>
            {item.size && <p className=" text-sm mt-1">Size: {item.size}</p>}
          </div>
          <button
            className="transition-colors p-2
                     hover:bg-red-500 rounded-full group-hover:opacity-100 lg:opacity-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/30 rounded-full px-4 py-2">
            <button
              className="text-emerald-500 hover:text-emerald-600 disabled:opacity-50"
              disabled={item.quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-medium w-8 text-center">{item.quantity}</span>
            <button
              className="text-emerald-500 hover:text-emerald-600 disabled:opacity-50"
              disabled={item.quantity >= item.stock}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <p className="font-script text-lg font-bold">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          {item.stock <= 5 && (
            <span className="text-red-500 text-sm">Only {item.stock} left</span>
          )}
        </div>
      </div>
    </div>
  );
}
