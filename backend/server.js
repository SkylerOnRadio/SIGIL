import express from 'express';

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/', (req, res) => {
	res.json('This is the backend.');
});

app.listen(PORT, (req, res) => {
	console.log(`Server has started on port ${PORT}`);
});
