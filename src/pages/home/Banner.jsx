import React from 'react'
import bannerImg from "../../assets/banner-1.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
             <img src={bannerImg} alt="" />
        </div>
        <div className='md:w-1/2 w-full'>
           <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
           <p className='mb-10'> From fundamental concepts to advanced techniques, our curated collection equips you to build, innovate, and shape the future. Explore resources that inspire ideas and turn visions into reality!</p>
           <button className='btn-primary'>Subscribe</button>
        </div>
        
    </div>
  )
}

export default Banner