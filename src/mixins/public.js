import React, {Component} from 'react'
import {Footer} from '../components/public/Footer'
import {Header} from '../components/public/Header'
import {Menu} from '../components/public/Menu'
import {BookSlider} from '../components/public/BookSlider'


export const withPublicComponent = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          <Header/>
          <Menu/>
          <BookSlider/>
          <WrappedComponent {...this.props}/>
          <Footer/>
        </div>
      )
    }
  }
}
