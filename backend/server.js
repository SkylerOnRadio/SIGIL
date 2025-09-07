import express from 'express';

import userRoutes from './routes/users.js';

const PORT = process.env.PORT || 5000;

const app = express();

// Mount routes
app.use('/users', userRoutes);

app.use(express.json());
app.use(express.urlencoded());

app.use('/user', user);

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
