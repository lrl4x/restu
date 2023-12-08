import React,{useState,useEffect} from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import SecondHero from '../component/SecondSection'
import ThirdSection from '../component/ThirdSection'
import Downloadsection from '../component/Downloadsection'
import Footer from '../component/Footer'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <Hero/>
    <SecondHero/>
    <ThirdSection/>
    <Downloadsection/>
    <Footer/>
    </>
  )
}

export default Home