import React from 'react'
import Title from '../home/Title'
import { FiSend } from 'react-icons/fi'
const Contact = () => {
  return (
    <div>
       <Title title='Get' subTitle="In Touch" />
       <div className=' p-6 md:flex block justify-between gap-20'>
        <div className=' md:w-1/2 w-full'>
          <p className=' flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-[#edff20] text-gray-700 font-medium text-sm px-2 rounded-md flex items-center justify-center '>Address:</span>Gulbahar
          </p>

          <p className=' flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-[#edff20] text-gray-700 font-medium text-sm px-2 rounded-md flex items-center justify-center '>Phone:</span>03427565103
          </p>
        </div>

        <div className=' md:w-1/2 w-full'>
          <p className=' flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-[#edff20] text-gray-700 font-medium text-sm px-2 rounded-md flex items-center justify-center '>Email:</span> shahabhussain098123
          </p>

          <p className=' flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-[#edff20] text-gray-700 font-medium text-sm px-2 rounded-md flex items-center justify-center '>Freelance:</span>avialable
          </p>
        </div>
       </div>
       <div className=' w-full mt-10'>
       <Title title='Send' subTitle="Message" />
       <form className=' p-6 flex flex-col gap-6 '>
        <div className=' w-full flex gap-10 justify-between'>
          <input
          className='w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600  focus-visible:bg-[#edff20] outline-none duration-300'
          type='text'
          placeholder='Full Name' />

<input
          className='w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600  focus-visible:bg-[#edff20] outline-none duration-300'
          type='text'
          placeholder='Email' />
        </div>
        <textarea
        
        className='w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600  focus-visible:bg-[#edff20] outline-none duration-300'
        cols='30' rows='4' />

        <button className=' text-base w-44 flex items-center gap-1 text-gray-200 hover:text-[#edff20] duration-200'>Send Message <span><FiSend /></span></button>
       </form>
       </div>
    </div>
  )
}

export default Contact