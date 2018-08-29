import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'
import webfont from 'webfontloader'

import {fetch_book_detail} from '../../actions/users/books/fetch_book_detail.action'

webfont.load({
  google: {
    families: ['Lora']
  }
})
class BookDetail extends Component {
  componentDidMount() {
    if (!this.props.book.image_url) {
      this
        .props
        .dispatch(fetch_book_detail(this.props.book_id))
    }
  }
  render() {
    return (
      <BookDetailStyle className="container">
        <div className="row">
          <div className="col-5">
            <img src={this.props.book.image_url} className="book_image" alt=""/>
          </div>
          <div className="col-7">
            <div className="book-name">{this.props.book.book_name}</div>
            <div className="divider"></div>
            <p className="book-info">
              Tác giả: <span></span>
            </p>
            <p className="book-info">
              Nhà xuất bản:
            </p>
            <p className="book-info">
              Ngày xuất bản: {moment(this.props.book.on_shelf_time).format('[Ngày] DD, [Tháng] M [Năm] YYYY')}
            </p>
          </div>
        </div>
      </BookDetailStyle>
    )
  }
}

const mapStateToProps = (state) => {
  return {book: state.book_detail}
}

const BookDetailStyle = styled.div `
  padding: 5rem 20rem;
  .book_image{
    width: 100%;
  }
  .book-info{
    padding:1rem 0;
    font-size: 1.5rem;
  }
  .book-name{
    color: #309AAC;
    font-family: 'Lora', serif;
    font-size: 3rem;
  }
  .divider{
    margin: 1rem 0;
    border-top: 3px solid #309AAC;
    width: 8rem;
  }

`

export default connect(mapStateToProps)(BookDetail)
