import React from 'react'

const AboutMe = () => {
  return (
    <div className='md:flex block pb-6'>
      <div className='md:w-1/2 w-full text-zinc-400 p-6 borderRight flex flex-col '>
        <div className='py-6'>
        <h2 className='font-semibold mb-1 text-lg'>Hello I am Shahab Hussain</h2>
        <p className=' text-base leading-6'>My goal is to contribute my technical skills and creativity to projects that make a meaningful impact. If you're looking for a Frontend web developer who's passionate about delivering high-quality solutions, let's connect! I'm always open to new opportunities and collaborations.</p>
        </div>
      </div>
      <div className=' md:w-1/2 w-full p-6'>
        <ul>
          <li className='aboutRightLi'><span className='aboutRightLiSpan'>Age:</span>19</li>
          <li className='aboutRightLi'><span className='aboutRightLiSpan'>Freelance:</span>Available</li>
          <li className='aboutRightLi'><span className='aboutRightLiSpan'>Address:</span>Gulbahar no 3</li>
          <li className='aboutRightLi'><span className='aboutRightLiSpan'>Residence:</span>Peshawar</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe