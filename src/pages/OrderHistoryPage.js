import React, {Component} from 'react'
import {VerticalMenu} from '../components/Menu/VerticalMenu'

export class OrderHistoryPage extends Component {
  render() {
    return (
      <div>
        <div className="row w-100 m-0">
          <div className="col-2 m-0 p-0">
            <VerticalMenu/>
          </div>
        </div>
      </div>
    )
  }
}
