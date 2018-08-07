import React, {Component} from 'react'

import Book from './Book'
import styled from 'styled-components';

export class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }
  async componentDidMount(){
    this.setState({
      books: await this.props.fetchBooks()
    })
  }

  renderBookList() {
    if (typeof this.state.books) {
      return this
        .state
        .books
        .map(book => <Book className="col-lg-3 col-md-4" book={book} key={book.book_id}/>)
    }
  }
  render() {
    return (
      <LatestArrived>
        <p className="display-4 text-center">{this.props.title}</p>
        <div className="divider"/>
        <div className="row">{this.renderBookList()}</div>
        <a href={this.props.link} className="float-right mt-5">
          <em className="h3">View more ►</em>
        </a>
      </LatestArrived>

    )
  }
}

const LatestArrived = styled.div `
  overflow:hidden;
  padding-bottom: 2rem;
  .divider{
    border-bottom: 3px solid black;
    width: 4rem;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

`