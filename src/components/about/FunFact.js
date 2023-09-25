import React from 'react'
import FunCard from './FunCard'
import {BsTrophyFill} from 'react-icons/bs'
import {BiCodeAlt} from 'react-icons/bi'
const FunFact = () => {
  return (
    <div className='px-0 grid md:grid-cols-4 grid-cols-2 pb-4'>
        <FunCard icon={<BsTrophyFill />} des='20+ Projects' />
        <FunCard icon={<BiCodeAlt />} des='100hr of code' />
    </div>
  )
}

export default FunFact