"use client";

import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

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

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <section className="min-h-screen flex items-center justify-center relative py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`inline-block p-4 rounded-2xl bg-gradient-to-r from-navy-600 to-emerald-600 mb-8`}
              >
                <Heart className="h-12 w-12 text-white" />
              </motion.div>
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-6xl md:text-7xl font-black mb-6"
              >
                Craft Your Story
              </motion.h2>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl text-gray-600 dark:text-gray-300"
              >
                Where Creativity Meets Community
              </motion.p>
            </div>
            <motion.div
              className="relative h-96"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Placeholder for section-specific interactive content */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-200 to-emerald-200 dark:from-navy-900 dark:to-emerald-900 rounded-3xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"
                  animate={{
                    x: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="min-h-screen flex items-center justify-center relative py-24 bg-gradient-to-br from-navy-100 to-emerald-100 dark:from-navy-950 dark:to-emerald-950">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl text-center"
        >
          <h2 className="text-7xl md:text-8xl font-black mb-12">
            <GradientText>Join Our Creative Community</GradientText>
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="h-20 px-12 text-2xl bg-black dark:bg-white text-white dark:text-black rounded-full">
              Start Creating Today
              <ArrowRight className="ml-3 h-8 w-8" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default LandingPage;
