import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost:5000',
	withCredentials: true,
});

const register = async (userData) => {
	const res = await API.post('/user/register', userData);

	if (res.data) localStorage.setItem('user', JSON.stringify(res.data));
	return res.data;
};

const login = async (userData) => {
	const res = await API.post('/user/login', userData);

	if (res.data) localStorage.setItem('user', JSON.stringify(res.data));
	return res.data;
};

const logout = async () => {
	localStorage.removeItem('user');
	const res = await API.get('/user/logout');
	return res.data;
};

const authService = { register, login, logout };

export default authService;
