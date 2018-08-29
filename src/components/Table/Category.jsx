import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {fetch_categories} from '../../methods/fetch_categories'
import {fetch_by_book_genre} from '../../actions/users/books/fetch_book_list.action'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      selected: []
    }
    this.handleCheckboxToggle = this
      .handleCheckboxToggle
      .bind(this)
  }
  async handleCheckboxToggle(genre_id) {
    if (this.state.selected.includes(genre_id)) {
      await this.setState({
        selected: this
          .state
          .selected
          .filter(genre => genre !== genre_id)
      })
    } else {
      await this.setState({
        selected: [
          ...this.state.selected,
          genre_id
        ]
      })
    }
    this
      .props
      .dispatch(fetch_by_book_genre(0, this.state.selected))
  }
  async componentWillMount() {
    await this.setState({categories: await fetch_categories()})
  }
  renderBookCategories() {
    if (this.state.categories.length > 0) {
      return this
        .state
        .categories
        .map(category => <CategoryItem
          handleCheckboxToggle={this.handleCheckboxToggle}
          key={category.category_id}
          category={category}/>)
    }
  }
  render() {
    return (
      <BookGenreStyle className="shadow">
        <div className="h2 text-center mb-3">Thể loại</div>
        {this.renderBookCategories()}
      </BookGenreStyle>
    )
  }

}

const CategoryItem = props => {
  return (
    <div>
      <input
        onClick={() => props.handleCheckboxToggle(props.category.category_id)}
        className="inp-cbx d-none"
        id={props.category.category_id}
        type="checkbox"/>
      <label className="cbx d-block pb-4" htmlFor={props.category.category_id}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span className="genre-name lead">
          {props.category.category_name}
        </span>
      </label >
    </div>
  )
}

const BookGenreStyle = styled.div `
padding: 2rem 3rem;
.genre-name{
    font-size: 1.6rem;
}
.cbx {
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  span{
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
}

.cbx span:first-child {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #9098A9;
  transition: all 0.2s ease;
}
.cbx span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #FFFFFF;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #506EEC;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
}
.cbx span:last-child {
  padding-left: 8px;
}
.cbx:hover span:first-child {
  border-color: #506EEC;
}

.inp-cbx:checked + .cbx span:first-child {
  background: #506EEC;
  border-color: #506EEC;
  animation: wave 0.4s ease;
}
.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.inp-cbx:checked + .cbx span:first-child:before {
  transform: scale(3.5);
  opacity: 0;
  transition: all 0.6s ease;
}

@keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
`

export default connect(null)(Category)