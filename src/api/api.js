import axios from "axios";

const api = axios.create({
  baseURL: "rendered-backend-url-goes-here",
});

const getFilms = async () => {
  try {
    const response = await api.get("/api/v1/films");
    // TODO: need to check backend repo to see actual endpoint

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { getFilms };
