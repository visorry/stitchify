"use client";

import { ShoppingBag } from "lucide-react";
import { CartItem } from "./components/CartItem";
import { CartSummary } from "./components/CartSummary";
import { CartItemType } from "./types";

const cartItems: CartItemType[] = [
  {
    id: 1,
    name: "Elegance Embodied Dress",
    price: 159.99,
    originalPrice: 199.99,
    quantity: 1,
    stock: 3,
    discount: 20,
    size: "M",
    image:
      "https://images.squarespace-cdn.com/content/v1/635d7c2bcac71a07377304c0/c8c949f9-78c3-451d-bd03-892ea6658d52/All-you-need-to-know-about-embroidery-on-clothes-as-a-beginner-of-hand-embroidery-5.jpg?format=1500w",
  },
  {
    id: 2,
    name: "Simplicity Blouse",
    price: 129.99,
    quantity: 2,
    stock: 8,
    discount: 0,
    size: "S",
    image:
      "https://i.etsystatic.com/18058357/r/il/08abfd/3114460969/il_1080xN.3114460969_bno8.jpg",
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 200 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-12">
      <div className="flex items-center gap-4 mb-8">
        <ShoppingBag className="w-8 h-8 text-emerald-500" />
        <h1 className="text-4xl font-script font-bold">Your Cart</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <CartSummary subtotal={subtotal} shipping={shipping} total={total} />
      </div>
    </div>
  );
}
