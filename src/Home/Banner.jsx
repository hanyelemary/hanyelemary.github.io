import React from 'react'
import PropTypes from 'prop-types'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import { GithubFilled, LinkedinFilled, TwitterSquareFilled, MediumSquareFilled } from '@ant-design/icons'
import BannerSVG from './BannerSVG'

function Banner (props) {
  return (
    <div className='banner'>
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
          As a Technology Leader, Author, and Speaker, my expertise lies in the realms of software engineering, architecture, and organizational design. I am dedicated to building high-performing teams and future technology leaders. My professional journey spans a diverse range of industries including library science, the nonprofit sector, biopharma, fintech, retail, and quick-service restaurants.
          </p>
          <div key='button' className='button-wrapper'>
            <a href='http://github.com/hanyelemary' title="Hany's Github Profile" target='_blank' rel='noopener noreferrer'>
              <GithubFilled style={{ fontSize: '4em', color: '#333' }} />
            </a>
            <a href='https://www.linkedin.com/in/hanyelemary/' title="Hany's LinkedIn Profile" target='_blank' rel='noopener noreferrer'>
              <LinkedinFilled style={{ fontSize: '4em', marginLeft: '18px', color: '#333' }} />
            </a>
            <a href='https://twitter.com/hanyelemary' title="Hany's Twitter Page" target='_blank' rel='noopener noreferrer'>
              <TwitterSquareFilled style={{ fontSize: '4em', marginLeft: '18px', color: '#333' }} />
            </a>
            <a href='https://hanyelemary.medium.com/' title="Hany's Medium Blog" target='_blank' rel='noopener noreferrer'>
              <MediumSquareFilled style={{ fontSize: '4em', marginLeft: '18px', color: '#333' }} />
            </a>
          </div>
        </QueueAnim>
        {!props.isMobile && (
          <TweenOne animation={{ opacity: 1 }} className='banner-image-wrapper'>
            <BannerSVG />
          </TweenOne>
        )}
      </div>
    </div>
  )
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

export default Banner
