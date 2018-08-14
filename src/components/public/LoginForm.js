import React, {Component} from 'react'
import styled from 'styled-components'

import {history} from '../../routes'

export class LoginForm extends Component {
  goToIndexPage(){
    history.push('/')
  }
  render() {
    return (
      <LoginFormStyle className="shadow">
        <div className="bookstore" onClick={() => this.goToIndexPage()}>
          <img
            src="https://image.flaticon.com/icons/png/512/284/284772.png"
            className="icon"
            alt=""/>
          <span className="primary-header d-block mt-3">
            Emilia
          </span>
          <span className="secondary-header mb-5 d-block text-muted">Bookstore</span>
        </div>
        <div className="form-group">
          <input className="form-control input" placeholder="Email address"></input>
        </div>
        <div className="form-group">
          <input className="form-control input" placeholder="Password" type="password"></input>
        </div>
        <div className="form-group">
          <div className="btn btn-dark btn-block button">Log In</div>
        </div>
        <a href="">Forgot your password ?</a>
      </LoginFormStyle>
    )
  }
}

const LoginFormStyle = styled.div `
  padding: 2rem 3rem;
  text-align: center;
  background-image: linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8));
  .input{
    padding: 2rem 1rem;
    font-size: 1.6rem;
  }
  .button{
    font-size: 1.5rem;
  }
  .icon{
    height: 6rem;
  }
  .primary-header{
        font-family: 'Montserrat', sans-serif;
        font-size: 4.5rem;
        font-weight:lighter;
        text-transform:uppercase;
        letter-spacing: .5rem;
  }
    .secondary-header{
        text-transform:uppercase;
        letter-spacing: .6rem;
        font-size: 1.35rem;
  }
  .bookstore{
    cursor: pointer;
  }
`