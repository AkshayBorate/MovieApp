import React, { useEffect, useState } from "react";
import axios from "axios";

const Upcoming = () => {
  const apikey = `c45a857c193f6302f2b5061c3b85e743`;
  const [movies, setData] = useState([]);
  const fetchupcomingMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchupcomingMovies();
  }, []);
  return (
    <div className="container">
      <h3>Upcoming Movies</h3>
      <div className="row mb-3 mt-3">
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
};

export default Upcoming;
