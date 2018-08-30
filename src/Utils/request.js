import axios from 'axios';

const moviesDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

moviesDB.interceptors.request.use(config => (
  configBearerToken(config)
));

function configBearerToken(config) {
  return {
    ...config,
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
    }
  };
}

export {
  moviesDB,
};