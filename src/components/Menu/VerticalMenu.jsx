import React, {Component} from 'react'
import styled from 'styled-components'
import webfont from 'webfontloader'

import {history} from '../../routes/index'

webfont.load({
  google: {
    families: ['Lato']
  }
})

export class VerticalMenu extends Component {
  render() {
    return (
      <MenuStyle className="pt-5">
        <ul className="menu-list">
          <li className="menu-list__item">
            <a className="menu-list__link">
              <i className="mr-3 fas fa-chart-line"></i>Dashboard</a>
          </li>
          <li className="menu-list__item">
            <a className="menu-list__link">
              <i className="mr-3 far fa-credit-card"></i>Orders</a>
          </li>
          <li className="menu-list__item">
            <a className="menu-list__link">
              <i className="mr-3 fas fa-history"></i>History</a>
          </li>
          <li className="menu-list__item" onClick={() => history.push('/admin/storage')}>
            <a className="menu-list__link">
              <i className="mr-3 fas fa-store"></i>Storage</a>
          </li>
          <li className="menu-list__item">
            <a className="menu-list__link">
              <i className="mr-3 fas fa-sign-out-alt"></i>Sign Out</a>
          </li>
        </ul>
      </MenuStyle>
    )
  }
}

const MenuStyle = styled.div `
    min-height: 100vh;
    height: 100%;
    text-align: center;
    background-color: #537895;
    background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
    color: white;
    .icon{
        height: 6rem;
    }
    .divider{
        border-bottom: 0.5px solid black;
    }
    .menu-list{
        
        &__item{
            cursor:pointer;
            position: relative;
            padding: 1rem 0;
            text-align: left;
        }
        &__item:hover {
            color: white;
            background-color: #48CFAD;
            transition: all .2s;
        }
        &__link{
            font-size: 1.3rem;
            padding-left: 2rem;
            text-decoration: none;
            color: inherit;  
            font-family: 'Lato', sans-serif;
        }
    }
`
