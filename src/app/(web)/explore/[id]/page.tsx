"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Share,
  ShoppingBag,
  Star,
  ChevronRight,
  Eye,
  Camera,
  Ruler,
  Instagram,
  Twitter,
  Facebook,
  Link,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
}) => (
  <span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-navy-600 to-emerald-600 ${className}`}
  >
    {children}
  </span>
);

const ProductView = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "Navy", hex: "#000080" },
    { name: "Gray", hex: "#808080" },
    { name: "White", hex: "#FFFFFF" },
  ];

  // Simulated stock data
  const stockData = {
    total: 100,
    remaining: 12,
    recentViews: 45,
    recentPurchases: 8,
  };

  // Size chart data
  const sizeChartData = [
    { size: "XS", chest: "34-36", waist: "28-30", length: "25" },
    { size: "S", chest: "36-38", waist: "30-32", length: "26" },
    { size: "M", chest: "38-40", waist: "32-34", length: "27" },
    { size: "L", chest: "40-42", waist: "34-36", length: "28" },
    { size: "XL", chest: "42-44", waist: "36-38", length: "29" },
  ];

  // Review statistics
  const reviewStats = [
    { rating: 5, count: 85 },
    { rating: 4, count: 20 },
    { rating: 3, count: 8 },
    { rating: 2, count: 4 },
    { rating: 1, count: 3 },
  ];

  // Artist information
  const artist = {
    name: "Sophia Greenberg",
    avatar: "/hero/hero2-Photoroom.png",
    bio: "Innovative fashion designer with a passion for sustainable and unique creations.",
    rating: 4.9,
    totalSales: 1200,
    joinedDate: "2020-05-15",
    socialLinks: {
      instagram: "https://instagram.com/aaa",
      twitter: "https://twitter.com/aa",
      facebook: "https://facebook.com/aa",
      website: "https://sophiagreenberg.com",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>Collection</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-gray-100">
            Artisan Crafted Jacket
          </span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <motion.div
              key={activeImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square rounded-3xl overflow-hidden bg-white dark:bg-gray-800 relative group"
            >
              <img
                src={`/api/placeholder/800/800`}
                alt="Product"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Camera className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveImageIndex(index - 1)}
                  className={`aspect-square rounded-2xl overflow-hidden bg-white dark:bg-gray-800 cursor-pointer ${
                    activeImageIndex === index - 1
                      ? "ring-2 ring-purple-600"
                      : ""
                  }`}
                >
                  <img
                    src={`/api/placeholder/200/200`}
                    alt={`Product view ${index}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <Badge className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-100">
                    New Arrival
                  </Badge>
                  <Badge className="bg-green-100 text-green-600">
                    Eco-Friendly
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsWishlist(!isWishlist)}
                          className={`p-2 rounded-full ${
                            isWishlist
                              ? "bg-pink-100 text-pink-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          <Heart
                            className="w-5 h-5"
                            fill={isWishlist ? "currentColor" : "none"}
                          />
                        </motion.button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {isWishlist
                            ? "Remove from Wishlist"
                            : "Add to Wishlist"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-gray-100 text-gray-600"
                        >
                          <Share className="w-5 h-5" />
                        </motion.button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Share Product</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-2">
                Artisan Crafted Jacket
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="text-gray-600">4.8 (120 reviews)</span>
              </div>
              <div className="flex items-baseline gap-4">
                <GradientText className="text-3xl font-bold">
                  $299.99
                </GradientText>
                <span className="text-gray-500 line-through">$399.99</span>
                <Badge className="bg-red-100 text-red-600">-25%</Badge>
              </div>
            </div>

            {/* Artist Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={artist.avatar} alt={artist.name} />
                  <AvatarFallback>
                    {artist.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{artist.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Star
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                    />
                    <span>{artist.rating}</span>
                    <span>•</span>
                    <span>{artist.totalSales} sales</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{artist.bio}</p>
              <div className="flex items-center gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={artist.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={artist.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={artist.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={artist.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600"
                      >
                        <Link className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Website</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Stock Status */}
            <div className="bg-orange-50 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-orange-600 font-medium">
                  Limited Stock
                </span>
                <span className="text-orange-600 font-bold">
                  {stockData.remaining} left
                </span>
              </div>
              <Progress
                value={(stockData.remaining / stockData.total) * 100}
                className="h-2"
              />
              <div className="flex items-center gap-4 text-sm text-orange-600">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{stockData.recentViews} viewing</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShoppingBag className="w-4 h-4" />
                  <span>{stockData.recentPurchases} purchased recently</span>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Size</h3>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="link" className="text-purple-600">
                      <Ruler className="w-4 h-4 mr-2" />
                      Size Guide
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Size Guide</AlertDialogTitle>
                      <AlertDialogDescription>
                        <table className="w-full mt-4">
                          <thead>
                            <tr className="border-b">
                              <th className="p-2 text-left">Size</th>
                              <th className="p-2 text-left">Chest (in)</th>
                              <th className="p-2 text-left">Waist (in)</th>
                              <th className="p-2 text-left">Length (in)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sizeChartData.map((row) => (
                              <tr key={row.size} className="border-b">
                                <td className="p-2">{row.size}</td>
                                <td className="p-2">{row.chest}</td>
                                <td className="p-2">{row.waist}</td>
                                <td className="p-2">{row.length}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-12 h-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <span className="text-xl font-semibold">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>

            {/* Add to Cart Button */}
            <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-full h-12 w-full py-6 text-lg">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
        </div>

        
      </div>
    </div>
  );
};

export default ProductView;
