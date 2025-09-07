import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductCreation = () => {
	// const dispatch = useDispatch();
	// const { isLoading, isSuccess, isError, message } = useSelector(
	// 	(state) => state.products
	// );

	// const [product, setProduct] = useState({
	// 	name: '',
	// 	price: '',
	// 	category: '',
	// 	description: '',
	// 	images: [],
	// });

	// const [previewImages, setPreviewImages] = useState([]);

	// const handleChange = (e) => {
	// 	setProduct({ ...product, [e.target.name]: e.target.value });
	// };

	// const handleImageUpload = (e) => {
	// 	const files = Array.from(e.target.files);
	// 	setProduct({ ...product, images: files });

	// 	const previews = files.map((file) => URL.createObjectURL(file));
	// 	setPreviewImages(previews);
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	dispatch(createProduct(product));
	// };

	useEffect(() => {
		if (isSuccess) {
			alert('Product listing created successfully!');
			dispatch(resetState());
			setProduct({
				name: '',
				price: '',
				category: '',
				description: '',
				images: [],
			});
			setPreviewImages([]);
		}
		if (isError) {
			alert(message);
			dispatch(resetState());
		}
	}, [isSuccess, isError, message, dispatch]);

	return (
		<div className="max-w-4xl mx-auto my-12 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl transition-all duration-500">
			<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
				Create New Product Listing
			</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Product Name */}
				<div>
					<label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
						Product Name
					</label>
					<input
						type="text"
						name="name"
						value={product.name}
						onChange={handleChange}
						placeholder="Enter product title"
						required
						className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50"
					/>
				</div>

				{/* Product Price */}
				<div>
					<label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
						Price (₹)
					</label>
					<input
						type="number"
						name="price"
						value={product.price}
						onChange={handleChange}
						placeholder="Enter price"
						required
						className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50"
					/>
				</div>

				{/* Product Category */}
				<div>
					<label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
						Category
					</label>
					<select
						name="category"
						value={product.category}
						onChange={handleChange}
						required
						className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50"
					>
						<option value="">Select category</option>
						{categories.map((cat, idx) => (
							<option key={idx} value={cat}>
								{cat}
							</option>
						))}
					</select>
				</div>

				{/* Product Description */}
				<div>
					<label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
						Description
					</label>
					<textarea
						name="description"
						value={product.description}
						onChange={handleChange}
						placeholder="Describe your product..."
						rows="4"
						required
						className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50"
					></textarea>
				</div>

				{/* Image Upload */}
				<div>
					<label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
						Upload Images
					</label>
					<input
						type="file"
						accept="image/*"
						multiple
						onChange={handleImageUpload}
						className="hidden"
						id="productImages"
					/>
					<label
						htmlFor="productImages"
						className="flex items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 text-gray-500 dark:text-gray-400"
					>
						<IoImageOutline className="w-8 h-8 mr-2" />
						Click or drag images here
					</label>
					{previewImages.length > 0 && (
						<div className="mt-4 grid grid-cols-3 gap-4">
							{previewImages.map((src, idx) => (
								<img
									key={idx}
									src={src}
									alt={`preview-${idx}`}
									className="w-full h-32 object-cover rounded-xl shadow-md"
								/>
							))}
						</div>
					)}
				</div>

				{/* Submit Button */}
				<div className="text-center">
					<button
						type="submit"
						className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
					>
						Create Listing
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductCreation;
