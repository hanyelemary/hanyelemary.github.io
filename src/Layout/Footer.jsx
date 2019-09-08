import React from 'react'
import { Row } from 'antd'

import './footer.less'

function Footer () {
  return (
    <footer id='footer' className='dark'>
      <Row className='bottom-bar'>
        <span>
          Created with <a title='Ant Design UI Framework' href='https://ant.design/'>Ant Design</a>
        </span>
      </Row>
    </footer>
  )
}

export default Footer
