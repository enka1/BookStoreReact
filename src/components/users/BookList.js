import React, {Component} from 'react'

import Book from './Book'
import styled from 'styled-components';

export class BookList extends Component {
  renderBookList() {
    if (this.props.books) {
      return this
        .props
        .books
        .map(book => <Book className="col-lg-3 col-md-4" book={book} key={book.book_id}/>)
    }
  }
  render() {
    return (
      <BookListStyle>
        <div className="row book-gem-box">{this.renderBookList()}</div>
        <div className="divider-right mx-auto "></div>
      </BookListStyle>

    )
  }
}

const BookListStyle = styled.div `
  overflow:hidden;
  padding-bottom: 2rem;
  .book-gem-box{
    padding-top: 5rem;
  }
  .divider{
    border-bottom: 3px solid black;
    width: 4rem;
    margin-top: 2rem;
  
  }
`