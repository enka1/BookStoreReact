import React, {Component} from 'react'
import {Search} from 'semantic-ui-react'
import {history} from '../../routes/index'
import _ from 'lodash'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {search_book} from '../../methods/fetch_book_data'
import {convert_price} from '../../methods/convert_price'
import {fetch_book_detail} from '../../actions/users/books/fetch_book_detail.action'
export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      results: [],
      isLoading: false
    }
  }
  componentWillMount() {
    this.resetComponent()
  }
  resetComponent = () => this.setState({isLoading: false, results: [], value: ''})
  handleResultSelect = (e, {result}) => {
    this
      .props
      .dispatch(fetch_book_detail(result.book_id))
    history.push(`/book-detail/${result.book_id}`)

  }
  handleSearchChange = async(e, {value}) => {
    await this.setState({isLoading: true, value})
    if (this.state.value.length < 1) 
      return this.resetComponent()
    let results = await search_book(this.state.value)
    this.setState({
      isLoading: false,
      results: results.map(book => {
        return {
          book_id: book.book_id,
          title: book.book_name,
          image: book.image_url,
          price: convert_price(book.sale_price) + ' ₫'
        }
      })
    })
  }

  render() {
    return (
      <SearchBarStyle>
        <Search
          fluid
          loading={this.state.isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {leading: true})}
          results={this.state.results}
          value={this.state.value}/>
      </SearchBarStyle>
    )
  }
}

const SearchBarStyle = styled.div `
  .input{
    width: 100%;
    height: 4rem;
  }
`

export default connect()(SearchBar)