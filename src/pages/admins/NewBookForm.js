import React, {Component} from 'react'
import styled from 'styled-components'

export class NewBookForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book_name: '',
      author: '',
      categories: [],
      import_price: 0,
      quantity: 0,
      sale_price: 0,
      book_img: 'https://qrmart.com.sg/images/noimagefound.jpg'
    }
  }
  render() {
    return (
      <BookFormStyle className="container px-5">
        <div className="row pt-5">
          <input
            className="form-control-plaintext display-4 mb-4"
            placeholder="Tên sách"
            type="email"/>
          <div className="col-4 p-0">
            <div className="book-img shadow mb-3">
              <img src={this.state.book_img} alt="Book-img"/>
            </div>
            <small className="helper text-muted">
              <i class="fas mr-2 fa-info-circle"></i>
              Chọn link hình cho sách</small>
            <input
              className="form-control input mt-1"
              value={this.state.book_img}
              onChange={(e) => this.setState({book_img: e.target.value})}
              placeholder="Image URL"/>
          </div>
          <div className="col-8 pl-5">
            <div class="row mb-3">
              <div class="col">
                <label className="lead">Tác giả:</label>
                <select class="custom-select" id="inputGroupSelect01">
                  <option defaultValue>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col">
                <label className="lead">Nhà xuất bản:</label>
                <select class="custom-select" id="inputGroupSelect01">
                  <option defaultValue>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label className="lead d-block">Thể loại:</label>
              <div className="row m-0">
                <div className="col-9"></div>
                <select className="custom-select col-3">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <small className="form-text text-muted">
                <i class="fas mr-2 fa-info-circle"></i>
                Thể loại sách
              </small>
            </div>
            <div class="row mb-3">
              <div class="col">
                <div classname="form-group">
                  <label className="lead">Giá nhập:</label>
                  <input className="form-control input"/>
                  <small className="form-text text-muted">
                    <i class="fas mr-2 fa-info-circle"></i>
                    Giá gốc của sản phẩm
                  </small>
                </div>
              </div>
              <div class="col">
                <div className="form-group">
                  <label className="lead">Giá bán:</label>
                  <input className="form-control input"/>
                  <small className="form-text text-muted">
                    <i class="fas mr-2 fa-info-circle"></i>
                    Giá bán ra của sản phẩm
                  </small>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="lead">Số lượng:</label>
              <input className="form-control input"/>
              <small className="form-text text-muted">
                <i class="fas mr-2 fa-info-circle"></i>
                Số lượng tồn kho của sản phẩm
              </small>
            </div>
            <div className="form-group">
              <label className="lead">Sơ lược:</label>
              <textarea className="form-control" rows="6"></textarea>
            </div>
            <button className="btn btn-dark button mt-3">Thêm sách vào kho</button>
          </div>
         
        </div>
      </BookFormStyle>
    )
  }
}

const BookFormStyle = styled.div `
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