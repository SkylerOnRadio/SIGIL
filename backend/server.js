import express from 'express';

import { db } from './config/connectDB.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
