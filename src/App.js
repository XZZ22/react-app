import React, { Fragment }from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'

function App(){
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
    </Fragment>
  )
}
export default App
