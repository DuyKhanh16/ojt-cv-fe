impo

import axios from "axios";

export const API_BASE_URL =
  `${import.meta.env.VITE_BACK_END}`;


const privateAxios = axios.create({
    API_BASE_URL,
});

privateAxios.interceptors.request.use((config) => {
  const jwtTokent = JSON.parse(localStorage.getItem("token"));

  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtTokent}`,
    },
  };
});

export default privateAxios;
