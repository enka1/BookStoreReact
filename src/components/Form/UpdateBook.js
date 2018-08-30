import React, {Component} from 'react'
import styled from 'styled-components'
import {Dropdown, Input, TextArea, Icon} from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import validator from 'validator'
import moment from 'moment'
import 'moment/locale/vi'
import 'react-datepicker/dist/react-datepicker.css'

import {history} from '../../routes/index'
import {fetch_all_authors, fetch_all_categories, fetch_all_publisers, fetch_book_detail} from '../../methods/admin/fetch_data'
import {quantity_input, price_input} from '../../methods/admin/input_format'
import {update_book} from '../../methods/admin/mutation'
import {convert_string_to_price, convert_price} from '../../methods/convert_price'

export class UpdateBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authors: [],
      categories: [],
      publishers: [],
      //Error State
      error: {
        book_name: '',
        author: '',
        publisher: '',
        book_category: '',
        sale_price: '',
        book_image: ''
      },
      //State sẽ post lên server
      book_img: '',
      book_name: '',
      author: '',
      publisher: '',
      book_category: [],
      import_price: 0,
      sale_price: 0,
      quantity: 0,
      description: '',
      on_shelf_time: moment()
    }
  }
  async componentDidMount() {
    let book = await fetch_book_detail(this.props.id)
    await this.setState({
      book_name: book.book_name,
      author: book.author_id,
      publisher: book.publisher_id,
      book_category: book.categories
        ? book
          .categories
          .categories
          .substring(1, book.categories.categories.length - 1)
          .split(',')
        : [],
      import_price: convert_price(book.import_price),
      sale_price: convert_price(book.sale_price),
      quantity: book.quantity,
      description: book.description,
      on_shelf_time: moment(book.on_shelf_time, 'YYYY-MM-DD'),
      book_img: book.image_url
    })

    this.setState({authors: await fetch_all_authors(), categories: await fetch_all_categories(), publishers: await fetch_all_publisers()})
  }
  async submitHandle() {
    if (this.validateForm()) {
      let book = {
        book_id: this.props.id,
        book_name: this.state.book_name,
        author_id: this.state.author,
        publisher_id: this.state.publisher,
        on_shelf_time: moment(this.state.on_shelft_time).format("MM/DD/YYYY"),
        categories: this.state.book_category,
        import_price: convert_string_to_price(this.state.import_price),
        sale_price: convert_string_to_price(this.state.sale_price),
        book_img: this.state.book_img,
        quantity: this.state.quantity,
        description: this.state.description
      }
      let result = await update_book(book)
      if (result.status === 'success') {
        history.push('/admin/storage')
      } else {
        console.log(result)
      }
    }
  }

  validateForm() {
    let is_valid = true;
    if (this.state.author.length === 0) {
      is_valid = false
      this.setState(preSt => ({
        error: {
          ...preSt.error,
          author: 'Xin chọn tác giả trước khi thêm sách'
        }
      }))
    }
    if (this.state.publisher.length === 0) {
      is_valid = false
      this.setState(preSt => ({
        error: {
          ...preSt.error,
          publisher: 'Xin chọn nhà xuất bản trước khi thêm sách'
        }
      }))
    }
    if (this.state.book_category.length === 0) {
      is_valid = false
      this.setState(preSt => ({
        error: {
          ...preSt.error,
          book_category: 'Xin chọn ít nhất 1 thể loại cho sách'
        }
      }))
    }
    if (convert_string_to_price(this.state.sale_price) < convert_string_to_price(this.state.import_price)) {
      this.setState(preSt => ({
        error: {
          ...preSt.error,
          sale_price: 'Cảnh báo: Giá bán thấp hơn giá nhập'
        }
      }))
    }
    if (this.state.book_name.length === 0) {
      this.setState(preSt => ({
        error: {
          ...preSt.error,
          book_name: 'Xin nhập tên sách'
        }
      }))
    }
    if (this.state.book_img.length === 0) {
      this.setState(preSt => ({
        error: {
          ...preSt.error,
          book_image: 'Xin chọn hình cho sách'
        }
      }))
    } else if (!validator.isURL(this.state.book_img, ['http', 'https'])) {
      this.setState(preSt => ({
        error: {
          ...preSt.error,
          book_image: 'Xin chọn đường dẫn chính xác'
        }
      }))
    }
    return is_valid
  }
  render() {
    return (
      <BookFormStyle className="container px-5 pb-5">
        <div className="row pt-5">
          <div className="w-100">
            <input
              onChange={(e) => {
              this.setState({book_name: e.target.value})
            }}
              value={this.state.book_name}
              className="form-control-plaintext display-4"
              placeholder="Tên sách"/>
            <p>
              {this.state.error.book_name.length > 0 && <small className="lead text-danger">
                <i className="fas fa-exclamation-circle mr-2"></i>
                {this.state.error.book_name}
              </small>}
            </p>
          </div>

          <div className="col-4 p-0 mt-3">
            <div className="book-img shadow mb-3">
              <img
                src={this.state.book_img
                ? this.state.book_img
                : 'https://qrmart.com.sg/images/noimagefound.jpg'}
                alt="Book-img"/>
            </div>
            <Input
              input={< input value = {
              this.state.book_img
            } />}
              iconPosition="left"
              icon="image outline"
              placeholder="Image URL"
              error={this.state.error.book_image.length > 0}
              fluid
              onChange={(e) => this.setState({book_img: e.target.value})}/>
            <p>
              {this.state.error.book_image.length > 0
                ? <small className="lead text-danger">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    {this.state.error.book_image}
                  </small>
                : <small className="helper text-muted">
                  <i className="fas mr-2 fa-info-circle"></i>
                  Chọn link hình cho sách</small>}
            </p>

          </div>
          <div className="col-8 pl-5">
            <div className="row mb-3">
              <div className="col">
                <label
                  className={this.state.error.author.length > 0
                  ? "text-danger lead"
                  : "lead"}>Tác giả:</label>
                <Dropdown
                  error={this.state.error.author.length > 0}
                  onChange={(e, {value}) => this.setState({author: value})}
                  fluid
                  search
                  selection
                  value={this.state.author}
                  options={this.state.authors}
                  className="h1"/>
                <p>
                  {this.state.error.author.length > 0 && <small className="lead text-danger">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    {this.state.error.author}
                  </small>}
                </p>
              </div>
              <div className="col">
                <label
                  className={this.state.error.publisher.length > 0
                  ? "text-danger lead"
                  : "lead"}>Nhà xuất bản:</label>
                <Dropdown
                  error={this.state.error.publisher.length > 0}
                  onChange={((e, {value}) => this.setState({publisher: value}))}
                  fluid
                  value={this.state.publisher}
                  search
                  selection
                  options={this.state.publishers}
                  className="h1"/>
                <p>
                  {this.state.error.publisher.length > 0 && <small className="lead text-danger">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    {this.state.error.publisher}
                  </small>}
                </p>
              </div>
            </div>
            <div className="form-group">
              <label
                className={this.state.error.book_category.length > 0
                ? "text-danger lead"
                : "lead"}>Thể loại:</label>
              <div className="row m-0">
                <div className="col-9"></div>
                <Dropdown
                  value={this.state.book_category}
                  error={this.state.error.book_category.length > 0}
                  onChange={(e, {value}) => this.setState({book_category: value})}
                  search
                  className="lead"
                  fluid
                  multiple
                  selection
                  options={this.state.categories}/>
                <p>
                  {this.state.error.book_category.length > 0 && <small className="lead text-danger">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    {this.state.error.book_category}
                  </small>}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label className="lead">Giá nhập:</label>
                  <Input
                    fluid
                    icon="yen sign"
                    onChange={e => {
                    if (price_input(e.target.value)) {
                      this.setState({
                        import_price: price_input(e.target.value)
                      })
                    }
                  }}
                    input={< input className = "lead" value = {
                    this.state.import_price
                  } />}/>

                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label
                    className={this.state.error.sale_price.length > 0
                    ? "text-danger lead"
                    : "lead"}>Giá bán:</label>
                  <Input
                    error={this.state.error.sale_price.length > 0}
                    fluid
                    icon="yen sign"
                    input={< input className = "lead" value = {
                    this.state.sale_price
                  } />}
                    onChange={e => {
                    if (price_input(e.target.value)) {
                      this.setState({
                        sale_price: price_input(e.target.value)
                      })
                    }
                  }}/>
                  <p>
                    {this.state.error.sale_price.length > 0 && <small className="lead text-danger">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      {this.state.error.sale_price}
                    </small>}
                  </p>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="lead"><Icon name="calendar alternate outline" className="mr-2"/>Ngày xuất bản:</label>
              <DatePicker
                dateFormat="DD/MM/YYYY"
                locale="vi"
                selected={this.state.on_shelf_time}
                onChange={date => this.setState({on_shelf_time: date})}
                className="input lead form-control"/>
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
            </div>
            <div className="form-group">
              <label className="lead">Sơ lược:</label>
              <TextArea
                className="lead w-100 p-2"
                autoHeight
                onChange={e => this.setState({description: e.target.value})}
                value={this.state.description}
                rows="6"/>
            </div>
            <button
              onClick={() => this.submitHandle()}
              className="btn btn-outline-success button mt-3">Cập nhật thông tin sách</button>
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