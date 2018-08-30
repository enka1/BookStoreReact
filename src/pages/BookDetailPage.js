import React, {Component} from 'react'
import BookDetail from '../components/App/BookDetail'
export class BookDetailPage extends Component {
  componentDidMount() {
    window.scroll({behavior: "smooth", left: 0, top: 0})
  }
  render() {
    return (<BookDetail book_id={this.props.match.params.id}/>)
  }
}