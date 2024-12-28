"use client";

import { Award, Brush, Gem, Users } from 'lucide-react';
import Image from "next/image";

const creators = [
  {
    id: 1,
    name: "Emma Thompson",
    specialty: "Vintage Embroidery",
    followers: "12.4K",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Marcus Chen",
    specialty: "Contemporary Fashion",
    followers: "9.8K",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    specialty: "Sustainable Design",
    followers: "15.2K",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  }
];

const stats = [
  { icon: Users, label: "Active Creators", value: "2,500+" },
  { icon: Gem, label: "Unique Items", value: "15,000+" },
  { icon: Award, label: "Quality Score", value: "4.9/5" },
  { icon: Brush, label: "Categories", value: "50+" }
];

export function CreatorShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Top Creators</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the talented artisans behind our unique pieces. Each creator brings their own style and expertise to our marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {creators.map((creator) => (
            <div key={creator.id} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{creator.name}</h3>
                  <p className="text-gray-600 text-sm">{creator.specialty}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Followers</p>
                  <p className="font-bold">{creator.followers}</p>
                </div>
                <button className="px-6 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium
                                 hover:bg-emerald-100 transition-colors">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="font-bold text-2xl mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}