'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

// Mock data for cart items
const initialCartItems = [
  { id: 1, name: 'Handcrafted Silk Scarf', price: 89, quantity: 1, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Sustainable Linen Dress', price: 159, quantity: 2, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Artisan Leather Bag', price: 199, quantity: 1, image: '/placeholder.svg?height=200&width=200' },
]

export function CartPageComponent() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [progress, setProgress] = useState(0)

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      ).filter(item => item.quantity > 0)
    )
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const freeShippingThreshold = 300
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - totalPrice)

  useEffect(() => {
    setProgress((totalPrice / freeShippingThreshold) * 100)
  }, [totalPrice])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-6 md:p-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-8 text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Your ARTISAN Cart
          </span>
        </motion.h1>

        <AnimatePresence mode="wait">
          {cartItems.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center p-12">
                <CardContent className="flex flex-col items-center">
                  <ShoppingBag className="w-24 h-24 mb-6 text-gray-400" />
                  <p className="text-3xl font-semibold mb-4">Your cart is empty</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Discover our handcrafted pieces and fill it with unique fashion</p>
                  <Button size="lg" className="text-lg px-8 py-6">
                    Continue Shopping
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="filled"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Cart Summary</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                      >
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                        <div className="flex-grow">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="rounded-full"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="rounded-full"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, -item.quantity)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </CardContent>
                <Separator className="my-4" />
                <CardFooter className="flex flex-col gap-4">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress to Free Shipping</span>
                      <span className="text-sm font-medium">${totalPrice.toFixed(2)} / ${freeShippingThreshold}</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    {remainingForFreeShipping > 0 ? (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Add ${remainingForFreeShipping.toFixed(2)} more to get free shipping!
                      </p>
                    ) : (
                      <p className="text-sm text-green-500 font-medium mt-2">
                        You&apos;ve unlocked free shipping!
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                      Total: ${totalPrice.toFixed(2)}
                    </div>
                    <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}