import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar'
import hero from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} className='banner-img' alt="" />
        <div className="hero-caption">
          <img src={hero_title} className='caption-img' alt="" />
          <p>saddddddddddddddddda
            dsadaddddddddddd
            dddddddd dddddddde dsdd
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards  title={"Only on Netflix"} category={"popular"}/>
        <TitleCards  title={"Upcoming"} category={"upcoming"}/>
        <TitleCards  title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
