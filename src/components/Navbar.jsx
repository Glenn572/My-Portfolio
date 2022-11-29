import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import logo from '../images/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const links =[
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"skills"
        },
        {
            id:4,
            link:"projects"
        },
        {
            id:5,
            link:"contact"
        },

    ]
  return (
    <div className='flex justify-between items-center fixed w-full h-20 text-white bg-gradient-to-r from-indigo-500 to-cyan-100 z-20 '>
       <div className='logo flex justify-center items-center'>
        <img className="w-10 h-10  text-gray-800"src={logo} alt="" />
        <Link to ="home"  smooth duration={500}><span className='text-gray-800 font-bold ml-2 text-xl cursor-pointer'>
            Ghani V</span></Link>
        
        </div> 
            <ul className='items-center  hidden md:flex'>

                {
                    links.map(({id,link})=>(
                        <li key={id} className='cursor-pointer px-4 font-medium text-gray-600 hover:text-gray-400 duration-200 capitalize '>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))
                }           
            </ul>
              <div onClick={()=>setNav(!nav)}className='cursor-pointer z-10 pr-4 text-gray-600 md:hidden'>
               {nav ? <FaTimes size={30} />: <FaBars size={30} /> }

               {nav && (
  <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-indigo-200 '>
               
  {
       links.map(({id,link})=>(
           <li key={id} className='capitalize py-6 text-4xl cursor-pointer '>
            {link}
           </li>
       ))
   }  
  </ul>
               )}
             
            </div> 
         
    </div>
  )
}

export default Navbar