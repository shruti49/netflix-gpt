/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { TMDB_API_KEY, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/MoviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    const response = await fetch(
      TMDB_API_KEY + "now_playing?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
