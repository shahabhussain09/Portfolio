import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import {BsCloudLightningRainFill, BsFacebook} from 'react-icons/bs'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {SiYoutubemusic} from 'react-icons/si'
import {FiInstagram, FiMail, FiSend} from 'react-icons/fi'
import banner from '../../assets/bannerImg.png'
const Left = () => {
    const [text]=useTypewriter({
        words:["Web Development", "Frontend Web Developer", "UI Designer"],
        loop:true,
        typeSpeed:30,
        deleteSpeed:20,
        delaySpeed:2000
    })
  return (
    <div className='w-5/12 h-full bg-[#181818] rounded-2xl md:block hidden'>
        <div className='w-full h-3/5'>
          <img className='w-full h-full rounded-2xl object-cover' src={banner} alt='' loading='priority' />
        </div>
        <div className=' w-full h-2/5'>
            <div className=' flex flex-col items-center gap-2 py-10'>
                <h1 className='text-white text-4xl font-semibold'>Shahab Hussain</h1>
                <p className='text-[#edff20] text-base tracking-wide'>{text} <Cursor cursorBlinking='false' cursorStyle='!' /></p>
                <div className=' flex gap-2 mt-2 justify-center'>
                    <span className=' hover:text-[#edff20] duration-300 text-xl cursor-pointer'><FaGithub /></span>
                    <span className=' hover:text-[#edff20] duration-300 text-xl cursor-pointer'><FaLinkedin /></span>
                    
                    <span className=' hover:text-[#edff20] duration-300 text-xl cursor-pointer'><BsFacebook /></span>
                    <span className=' hover:text-[#edff20] duration-300 text-xl cursor-pointer'><AiFillTwitterCircle /></span>
                    <span className=' hover:text-[#edff20] duration-300 text-xl cursor-pointer'><FiInstagram /></span>
                    <span className=' hover:text-[#edff20] duration-300 text-xl cursor-pointer'><FiMail /></span>
                </div>
            </div>
            <div className='flex h-16'>
                <button className=' w-1/2 h-full flex borderRight  items-center justify-center gap-2 border-t-zinc-800 text-sm tracking-wide uppercase hover:text-[#edff20] duration-300 border-t-[1px]'>Download CV <BsCloudLightningRainFill /></button>
                <button  className=' w-1/2 h-full flex items-center justify-center gap-2 border-t-zinc-800 text-sm tracking-wide uppercase hover:text-[#edff20] duration-300 border-t-[1px]'>Contact me <FiSend /></button>
            </div>
        </div>
    </div>
  )
}

export default Left