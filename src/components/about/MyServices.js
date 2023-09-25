import React from 'react'
import ServiceCard from './ServiceCard'
import { BiCodeAlt } from 'react-icons/bi'
import {BiAperture  } from 'react-icons/bi'
import {BiCategoryAlt} from 'react-icons/bi'
import {SiBackendless} from 'react-icons/si'
const MyServices = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
      <ServiceCard icon={<BiCodeAlt />} title='Web Development' subTitle='As a front-end web developer, I bring websites to life by meticulously coding sleek, user-friendly interfaces that provide an immersive and visually appealing user experience.' />
      <ServiceCard icon={<BiAperture />} title='Web Design' subTitle='As a front-end web developer, I bring websites to life by meticulously coding sleek, user-friendly interfaces that provide an immersive and visually appealing user experience.' />
      <ServiceCard icon={<BiCategoryAlt />} title='Frontend Development' subTitle='As a front-end web developer, I bring websites to life by meticulously coding sleek, user-friendly interfaces that provide an immersive and visually appealing user experience.' />
      <ServiceCard icon={<SiBackendless />} title='Backend Development' subTitle='As a front-end web developer, I bring websites to life by meticulously coding sleek, user-friendly interfaces that provide an immersive and visually appealing user experience.' />
    </div>
  )
}

export default MyServices
