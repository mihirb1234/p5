import React from 'react'
import ProjectItem from './ProjectItem'
import foodImg from '../assets/food.png'
import blogsImg from '../assets/blogs.png'
import loginpageImg  from '../assets/loginpage.png'
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='font-bold text-4xl text-center '>Projects</h1>
        <p className='text-center py-8 text-gray-500'>HERE ARE SOME OF MY FRONTEND PROJECTS! I HAVE USED MAINLY THE FOLLOWING TOOLS:
        HTML ,CSS ,JAVASCRIPT,REACTJS AND TAILWINDCSS</p>

        <div className='grid sm:grid-cols-2 gap-12'>
            <a href="https://food-store-project.vercel.app/" target='_blank'> <ProjectItem img={foodImg} title='food app'/></a>
           
           <a href="https://blogs-website-phi.vercel.app/create" target="_blank"><ProjectItem img={blogsImg} title='blogs app'/></a>
            
            <a href="https://login-page-react-plum.vercel.app/" target="_blank"><ProjectItem img={loginpageImg} title='login page frontend  app'/></a> 
        </div>
    
    
    </div>
  )
}

export default Projects