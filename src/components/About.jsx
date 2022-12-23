import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full max-h-fit bg-white mb-3'>
       <div className='mx-3.5 p-20'>
        <p class="text-4xl font-bold mb-5 text-center">
            About Me</p>
       
       <div>
        <p className>Cyber Security Analyst with 2 years of experience. Looking to start the career as an full stack web developer with a reputed firm driven by technology. Proficient in <b>REACTJS,NODEJS,EXPRESSJS</b>  and <b>MONGODB</b>. Passionate about implementing and creating new projects with new technologies. </p>
       </div>
       <div >
         <h2 className="text-3xl font-bold mb-5 mt-5 ">Professional Experience</h2>
<span className='text-xl font-medium text-center'>HCL TECH | CYBER SECURITY ANALYST</span> <br />
<span className='text-md text-center'>Jan 2021 – Present | Bangalore, Karnataka</span>
<p className='mt-2 mb-5'>
<span >•	Worked on the Privilege Access Management team, in removing admin rights from the user machine to mitigate from external threads.</span> <br />
<span >•	Created and pushed the  policies to block/elevate the applications ,to block malicious attacks and restricts the user access to ensure security.</span> <br />
<span>•	Involved in deploying the agents in end-user machine and monitoring the events to create new policies and filters.</span> <br />
<span>•	Worked on QA environment to test policies and filters before implementing in real machines.</span>
            </p>
       
       </div>
       </div>
    </div>
  )
}

export default About