import React from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import workHistory from './data'

import './work-history.less'
import './responsive.less'

export default function WorkHistory (props) {
  const { isMobile } = props
  const children = workHistory.timeline.map((data, i) => {
    const textWrapper = (
      <QueueAnim
        className='content-wrapper'
        key='text'
        leaveReverse
        dleay={isMobile ? [0, 100] : 0}
      >
        <div className='time' key='time'>{data.time}</div>
        <h2 key='title'>{data.title}</h2>
        {data.content && <p key='p'>{data.content}</p>}
      </QueueAnim>
    )

    return (
      <OverPack key={i.toString()} className='block-wrapper' playScale='0.2'>
        <QueueAnim
          className='image-wrapper'
          key='image'
          leaveReverse
          delay={isMobile ? [100, 0] : 0}
        >
          <div key='image' className={`image${data.double ? ' double' : ''}`}>
            <img src={data.src} />
          </div>
        </QueueAnim>
        <TweenOne
          animation={{ y: 15, opacity: 0, type: 'from' }}
          className='point'
          key='point'
        />
        {textWrapper}
      </OverPack>
    )
  })
  return (
    <div className='work-history'>
      <h2 className='work-history-title'><span>Work</span> and <span>Experience</span></h2>
      <div key='timeline' className='timeline'>
        {children}
      </div>
    </div>
  )
}
