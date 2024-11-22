/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingCart, Trash2, ArrowRight, Heart, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Artisan Leather Bag",
      price: 299.99,
      quantity: 1,
      image: "/api/placeholder/200/200",
      color: "Cognac",
      size: "Medium"
    },
    {
      id: 2,
      name: "Handwoven Scarf",
      price: 89.99,
      quantity: 2,
      image: "/api/placeholder/200/200",
      color: "Indigo",
      size: "One Size"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4">Your Cart</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <ShoppingCart className="w-5 h-5 mr-2" />
            <span>{cartItems.length} items</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">
                              Color: {item.color} | Size: {item.size}
                            </p>
                            <p className="text-2xl font-bold text-purple-600">
                              ${item.price}
                            </p>
                          </div>
                          <div className="flex gap-4">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <Trash2 className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-gray-400 hover:text-purple-500"
                            >
                              <Heart className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                            >
                              <Minus className="w-4 h-4" />
                            </motion.button>
                            <span className="w-12 text-center">{item.quantity}</span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                            >
                              <Plus className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                      <span className="font-bold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                      <span className="font-bold">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Tax</span>
                      <span className="font-bold">${tax.toFixed(2)}</span>
                    </div>
                    <div className="pt-4 mt-4 border-t">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Button className="w-full h-14 text-lg bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                      Checkout
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="outline" className="w-full h-14 text-lg rounded-full">
                      Continue Shopping
                    </Button>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <RefreshCw className="w-4 h-4" />
                    <span>30-Day Return Policy</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

