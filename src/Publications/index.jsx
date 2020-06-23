import React from 'react'
import QueueAnim from 'rc-queue-anim'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { Row, Col, Card, Avatar } from 'antd'
import { publicationData } from './data'

import './publications.less'
import './responsive.less'

const { Meta } = Card

const Publication = ({ data, index }) => (
  <Col span={12} md={24} lg={12} sm={24} xs={24} className='col' key={index.toString()}>
    <QueueAnim
      type='bottom'
      onClick={() => { window.location.href = data.links[0].props.href }}
    >
      <Card
        hoverable
        className='content-wrapper'
        bodyStyle={{ minHeight: '180px' }}
        actions={data.links}
      >

        <Meta
          title={data.title}
          avatar={data.icon
            ? <Avatar style={{ backgroundColor: data.backgroundColor }} icon={data.icon} />
            : <Avatar src={data.iconSrc} />}
          description={data.content}
        />
      </Card>
    </QueueAnim>
  </Col>
)

export default function Publications () {
  const publicationList = publicationData.map((data, index) => (
    <Publication data={data} index={index} />
  ))

  return (
    <div className='publications'>
      <h2 className='publications-title'><span>Works</span> and <span>Publications</span></h2>
      <OverPack className='publications-layout' playScale={0.4}>
        <QueueAnim type='bottom' key='home-func' ease='easeOutQuart' leaveReverse>
          <i key='i' className='line' />
          <QueueAnim
            key='content'
            component={Row}
            type='bottom'
            componentProps={{ gutter: 96 }}
          >
            {publicationList}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>
  )
}
