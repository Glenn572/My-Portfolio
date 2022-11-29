import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.webp'
import react from '../images/react.webp'
import node from '../images/node.png'
import mongo from '../images/mongodb.jpg'


const Skill = () => {
    const skills=[
        {id:1,
            src:html,
            power:"90%"
        },
        {id:2,
            src:css,
            power:"70%"
        },
        {id:3,
            src:js,
            power:"70%"
        },
        {id:4,
            src:react,
            power:"80%"
        },
        {id:5,
            src:node,
            power:"70%"
        },
        {id:6,
            src:mongo,
            power:"60%"
        },
    
    ]
  return (
    <div id='skills'className='bg-gradient-to-b from-indigo-50 to-indigo-200 w-full h-screen relative '>
        <div className=' p-10 md:p-10'>
            <div className='ml-20 font-bold text-4xl mb-20 text-gray-600'>
                <p className='text-center'>Skills</p>
            </div>
            <div  className='grid  sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 sm:px-0 ml-20'>
          
            {skills.map(({id,src,power})=>(
              
              <div key={id} className='shadow-md shadow-indigo-300 rounded-lg  w-44 mx-auto'>
                
                <img src={src} className="w-44 h-44 rounded-mg hover:scale-105 duration-300 " alt="" />
                <div className='flex justify-between p-4'>
<button>Learned</button>
<button>{power}</button>
                </div>
                </div>
         
            ))}
              </div> 
        </div>

    </div>
  )
}

export default Skill