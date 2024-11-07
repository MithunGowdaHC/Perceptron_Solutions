import React from 'react'
import  Header  from '../components/Header'
import Features from '../components/Features'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



const Home = () => {
  return (
    <>
    <Navbar/>

    <div>
      <Header/>
      <Details/>
      <Features/>
      <Footer/>
    </div>
    </>
  )
}

export default Home