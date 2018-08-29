import React, {Component} from 'react'
import styled from 'styled-components'
import {history} from '../../routes/index'
export class HorizontalMenu extends Component {
  render() {
    return (
      <MenuStyled>
        <nav
          className="navbar-light navbar bg-white navbar-expand-sm container d-flex justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link lead">
                <i className="fas fa-home mr-3 text-primary"></i>
                Trang chủ</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link lead"
                onClick={() => history.push('/')}
                style={{
                cursor: 'pointer'
              }}>
                <i className="fas fa-th mr-3 text-danger"></i>
                Danh mục sách</a>
            </li>
            <li className="nav-item">
              <a className="nav-link lead">
                <i className="fas fa-trophy text-warning mr-3"></i>
                Sách bán chạy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link lead">
                <i className="fas fa-shopping-cart text-dark mr-3"></i>
                Giỏ hàng
              </a>
            </li>
          </ul>
        </nav>
      </MenuStyled>
    )
  }
}

const MenuStyled = styled.div `
text-align: center;
  .nav-link{
    font-weight: bold;
    font-size: 1.5rem;
    margin: 3rem 4rem;
  }
`
