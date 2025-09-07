import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import ProductPage from './Pages/ProductPage';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(<Route path="/" element={<ProductPage />} />)
	);

	return <RouterProvider router={router} />;
};

export default App;
