import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useFetchMovies";
import VideoContainer from "./VideoContainer";
import MovieContainer from "./MovieContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <VideoContainer />
      {/* <MovieContainer /> */}
      
      {/* 
        VideoContainer
            - Video Background
            - Video Title
        MovieContainer
            - Movie List * n
            - Cards * n 
      */}
    </div>
  );
};

export default Browse;
