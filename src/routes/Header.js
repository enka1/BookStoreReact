import React, {Component} from 'react'
import styled from 'styled-components'
import webfont from 'webfontloader'

webfont.load({
  google: {
    families: ['Montserrat']
  }
})

export class Header extends Component {
  render() {
    return (
      <HeaderStyle className="mt-5">
        <img
          src="https://image.flaticon.com/icons/png/512/284/284772.png"
          className="icon"
          alt=""/>
        <span className="primary-header d-block mt-3">
          Emilia
        </span>
        <span className="secondary-header d-block text-muted">Bookstore</span>

      </HeaderStyle>
    )
  }
}

const HeaderStyle = styled.div `
text-align:center;
    .primary-header{
        font-family: 'Montserrat', sans-serif;
        font-size: 4.5rem;
        font-weight:lighter;
        text-transform:uppercase;
        letter-spacing: .5rem;
    }
    .icon{
        height: 5rem;
    }
    .secondary-header{
        text-transform:uppercase;
        letter-spacing: .6rem;
        font-size: 1.35rem;
    }
`
