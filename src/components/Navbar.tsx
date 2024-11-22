"use client";

import { useState, useEffect } from "react";
import { Home, Search, ShoppingBag, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;


    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 10);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const navigationItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Explore", href: "/explore", icon: Search },
    { name: "Sell", href: "/sell", icon: ShoppingBag },
    { name: "Community", href: "/community", icon: Users },
  ];

  if (!mounted) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg transform -translate-y-2"
            : "bg-white transform translate-y-0"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Animated Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 transition-all duration-500 flex items-center group"
                aria-label="Home"
              >
                <svg
                  className="h-8 w-auto transform group-hover:rotate-180 transition-all duration-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-purple-600"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-purple-600"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-purple-600"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#9333EA" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>

            <div className="flex items-center">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-4">
                <div className="relative rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
                  <div className="flex items-center space-x-1 px-4 py-2 bg-white rounded-full">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="relative px-3 py-2 text-sm font-medium text-gray-800 transition-all duration-300"
                        onMouseEnter={() => setActiveItem(item.name)}
                        onMouseLeave={() => setActiveItem("")}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {activeItem === item.name && (
                          <span className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full -z-0 animate-fade-in" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>

            {/* User Menu & Sign Up Button */}
            <div className="flex items-center space-x-4">
              <Button
                variant="default"
                className="rounded-full px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>
      <footer
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden"
        role="navigation"
      >
        <nav className="flex justify-around items-center h-16">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center text-sm text-gray-700 hover:text-indigo-600"
            >
              <item.icon className="w-6 h-6 mb-1" />
              {item.name}
            </Link>
          ))}
        </nav>
      </footer>
    </>
  );
}