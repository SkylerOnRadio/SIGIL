import {
	IoChatbubbleOutline,
	IoNotificationsOutline,
	IoMoonOutline,
} from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Navbar = () => {
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [darkMode, setDarkMode] = useState(false);

	const logoutFn = (e) => {
		e.preventdefault;
		dispatch(logout());
	};

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);
	const Logo = () => (
		<div className="flex items-center space-x-0 cursor-pointer transition-transform duration-300 transform hover:scale-105">
			<span className="text-3xl sm:text-4xl font-extrabold text-yellow-500">
				SM
			</span>
			<span className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
				kate
			</span>
		</div>
	);

	return (
		<header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
				<a href="/">
					<Logo />
				</a>
				<nav className="hidden md:flex items-center space-x-6">
					<Link
						to="/"
						className="text-gray-700 dark:text-gray-300 font-medium relative overflow-hidden group py-2"
					>
						<span className="relative z-10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
							Home
						</span>
						<span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
					</Link>
					<Link
						href="/PostAd"
						className="text-gray-700 dark:text-gray-300 font-medium relative overflow-hidden group py-2"
					>
						<span className="relative z-10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
							Post an Ad
						</span>
						<span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
					</Link>
					<Link
						to="Dashboard"
						className="text-gray-700 dark:text-gray-300 font-medium relative overflow-hidden group py-2"
					>
						<span className="relative z-10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
							Dashboard
						</span>
						<span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
					</Link>
				</nav>
				<div className="flex items-center space-x-4">
					<Link
						to="/ChatPage"
						className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-110"
						aria-label="Chat"
					>
						<IoChatbubbleOutline className="w-6 h-6" />
					</Link>
					<button
						className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-110"
						aria-label="Notifications"
					>
						<IoNotificationsOutline className="w-6 h-6" />
					</button>
					<button
						onClick={() => setDarkMode(!darkMode)}
						className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-110"
						aria-label="Toggle dark mode"
					>
						{darkMode ? (
							<IoSunnyOutline className="w-6 h-6" />
						) : (
							<IoMoonOutline className="w-6 h-6" />
						)}
					</button>
					{user ? (
						<button
							onClick={logoutFn}
							className="hidden md:block px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Logout
						</button>
					) : (
						<Link
							to="/login"
							className="hidden md:block px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Login
						</Link>
					)}

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
	);
};

export default Navbar;
