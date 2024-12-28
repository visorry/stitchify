"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, Cloud, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

// Define types for cart items
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const WhimsicalCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Magic Cloud Pillow",
      price: 42,
      quantity: 1,
      image: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Star Dust Blanket",
      price: 38,
      quantity: 1,
      image: "/api/placeholder/150/150"
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

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ShoppingBag className="w-12 h-12 text-purple-400" />
            </motion.div>
          </div>
          <h1 className="text-3xl font-light tracking-wide">your magical cart</h1>
          <div className="text-sm text-purple-400 mt-2">
            {cartItems.length} treasures inside
          </div>
        </motion.div>

        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-none shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-1 -right-1"
                      >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-lg font-light">{item.name}</h3>
                      <div className="text-purple-500 font-mono mt-1">
                        ${item.price}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center"
                      >
                        <Minus className="w-3 h-3 text-purple-600 dark:text-purple-300" />
                      </motion.button>
                      <span className="w-8 text-center font-light">{item.quantity}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3 text-purple-600 dark:text-purple-300" />
                      </motion.button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12"
        >
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-none">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-light">total</span>
                <span className="text-2xl font-light">${total}</span>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full h-12 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white rounded-full font-light tracking-wide">
                  make it yours
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="fixed bottom-4 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Cloud className="w-6 h-6 text-purple-300" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhimsicalCart;
