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
      <LatestArrived>
        <p
          className="text-center display-4 font-weight-bold">{this.props.title}</p>
        <div
          className="divider mx-auto"/>
        <div className="row book-gem-box">{this.renderBookList()}</div>
        <div className="divider-right mx-auto "></div>
        {this.props.link
          ? (
            <a href={this.props.link} className="float-right mt-5">
              <em className="h3">View more ►</em>
            </a>
          )
          : null}
      </LatestArrived>

    )
  }
}

const LatestArrived = styled.div `
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