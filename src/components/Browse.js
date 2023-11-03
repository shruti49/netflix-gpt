import React, { useEffect } from "react";
import Header from "./Header";
import { TMDB_API_KEY, options } from "../utils/constants";

const Browse = () => {
  const fetchMovies = async () => {
    const response = await fetch(TMDB_API_KEY, options);
    const data = await response.json();
    console.log(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
