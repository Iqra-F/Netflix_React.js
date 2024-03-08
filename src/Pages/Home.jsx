import React from 'react'
import Main from '../Components/Main'
import Row from  '../Components/Row'
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main/>
      <Row  rowId='1' title='UP Coming' fetchURL={requests.requestUpcoming}/>
      <Row rowId='2' title='Movie' fetchURL={requests.requestMovie}/>
      <Row rowId='3' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowId='4' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowId='5' title='Now Playing' fetchURL={requests.requestNowPlaying}/>
    </>
  )
}

export default Home
