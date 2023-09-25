import React from 'react'
import {GiGraduateCap} from 'react-icons/gi'
const ResumeTitle = ({title,icon}) => {
  return (
    <h1 className=' text-lg text-gray-300 uppercase font-medium flex items-center gap-2 py-3 border-b-[1px] border-b-zinc-800'><span className=' text-[#edff20] text-2xl'>{icon}</span>{title}</h1>
  )
}

export default ResumeTitle