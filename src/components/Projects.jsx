import React from 'react'
import ProjectItem from './ProjectItem'
import foodImg from '../assets/food.png'
import blogsImg from '../assets/blogs.png'
import loginpageImg  from '../assets/loginpage.png'
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='font-bold text-4xl text-center '>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus, amet autem repellat atque sit nisi
        aut natus, ad quidem voluptatibus alias ratione labore! Aspernatur alias recusandae illum ea impedit!</p>

        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={foodImg} title='food app'/>
           <a href="https://blogs-website-phi.vercel.app/create" target="_blank"><ProjectItem img={blogsImg} title='blogs app'/></a>
            
            <ProjectItem img={loginpageImg} title='login page frontend  app'/>
        </div>
    
    
    </div>
  )
}

export default Projects