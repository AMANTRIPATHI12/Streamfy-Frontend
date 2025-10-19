import axios from "axios";

const Base_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5501/api"
    : "https://streamfy-backend.onrender.com/api"; // ✅ your Render backend URL

export const axiosInstance = axios.create({
  baseURL: Base_URL,
  withCredentials: true,
});
