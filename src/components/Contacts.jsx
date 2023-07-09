import React from 'react'

const Contacts = () => {
  return (
    <div id="contact" className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='font-bold text-center text-4xl py-4 '>Contacts</h1>

        <form action="https://getform.io/f/7d46767a-67dc-465a-bd61-de5fe2a4abd9" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase py-2 text-sm'>Name</label>
                    <input className='rounded-lg border-2 p-3 flex border-gray-300' type="text" name="name"  />
                </div>

                <div className='flex flex-col'>
                    <label className='uppercase py-2 text-sm'>Phone</label>
                    <input className='rounded-lg border-2 p-3 flex border-gray-300' type="text" name='phone' />
                </div>

                <div className='flex flex-col py-2'>
                    <label className='uppercase py-2 text-sm'>Email</label>
                    <input className='rounded-lg border-2 p-3 flex border-gray-300' type="email" name='name' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase py-2 text-sm'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" name='subject' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase py-2 text-sm' >Message</label>
                    <textarea className='border-2 rounded-lg py-3 border-gray-300' rows='10' name="message" ></textarea>
                </div>
            </div>
            <button className='bg-black text-white rounded-lg mt-10 w-full p-4'>Send Message</button>
        </form>
    
    </div>
  )
}

export default Contacts