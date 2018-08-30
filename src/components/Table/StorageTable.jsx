import React, {Component} from 'react'
import styled from 'styled-components'

import {convert_price} from '../../methods/convert_price'
import {history} from '../../routes'
export class StorageTable extends Component {

  renderItems() {
    if (this.props.books && this.props.books.length > 0) {
      return this
        .props
        .books
        .map(book => <TableItem book={book} key={book.book_id}/>)
    }
  }
  render() {
    return (
      <TableStyle className="table shadow rounded bg-white">
        <thead>
          <tr>
            <th></th>
            <th>Tên sách
              <i className="ml-2 fas fa-sort"></i>
            </th>
            <th>Tác giả<i className="ml-2 fas fa-sort"></i>
            </th>
            <th>Nhà xuất bản<i className="ml-2 fas fa-sort"></i>
            </th>
            <th>Giá nhập<i className="ml-2 fas fa-sort"></i>
            </th>
            <th>Giá bán<i className="ml-2 fas fa-sort"></i>
            </th>
            <th>Số lượng<i className="ml-2 fas fa-sort"></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </TableStyle>
    )
  }
}

const TableItem = (props) => {
  return (
    <tr className="items">
      <td>
        <input className="inp-cbx d-none" id={props.book.book_id} type="checkbox"/>
        <label className="cbx ml-4 d-block" htmlFor={props.book.book_id}>
          <span>
            <svg width="12px" height="10px" viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          </span>
        </label >
      </td>
      <td>{props.book.book_name}</td>
      <td>{props.book.author.first_name + ' ' + props.book.author.last_name}</td>
      <td>{props.book.publisher.publisher_name}</td>
      <td>{convert_price(props.book.import_price) + ' ₫'}</td>
      <td>{convert_price(props.book.sale_price) + ' ₫'}</td>
      <td>{props.book.quantity}</td>
      <td>
        <i
          className="far fa-edit icon"
          onClick={() => history.push(`/admin/items/${props.book.book_id}`)}></i>
      </td>
    </tr>
  )
}

const TableStyle = styled.table ` 
.icon{
  position: relative;
  color: #d2ddec;
}
.icon:hover{
  cursor: pointer;
  color: black;
}


opacity: .9;
    font-size: 1.3rem; 
    th{
      background-color: #f9fbfd;
      padding: 1.5rem 0;
      border-bottom: 1 px !important;
    }
    td{
        padding: 1.3rem 0;
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
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 18px;
  stroke-dashoffset: 18px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
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