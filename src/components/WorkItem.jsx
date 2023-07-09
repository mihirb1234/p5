import React from 'react'

const WorkItem = ({year,title,duration,details}) => {
  return (
   <ol className='flex py-3flex-col md:flex-row relative border-l border-stone-200'>
    <li className='mb-10 ml-4 mt-4'>
        {/* self closing div tag as a bullet */}
        <div className='absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border white'/>
        <p className='flex gap-4 flex-row flex-wrap items-center justify-start text-md md: text-sm'>
            <span className='inline-block px-2 py-2 bg-sky-800 rounded-full text-white'>{year}</span>
            <span className='font-semibold text-sky-300'>{title}</span>
            <span className='my-3 font-light'>{duration}</span>
        </p>
        <p className='text-stone-500'>{details }</p>
            
    </li>
   </ol>
  )
}

export default WorkItem