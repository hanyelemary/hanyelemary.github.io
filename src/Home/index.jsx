import React from 'react'
import DocumentTitle from 'react-document-title'
import { enquireScreen } from 'enquire-js'

import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Banner from './Banner'

import './home.less'
import './responsive.less'

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
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default Home
