import "./App.css";

// src/App.js
import React, { useState } from "react";
import {
  BeakerIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Dummy data for products and categories
const categories = [
  { name: "Books", icon: <BookOpenIcon className="w-6 h-6" /> },
  { name: "Electronics", icon: <ComputerDesktopIcon className="w-6 h-6" /> },
  { name: "Furniture", icon: <BeakerIcon className="w-6 h-6" /> }, // Placeholder icon
  { name: "Clothing", icon: <BeakerIcon className="w-6 h-6" /> }, // Placeholder icon
  {
    name: "Miscellaneous",
    icon: <AdjustmentsHorizontalIcon className="w-6 h-6" />,
  },
];

const dummyProducts = [
  {
    id: 1,
    name: "Calculus Textbook",
    price: 250,
    image: "https://via.placeholder.com/400x300?text=Calculus+Textbook",
    category: "Books",
  },
  {
    id: 2,
    name: "Dell XPS 13 Laptop",
    price: 45000,
    image: "https://via.placeholder.com/400x300?text=Dell+XPS+13",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Office Chair",
    price: 1200,
    image: "https://via.placeholder.com/400x300?text=Office+Chair",
    category: "Furniture",
  },
  {
    id: 4,
    name: "Introduction to C++",
    price: 300,
    image: "https://via.placeholder.com/400x300?text=C%2B%2B+Book",
    category: "Books",
  },
  {
    id: 5,
    name: "iPhone 13 Pro",
    price: 65000,
    image: "https://via.placeholder.com/400x300?text=iPhone+13+Pro",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Wooden Study Table",
    price: 2500,
    image: "https://via.placeholder.com/400x300?text=Study+Table",
    category: "Furniture",
  },
  {
    id: 7,
    name: "Casual T-shirt",
    price: 150,
    image: "https://via.placeholder.com/400x300?text=T-shirt",
    category: "Clothing",
  },
  {
    id: 8,
    name: "Physics Lab Coat",
    price: 200,
    image: "https://via.placeholder.com/400x300?text=Lab+Coat",
    category: "Clothing",
  },
  {
    id: 9,
    name: "Wireless Headphones",
    price: 1500,
    image: "https://via.placeholder.com/400x300?text=Headphones",
    category: "Electronics",
  },
  {
    id: 10,
    name: "Electric Kettle",
    price: 800,
    image: "https://via.placeholder.com/400x300?text=Kettle",
    category: "Miscellaneous",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter products based on search term and category
  const filteredProducts = dummyProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="/"
            className="text-3xl font-extrabold text-blue-600 tracking-tight"
          >
            becho.
          </a>
          <nav>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Post an Ad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero & Search */}
        <div className="text-center py-12 bg-white rounded-xl shadow-lg mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
            Find Your Next Gem
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore a world of second-hand goods from fellow SMIT students.
          </p>
          <div className="relative max-w-xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for books, electronics, and more..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeCategory === "All"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category.name
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Latest Listings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 truncate">
                      {product.name}
                    </h3>
                    <p className="text-blue-600 font-bold text-xl mt-1">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Category:{" "}
                      <span className="font-medium text-gray-700">
                        {product.category}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products found. Try a different search or category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-extrabold text-blue-400 tracking-tight mb-2">
            becho.
          </p>
          <p className="text-gray-400">
            &copy; 2025 becho. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              About Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
