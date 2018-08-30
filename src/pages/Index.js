import React, {Component} from 'react'
import {connect} from 'react-redux'

import {BookList} from '../components/Card/BookList'
import SearchBar from '../containers/Input/SearchBar'
import BookGenre from '../components/Table/Category'
import Paginate from '../components/Menu/PaginationBar'
import {fetch_by_book_genre} from '../actions/users/books/fetch_book_list.action'

class Index extends Component {
  constructor(props) {
    super(props)
    this.changePage = this
      .changePage
      .bind(this)
  }
  componentDidMount() {
    this
      .props
      .dispatch(fetch_by_book_genre(1, null, 'on_shelf_time', false))
  }
  changePage(page) {
    this
      .props
      .dispatch(fetch_by_book_genre(page, null, 'on_shelf_time', false))
    document
      .getElementById('book-gem-box')
      .scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  render() {
    return (
      <div className="container pt-5" id="book-gem-box">
        <div className="col-3 p-0 ml-auto">
          <SearchBar/>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <BookGenre/>
          </div>
          <div className="col-9">
            <BookList books={this.props.books.data}/>
            <Paginate
              changePage={this.changePage}
              currentPage={this.props.books.current_page}
              totalPage={this.props.books.last_page}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {books: state.books}
}

export default connect(mapStateToProps)(Index)