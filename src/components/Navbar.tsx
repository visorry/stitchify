"use client";

import { useState, useEffect } from "react";
import { Home, Search, ShoppingBag, Users, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const { theme, setTheme } = useTheme();

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
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-[1400px] ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg rounded-full"
            : "bg-background rounded-full"
        }`}
        role="banner"
      >
        <div className="mx-auto p-1 bg-gradient-to-r from-indigo-700 via-indigo-500 to-emerald-500 rounded-full animate-gradient-x">
          <div className="flex items-center justify-between h-16 px-4 md:px-8 bg-background rounded-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary">
                Logo
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-indigo-700"
                      : "text-gray-800 hover:text-indigo-500"
                  }`}
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem("")}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeItem === item.name && (
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-emerald-100 rounded-full -z-0 animate-fade-in" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Search Bar (Visible on small and large screens) */}
            <div className="flex-grow max-w-md mx-4">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 shadow-none"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Theme Switcher and Login Button */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button
                variant="curvy"
                className="px-4 py-2 text-sm hidden md:block"
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
      </header>

      <footer
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-background border-t border-border w-[95%] max-w-[1400px] rounded-full shadow-md md:hidden"
        role="navigation"
      >
        <div className="p-1 bg-gradient-to-r from-indigo-700 via-indigo-500 to-emerald-500 rounded-full">
          <nav className="flex justify-around items-center h-16 bg-background rounded-full">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } hover:text-indigo-500`}
              >
                <item.icon className="w-6 h-6 mb-1" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
