import axios from 'axios';

const apiRoute = async (url) => {
  const baseURL = process.env.NODE_ENV === 'production' ? `https://api.panafricanscrabbleassociation.com${url}` : `http://localhost:8000${url}`;

  const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};

export default apiRoute;
