import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

import {store} from './store'
import {Routes} from './routes'

const App = () => (
  <Provider store={store}>
    <Routes/>
  </Provider>
)

render(
  <App/>, document.getElementById('root'))