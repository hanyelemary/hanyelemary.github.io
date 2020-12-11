import React from 'react'
import DocumentTitle from 'react-document-title'
import { enquireScreen } from 'enquire-js'

import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Banner from './Home/Banner'
import Publications from './Publications'
import WorkHistory from './WorkHistory'
import Projects from './Projects'

import './Home/home.less'
import './Home/responsive.less'

let isMobile

enquireScreen((b) => {
  isMobile = b
})

class Home extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isMobile
    }
  }

  componentDidMount () {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b
      })
    })
  }

  render () {
    return (
      <DocumentTitle title='Hany Elemary - Github Page'>
        <div>
          <Header isMobile={this.state.isMobile} />
          <div className='home-wrapper'>
            <Banner isMobile={this.state.isMobile} />
            <Publications />
            <Projects />
            <WorkHistory isMobile={this.state.isMobile} />
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default Home
