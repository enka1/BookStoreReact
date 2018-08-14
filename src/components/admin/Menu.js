import React, {Component} from 'react'
import styled from 'styled-components'
import webfont from 'webfontloader'

webfont.load({
  google: {
    families: ['Lato']
  }
})

export class Menu extends Component {
  render() {
    return (
      <MenuStyle>
        <img
          src="https://image.flaticon.com/icons/png/512/284/284772.png"
          className="icon my-4"
          alt=""/>
        <ul className="menu-list">
          <li className="menu-list__item">
            <a href="" className="menu-list__link">
              <i class="mr-3 fas fa-chart-line"></i>Dashboard</a>
          </li>
          <li className="menu-list__item">
            <a href="" className="menu-list__link">
              <i class="mr-3 far fa-credit-card"></i>Orders</a>
          </li>
          <li className="menu-list__item">
            <a href="" className="menu-list__link">
              <i class="mr-3 fas fa-history"></i>History</a>
          </li>
          <li className="menu-list__item">
            <a href="" className="menu-list__link">
              <i class="mr-3 fas fa-store"></i>Storage</a>
          </li>
          <li className="menu-list__item">
            <a href="" className="menu-list__link">
              <i class="mr-3 fas fa-sign-out-alt"></i>Sign Out</a>
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
    background-color: #d9e4f5;
    background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
    color: #4a148c;
    .icon{
        height: 6rem;
    }
    .divider{
        border-bottom: 0.5px solid black;
    }
    .menu-list{
        
        &__item{
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
