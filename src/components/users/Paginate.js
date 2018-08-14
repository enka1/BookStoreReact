import React, {Component} from 'react'
import styled from 'styled-components'

export class Paginate extends Component {
  onClickHandle(page) {
    this
      .props
      .changePage(page)
  }
  renderPage() {
    if (this.props.total) {
      let pages = []
      for (let i = 1; i <= this.props.total; i++) {
        pages.push((
          <li key={i} className="page-item">
            <p
              onClick={() => this.onClickHandle(i)}
              className={this.props.currentPage === i
              ? "page-link bg-danger text-white px-3"
              : "page-link px-3"}>{i}</p>
          </li>
        ))
      }
      return pages
    }
    return null
  }
  render() {

    return (
      <PaginateStyle>
        <ul className="pagination justify-content-center">
          <li
            className={this.props.currentPage === 1
            ? "page-item disabled"
            : "page-item "}>
            <a
              className="page-link"
              onClick={() => this.onClickHandle(this.props.currentPage - 1)}>Prev</a>
          </li>
          {this.renderPage()}
          <li
            className={this.props.currentPage === this.props.total
            ? "page-item disabled"
            : "page-item "}>
            <a
              className="page-link"
              onClick={() => this.onClickHandle(this.props.currentPage + 1)}>Next</a>
          </li>
        </ul>
      </PaginateStyle>
    )
  }
}

const PaginateStyle = styled.div `
  font-size: 1.7rem;
`