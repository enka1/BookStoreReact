import React, {Component} from 'react'
import styled from 'styled-components'

import {SearchBar} from '../containers/Input/SearchBar'
import {VerticalMenu} from '../components/Menu/VerticalMenu'
import {StorageTable} from '../components/Table/StorageTable'
import {PaginationBar} from '../components/Menu/PaginationBar'
import {history} from '../routes/index'
import {fetch_storage_items} from '../methods/admin/fetch_data'

export class StoragePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      results: {}
    }
    this.changePage = this
      .changePage
      .bind(this)
    this.reloadData = this
      .reloadData
      .bind(this)
  }

  async componentDidMount() {
    this.setState({
      results: await fetch_storage_items(this.state.currentPage)
    })
  }
  async changePage(page) {
    await this.setState({currentPage: page})
    this.reloadData()
  }

  async reloadData() {
    this.setState({
      results: await fetch_storage_items(this.state.currentPage)
    })
  }

  render() {
    return (
      <div>
        <div className="row w-100 m-0">
          <div className="col-2 m-0 p-0">
            <VerticalMenu/>
          </div>
          <GemBox className="col-10 px-5 pt-5">
            <div className="row pl-5 mb-4">
              <div className="col d-flex align-items-center">
                <button
                  className="btn shadow btn-outline-success"
                  onClick={() => history.push('/admin/add-items')}>
                  <i className="fas fa-plus mr-3"></i>
                  Thêm sách</button>
                <button className="btn shadow btn-outline-danger ml-3">
                  <i className="fas fa-minus mr-3"></i>
                  Xóa sách</button>
              </div>
              <div className="col-3 ml-auto">
                <SearchBar/>
              </div>
            </div>
            <StorageTable books={this.state.results.data}/>
            <div className="mt-5"></div>
            <PaginationBar
              changePage={this.changePage}
              currentPage={this.state.currentPage}
              totalPage={this.state.results.last_page}/>
          </GemBox>
        </div>
      </div>
    )
  }
}

const GemBox = styled.div `
.btn{
  padding: .8rem 1rem;
  font-size: 1.3rem;
}
    background-size:cover;
    background-attachment:fixed;
    background-position:center;
    
`