import React from 'react'

const ResumeCard = ({bage,title,subTitle,des}) => {
  return (
    <div className='w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800'>
        {bage === ""?<h6 className=' w-28 text-center text-sm py-[1px] text-[#edff20] border-[1px] rounded-sm border-[#edff20]'>2013-Present</h6>:<h6 className=' w-28 text-center text-sm py-[1px] text-[#999] border-[1px] rounded-sm border-zinc-600'>{bage}</h6>}
         
         <h2 className=' text-lg text-gray-200 font-medium'>{title}</h2>
         <p className='text-sm text-[#999] -mt-2'>{subTitle}</p>
         <p className=' text-base text-[#999] font-medium pr-10'>{des}</p>
      </div>
  )
}

export default ResumeCard