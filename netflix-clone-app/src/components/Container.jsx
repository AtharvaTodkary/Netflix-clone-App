import React,{useState, useEffect} from "react";
import axios from "axios";
import CardHolder from "./CardHolder";

export default function Container() {
  const [movieValues, setMovieValues] = useState([]);
  const [movieGenreValues, setMovieGenreValues] = useState([]);
  const [tvValues, setTvValues] = useState([]);



  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/movieAPI");
      setMovieValues(response.data.movies);
      setMovieGenreValues(response.data.movieGenre);
      setTvValues(response.data.tvShows);

    } catch (error) {
      console.error("Error Fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
 
  return (
    <div id="container">
      <CardHolder recommend={"Movies"} value={movieValues} genre={movieGenreValues}/>
      <CardHolder recommend={"Tv Shows"} value={tvValues} genre={movieGenreValues}/>
    </div>
  );
}