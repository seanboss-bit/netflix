import React, { useEffect, useState } from "react";
import axios from "./axios";
import RingLoader from "react-spinners/HashLoader";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      if (request.status === 200) {
        setLoading(false);
      }
      return request;
    }
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>

      {/* Rows with posters */}
      {loading ? (
        <div className="load">
          <RingLoader loading={loading} size={150} color={"#e50914"} />
        </div>
      ) : (
        <div>
          <div className="row_posters">
            {movies.map((movie) => (
              <img
                onClick={() => {
                  handleClick(movie);
                }}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                className={`${isLargeRow ? "row_posterlarge" : "row_poster"}`}
              />
            ))}
          </div>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
      )}
    </div>
  );
};

export default Row;
