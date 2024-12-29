"use client";

import { Gift, Truck } from "lucide-react";
import { useState } from "react";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

export function CartSummary({ subtotal, shipping, total }: CartSummaryProps) {
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="lg:w-[400px] space-y-6">
      <div className="bg-navy-900 text-white p-8 rounded-3xl">
        <h2 className="text-2xl font-script font-bold mb-6">Summary</h2>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-white/80">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80">Shipping</span>
            <span className="font-medium">${shipping.toFixed(2)}</span>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full bg-white/10 rounded-full py-2.5 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-sm bg-emerald-500 px-4 py-1.5 rounded-full hover:bg-emerald-600 transition-colors">
              Apply
            </button>
          </div>

          <div className="h-px bg-white/20" />
          <div className="flex justify-between items-center">
            <span className="font-script text-xl">Total</span>
            <span className="font-script text-2xl">${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-full font-medium">
          Proceed to Checkout
        </button>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Truck className="w-4 h-4" />
            <span>Free shipping on orders over $200</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Gift className="w-4 h-4" />
            <span>Free gift wrapping available</span>
          </div>
        </div>
      </div>

      {/* <div className="p-6 bg-emerald-50/50 rounded-3xl">
        <h3 className="font-script text-xl font-bold mb-4">Need Assistance?</h3>
        <p className="text-gray-600">
          Our style consultants are here to help you make the perfect choice.
        </p>
        <button className="mt-4 w-full py-3 border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors rounded-full font-medium">
          Contact Support
        </button>
      </div> */}
    </div>
  );
}
