import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
