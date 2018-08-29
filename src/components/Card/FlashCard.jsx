import React, {Component} from 'react'
import styled from 'styled-components'
import moment from 'moment'
export class FlashCard extends Component {
  getBookDescription() {
    if (this.props.book.description.length > 0) {
      return this
        .props
        .book
        .description
        .substr(0, 250) + '........'
    }
    return ''
  }
  render() {
    if (this.props.book) {
      return (
        <BookInfo
          posX={this.props.x}
          posY={this.props.y}
          invisible={this.props.isInvisible}>
          <p className="book_name">{this.props.book.book_name}</p>
          <p>
            <strong>Tác giả:
            </strong>
            {' ' + this.props.book.author.first_name + ' ' + this.props.book.author.last_name}</p>
          <p>
            <strong>Nhà xuất bản:
            </strong>
            {' ' + this.props.book.publisher.publisher_name}</p>
          <p>
            <strong>Ngày phát hành:
            </strong>
            {' ' + moment(this.props.book.on_shelf_time).format('DD/MM/YYYY')}</p>
          <p>
            <strong className="mr-2">Sơ lược:
            </strong>
            {this.getBookDescription()}</p>
        </BookInfo>
      )
    }
    return (null)
  }
}

const BookInfo = styled.div `
    max-width: 40vh;
    p{
      font-size:1.2rem;
    }
    z-index: 10;
    position: fixed;
    padding: 1.5rem 1.3rem;
    text-align: left;
    left: ${props => props.posX + 15}px;
    top: ${props => props.posY - 65}px;
    background-color: white;
    border: 0.2px solid black;
    display:${props => props.invisible
  ? 'block'
  : 'none'};
    transition: all .1s;
    .book_name{
      font-weight:bold;
      font-size: 1.6rem;
    }
    .book-img{
      width: 15rem;
    }
    transition:all.2s;
`
