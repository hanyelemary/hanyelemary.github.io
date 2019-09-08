import React from 'react'
import PropTypes from 'prop-types'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import { Icon } from 'antd'
import BannerSVG from './BannerSVG'

function Banner (props) {
  return (
    <div className='banner-wrapper'>
      <QueueAnim className='banner-title-wrapper' type={props.isMobile ? 'bottom' : 'right'}>
        <div key='line' className='title-line-wrapper'>
          <div
            className='title-line'
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key='h1'>Hi, I'm Hany</h1>
        <p key='content'>
          I'm a Software Developer and Consultant. My passion is solving challenging business problems with clean, testable design and architecture.
        </p>
        <div key='button' className='button-wrapper'>
          <a href='http://github.com/hanyelemary' title="Hany's Github Profile" target='_blank' rel='noopener noreferrer'>
            <Icon type='github' style={{ fontSize: '4em', color: '#333' }} theme='filled' />
          </a>
          <a href='https://www.linkedin.com/in/hanyelemary/' title="Hany's LinkedIn Profile" target='_blank' rel='noopener noreferrer'>
            <Icon type='linkedin' style={{ fontSize: '4em', marginLeft: '18px', color: '#333' }} theme='filled' />
          </a>
          <a href='https://twitter.com/hanyelemary' title="Hany's Twitter Page" target='_blank' rel='noopener noreferrer'>
            <Icon type='twitter' style={{ fontSize: '4em', marginLeft: '18px', color: '#333' }} />
          </a>
        </div>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className='banner-image-wrapper'>
          <BannerSVG />
        </TweenOne>
      )}
    </div>
  )
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

export default Banner
