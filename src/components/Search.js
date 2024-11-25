import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Search() {
  const [movies, setData] = useState([]);
  const apikey = `c45a857c193f6302f2b5061c3b85e743`;
  const movie_name = useSelector((state) => state.search.value);
  console.log(movie_name);
  //     https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${mov
  // ie_name}&page=1
  const fetchSearchMovie = async () => {
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${movie_name}&page=1`
      );
      //   let data = await res.json();
      console.log(res.data.results);
      setData(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSearchMovie();
  }, []);
  return (
    <div className="container">
      <h3>Search Results for : {movie_name}</h3>
      <div className="row mb-5 mt-5">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => {
            return (
              <div className="col-xl-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="img-fluid"
                  alt=""
                />
                <h4>{movie.title}</h4>
                <p>
                  Rating: <strong>{movie.vote_average}</strong>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
