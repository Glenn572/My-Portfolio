import React from 'react'
import chat from '../images/chat.png'



const Project = () => {
    const projects=[
       {id:3,
        title:"SocialMedia Application",
        src: chat,
        tools:['ReactJS |',' NodeJS |',' ExpressJS |'," MongoDB |",' Websocket |'," CSS"],
        overview:["•Built the UI components in ReactJS using ReactHooks, Context API and designed the components by using CSS, Tailwind. ",
    "•	Built a server in ExpressJS and used cors to implement the cross-origin policy between the client and server."
    ]
    },

    ]
  return ( 
    <div id='projects' className=' relative bg-white max-h-max w-full  text-lg'> 
        <div className='mx-auto p-20 flex flex-col md:pr-10'>
      <p className='text-center font-bold text-4xl'>Projects</p>

{
    projects.map(({id,src,tools,overview,title})=>(
<div key={id}>
        <div className='flex p-4 items-center w-11/12 '>
            
            <div className='flex '>
           
        <div className='flex flex-col pl-8 p-4'>
            <div className='flex items-center'>
        <span className='mr-5'> <img  className="w-20 h-20 rounded-full"
        src={src} alt="" /></span>
        <p className='mb-4 font-bold text-2xl'>{title}</p>
        </div>
        <div> 
            <h4 className='font-bold text-2xl mt-5 '>Tools</h4>
            <p className='mt-2'>{tools}</p>
        </div>
        <div className='pt-4'>
            <h4 className='font-bold text-2xl'>Overview</h4>
            <p className='mt-2 mb-5'>
<span>• Built the UI components in ReactJS using ReactHooks, Context API and designed the components by using CSS, Tailwind</span> <br />
<span>•	Built a server in ExpressJS and used cors to implement the cross-origin policy between the client and server.</span> <br />
<span>•	Implemented an authentication feature using JWT by creating tokens and sending it to server.</span> <br />
<span>•	Built an REST API to handle HTTP requests.</span> <br />
<span>•	Built an full-duplex communication protocol using Websockets in implementing the chat functionality.</span> <br />
<span>•	Built a database on MongoDB to store user details.</span>
            </p>
            <span className='text-xl font-semibold'>GitHub Source Code:</span> <span> <a href="https://github.com/Glenn572/socialmediaapp" target="_blank" rel="noreferrer">https://github.com/Glenn572/socialmediaapp</a></span>
        </div>
        </div>
      
        </div>
        </div>
      </div>
    ))
}

      
      </div>
    </div>
  )
}

export default Project