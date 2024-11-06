import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { MoviesContext } from "../contexts/moviesContext";

const NowPlayingPage = () => {
  const { data, error, isLoading, isError } = useQuery("nowPlaying", getNowPlayingMovies);
  const { addToMustWatch } = useContext(MoviesContext);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}
      action={(movie) => {
        return (
          <PlaylistAddIcon
            color="primary"
            sx={{ fontSize: 30, cursor: "pointer" }}
            onClick={() => addToMustWatch(movie.id)}
          />
        );
      }}
    />
  );
};

export default NowPlayingPage;
