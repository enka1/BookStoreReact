import React, {Component} from 'react'
import {Menu} from '../../components/admin/Menu'
import {NewBookForm} from './NewBookForm'
export class AddItensPage extends Component {
  render() {
    return (
      <div>
        <div className="row w-100 m-0">
          <div className="col-2 m-0 p-0">
            <Menu/>
          </div>
          <div className="col-10">
            <NewBookForm></NewBookForm>
          </div>
        </div>
      </div>
    )
  }
}
