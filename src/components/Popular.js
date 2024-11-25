import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movies.css";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const apikey = `c45a857c193f6302f2b5061c3b85e743`;
  const [movies, setData] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const fetchPopularMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=${page}`
      )
      .then((res) => {
        //
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePre = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  };
  const handleNex = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  const handlemovie = (id) => {
    console.log(id);
    navigate(`/movie?q=${id}`);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, [page]);

  return (
    <div className="container">
      <h3>Popular Movies</h3>
      <div className="row mb-3 mt-3">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => {
            return (
              <div className="col-xl-3" onClick={() => handlemovie(movie.id)}>
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
      <div className="row mb-3 mt-3">
        {movies.length > 0 && (
          <div className="pagenation">
            <button className="btn btn-danger" onClick={handlePre}>
              Previous
            </button>
            <button className="btn btn-danger">{page}</button>
            <button className="btn btn-danger" onClick={handleNex}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popular;
