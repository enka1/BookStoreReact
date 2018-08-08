import React, {Component} from 'react'
import {BookList} from '../components/BookList'
import {BestSeller} from '../components/BestSeller'
import {fetch_latest_book_INDEX} from '../method/fetch_book_data'

export class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      new_books: []
    }
  }
  async componentDidMount(){
    this.setState({
      new_books: await fetch_latest_book_INDEX()
    })
  }
  render() {
    return (
      <div className="container pt-5">
        <BookList title="Sách mới" link="news-book" books={this.state.new_books}/>
      </div>
    )
  }
}