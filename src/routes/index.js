import React, {Component} from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Index from '../pages/Index'
import {BookDetailPage} from '../pages/BookDetailPage'
import {LoginPage} from '../pages/LoginPage'
import {OrderHistoryPage} from '../pages/OrderHistoryPage'
import {StoragePage} from '../pages/StoragePage'
import {AddItensPage} from '../pages/AddItensPage'
import {ItemDetailPage} from '../pages/ItemDetailPage'
import {add_header_footer} from '../mixins/public'
export const history = createBrowserHistory()

export class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={add_header_footer(Index)}></Route>
          <Route path="/book-detail/:id" component={add_header_footer(BookDetailPage)}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route path="/admin/order-history" component={OrderHistoryPage}></Route>
          <Route path="/admin/storage" component={StoragePage}></Route>
          <Route path="/admin/add-items" component={AddItensPage}></Route>
          <Route path="/admin/items/:id" component={ItemDetailPage}></Route>
        </Switch>
      </Router>
    )
  }
}