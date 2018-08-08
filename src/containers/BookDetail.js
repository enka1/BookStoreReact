import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

class BookDetail extends Component {

  render() {
    return (
      <BookDetailStyle className="container">
        <div className="col-4">
          <img src={this.props.book.image_url} alt=""/>
        </div>
      </BookDetailStyle>
    )
  }
}

const mapStateToProps = (state) => {
  return {book: state.book_detail}
}

const BookDetailStyle = styled.div `

`

export default connect(mapStateToProps)(BookDetail)
