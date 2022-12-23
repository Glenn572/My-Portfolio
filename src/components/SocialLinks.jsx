import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'

const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
<>Linkedin <FaLinkedin size={30} /></>
            ),
            href:"linkedin.com/in/ghani-v-7840aa25b"
        },
        {
            id:2,
            child:(
<>Github <FaGithub size={30} /></>
            ),
            href:"https://github.com/Glenn572"
        },
        {
            id:3,
            child:(
<>Mail <HiOutlineMail  size={30} /></>
            ),
            href:"https://mail.google.com/mail/"
        },
        {
            id:4,
            child:(
<>Resume<BsFillPersonFill  size={30} /></>
            ),
            href:"../images/Ghani_Resume_Full_Stack_Developer.docx",
            download:true
        }
    ]
  return (
    <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
        <ul>

{links.map(({id,child,href,download})=>(
  <li key={id} className='justify-between mb-2 items-center w-35 h-14 px-2 py-2 bg-gradient-to-r from-cyan-500 to-cyan-400 ml-[-80px] rounded-r-lg hover:ml-[-10px] duration-300'>
  <a href={href} className='flex justify-between items-center px-2 w-full' download={download} target="_blank" rel="noreferrer">{child}</a>
</li>
))}
        
        </ul>
    </div>
  )
}

export default SocialLinks