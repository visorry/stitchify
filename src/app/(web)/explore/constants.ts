export const PRODUCTS = [
    {
      id: 1,
      name: "Artisan Denim Jacket",
      price: 299,
      category: "Outerwear",
      rating: 4.8,
      isNew: true,
      isSustainable: true,
      image: "/api/placeholder/400/500",
    },
    ...Array.from({ length: 11 }, (_, i) => ({
      id: i + 2,
      name: `Handcrafted Piece ${i + 2}`,
      price: Math.floor(Math.random() * 300) + 100,
      category: ["Dresses", "Tops", "Bottoms", "Accessories"][
        Math.floor(Math.random() * 4)
      ],
      rating: (Math.random() * 2 + 3).toFixed(1),
      isNew: Math.random() > 0.7,
      isSustainable: Math.random() > 0.5,
      image: "/api/placeholder/400/500",
    })),
  ];
  
  export const CATEGORIES = [
    { name: "All", count: PRODUCTS.length },
    { name: "New Arrivals", count: PRODUCTS.filter((p) => p.isNew).length },
    { name: "Sustainable", count: PRODUCTS.filter((p) => p.isSustainable).length },
    { name: "Outerwear", count: PRODUCTS.filter((p) => p.category === "Outerwear").length },
    { name: "Dresses", count: PRODUCTS.filter((p) => p.category === "Dresses").length },
    { name: "Tops", count: PRODUCTS.filter((p) => p.category === "Tops").length },
    { name: "Bottoms", count: PRODUCTS.filter((p) => p.category === "Bottoms").length },
    { name: "Accessories", count: PRODUCTS.filter((p) => p.category === "Accessories").length },
  ];
  