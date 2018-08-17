import React, {Component} from 'react'
import styled from 'styled-components'

import {SearchBar} from '../../components/public/SearchBar'
import {Menu} from '../../components/admin/Menu'
import {BookTable} from './BookTable'
import {Paginate} from '../../components/users/Paginate'
import {history} from '../../routes/index'

export class StoragePage extends Component {
  render() {
    return (
      <div>
        <div className="row w-100 m-0">
          <div className="col-2 m-0 p-0">
            <Menu/>
          </div>
          <GemBox className="col-10 px-5 pt-5">
            <div className="row pl-5 mb-4">
              <div className="col d-flex align-items-center">
                <button className="btn shadow btn-outline-success" onClick={()=>history.push('/admin/add-items')}>
                  <i class="fas fa-plus mr-3"></i>
                  Thêm sách</button>
                <button className="btn shadow btn-outline-danger ml-3">
                  <i class="fas fa-minus mr-3"></i>
                  Xóa sách</button>
              </div>
              <div className="col-3 ml-auto">
                <SearchBar/>
              </div>
            </div>
            <BookTable/>
            <div className="mt-5"></div>
            <Paginate></Paginate>
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