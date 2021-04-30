import axios from 'axios';

const ML_API = process.env.REACT_APP_ML_API_URL;
const ML_COUNTRY = process.env.REACT_APP_COUNTRY_CODE;

const LIMIT = 4;

console.log('ML_API', ML_API);

const clientMLAxiosSearch = axios.create({
  baseURL: ML_API,
});
const clientMLAxiosItems = axios.create({
  baseURL: ML_API,
});

const API_ML_SEARCH = {
  searchQuery: async (query) => {
    const resp = await clientMLAxiosSearch.get(
      `/sites/${ML_COUNTRY}/search?q=${query}&limit=${LIMIT}`
    );
    console.log('searchQuery', resp);
    return resp.data.results;
  },
};

const API_ML_ITEMS = {
  getItem: async (id) => {
    const resp = await clientMLAxiosItems.get(`/items/${id}`);
    console.log('getItem', resp);
    return resp;
  },
};

export { API_ML_SEARCH, API_ML_ITEMS };
