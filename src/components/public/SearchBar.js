import React, {Component} from 'react'
import styled from 'styled-components'

export class SearchBar extends Component {
  render() {
    return (
      <SearchBarStyle className="input-group d-flex align-items-center shadow">
        <input type="text" className="form-control" placeholder="Tên sách ..."/>
        <i className="fas fa-search text-primary"></i>
      </SearchBarStyle>
    )
  }
}

const SearchBarStyle = styled.div `
font-size: 1.4rem;
position: relative;
input{
  height: 4rem;
  font-size: inherit;
}
i{
  z-index: 999;
  right: 15px;
  font-size: inherit;
  color: black;
  position: absolute;
}
`