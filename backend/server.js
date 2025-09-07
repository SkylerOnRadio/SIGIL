import express from 'express';

import etc from './etc.js'

import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import dashboardRoutes from "./routes/dashboard.js";

const PORT = process.env.PORT || 5000;

const app = express();

// Mount routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/dashboard", dashboardRoutes);

app.use('/', (req, res) => {
	res.json('This is the backend.');
});
app.use(etc)

app.listen(PORT, (req, res) => {
	console.log(`Server has started on port ${PORT}`);
});
