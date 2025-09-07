import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import ProductPage from "./Pages/ProductPage";
import Register from "./Pages/RegisterPage";
import ProductCreation from "./Pages/ProductCreation";
import Dashboard from "./Pages/Dashboard";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<ProductPage />} />
        <Route path="register" element={<Register />} />
        <Route path="/ProductCreation" element={<ProductCreation />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
