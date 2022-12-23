import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.webp'
import react from '../images/react.webp'
import node from '../images/node.png'
import express from '../images/express.png'
import mongo from '../images/mongodb.jpg'
import websocket from '../images/websocket.png'
import git from '../images/git.png'
import github from '../images/github.png'


const Skill = () => {
    const frontend=[
        {id:1,
            src:html,
                  },
        {id:2,
            src:css,
                   },
        {id:3,
            src:js,
                   },
        {id:4,
            src:react,
                    }
                  ]
       const backend=[ 
        {id:1,
            src:node,
        },
        {
          id:2,
          src:express
        }
      ]
       const database=[ {id:1,
            src:mongo,
                   },
    
    ]
    const others=[
      {
        id:1,
        src:websocket
      },
      {
        id:2,
        src:git
      },
      {
        id:3,
        src:github
      }
    ]
  return (
    <div id='skills'className='bg-gwhite w-full max-h-fit relative'>
        <div className=' p-10 md:p-10'>
            <div className='ml-20 font-bold text-4xl mb-10'>
                <p className='text-center'>Skills</p>
            </div>
            {/* frontend */}
            <h2 className='font-bold text-xl text-center mb-10'>Front End Development</h2>
            <div  className='grid  sm:grid-cols-2 md:grid-cols-4 gap-4 px-8 sm:px-0 ml-20'>
          
            {frontend.map(({id,src})=>(
              
              <div key={id} className=' mx-auto'>
                <img src={src} className="w-20 h-20 rounded-full hover:scale-110 duration-300 " alt="" />
                  </div> 
         
            ))}
              </div> 
              <h2 className='font-bold text-xl text-center m-10'>Back End Development</h2>
              {/* backend */}
              <div  className='grid  sm:grid-cols-2 md:grid-cols-2 gap-2 px-4 sm:px-0 ml-5'>
          
            {backend.map(({id,src})=>(
              
              <div key={id} className=' mx-auto'>
                <img src={src} className="w-20 h-20 rounded-full hover:scale-110 duration-300 " alt="" />
                  </div> 
         
            ))}
              </div> 
              <h2 className='font-bold text-xl text-center m-10'>Database</h2>
              {/* Database */}
              <div  className='grid  sm:grid-cols-2 md:grid-cols-1 gap-4 px-8 sm:px-0 ml-20'>
          
          {database.map(({id,src})=>(
            
            <div key={id} className=' mx-auto'>
              <img src={src} className="w-20 h-20 rounded-full hover:scale-110 duration-300 " alt="" />
                </div> 
       
          ))}
            </div> 
            {/* others */}
            <h2 className='font-bold text-xl text-center m-10'>Miscellenous</h2>
              {/* Database */}
              <div  className='grid  sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 sm:px-0 ml-20'>
          
          {others.map(({id,src})=>(
            
            <div key={id} className=' mx-auto'>
              <img src={src} className="w-20 h-20 rounded-full hover:scale-110 duration-300 " alt="" />
                </div> 
       
          ))}
            </div> 
        </div>

    </div>
  )
}

export default Skill