import React, { useState, useEffect } from "react";
import {
  IoMoonOutline,
  IoSunnyOutline,
  IoBookOutline,
  IoLaptopOutline,
  IoBedOutline,
  IoShirtOutline,
  IoHammerOutline,
  IoSearch,
  IoChatbubbleOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// Dummy data for products and categories
const categories = [
  { name: "Books", icon: <IoBookOutline className="w-6 h-6" /> },
  { name: "Electronics", icon: <IoLaptopOutline className="w-6 h-6" /> },
  { name: "Furniture", icon: <IoBedOutline className="w-6 h-6" /> },
  { name: "Clothing", icon: <IoShirtOutline className="w-6 h-6" /> },
  { name: "Services", icon: <IoHammerOutline className="w-6 h-6" /> },
  { name: "Others", icon: <IoHammerOutline className="w-6 h-6" /> },
];

const dummyProducts = [
  {
    id: 1,
    name: "Calculus Textbook",
    price: 250,
    image: "https://images.unsplash.com/photo-1544947953-659978641178",
    category: "Books",
  },
  {
    id: 2,
    name: "Dell XPS 13",
    price: 45000,
    image: "https://images.unsplash.com/photo-1593642702749-bf216b230238",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 1200,
    image: "https://images.unsplash.com/photo-1567538096232-a5241f538350",
    category: "Furniture",
  },
  {
    id: 4,
    name: "Introduction to C++",
    price: 300,
    image: "https://images.unsplash.com/photo-1522204523234-8729aa63e462",
    category: "Books",
  },
  {
    id: 5,
    name: "iPhone 13 Pro",
    price: 65000,
    image: "https://images.unsplash.com/photo-1629367323868-b76962f3b259",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Wooden Study Table",
    price: 2500,
    image: "https://images.unsplash.com/photo-1582268412675-0e6b50e7a250",
    category: "Furniture",
  },
  {
    id: 7,
    name: "Casual T-shirt",
    price: 150,
    image: "https://images.unsplash.com/photo-1521572176451-923f05b0ac92",
    category: "Clothing",
  },
  {
    id: 8,
    name: "Physics Lab Coat",
    price: 200,
    image: "https://images.unsplash.com/photo-1627348967009-42588102a06c",
    category: "Clothing",
  },
  {
    id: 9,
    name: "Wireless Headphones",
    price: 1500,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06a434",
    category: "Electronics",
  },
  {
    id: 10,
    name: "Electric Kettle",
    price: 800,
    image: "https://images.unsplash.com/photo-1622329791480-1a76c6691458",
    category: "Others",
  },
  {
    id: 11,
    name: "Graphic Design Services",
    price: 5000,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    category: "Services",
  },
  {
    id: 12,
    name: "Physics Textbook",
    price: 400,
    image: "https://images.unsplash.com/photo-1544947953-659978641178",
    category: "Books",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const filteredProducts = dummyProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const Logo = () => (
    <div className="flex items-center space-x-0 transition-transform duration-300 transform hover:scale-105">
      <span className="text-3xl font-extrabold text-yellow-500">SM</span>
      <span className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
        kate
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Post an Ad
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Login
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none"
              aria-label="Chat"
            >
              <IoChatbubbleOutline className="w-6 h-6" />
            </button>
            <button
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none"
              aria-label="Notifications"
            >
              <IoNotificationsOutline className="w-6 h-6" />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <IoSunnyOutline className="w-6 h-6" />
              ) : (
                <IoMoonOutline className="w-6 h-6" />
              )}
            </button>
            <button className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero & Search - Modernized */}
        <div className="text-center py-20 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-700 dark:to-gray-900 rounded-3xl shadow-2xl mb-12 transform hover:scale-105 transition-all duration-500">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Find Your Next Gem
          </h1>
          <p className="text-lg text-blue-200 dark:text-gray-400 mb-8 max-w-2xl mx-auto font-light">
            Explore a world of second-hand goods from fellow SMIT students.
          </p>
          <div className="relative max-w-xl mx-auto">
            <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for books, electronics, and more..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-transparent bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-80 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300 shadow-inner"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Section - Modernized */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <button
              onClick={() => setActiveCategory("All")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                activeCategory === "All"
                  ? "bg-blue-600 text-white shadow-xl"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  activeCategory === category.name
                    ? "bg-blue-600 text-white shadow-xl"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid - Modernized */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Latest Listings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 truncate mb-1">
                      {product.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-extrabold text-2xl">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Category:{" "}
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {product.category}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No products found. Try a different search or category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-12 mt-12 transition-colors duration-300 shadow-inner">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a href="/" className="mb-4 inline-block">
            <Logo />
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            SMkate is the exclusive marketplace for SMIT students. Buy and sell
            used goods safely and securely within your campus community.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
            &copy; 2025 SMkate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
