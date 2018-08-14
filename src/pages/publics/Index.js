import React, {Component} from 'react'
import {BookList} from '../../components/users/BookList'
import {fetch_latest_book_INDEX} from '../../methods/fetch_book_data'

export class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      new_books: []
    }
  }
  async componentDidMount() {
    this.setState({new_books: await fetch_latest_book_INDEX()})
  }
  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-9">
            <BookList title="Sách mới" link="news-book" books={this.state.new_books}/>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    )
  }
}