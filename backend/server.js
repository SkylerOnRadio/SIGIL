import express from 'express';
import cookieParser from 'cookie-parser';

<<<<<<< HEAD
import etc from './etc.js'

import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import dashboardRoutes from "./routes/dashboard.js";
=======
import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';
>>>>>>> a6721f313685f2760be651d79090a44356a85e58

const PORT = process.env.PORT || 5000;

const app = express();

<<<<<<< HEAD
// Mount routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/dashboard", dashboardRoutes);
=======
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
>>>>>>> a6721f313685f2760be651d79090a44356a85e58

app.use('/user', userRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
