import React, { useState } from "react";
import {
  IoImageOutline,
  IoPricetagOutline,
  IoDocumentTextOutline,
  IoSaveOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";

const categories = [
  { name: "Books", icon: <IoDocumentTextOutline className="w-5 h-5" /> },
  { name: "Electronics", icon: <IoPricetagOutline className="w-5 h-5" /> },
  { name: "Furniture", icon: <IoPricetagOutline className="w-5 h-5" /> },
  { name: "Clothing", icon: <IoPricetagOutline className="w-5 h-5" /> },
  { name: "Services", icon: <IoPricetagOutline className="w-5 h-5" /> },
  { name: "Others", icon: <IoPricetagOutline className="w-5 h-5" /> },
];

const PostAd = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !description || !category || images.length === 0) {
      alert("Please fill all fields and upload at least one image.");
      return;
    }
    // Here you can handle API call to save product
    console.log({ title, price, description, category, images });
    alert("Ad posted successfully!");
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImages([]);
    setPreviewUrls([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl w-full bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">
          Post an Ad
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              placeholder="Enter product title"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price (₹)</label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-lg"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter detailed description"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-lg"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.name}
                  onClick={() => setCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-transform transform hover:scale-105 ${
                    category === cat.name
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {cat.icon}
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Upload Images
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-transform transform hover:scale-105">
                <IoImageOutline className="w-5 h-5" />
                Upload
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
              <div className="flex gap-2 overflow-x-auto">
                {previewUrls.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt="preview"
                    className="w-24 h-24 object-cover rounded-xl shadow-md"
                  />
                ))}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-xl transition-transform transform hover:scale-105"
          >
            <IoSaveOutline className="w-5 h-5" />
            Post Ad
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default PostAd;
