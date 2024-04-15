// import axios from "axios";

// const baseURL = "http://localhost:3000";

// const privateAxios = axios.create({
//     baseURL,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// privateAxios.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export default privateAxios;
import axios from "axios";

const baseURL = "http://localhost:3000/";

const privateAxios = axios.create({
  baseURL,
});

privateAxios.interceptors.request.use((config) => {
  const jwtTokent = localStorage.getItem("token");

  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtTokent}`,
    },
  };
});

export default privateAxios;
