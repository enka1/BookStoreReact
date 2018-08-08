import React, {Component} from 'react'
import styled from 'styled-components'

import {fetch_random_book} from '../method/fetch_book_data'
import {SliderItem} from '../components/SliderItem'

export class BookSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }
  async componentWillMount() {
    this.setState({books: await fetch_random_book()})
  }
  renderSlider() {
    if (this.state.books.length > 0) {
      let slider_item = []
      for (let i = 0; i < this.state.books.length; i++) {
        slider_item.push(<SliderItem
          key={this.state.books[i].book_id}
          book={this.state.books[i]}
          className={i === 0
          ? 'carousel-item active'
          : 'carousel-item'}/>)
      }
      return slider_item
    }
  }
  render() {
    return (
      <SliderLayout>
        <div id="bookSliders" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#bookSliders" data-slide-to="0" className="active"></li>
            <li data-target="#bookSliders" data-slide-to="1"></li>
            <li data-target="#bookSliders" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            {this.renderSlider()}
          </div>
          <a
            className="carousel-control-prev"
            href="#bookSliders"
            role="button"
            data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#bookSliders"
            role="button"
            data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </SliderLayout>
    )
  }
}

const SliderLayout = styled.div `
  max-height: 75vh;
`