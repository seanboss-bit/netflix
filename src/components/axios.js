import axios from "axios";

// Url for request
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
