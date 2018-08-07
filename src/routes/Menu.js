import React, {Component} from 'react'
import styled from 'styled-components'
export class Menu extends Component {
  render() {
    return (
      <MenuStyled>
        <nav className="navbar-light navbar bg-white navbar-expand-sm container d-flex justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link lead">Trang chủ</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link lead">Danh mục sách</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link lead">Sách bán chạy</a>
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
    font-size: 1.5rem;
    margin: 3rem 4rem;
  }
`
