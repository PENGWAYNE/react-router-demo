import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createHashHistory } from 'history'
import Index from '../pages/index'
import News from '../pages/news'

const history = createHashHistory()

class RouterConfig extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/index" />} />
          <Route path="/index" component={Index} />
          <Route path="/news" component={News} />
        </Switch>
      </Router>
    )
  }
}

export default RouterConfig
