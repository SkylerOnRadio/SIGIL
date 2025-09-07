import multer from 'multer';
import path from 'path';

const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, uniqueSuffix + path.extname(file.originalname));
	},
});

export const upload = multer({ storage: storage });
