import React from 'react'
import ecom from '../images/ecom.png'
import tic from '../images/tic.png'
import chat from '../images/chat.png'



const Project = () => {
    const projects=[
        {id:1,
        title:"E-Commerce",
        src: ecom,
        tools:['React','Node','Mongodb'],
        overview:"orem ipsum dolor sit amet, consectetur adipisicing elit. Rem nihil ducimus quia accusantium tempora doloremque qui accusamus reprehenderit mollitia molestiae quam quidem deleniti at molestias obcaecati, eveniet cumque voluptas debitis?"
    },
    {id:2,
        title:"Tic-Toe Game Application",
        src: tic,
        tools:['React'],
        overview:"orem ipsum dolor sit amet, consectetur adipisicing elit. Rem nihil ducimus quia accusantium tempora doloremque qui accusamus reprehenderit mollitia molestiae quam quidem deleniti at molestias obcaecati, eveniet cumque voluptas debitis?"
    },
    {id:3,
        title:"Chat-Application",
        src: chat,
        tools:['React','websocket'],
        overview:"orem ipsum dolor sit amet, consectetur adipisicing elit. Rem nihil ducimus quia accusantium tempora doloremque qui accusamus reprehenderit mollitia molestiae quam quidem deleniti at molestias obcaecati, eveniet cumque voluptas debitis?"
    },

    ]
  return (
    <div id='projects' className=' relative text-gray-600 bg-gradient-to-b from-indigo-200 to-indigo-50 max-h-max w-full pt-20'>
        <div className='mx-auto p-20 flex flex-col md:pr-10'>
      <p className='text-center font-bold text-4xl'>Projects</p>

{
    projects.map(({id,src,tools,overview,title})=>(
<div key={id}>
        <div className='flex p-4 items-center w-11/12 '>
            <p className='mb-4'>{title}</p>
            <div className='flex '>
            <img  className="w-52 h-52 rounded-lg"
        src={src} alt="" />
        <div className='flex flex-col pl-8 p-4'>
        <div> 
            <h4 className='font-bold text-2xl '>Tools</h4>
            <p className='mt-2'>{tools}</p>
        </div>
        <div className='pt-4'>
            <h4 className='font-bold text-2xl'>Overview</h4>
            <p className='mt-2'>{overview}</p>
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