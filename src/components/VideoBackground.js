import React from "react";
import { useSelector } from "react-redux";
import useFetchMovieTrailer from "../customHooks/useFetchMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useFetchMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.movieTrailer);

  if (!trailerVideo) return;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?si=HTCduyIgENK5h53M&amp;controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
