import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Moviedetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("q");
  console.log(id);
  const apikey = `c45a857c193f6302f2b5061c3b85e743`;
  const [movies, setData] = useState([]);

  const fetchMovie = async () => {
    try {
      var res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`
      );
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="col-xl-3">
              <img
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-xl-9">
              <h3>{movies.title}</h3>
              <p>Rating:{movies.vote_average}</p>
              <p>{movies.runtime} Mins</p>
              <p>
                <div>
                  {movies.genres &&
                    movies.genres.length > 0 &&
                    movies.genres.map((gen) => gen.name).join(", ")}
                </div>
              </p>
              <p>Release Date :{movies.release_date}</p>
              <div>
                <h5>OverView</h5>
                <p>{movies.overview}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <img
              src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}
