import React from 'react'

const Title = ({title, subTitle}) => {
  return (
    <h1 className=' font-bold text-xl text-white capitalize relative z-10 px-6 py-3 borderBottom group'><span className='text-[#edff20]'>{title}</span> {subTitle} {" "}
        <span className='w-8 h-8 bg-gradient-to-t from-[#edff20] to-gray-300 inline-block rounded-full absolute left-2 top-3 opacity-10 -z-10 translate-x-0 group-hover:translate-x-24 transition-transform duration-500'></span>
        </h1>
  )
}

export default Title