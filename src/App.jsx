import "./App.css";
import { Routes, Route } from "react-router-dom";
import api from "./api/api.js";
import { useState, useEffect, use } from "react";

function App() {
  const [films, setFilms] = useState();

  const getFilms = async () => {
    try {
      const response = await api.get("/films");

      console.log(response.data);

      setFilms(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
