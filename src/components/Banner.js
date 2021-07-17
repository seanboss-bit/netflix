import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner-inner">
        <div className="banner-contents">
          {/* Title */}
          <div className="banner_title">
            <h1>{movie.title || movie.name || movie.original_name}</h1>
          </div>
          {/* Button */}
          <div className="banner_buttons">
            <button className="banner_button">Watch Now</button>
            <button className="banner_button">Play</button>
          </div>
          {/* Description */}
          <div className="description">
            <h1>{truncate(movie.overview, 100)}</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
