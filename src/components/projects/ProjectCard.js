import React from 'react'

const ProjectCard = ({image,title,category}) => {
  return (
    <div className=' w-full py-8 flex flex-col items-center justify-center border-b-[1px] border-b-zinc-800'>
       <div className=' w-full h-full mb-3 overflow-hidden hover:scale-[1.1] transition-all relative cursor-pointer group'>
       <img src={image} alt='cartImage' />
       {/* <div className=' w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-green-600 via-green-600 to-green-200 opacity-20'></div> */}
       <div>
        <h2 className=' text-lg text-[#ccc] font-semibold text-center'>{title}</h2>
        <p className=' text-base text-gray-400 -mt-1 text-center'>{category}</p>
       </div>
       </div>
    </div>
  )
}

export default ProjectCard