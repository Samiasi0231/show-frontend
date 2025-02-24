import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://backendshowbook.onrender.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiRequest;
