import React, {Component} from 'react'
import {VerticalMenu} from '../components/Menu/VerticalMenu'
import {NewBookForm} from '../components/Form/NewBookForm'
export class AddItensPage extends Component {
  render() {
    return (
      <div>
        <div className="row w-100 m-0">
          <div className="col-2 m-0 p-0">
            <VerticalMenu/>
          </div>
          <div className="col-10">
            <NewBookForm/>
          </div>
        </div>
      </div>
    )
  }
}

