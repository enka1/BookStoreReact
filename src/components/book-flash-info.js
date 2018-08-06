import React, {Component} from 'react'
import styled from 'styled-components'

export class BookFlash extends Component {
  render() {
    return (
      <BookInfo
        posX={this.props.x}
        posY={this.props.y}
        invisible={this.props.isInvisible}>
        <h1>Book Info</h1>
        <p>x:{this.props.x}
          - y:{this.props.y}</p>
      </BookInfo>
    )
  }
}

const BookInfo = styled.div `
    z-index: 10;
    position: fixed;
    padding: 2rem;
    left: ${props => props.posX + 15}px;
    top: ${props => props.posY - 65}px;
    background-color: white;
    border: 0.5px solid black;
    display: ${props => props.invisible
  ? 'block'
  : 'none'};
  transition: all .1s;
`
