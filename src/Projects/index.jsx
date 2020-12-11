import React from 'react'
import { Carousel, Image, Tag } from 'antd'
import TweenOne from 'rc-tween-one'

import { projects } from './data'
import './projects.less'

const Project = ({ projectDetails, index }) => (
  <div className='banner-wrapper' key={index}>
    <div className='banner-title-wrapper'>
      <h3>{projectDetails.title}</h3>
      <p>{projectDetails.tags.map((tag) => (<Tag>{tag}</Tag>))}</p>
      <p key='content'>{projectDetails.content}</p>
    </div>
    <TweenOne animation={{ opacity: 1 }} className='banner-image-wrapper'>
      <Image src={projectDetails.imageSrc} alt={projectDetails.imageDescription} />
    </TweenOne>
  </div>
)

export default function Projects () {
  const projectList = projects.map((project, index) => (
    <Project projectDetails={project} index={index} />
  ))

  return (
    <div className='projects'>
      <h2 className='projects-title'><span>Projects</span> and <span>Highlights</span></h2>
      <Carousel autoplay>{projectList}</Carousel>
    </div>
  )
}
