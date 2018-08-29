import React, {Component} from 'react'
import styled from 'styled-components'

export class CarouselItem extends Component {
  render() {
    return (
      <BookItem
        image_url={this.props.book.slider.image_url}
        className={this.props.className}>
        <div className="col-lg-6 mx-auto gem-box">
          <div className="book-quote">
            <p className="book-name font-weight-bold display-4 text-white">{this.props.book.book_name}</p>
            <div className="divider"></div>
            <blockquote className="mb-3">
              <p className="mb-2 pr-4 blockquote-body text-white">{this.props.book.slider.quote}</p>
              <footer className="blockquote-footer text-white lead">{this.props.book.slider.character_name}</footer>
            </blockquote>
            <div className="btn btn-outline-light">
              <span className="lead p-3 font-weight-bold font-italic">Tìm hiểu thêm</span>
            </div>
          </div>
          <img
            className="book-img float-left shadow"
            src={this.props.book.image_url}
            alt=""/>

        </div>
      </BookItem>
    )
  }
}

const BookItem = styled.div `
    padding-top: 8rem;
    padding-bottom: 8rem;
    background-size:cover;
    background-attachment: fixed;
    background-position: center;
    
    min-height: 75vh;
    max-height: 75vh;
    .divider{
      border-top: 3px solid white;
      width: 7rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .gem-box{
      overflow: hidden;
    }
    .book-img{
      float: left;
      width: 35%;
    }
    .blockquote-body{
      font-style: italic;
      font-size: 2rem;
    }
    .blockquote-footer{
      font-style: italic;
      font-size: 2rem;
    }
    .book-quote{
      padding-right: 1rem;
      height: 100%;
      float: left;
      width: 65%;
    }
    background-image: linear-gradient(315deg, rgba(127, 90, 131, 0.2) 0%, rgba(13, 50, 77, 0.7) 74%),url(${props => props.image_url});
`