import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';
import dashboardRoutes from './routes/dashboard.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
