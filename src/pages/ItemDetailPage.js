import React, {Component} from 'react'
import {VerticalMenu} from '../components/Menu/VerticalMenu'
import {UpdateBook} from '../components/Form/UpdateBook'

export class ItemDetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: null
    }
  }
  render() {
    return (
      <div>
        <div className="row w-100 m-0">
          <div className="col-2 m-0 p-0">
            <VerticalMenu/>
          </div>
          <div className="col-10">
            <UpdateBook id={this.props.match.params.id} book={this.state.book}/>
          </div>
        </div>
      </div>
    )
  }
}
