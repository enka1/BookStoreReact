import React, {Component} from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Index from '../pages/publics/Index'
import {BookDetailPage} from '../pages/publics/BookDetailPage'
import {NewBooksPage} from '../pages/publics/NewBooksPage'
import {LoginPage} from '../pages/publics/LoginPage'
import {withPublicComponent} from '../mixins/public'
import {OrderHistoryPage} from '../pages/admins/OrderHistoryPage'
import {StoragePage} from '../pages/admins/StoragePage'
import {AddItensPage} from '../pages/admins/AddItensPage'
export const history = createBrowserHistory()

export class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={withPublicComponent(Index)}></Route>
          <Route path="/book-detail/:id" component={withPublicComponent(BookDetailPage)}></Route>
          <Route exact path="/news-book" component={withPublicComponent(NewBooksPage)}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route path="/admin/order-history" component={OrderHistoryPage}></Route>
          <Route path="/admin/storage" component={StoragePage}></Route>
          <Route path="/admin/add-items" component={AddItensPage}></Route>
        </Switch>
      </Router>
    )
  }
}