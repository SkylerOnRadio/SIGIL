import express from 'express';

import etc from './etc.js'

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/', (req, res) => {
	res.json('This is the backend.');
});
app.use(etc)

app.listen(PORT, (req, res) => {
	console.log(`Server has started on port ${PORT}`);
});
