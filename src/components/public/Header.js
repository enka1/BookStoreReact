import React, {Component} from 'react'
import styled from 'styled-components'
import webfont from 'webfontloader'

import {history} from '../../routes'

webfont.load({
  google: {
    families: ['Montserrat']
  }
})

export class Header extends Component {
  goToLoginPage(){
    history.push('/login')
  }
  render() {
    return (
      <HeaderStyle>
        <div className="btn-group">
          <div className="btn btn-outline-dark mx-2 button" onClick={() => this.goToLoginPage()}>Đăng nhập</div>
          <div className="btn btn-danger mx-2 button ">Đăng kí</div>

        </div>
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
position:relative;
text-align:center;

    .primary-header{
        font-family: 'Montserrat', sans-serif;
        font-size: 4.5rem;
        font-weight:lighter;
        text-transform:uppercase;
        letter-spacing: .5rem;
    }
    .icon{
      margin-top: 5rem;
      height: 5rem;
    }
    .my-icon{
      display:inline-block;
      font-size: 2.5rem;
      line-height: 50px;
    }
    .secondary-header{
        text-transform:uppercase;
        letter-spacing: .6rem;
        font-size: 1.35rem;
    }
    .btn-group{
      font-size: 2rem;
      padding-right: 3rem;
      padding-top: 2rem;
      position: absolute;
      right:0;
    }
    .button{
      padding: .8rem 2rem;
      font-size: 1.4rem;
    }
`
