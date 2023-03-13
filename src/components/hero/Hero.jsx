import React from 'react';
import './Hero.css'
import Video from '../../assets/Footage.mp4' 
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
        <div className="hero">
            <video src={Video} autoPlay muted loop className='herovideo'/>
            <div className="button mt-60">
            <div className="bgoverlay text-white mb-4  backdrop-blur-md  bg-[#d6fff14b]  rounded-[50px] px-12 py-3 ">
                <Link to='' >
                    <h1 className='text-[24px]'>Join My Community</h1>
                </Link>
            </div>
            
            <div className="bgoverlay text-white mb-4  backdrop-blur-md  bg-[#d6fff14b]  rounded-[50px] px-12 py-3 ">
                <Link to='' >
                    <h1 className='text-[24px]'>Join My Community</h1>
                </Link>
            </div>

            <div className="bgoverlay text-white mb-4 backdrop-blur-md ring-red bg-[#d6fff14b] rounded-[50px] px-12 py-3 ">
                <Link to='' >
                    <h1 className='text-[24px]'>Join My Community</h1>
                </Link>
            </div>

            <div className="bgoverlay text-white mb-4  backdrop-blur-md  bg-[#d6fff14b]  rounded-[50px] px-12 py-3 ">
                <Link to='' >
                    <h1 className='text-[24px]'>Join My Community</h1>
                </Link>
            </div>
            <div className="allrightreserved text-white">All right reserved 2023 David Smith Ade</div>
         </div>
        </div>
    </div>
  )
}

export default Hero