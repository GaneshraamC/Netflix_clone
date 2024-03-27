import React from 'react'
import Nav from '../../Components/Navbar/Nav';
import "./homescreen.css"
import Banner from '../../Components/Banner/banner';
import Row from '../../Components/Row/Row';
import requests from "../../helpers/requests";


function homescreen() {
  return (
    <div className='home_screen'>
       <Nav/>
      <Banner/>
      
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Blockbuster Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="International Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default homescreen;