var express = require("express");
var router = express.Router();

var genreDic = {};
var genreList;

const DiscURL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

router.get("/", async (req, res, next) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDBkOTBhNjExOTI4YTMwOWQ5NmFlNzU3MjBkNGJjYyIsInN1YiI6IjY1ZjJiZTI4ZWVhMzRkMDE4ODE2MjdiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-UJByotjYt0Gr0pU08sytx8_58bu2Qu8HFhqqO1KCQ",
      },
    };

    const fetchGenres = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en", //'https://api.themoviedb.org/3/genre/movie/list?language=en'
      options
    );
    const movieJsonOBJ = await fetchGenres.json();

    const movieGenreArr = movieJsonOBJ.genres.map((gr)=>({
      gId: gr.id,
      gName : gr.name
    }));

    const fetchMovies = await fetch(DiscURL, options);
    const moviesResponse = await fetchMovies.json();

    const movieArr = moviesResponse.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        backdrop_path: movie.backdrop_path,
        overview: movie.overview,
        poster_path: movie.poster_path,
        genre_ids: movie.genre_ids,
      }));

      const fetchTV = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options);
      const tvResponse = await fetchTV.json();

      const tvArr = tvResponse.results.map((tv)=>({
        id: tv.id, 
        title: tv.name,
        backdrop_path: tv.backdrop_path,
        overview: tv.overview,
        poster_path: tv.poster_path,
        first_air_date: tv.first_air_date,
        genre_ids: tv.genre_ids,
      }));  

      res.json({ movies: movieArr, movieGenre: movieGenreArr, tvShows: tvArr });


  } catch {
    console.error("error");
    // res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
