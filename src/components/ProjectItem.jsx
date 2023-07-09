import React from 'react'

const ProjectItem = ({img,title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-sky-700'>
        <img className='rounded-xl group-hover:opacity-30' src={img} alt="/" />
        <div className='hidden group-hover:block absolute top-[50%]  bottom-[40%] translate-y-[-50%]'>
            <h3 className='text-2xl font-thin text-center text-black'>{title}</h3>
        </div>
    </div>
  )
}

export default ProjectItem