import express from 'express';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/users.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

app.use('/user', userRoutes);

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
