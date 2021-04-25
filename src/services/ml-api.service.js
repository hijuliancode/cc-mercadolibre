import axios from 'axios'

const ML_API = process.env.REACT_APP_ML_API_URL
const ML_COUNTRY = process.env.REACT_APP_COUNTRY_CODE

const LIMIT = 4

console.log('ML_API', ML_API)

const clientMLAxios = axios.create({
  baseURL: ML_API,
})

const API_ML_SEARCH = {
  searchQuery: async (query) => {
    const resp = await clientMLAxios.get(`/${ML_COUNTRY}/search?q=${query}&limit=${LIMIT}`)
    return resp.data.results
  }
}

export default API_ML_SEARCH