import jwt from 'jsonwebtoken';

export const protect = async (req, res, next) => {
	let token;

	token = req.cookies.jwt;

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = { id: decoded.id, username: decoded.username };
			return next();
		} catch (error) {
			res.status(403);
			return next(new Error('Not Authorized.'));
		}
	} else {
		res.status(401);
		return next(new Error('No token provided.'));
	}
};
