import React from 'react'
import { Row, Col, Menu } from 'antd'
import { GithubFilled } from '@ant-design/icons'
import PhoneNav from './PhoneNav'

import { enquireScreen } from 'enquire-js'
import './header.less'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuVisible: false,
      menuMode: 'horizontal'
    }
  }

  componentDidMount () {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' })
    })
  }

  onMenuVisibleChange = (show) => {
    this.setState({
      show
    })
  }

  render () {
    const { menuMode } = this.state

    const menu = (
      <Menu mode={menuMode} id='nav' key='nav'>
        <Menu.Item key='home'>
          <a href='/' title='Home page'>Home</a>
        </Menu.Item>
        <Menu.Item key='blog'>
          <a href='http://hanyelemary.com' title='Blog'><span>Blog</span></a>
        </Menu.Item>
        <Menu.Item>
          <a href='https://github.com/hanyelemary/hanyelemary.github.io' title='Github repository for this website'>
            <GithubFilled style={{ marginRight: '0', fontSize: '18px' }} />
          </a>
        </Menu.Item>
      </Menu>
    )

    return (
      <div id='header' className='header'>
        {menuMode === 'inline' ? (
          <PhoneNav>{menu}</PhoneNav>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <div id='logo' to='/'>
              <span>Hany Elemary</span>
            </div>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className='header-meta'>
              {menuMode === 'horizontal' ? <div id='menu'>{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
