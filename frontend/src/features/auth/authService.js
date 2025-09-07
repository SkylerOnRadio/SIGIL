import axios from 'axios';

const register = async (userData) => {
	const res = await axios.post('/api/user/register', userData);

	if (res.data) localStorage.setItem('user', JSON.stringify(res.data));
	return res.data;
};

const login = async (userData) => {
	const res = await axios.post('/api/user/login', userData);

	if (res.data) localStorage.setItem('user', JSON.stringify(res.data));
	return res.data;
};

const logout = async () => {
	localStorage.removeItem('user');
	const res = await axios.get('/api/user/logout');
	return res.data;
};

const authService = { register, login, logout };

export default authService;
