import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'
import webfont from 'webfontloader'
import {InputNumber} from 'antd'

import {fetch_book_detail} from '../../actions/users/books/fetch_book_detail.action'
import {convert_price} from '../../methods/convert_price'

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
          <div className="col-4 p-0">
            <img src={this.props.book.image_url} className="book_image shadow" alt=""/>
          </div>
          <div className="col-8 pl-5">
            <div className="book-name">{this.props.book.book_name}</div>
            <div className="divider"></div>
            <div className="py-3">
              Tác giả:{this.props.book.author && (
                <span className="font-weight-bold lead ml-2 ">{`${this.props.book.author.first_name} ${this.props.book.author.last_name}`}</span>
              )}
            </div>
            <div className="py-3">
              Nhà xuất bản:{this.props.book.publisher && (
                <span className="font-weight-bold lead ml-2 ">{this.props.book.publisher.publisher_name}</span>
              )}
            </div>
            <div className="py-3">
              Ngày xuất bản:<span className="font-weight-bold lead ml-2 ">{moment(this.props.book.on_shelf_time).format('[Ngày] DD, [Tháng] M [Năm] YYYY')}</span>
            </div>
            <div className="py-3">
              Giá bán:<span className="font-weight-bold lead ml-2 ">{this.props.book.sale_price
                  ? convert_price(this.props.book.sale_price) + ' ₫'
                  : ''}</span>
            </div>
            <div className="py-3">
              Số lượng:<InputNumber className="lead my-2 ml-3"/>
            </div>

            <div className="btn lead py-3 px-4 btn-outline-success mt-3">
              <i className="fas fa-shopping-cart mr-2"></i>
              Thêm vào giỏ hàng</div>
          </div>
        </div>
        <div className="mt-5">
          <p>Sơ lược:</p>
          <p className="">
            {this.props.book.description}
          </p>
        </div>
      </BookDetailStyle>
    )
  }
}

const mapStateToProps = (state) => {
  return {book: state.book_detail}
}

const BookDetailStyle = styled.div `
  .btn{
    font-size: 1.2rem;
  }
  font-size: 1.3rem;
  padding: 5rem 20rem;
  .book_image{
    width: 100%;
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
