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
    background-image: url(https://i.pximg.net/img-original/img/2014/01/20/20/42/35/41079925_p0.jpg);
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
