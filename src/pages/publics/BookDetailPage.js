import React, {Component} from 'react'
import BookDetail from '../../components/users/BookDetail'
export class BookDetailPage extends Component {

  render() {
    return (
        <div>
            <BookDetail book_id={this.props.match.params.id}/>
        </div>
    )
  }
}