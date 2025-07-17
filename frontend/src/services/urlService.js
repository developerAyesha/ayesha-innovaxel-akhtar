import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

export const shortenUrl = async (url) => {
    const response = await axios.post(`${API_BASE_URL}/shorten`, { url });
    return response.data;
};

export const getAllUrls = async () => {
    const response = await axios.get(`${API_BASE_URL}/shorten/all`);
    return response.data;
};

export const updateUrl = async (shortCode, url) => {
    const response = await axios.put(`${API_BASE_URL}/shorten/${shortCode}`, { url });
    return response.data;
};
