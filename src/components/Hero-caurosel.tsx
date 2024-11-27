import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: "https://picsum.photos/1200/800?1",
    alt: "Sustainable Fashion Spotlight",
    title: "Sustainable Fashion",
    description: "Eco-Friendly Collection",
    tag: "Exclusive Collections",
  },
  {
    src: "https://picsum.photos/1200/800?2",
    alt: "Upcycled Fashion Spotlight",
    title: "Upcycled Apparel",
    description: "Reimagined Pieces",
    tag: "Limited Edition",
  },
  {
    src: "https://picsum.photos/1200/800?3",
    alt: "Designer Spotlight",
    title: "Designer Exclusives",
    description: "Showcase of Creativity",
    tag: "New Arrivals",
  },
];

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative lg:col-span-2 lg:row-span-2 overflow-hidden rounded-3xl"
    >
      {/* Image Section */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-gray-900">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{image.title}</p>
                  <p className="text-lg font-semibold">{image.description}</p>
                </div>
                <div className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  {image.tag}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10 hover:bg-purple-600"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10 hover:bg-pink-600"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </motion.div>
  );
}
