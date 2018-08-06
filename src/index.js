import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

import {store} from './store'
import BookList from './containers/book_list'

const App = () => (
  <Provider store={store}>
    <BookList/>
  </Provider>
)

render(
  <App/>, document.getElementById('root'))