import React, {Component} from 'react'
import {connect} from 'react-redux'

import {BookList} from '../../components/users/BookList'
import SearchBar from '../../components/public/SearchBar'
import BookGenre from '../../components/public/BookGenre'
import Paginate from '../../components/users/Paginate'
import {fetch_latest_book_default} from '../../actions/users/books/fetch_book_list.action'

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
      .dispatch(fetch_latest_book_default())
  }
  changePage(page) {
    this
      .props
      .dispatch(fetch_latest_book_default(page))
    document
      .getElementById('book-gem-box')
      .scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  render() {
    return (
      <div className="container pt-5" id="book-gem-box">
        <div className="row">
          <div className="col-7 offset-5">
            <div className="row">
              <div className="col d-flex align-items-center"></div>
              <div className="col ml-auto">
                <SearchBar/>
              </div>
            </div>
          </div>

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