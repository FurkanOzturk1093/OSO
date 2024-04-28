import axios from "axios";
const backendRequest = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default backendRequest;
