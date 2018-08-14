import React, {Component} from 'react'
import styled from 'styled-components'

import {fetch_best_seller_book} from '../../methods/fetch_book_data'
export class BestSeller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: null
    }
  }
  async componentDidMount() {
    this.setState({book: await fetch_best_seller_book()})
  }

  renderLayout() {
    if (this.state.book) {
      return (
        <BestSellerLayout className="row d-flex justify-content-center">
          <div className="col-4">
            <img className="book-img" src={this.state.book.image_url} alt=""/>
          </div>
        </BestSellerLayout>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderLayout()}
      </div>
    )
  }
}

const BestSellerLayout = styled.div `
  .book-img{
    width: 100%;
  }
`