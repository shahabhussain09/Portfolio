import React from 'react'

const Round = () => {
  return (
    <div className=" relative top-0 -left-10 w-96 h-96 animate-spin-slow">
    <div className=" w-36 h-36 rounded-full bg-[#edff20] blur-xl absolute top-0"></div>
    <div className="w-24 h-24 rounded-full bg-green-600 absolute -bottom-10 left-16 blur-xl "></div>
    <div className=" w-36 h-36 rounded-full bg-[#edff20] blur-2xl absolute top-32 -right-10"></div>
   </div>
  )
}

export default Round