import React, { Component } from 'react'

import { Router, Route, IndexRoute, browserHistory} from 'react-router'


import Menu from './components/navigation/Menu'
import App from './app'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Home from './components/pages/Home'



const Routes = () =>(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
    <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
  </Route>
  </Router>
)



export default Routes
