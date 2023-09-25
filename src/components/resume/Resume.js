import React from 'react'
import Title from '../home/Title'
import Education from './Education'

const Resume = () => {
  return (
    <section id='resume' className=''>
     <Title title='My' subTitle="Resume" />
     <Education />
    </section>
  )
}

export default Resume