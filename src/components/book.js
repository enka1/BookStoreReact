import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import webfont from 'webfontloader'

import {history} from '../routes'
import {BookFlash} from './BookFlash'
import {convert_price} from '../method/convert_price'
import {fetch_book_detail} from '../actions/book/fetch_book_detail.action'

webfont.load({
  google: {
    families: ['Montserrat']
  }
})

class Book extends Component {
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
  onClickHandle() {
    this
      .props
      .dispatch(fetch_book_detail(this.props.book.book_id))
    history.push('/book-detail')
  }
  render() {
    return (
      <BookLayout
        className={this.props.className + ' mb-5'}
        onClick={() => this.onClickHandle()}>
        <img
          className="book-image shadow"
          onMouseEnter={() => this.hoverHandle(true)}
          onMouseOut={() => this.hoverHandle(false)}
          onMouseMove={this
          .mouseMoveHandle
          .bind(this)}
          src={this.props.book.image_url}
          alt=""/>
        <div className="book-divider"></div>
        <p className="book-name">{this.props.book.book_name}</p>
        <p className="price">{convert_price(this.props.book.price)}₫</p>
        <BookFlash
          x={this.state.x}
          book={this.props.book}
          y={this.state.y}
          isInvisible={this.state.isHover}/>
      </BookLayout>
    )
  }
}

const BookLayout = styled.div `
    text-align: center;
    position: relative;
    .book-divider{
        width: 25%;
        margin: 1rem auto;
        border-bottom: .3rem solid black;
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
    .book-image:hover{
      transform: translateY(-2rem);
      transition: all.2s
    }
    .price{
        font-size: 1.3rem;
        font-weight: bold;
    }
`

export default connect()(Book)