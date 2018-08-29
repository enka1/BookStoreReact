import React, {Component} from 'react'
import {Footer} from '../components/Footer/Footer'
import {Header} from '../components/Header/Header'
import {HorizontalMenu} from '../components/Menu/HorizontalMenu'
import {CarouselList} from '../components/Carousel/CarouselList'


export const withPublicComponent = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          <Header/>
          <HorizontalMenu/>
          <CarouselList/>
          <WrappedComponent {...this.props}/>
          <Footer/>
        </div>
      )
    }
  }
}
