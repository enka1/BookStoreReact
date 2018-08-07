import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetail extends Component {
  render() {
    return (
      <div>
        <img src={this.props.book.image_url} alt=""/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {book: state.book_detail}
}

export default connect(mapStateToProps)(BookDetail)
