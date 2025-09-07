import React, { useState } from "react";
import { IoTrashOutline, IoCreateOutline } from "react-icons/io5";

const dummyUserProducts = [
  {
    id: 1,
    name: "Calculus Textbook",
    price: 250,
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947953-659978641178",
  },
  {
    id: 2,
    name: "Dell XPS 13",
    price: 45000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593642702749-bf216b230238",
  },
  {
    id: 3,
    name: "Wooden Study Table",
    price: 2500,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1582268412675-0e6b50e7a250",
  },
];

const Dashboard = () => {
  const [products, setProducts] = useState(dummyUserProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300 p-8">
      <h1 className="text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mb-8">
        My Listings
      </h1>

      {/* Search */}
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search your products..."
          className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/90 dark:bg-gray-800/80 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 backdrop-blur-md border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-gray-50 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-green-500 font-extrabold text-lg mb-1">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Category:{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {product.category}
                    </span>
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex items-center space-x-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105"
                  >
                    <IoTrashOutline className="w-5 h-5" />
                    <span>Delete</span>
                  </button>
                  <button className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105">
                    <IoCreateOutline className="w-5 h-5" />
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-white/90 dark:bg-gray-800/80 rounded-2xl shadow-inner backdrop-blur-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
              You have no products listed. Add some from the Product Creation
              page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
