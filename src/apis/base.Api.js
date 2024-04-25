
/**
 * Access token key
 */
const ACCESS_TOKEN_KEY = "token";

/**
 * Get access token
 *
 * @return Access token
 */
export const getAccessToken = ()  => {
 return JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY)) ;
};

/**
 * Set access token
 *
 * @param value - Access token
 */
export const setAccessToken = (value) => {
localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify (value));
};

/**
 * Remove access token
 */
export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};



import axios from "axios";


export const API_BASE_URL =
  `${import.meta.env.VITE_BACK_END}` || "http://127.0.0.1:8080";
export const AUTHORIZATION_PREFIX = "Bearer ";

const privateAxios = axios.create({
  baseURL: API_BASE_URL,
});

privateAxios.defaults.headers.common = {
  "Content-Type": "application/json",
};

privateAxios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = AUTHORIZATION_PREFIX + getAccessToken();
    return config;
  }
);

export default privateAxios;
