import React, { useState } from 'react'
import {FaUserAlt, FaEnvelope} from 'react-icons/fa'
import {IoIosPaper} from 'react-icons/io'
import {MdOutlineClosedCaptionOff, MdWork} from 'react-icons/md'
import {SiGoogle} from 'react-icons/si'
import {BsTelephone} from 'react-icons/bs'
import Left from './components/home/Left'
import {FiMenu} from 'react-icons/fi'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import { motion } from 'framer-motion'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
const Home = () => {
  const [about,setAbout] = useState(true)
  const [resume,setResume] = useState(false)
  const [projects,setProjects] = useState(false)
  const [blog,setBlog] = useState(false)
  const [contact,setContact] = useState(false)
  // const [sidenav,setSidenav] = useState(false)
  return (
    <div className='w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between'>
       <div className='w-16 h-96 bg-transparent flex flex-col gap-4'>
       <div className='h-80 w-full bg-[#181818] rounded-3xl py-6 flex flex-col items-center justify-around'>
        <span
        onClick={() =>
        setAbout(true) &
         setResume(false) &
         setProjects(false) &
         setBlog(false) &
         setContact(false)
        }
        className=' w-full h-6 text-white text-xl flex items-center justify-center hover:text-[#edff20] duration-300 cursor-pointer relative group'><FaUserAlt /><span className=' absolute text-black font-medium text-xs uppercase bg-[#edff20] px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>About</span></span>

        <span
          onClick={() =>
            setAbout(false) &
             setResume(true) &
             setProjects(false) &
             setBlog(false) &
             setContact(false)
            }
        className=' w-full h-6 text-white text-xl flex items-center justify-center hover:text-[#edff20] duration-300 cursor-pointer relative group'><IoIosPaper /><span className=' absolute text-black font-medium text-xs uppercase bg-[#edff20] px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Resume</span></span>

        <span
         onClick={() =>
          setAbout(false) &
           setResume(false) &
           setProjects(true) &
           setBlog(false) &
           setContact(false)
          }
        className=' w-full h-6 text-white text-xl flex items-center justify-center hover:text-[#edff20] duration-300 cursor-pointer relative group'><MdWork /><span className=' absolute text-black font-medium text-xs uppercase bg-[#edff20] px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Projects</span></span>

       
        <span
         onClick={() =>
          setAbout(false) &
           setResume(false) &
           setProjects(false) &
           setBlog(false) &
           setContact(true)
          }
        className=' w-full h-6 text-white text-xl flex items-center justify-center hover:text-[#edff20] duration-300 cursor-pointer relative group'><FaEnvelope /><span className=' absolute text-black font-medium text-xs uppercase bg-[#edff20] px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Contact</span></span>


        {/* <span className=' w-full h-6 text-white text-xl flex items-center justify-center hover:text-[#edff20] duration-300 cursor-pointer relative group'><BsTelephone /><span className=' absolute text-black font-medium text-xs uppercase bg-[#edff20] px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100'>Call</span></span> */}
       </div>
       </div>
       <div className='w-[94%] h-full bg-transparent flex items-center '>
        {/* left-part */}
        <Left />
        {/* right-part */}
        <div className='md:w-8/12 w-full h-[95%] bg-[#181818]'>
         <div className=' w-full h-[96%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]'>
        
        {
          about && (
            <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        >
           <About />
           </motion.div>
         )}
       
       {
          resume && (
            <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        >
           <Resume />
           </motion.div>
         )}

{
          projects && (
            <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        >
           <Projects />
           </motion.div>
         )}


{
          blog && (
            <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        >
           <Blog />
           </motion.div>
         )}


{
          contact && (
            <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        >
           <Contact />
           </motion.div>
         )}
         </div>
        </div>
       </div>
    </div>
  )
}

export default Home