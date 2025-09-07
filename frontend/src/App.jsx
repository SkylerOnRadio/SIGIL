import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import ProductPage from './Pages/ProductPage';
import Register from './Pages/RegisterPage';
import Dashboard from './Pages/Dashboard';
import ChatPage from './Pages/ChatPage';
import PostAd from './Pages/PostAd';
import Login from './Pages/Login';
import ProductCreation from './Pages/ProductCreation';
const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route path="/" element={<ProductPage />} />
				<Route path="register" element={<Register />} />
				<Route path="/addProduct" element={<ProductCreation />} />
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/ChatPage" element={<ChatPage />} />
				<Route path="/PostAd" element={<PostAd />} />
				<Route path="/login" element={<Login />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
