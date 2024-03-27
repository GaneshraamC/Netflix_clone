import axios from "../../helpers/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({title, fetchUrl, isLargeRow = false}) => {
  const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("")

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    };
    fetchData();
  }, [fetchUrl]);

const opts = {
    height:"390",
    width:"100%",
    playerVars:{
        auoplay: 1,
    },
}

const handleClick =(movie) =>{
    if (trailerUrl){
        setTrailerUrl('');
    }
        else
        {
            movieTrailer(movie?.name || movie?.name || "")
            .then((url) =>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'))
            }).catch((error) => {
                console.log("Error fetching trailer:", error);
                setTrailerUrl(''); // Set trailer URL to an empty string in case of an error
            });
 
        }
}
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                onClick={()=> handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt="collection"
              />
            )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
};

export default Row;
