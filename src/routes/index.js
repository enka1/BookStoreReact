import React, {Component} from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import {Index} from '../page/Index'
import {BookDetailPage} from '../page/BookDetailPage'
import {NewBooksPage} from '../page/NewBooksPage'
import {Menu} from './Menu'
import {Header} from './Header'
import {Footer} from './Footer'
import {BookSlider} from '../containers/BookSlider'
export const history = createBrowserHistory()

export class Routes extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <BookSlider/>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route exact path="/book-detail" component={BookDetailPage}></Route>
            <Route exact path="/news-book" component={NewBooksPage}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}