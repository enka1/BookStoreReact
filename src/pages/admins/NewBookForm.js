import React, {Component} from 'react'
import styled from 'styled-components'
import {Dropdown} from 'semantic-ui-react'

import {fetch_all_authors, fetch_all_categories, fetch_all_publisers} from '../../methods/admin/fetch_data'
import {quantity_input, price_input} from '../../methods/admin/input_format'
export class NewBookForm extends Component {
  constructor(props) {
    super(props)
    this.state = {

      authors: [],
      categories: [],
      publishers: [],
      //State sẽ post lên server
      book_img: '',
      book_name: '',
      author: '',
      publisher: '',
      book_category: [],
      import_price: 0,
      sale_price: 0,
      quantity: 0,
      description: ''
    }
  }
  async componentDidMount() {
    this.setState({authors: await fetch_all_authors(), categories: await fetch_all_categories(), publishers: await fetch_all_publisers()})
  }
  submitHandle() {}
  render() {
    return (
      <BookFormStyle className="container px-5 pb-5">
        <div className="row pt-5">
          <input
            className="form-control-plaintext display-4 mb-4"
            placeholder="Tên sách"
            type="email"/>
          <div className="col-4 p-0">
            <div className="book-img shadow mb-3">
              <img
                src={this.state.book_img.length === 0
                ? 'https://qrmart.com.sg/images/noimagefound.jpg'
                : this.state.book_img}
                alt="Book-img"/>
            </div>
            <small className="helper text-muted">
              <i className="fas mr-2 fa-info-circle"></i>
              Chọn link hình cho sách</small>
            <input
              className="form-control input mt-1"
              value={this.state.book_img}
              onChange={(e) => this.setState({book_img: e.target.value})}
              placeholder="Image URL"/>
          </div>
          <div className="col-8 pl-5">
            <div className="row mb-3">
              <div className="col">
                <label className="lead">Tác giả:</label>
                <Dropdown
                  onChange={(e, {value}) => this.setState({author: value})}
                  fluid
                  search
                  selection
                  options={this.state.authors}
                  className="h1"/>
              </div>
              <div className="col">
                <label className="lead">Nhà xuất bản:</label>
                <Dropdown
                  onChange={((e, {value}) => this.setState({publisher: value}))}
                  fluid
                  search
                  selection
                  options={this.state.publishers}
                  className="h1"/>
              </div>
            </div>
            <div className="form-group">
              <label className="lead d-block">Thể loại:</label>
              <div className="row m-0">
                <div className="col-9"></div>
                <Dropdown
                  onChange={(e, {value}) => this.setState({book_category: value})}
                  search
                  className="lead"
                  fluid
                  multiple
                  selection
                  options={this.state.categories}/>
              </div>
              <small className="form-text text-muted">
                <i className="fas mr-2 fa-info-circle"></i>
                Thể loại sách
              </small>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label className="lead">Giá nhập:</label>
                  <input
                    onChange={e => {
                    if (price_input(e.target.value)) {
                      this.setState({
                        import_price: price_input(e.target.value)
                      })
                    }
                  }}
                    value={this.state.import_price}
                    className="form-control input"/>
                  <small className="form-text text-muted">
                    <i className="fas mr-2 fa-info-circle"></i>
                    Giá gốc của sản phẩm
                  </small>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label className="lead">Giá bán:</label>
                  <input
                    onChange={e => {
                    if (price_input(e.target.value)) {
                      this.setState({
                        sale_price: price_input(e.target.value)
                      })
                    }
                  }}
                    value={this.state.sale_price}
                    className="form-control input"/>
                  <small className="form-text text-muted">
                    <i className="fas mr-2 fa-info-circle"></i>
                    Giá bán ra của sản phẩm
                  </small>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="lead">Số lượng:</label>
              <input
                value={this.state.quantity}
                onChange={(e) => {
                if (quantity_input(e.target.value)) {
                  this.setState({
                    quantity: quantity_input(e.target.value)
                  })
                }
              }}
                className="form-control input"/>
              <small className="form-text text-muted">
                <i className="fas mr-2 fa-info-circle"></i>
                Số lượng nhập kho của sản phẩm
              </small>
            </div>
            <div className="form-group">
              <label className="lead">Sơ lược:</label>
              <textarea
                onChange={e => this.setState({description: e.target.value})}
                value={this.state.description}
                className="form-control"
                rows="6"></textarea>
            </div>
            <button
              onClick={() => this.submitHandle()}
              className="btn btn-dark button mt-3">Thêm sách vào kho</button>
          </div>
        </div>
      </BookFormStyle>
    )
  }
}

const BookFormStyle = styled.div `
  .label{
    font-weight: normal;
    margin-right: .6rem!important;
    background-color: #d8f1fa;
  }
  .text{
    font-size: 1.3rem;
  }
  .icon{
    margin-left: .7rem!important;
  }
  .button{
    padding: 1rem;
    font-size: 1.3rem;
  }
    font-size: 1.5rem;
    .helper{
        font-size: 1rem;
    }
    .input{
        height: 4rem;
    }
    .custom-select{
      height: 4rem;
    }
    .form-control{
        font-size: 1.4rem;
    }
    .book-img{
        background-color: #F5F5F5;
        min-height: 65vh;
        img{
            width: 100%;
        }
    }
`