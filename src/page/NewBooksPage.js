import React, {Component} from 'react'

import {BookList} from '../components/BookList'
import {fetch_latest_book} from '../method/fetch_book_data'

export class NewBooksPage extends Component {
  render() {
    return (
      <div className="container">
        <BookList
          title='Sách mới'
          fetchBooks={fetch_latest_book}/>
      </div>
    )
  }
}
