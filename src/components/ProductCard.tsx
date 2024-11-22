/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  isNew: boolean;
  image: string;
  description?: string;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onFavorite?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onFavorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavorite?.(product);
  };

  const calculateDiscountedPrice = () => {
    if (!product.discount) return product.price;
    return product.price * (1 - product.discount / 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay with actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/20 flex items-end justify-center p-4"
              >
                <Button
                  onClick={() => onAddToCart?.(product)}
                  className="w-full bg-white hover:bg-gray-100 text-black mb-4"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-black text-white">New</Badge>
            )}
            {product.discount && (
              <Badge className="bg-red-500 text-white">
                -{product.discount}%
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'
              }`}
            />
          </motion.button>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {product.category}
              </p>
            </div>
            <div className="text-right">
              {product.discount ? (
                <div className="space-y-1">
                  <p className="text-sm line-through text-gray-400">
                    ${product.price}
                  </p>
                  <p className="font-medium text-red-500">
                    ${calculateDiscountedPrice().toFixed(2)}
                  </p>
                </div>
              ) : (
                <p className="font-medium">${product.price}</p>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300 fill-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              ({product.rating})
            </span>
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;