import React from 'react'
import me from '../images/me1.webp'
import {HiOutlineArrowSmRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div  id='home'className='home w-full h-screen bg-gradient-to-b from-indigo-50 via-indigo-100 to-indigo-200 '>
              <div className='p-10 flex flex-col items-center justify-center md:pl-40 h-full md:flex-row'>
            <div >
                <h2 className='text-4xl mb-2 md:text-7xl md:mb-2'>I am a Full Stack Developer</h2>
                <p className='text-xl mb-2  md:text-2xl md:mb-2 ' >I am a fresher in full stack developing area but i fancy to work on web developing 
                    technologies like react,node,mongodb
                </p>
                <div>
                <button  className='group px-6 py-4 flex items-center bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-md cursor-pointer'>
                Portfolio <span className='group-hover:rotate-90 duration-300'><HiOutlineArrowSmRight size={20}/></span>
            </button>
            </div>
            </div>
            <div >
                <img className='w-52 h-52 rounded-full object-cover md:rounded-md md:w-96 md:h-66 md: md:object-cover' src={me} alt="my profile" />
            </div>
        </div>
    </div>
  )
}

export default Home