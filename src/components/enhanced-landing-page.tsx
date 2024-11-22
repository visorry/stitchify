"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Heart,
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Scissors,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import ModernFashionLanding from "./LandingComponents";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
}) => (
  <span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 ${className}`}
  >
    {children}
  </span>
);
export function LandingPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentSection(index);
          }
        },
        { threshold: 0.5 }
      );
    });

    sectionsRef.current.forEach((section, index) => {
      if (section) observers[index].observe(section);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const sections = [
    {
      title: "Craft Your Story",
      subtitle: "Where Creativity Meets Community",
      icon: Heart,
      color: "from-violet-600 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navigation */}
      <ModernFashionLanding />

      {/* Feature Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          ref={(el) => {
            if (el) sectionsRef.current[index] = el;
          }}
          className="min-h-screen flex items-center justify-center relative py-24"
        >
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
                  className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${section.color} mb-8`}
                >
                  <section.icon className="h-12 w-12 text-white" />
                </motion.div>
                <motion.h2
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="text-6xl md:text-7xl font-black mb-6"
                >
                  {section.title}
                </motion.h2>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-2xl text-gray-600 dark:text-gray-300"
                >
                  {section.subtitle}
                </motion.p>
              </div>
              <motion.div
                className="relative h-96"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {/* Placeholder for section-specific interactive content */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-3xl overflow-hidden">
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
      ))}

      {/* Call to Action */}
      <section className="min-h-screen flex items-center justify-center relative py-24 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6 text-center"
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

      {/* Fixed Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {sections.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSection === index
                ? "bg-purple-600"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </div>
      <footer className="bg-black text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Newsletter Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Join the Artisan Community
              </h3>
              <p className="text-xl mb-8 text-white/80">
                Get exclusive updates, early access, and special offers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-white text-black rounded-full px-8 py-4 hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-2xl font-bold">
                <Scissors className="w-8 h-8" />
                ARTISAN
              </div>
              <p className="text-white/60">
                Crafting unique pieces that tell stories through sustainable
                fashion.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  "Shop",
                  "About Us",
                  "Sustainability",
                  "Artisan Stories",
                  "Size Guide",
                  "Care Instructions",
                ].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-white/60 hover:text-white"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <a href="#">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>123 Artisan Street, Fashion District, NY 10001</span>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>hello@artisan.com</span>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-lg font-bold mb-6">Atelier Hours</h4>
              <ul className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
                  { day: "Sunday", hours: "By Appointment" },
                ].map((schedule) => (
                  <li key={schedule.day} className="text-white/60">
                    <span className="block font-medium text-white">
                      {schedule.day}
                    </span>
                    <span>{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © 2024 ARTISAN. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-white/60">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.button>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
