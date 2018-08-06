import React, {Component} from 'react'
import styled from 'styled-components'
import webfont from 'webfontloader'

import {BookFlash} from './book-flash-info'

const convert_price = price => {
  let convert = ''
  let j = 0
  price = price
    .toString()
    .split('')
  for (let i = price.length - 1; 0 <= i; i--) {
    if (j === 3) {
      j = 0
      price[i] = price[i] + '.'
    }
    convert = price[i] + convert
    j++
  }
  return convert
}

webfont.load({
  google: {
    families: ['Montserrat']
  }
})

export class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false,
      x: 0,
      y: 0
    }
    this.hoverHandle = this
      .hoverHandle
      .bind(this)
  }
  hoverHandle(flag) {
    this.setState({isHover: flag})
  }
  mouseMoveHandle(e) {
    this.setState({x: e.screenX, y: e.screenY})
  }
  render() {
    return (
      <BookLayout className={this.props.className}>
        <img
          className="book-image"
          onMouseEnter={() => this.hoverHandle(true)}
          onMouseOut={() => this.hoverHandle(false)}
          onMouseMove={this
          .mouseMoveHandle
          .bind(this)}
          src={this.props.book.image_url}
          alt=""/>
        <div className="divider"></div>
        <p className="book-name">{this.props.book.book_name}</p>
        <p className="price">{convert_price(this.props.book.price)}₫</p>
        <BookFlash
          x={this.state.x}
          author_id={this.props.book.author_id}
          y={this.state.y}
          isInvisible={this.state.isHover}/>
      </BookLayout>
    )
  }
}

const BookLayout = styled.div `
    text-align: center;
    position: relative;
    .divider{
        width: 25%;
        margin: 1rem auto;
        border-bottom: .2rem solid black;
    }
    .book-name{
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
        margin-bottom: .5rem;
    }
    .book-image{
        cursor: pointer;
        height: 34rem;
    }
    .price{
        font-size: 1.3rem;
        font-weight: bold;
    }
`