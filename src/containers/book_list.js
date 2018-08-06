import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetch_latest_book} from '../actions/book/fetch_latest_book.action'
import {Book} from '../components/book'
import styled from '../../node_modules/styled-components';

class BookList extends Component {
  renderBookList() {
    if (this.props.books) {
      return this
        .props
        .books
        .map(book => <Book className="col" book={book} key={book.book_id}/>)
    }
    
  }

  async componentDidMount() {
    this
      .props
      .dispatch(fetch_latest_book())
  }
  render() {
    return (
      <div className="container mt-5">
        <p className="display-4 text-center">New Books</p>
        <Divider/>
        <div className="row">{this.renderBookList()}</div>
      </div>
    )
  }
}

const Divider = styled.div `
  border-bottom: 2px solid black;
  width: 15%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 4rem;
`

const mapStateToProps = state => {
  return {books: state.books}
}

export default connect(mapStateToProps)(BookList)