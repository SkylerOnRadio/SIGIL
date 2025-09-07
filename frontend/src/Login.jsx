import { motion } from "framer-motion";
import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back 👋</h1>
          <p className="text-indigo-100 mt-2">Login to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 dark:text-gray-200">
              Email
            </label>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-white/60 backdrop-blur-md dark:bg-gray-800/70">
              <FaUser className="text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 dark:text-gray-200">
              Password
            </label>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-white/60 backdrop-blur-md dark:bg-gray-800/70">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-lg text-white shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Login
          </motion.button>
        </form>

        {/* Footer */}
        <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Sign Up
          </a>
        </div>
      </motion.div>
    </div>
  );
}
