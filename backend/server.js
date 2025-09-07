import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';
import dashboardRoutes from './routes/dashboard.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
);
app.options('*', cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/dashboard', dashboardRoutes);

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
