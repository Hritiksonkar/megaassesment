import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/';

const api = axios.create({
    baseURL: API_BASE_URL,
});

// Add interceptor to include token in requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const getContent = async () => {
    try {
        const response = await api.get('content');
        return response.data;
    } catch (error) {
        console.error("Error fetching content:", error);
        throw error;
    }
};

export const updateContent = async (content) => {
    try {
        const response = await api.put('content', content);
        return response.data;
    } catch (error) {
        console.error("Error updating content:", error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await api.post('auth/login', credentials);
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

export default api;
