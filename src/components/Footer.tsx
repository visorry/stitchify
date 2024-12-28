import { Scissors, Instagram, Twitter, Facebook, Youtube, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div>
      <footer className="bg-black text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Newsletter Section */}
          <div className="mb-24">
            <div className="bg-gradient-to-r from-navy-600 to-emerald-600 rounded-3xl p-12 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Subscribe to our newsletter
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
            </div>
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
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
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
                  <li
                    key={item}
                    className="flex items-center gap-2 text-white/60 hover:text-white"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <a href="#">{item}</a>
                  </li>
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
        </div>
      </footer>
    </div>
  );
}
