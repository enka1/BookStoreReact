import React, {Component} from 'react'
import styled from 'styled-components'

import {LoginForm} from '../components/Form/LoginForm'

export class LoginPage extends Component {
  render() {
    return (
      <LoginPageStyle className="row w-100 m-0">
        <div className="login-gem-box col-lg-3">
          <LoginForm/>
        </div>
      </LoginPageStyle>
    )
  }
}

const LoginPageStyle = styled.div `
    position: relative;
    background-image: url(https://i.pinimg.com/originals/b9/07/4e/b9074e26d06cbf355cb349abe401f4a5.png);
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    .login-gem-box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
