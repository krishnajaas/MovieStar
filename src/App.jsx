import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Slider from './component/Slider'
import Bslider from './component/Bslider'
import GenreMovieList from './component/GenreMovieList'

function App() {


  return (
    <>
      <Header />
      <Slider />
      <Bslider />
       <GenreMovieList />
    </>
  )
}

export default App
