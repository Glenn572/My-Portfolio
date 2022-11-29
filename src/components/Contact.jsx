import React ,{useRef,useState}from 'react'
import emailjs from 'emailjs-com';
import contact from '../images/contact.jpg'

const Contact = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [text,setText]=useState('')
  const form=useRef()

  const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_34ruger', 'template_370fngc', form.current, 'xYU8oXFveBDSlYCtH')
    .then((result)=>console.log(result.text))
    .catch((error)=>console.log(error.text))
    setName('')
    setEmail('')
    setText('')
  }
 
  return (       
    <div id='contact'className='w-screen max-h-fit bg-gradient-to-b from-indigo-50 to-indigo-200 pb-20'>
        <p className='text-center pb-10'>Contact</p>
        <div className='flex '>
            <div className='flex-1'>
              <img className='w-90 pl-20 h-52' src={contact} alt="" />
            </div>
            <div className='flex-1'>
                <form  ref={form} className='flex flex-col' onSubmit={sendEmail}>
                    <input type="text" name='user_name' placeholder='Enter your name' className=' rounded-md p-2 bg-transparent focus:outline-none border-2 mb-2' value={name}
                    onChange={e=>setName(e.target.value)} />
                    <input type="text" name='user_email' placeholder='Enter your mail' className=' rounded-md p-2 bg-transparent focus:outline-none border-2 mb-2' value={email}
                    onChange={e=>setEmail(e.target.value)} />
                    <textarea name="message" rows="10" className='rounded-md p-2 bg-transparent focus:outline-none border-2 mb-2' value={text}  placeholder="Share your opinions" onChange={e=>setText(e.target.value)}></textarea>
                    <button className='bg-gradient-to-r from-cyan-500 to-cyan-200 max-w-fit px-6 py-3 rounded-lg  hover:scale-105 duration-300' >Let's Talk</button>
                </form>
            </div>
        </div>
    </div>

  )
}

export default Contact