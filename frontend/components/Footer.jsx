import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
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
		<footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-12 mt-16 transition-colors duration-300 shadow-inner">
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
	);
};

export default Footer;
