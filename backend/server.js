import express from 'express';

import user from './routes/userRoutes.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/user', user);

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
