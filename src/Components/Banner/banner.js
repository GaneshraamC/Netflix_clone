import React, { useEffect, useState} from 'react'
import axios from '../../helpers/axios.js'
import requests from '../../helpers/requests.js'
import "./banner.css"

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async()=>{
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [])
  // console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    

    <header className='banner'
       style={{
        // backgroundImage: `url('https://i.imgur.com/g0jXdZC.jpg')`,
        // backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
        <button className="banner_button">
      <span className="play_button">&#9654;</span> Play
    </button>
          
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner_fadeBottom" />
    </header>
  )
}

export default Banner;