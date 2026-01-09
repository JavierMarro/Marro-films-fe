import axios from "axios";

const api = axios.create({
  baseURL: "https://marro-films-api.onrender.com",
});

const getFilms = async () => {
  try {
    const response = await api.get("/api/v1/films");

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { getFilms };
