import React from 'react'
import {MdWork} from 'react-icons/md'
import ResumeTitle from './ResumeTitle'
import ResumeCard from './ResumeCard'
const Education = () => {
  return (
    <div className='w-full grid md:grid-cols-9 grid-rows-1 px-6 '>
     <div className=' col-span-4'>
      <ResumeTitle title='Experience' icon={<MdWork />} />
      <ResumeCard bage=''
      title='Web Development'
      subTitle='Facebook Inc'
      des='Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.'
      />


<ResumeCard bage='2022 2023'
      title='Front-end Developer'
      subTitle='Google Inc'
      des='Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.'
      />

<ResumeCard bage='2021 2023'
      title='Web Design'
      subTitle='Google Inc'
      des='Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.'
      />
     </div>




     <div className=' w-full h-full flex items-center justify-center'>
        <span className='w-[1px] h-full inline-flex bg-zinc-800'></span>
     </div>






     <div className=' col-span-4'>
     <ResumeTitle title='Education' icon={<MdWork />} />
     <ResumeCard bage='2021 2023'
      title='Web Design'
      subTitle='Google Inc'
      des='Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.'
      />

<ResumeCard bage='2021 2023'
      title='Web Design'
      subTitle='Google Inc'
      des='Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.'
      />


<ResumeCard bage='2021 2023'
      title='Web Design'
      subTitle='Google Inc'
      des='Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.'
      />
     </div>
    </div>
  )
}

export default Education