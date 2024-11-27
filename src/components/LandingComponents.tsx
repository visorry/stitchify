import React, { useRef, useState } from "react";
import {
  ShirtIcon,
  Scissors,
  Sparkles as Star,
  Heart,
  Palette,
  Leaf,
  Square as Cube,
  Hammer,
} from "lucide-react";
import { motion, useScroll } from "framer-motion";
import HeroSection from "./hero-section";
// Define types for the props of the BentoCard component
interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  icon: Icon,
  gradient,
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`p-6 rounded-3xl ${gradient} backdrop-blur-lg flex flex-col justify-between h-full`}
  >
    <div>
      <Icon className="w-8 h-8 mb-4 text-white" />
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  </motion.div>
);

export default function ModernFashionLanding() {
  const [darkMode] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const marqueeText =
    "HANDMADE WITH LOVE • SUSTAINABLE FASHION • UNIQUE DESIGNS • ";

  return (
    <div className={`${darkMode ? "dark bg-black" : "bg-white"}`}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden bg-cover bg-center"
      >
        <HeroSection />
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                x: ["0vw", "100vw"],
                y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Star className="text-purple-500/20 w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Running Text Section */}
      <div className="py-8 bg-black text-white overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap text-4xl font-bold"
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-4">
                {marqueeText}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bento Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-6xl font-bold mb-12 text-center">Our Craft</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <BentoCard
              title="Sustainable Materials"
              description="We source only the finest eco-friendly fabrics"
              icon={Palette}
              gradient="bg-gradient-to-br from-purple-600 to-pink-600"
            />
          </div>
          <BentoCard
            title="Handcrafted"
            description="Every stitch tells a story"
            icon={Scissors}
            gradient="bg-gradient-to-br from-blue-600 to-purple-600"
          />
          <BentoCard
            title="Limited Edition"
            description="Unique pieces for unique individuals"
            icon={Star}
            gradient="bg-gradient-to-br from-pink-600 to-orange-600"
          />
          <div className="md:col-span-2">
            <BentoCard
              title="Community Driven"
              description="Join our growing family of artisans and fashion enthusiasts"
              icon={Heart}
              gradient="bg-gradient-to-br from-orange-600 to-yellow-600"
            />
          </div>
          {/* New Cards */}
          <BentoCard
            title="Eco Friendly"
            description="Green practices in everything we do"
            icon={Leaf}
            gradient="bg-gradient-to-br from-green-600 to-teal-600"
          />
          <BentoCard
            title="Innovative Design"
            description="Modern techniques meet classic beauty"
            icon={Cube}
            gradient="bg-gradient-to-br from-teal-600 to-blue-600"
          />
          <BentoCard
            title="Artisan Crafted"
            description="A timeless commitment to quality"
            icon={Hammer}
            gradient="bg-gradient-to-br from-red-600 to-yellow-600"
          />
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-24 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-7xl font-black mb-6">Latest Collection</h2>
            <p className="text-xl">Discover our newest handcrafted pieces</p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -20 }}
                className="rounded-3xl overflow-hidden bg-white dark:bg-gray-900 p-4"
              >
                <div className="aspect-square rounded-2xl bg-gray-100 dark:bg-gray-800 mb-4 flex items-center justify-center">
                  <ShirtIcon className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Artisan Piece {item}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Limited Edition
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-purple-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
