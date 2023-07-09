import React from 'react'

const Contacts = () => {
  return (
    <div id="contact" className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='font-bold text-center text-4xl py-4 '>Contacts</h1>

        <form action="https://getform.io/f/7d46767a-67dc-465a-bd61-de5fe2a4abd9" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-3 px-4'>
                <div className='flex flex-col'>
                    <label className='uppercase px-2  py-2 text-lg'>Name</label>
                    <input className='rounded-lg border-2 p-3 first-letter:flex border-gray-300' type="text" name="name"  />
                </div>

                <div className='flex flex-col'>
                    <label className='uppercase px-2  py-2 text-lg'>Phone</label>
                    <input className='rounded-lg border-2 p-3 flex border-gray-300' type="text" name='phone' />
                </div>

                <div className='flex flex-col py-2'>
                    <label className='uppercase px-2  py-2 text-lg'>Email</label>
                    <input className='rounded-lg border-2 p-3  border-gray-300' type="email" name='name' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase px-2  py-2 text-lg'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex  border-gray-300 ' type="text" name='subject' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase px-2  py-2 text-lg' >Message</label>
                    <textarea className='border-2 rounded-lg py-3 px-4 border-gray-300' rows='8' name="message" ></textarea>
                </div>
            </div>
           <div className='px-3'>
           <button className='bg-black text-white rounded-xl mt-10  w-full p-4 w-100'>Send Message</button>
           </div>
        </form>
    
    </div>
  )
}

export default Contacts