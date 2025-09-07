import React, { useEffect, useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../features/auth/authSlice';

export default function Register() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isSuccess, isLoading, isError, message } = useSelector(
		(state) => state.auth
	);

	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Destructure confirmPassword out, send only the rest
		const { confirmPassword, ...userData } = formData;

		dispatch(register(userData));
	};

	useEffect(() => {
		if (isSuccess && user) navigate('/');
	}, [user, isSuccess, navigate]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 px-4">
			<div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-10 max-w-md w-full">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-6 text-center">
					Create Account
				</h2>
				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-2">
							Username
						</label>
						<input
							type="text"
							name="username"
							value={formData.username}
							onChange={handleChange}
							placeholder="Enter your username"
							className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
							required
						/>
					</div>

					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-2">
							Email
						</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email"
							className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
							required
						/>
					</div>

					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-2">
							Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? 'text' : 'password'}
								name="password"
								value={formData.password}
								onChange={handleChange}
								placeholder="Enter your password"
								className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all pr-12"
								required
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300"
							>
								{showPassword ? (
									<IoEyeOffOutline className="w-6 h-6" />
								) : (
									<IoEyeOutline className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>

					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-2">
							Confirm Password
						</label>
						<input
							type="password"
							name="confirmPassword"
							value={formData.confirmPassword}
							onChange={handleChange}
							placeholder="Confirm your password"
							className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
					>
						Register
					</button>
				</form>

				<p className="mt-5 text-gray-600 dark:text-gray-400 text-center">
					Already have an account?{' '}
					<Link
						to="/login"
						className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
					>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}
