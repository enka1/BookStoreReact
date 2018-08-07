import React, {Component} from 'react'
import {BookList} from '../components/BookList'
import {fetch_latest_book_INDEX} from '../method/fetch_book_data'

export class Index extends Component {
  render() {
    return (
      <div className="container pt-5">
        <BookList link="news-book" fetchBooks={fetch_latest_book_INDEX} title="Sách mới"/>
      </div>
    )
  }
}