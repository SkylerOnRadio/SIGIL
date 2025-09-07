import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isSuccess, isLoading, isError } = useSelector(
		(state) => state.auth
	);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = { username, email, password };
		dispatch(login(userData));
	};

	useEffect(async () => {
		if (isSuccess && user) {
			dispatch(reset());
			await navigate('/');
		}
	}, [isSuccess, navigate, dispatch]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
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
							<FaEnvelope className="text-gray-400" />
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
							Username
						</label>
						<div className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-white/60 backdrop-blur-md dark:bg-gray-800/70">
							<FaLock className="text-gray-400" />
							<input
								type="text"
								required
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="Enter your username"
								className="w-full bg-transparent outline-none text-gray-900 dark:text-gray-100"
							/>
						</div>
					</div>

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
					{isLoading ? (
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.97 }}
							type="submit"
							className="w-full py-3 rounded-xl font-semibold text-lg text-white shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center"
							disabled={true} // simulate loading
						>
							<svg
								className="animate-spin h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
								></path>
							</svg>
						</motion.button>
					) : (
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.97 }}
							type="submit"
							className="w-full py-3 rounded-xl font-semibold text-lg text-white shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all"
						>
							Login
						</motion.button>
					)}
				</form>

				{/* Footer */}
				<div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
					Don’t have an account?{' '}
					<Link
						to="/register"
						className="text-indigo-600 hover:underline dark:text-indigo-400"
					>
						Sign Up
					</Link>
				</div>
			</motion.div>
		</div>
	);
}
