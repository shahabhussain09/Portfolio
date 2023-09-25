import React from 'react'
import Title from '../home/Title'
import ProjectCard from './ProjectCard'
import workImage1 from '../../assets/work/workImgOne.jpg'
import workImage2 from '../../assets/work/workImgTwo.jpg'
import workImage4 from '../../assets/work/workImgFour.jpg'
import workImage5 from '../../assets/work/workImgFive.jpg'
import workImage6 from '../../assets/work/workImgSix.jpg'
import workImage7 from '../../assets/work/workImgSeven.jpg'
const Projects = () => {
  return (
    <div>
      <Title title='Recent' subTitle="Projects" />
      <div className=' w-full grid md:grid-cols-2 grid-cols-1 gap-2'>
        <div className=' px-6'>
          <ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage1}
          />

<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage2}
          />


<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage1}
          />

<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage4}
          />

     </div>
        <div className=' px-6'>
        <ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage5}
          />

<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage6}
          />


<ProjectCard
          title='Blog Website'
          category="Website"
          image={workImage7}
          />
   
        </div>
      </div>
    </div>
  )
}

export default Projects