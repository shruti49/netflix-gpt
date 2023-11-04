import { useEffect } from "react";
import { API_OPTIONS, TMDB_API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../redux/MoviesSlice";

const useFetchMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = async () => {
    const response = await fetch(
      `${TMDB_API_KEY}${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    const filteredData = data?.results.filter((ele) => ele.type === "Trailer");
    const movieTrailer =
      filteredData.length === 0 ? data.results[0] : filteredData[0];
    dispatch(addMovieTrailer(movieTrailer));
  };

  useEffect(() => {
    fetchMovieTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useFetchMovieTrailer;
