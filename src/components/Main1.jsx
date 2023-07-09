import React from 'react'   
import {TypeAnimation} from 'react-type-animation'
import {FaFacebookF,FaInstagram,FaLinkedinIn ,FaTwitter } from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
const Main1 = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover   ' src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" alt="" />
        <div className='w-full h-screen absolute top-0 right-0 left-0 bg-white/10'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
        {/* sm: matlab anything above small here 5xl else we put text as 4xl */}
         <h1 className='sm: text-5xl text-4xl font-bold text-purple-300 font-serif' >Hi! I'm Mihir Bhalerao</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-blue-200'>im a 
          <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Developer',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Coder',
          2000,
          'Tech Enthusiast',
          2000,
          
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', paddingLeft:'5px' }}
        repeat={Infinity}
      />
          </h2>


        <div className='flex justify-between pt-6 max-w-[500px] w-full'>
          <FaTwitter size={40} className='cursor-pointer'/>
          <FaFacebookF size={40} className='cursor-pointer'/>
          <a href="https://www.instagram.com/mihirstoic/"  target="_blank" ><FaInstagram size={40} className='cursor-pointer'/></a>
          <a href="https://www.linkedin.com/in/mihir-bhalerao-6b6286244/"  target="_blank" > <FaLinkedinIn size={40} className='cursor-pointer'/></a>
          <a href="https://leetcode.com/mihirbhalerao7/"  target="_blank" > <SiLeetcode size={40} className='cursor-pointer'/></a>
         
        </div>
        </div>

        </div>
    </div>
  )
}

export default Main1;