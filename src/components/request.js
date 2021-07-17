const API_KEY = "3be8bd66e7d8245467282f4900243629";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default request;
