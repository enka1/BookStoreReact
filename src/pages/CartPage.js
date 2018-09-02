import React, {Component} from 'react'

export class CartPage extends Component {
  componentDidMount() {
    console.log(localStorage.getItem('cart'))
  }
  render() {
    return (
      <div></div>
    )
  }
}
