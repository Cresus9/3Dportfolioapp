import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { Style } from '../Style'
import { github } from '../assets'
import { SectionWrapper } from '../HOC'
import { projects } from '../Constant'
import { fadeIn, textVariant } from '../Utils/Motion';


const ProjectCard=({ index, name, description, tags, image, source_code_link}) =>{
  return (
    <motion.div
    variants={fadeIn('up', 'spring',
    index*0.5, 0.75
    )}
    >
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name}
          className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
            onClick={() => window.open(source_code_link, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`${tag.color} text-[14px]`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )

}

function Works() {

  return (
   <>
    <motion.div
      variants={textVariant()}
      >
        <p className={Style.sectionSubText}>My work</p>
        <h2 className={Style.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className='w-full flex flex-wrap items-start '>
        <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-2 flex  text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
        <div className='mt-24 flex flex-row flex-wrap justify-start '>
          {projects.map((project, index)=>(
            <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
             />
          ))}
        </div>
      </div>
   </>
  )
}

export default SectionWrapper(Works, "")
