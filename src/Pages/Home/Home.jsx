import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Movies from '../../Components/Movies/Movies'
import '../../Components/Movies/Movies.css'
import India from '../../Components/Movies/India'

const Home = () => {
  return (
    <>
        <Navbar />
        <Movies />
        <India />
        <Footer />
    </>
  )
}

export default Home