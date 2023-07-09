import React from 'react'
import WorkItem from './WorkItem'

const data=[
    {
        year:2021,
        title:'student @ NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY',
        duration:'4 years',
        details:'BTECH in information technology with specialization in Network and information security'

    },
    {
        year:2020,
        title:'RELIANCE FOUNDATION SCHOOL ',
        duration:'2 years',
        details:''

    },
    {
        year:2018,
        title:'INDIAN SCHOOL MUSCAT',
        duration:'10 years',
        details:''

    }
]


const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-5xl text-center font-thin text-sky-600'>Education</h1>
        {/* curly brackets nhi use kare =>() as we are rendering items on the screen */}
        {data.map((item,idx)=>(
            <WorkItem 
            key={idx}
             year={item.year}
              title={item.title}
               duration={item.duration}
                details={item.details}/>
        ))}     

    </div>
  )
}

export default Work