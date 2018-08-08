import React, {Component} from 'react'

import {BookList} from '../components/BookList'
import {Paginate} from '../components/Paginate'
import {fetch_latest_book} from '../method/fetch_book_data'

export class NewBooksPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      currentPage: 1
    }
    this.changePage = this
      .changePage
      .bind(this)
  }
  async changePage(page) {
    await this.setState({currentPage: page})
    this.load_book_data()
  }
  async load_book_data() {
    this.setState({
      data: await fetch_latest_book(this.state.currentPage)
    })
  }
  componentDidMount() {
    this.load_book_data()
  }
  render() {
    if (this.state.data) 
      return (
        <div className="container mt-5 pt-5">
          <BookList center books={this.state.data.data} title='Sách mới'/>
          <Paginate
            currentPage={this.state.currentPage}
            changePage={this.changePage}
            total={this.state.data.last_page}/>
        </div>
      )
    return (null)
  }
}
