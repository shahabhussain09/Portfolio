import React from 'react'

const ServiceCard = ({icon,title,subTitle}) => {
  return (
    <div className=' px-6 py-8 flex flex-col items-center gap-2 borderRight borderBottom'>
        <span  className=' text-4xl text-[#edff20] mb-1'>
            {icon}
        </span>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className=' text-base text-center text-zinc-400 px-6'>{subTitle}</p>
    </div>
  )
}

export default ServiceCard