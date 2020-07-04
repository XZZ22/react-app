import React, { Fragment }from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import {routers} from './routers'
function App(){
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          {
            routers.map((item,index)=>{
              return <Route key={index} path={item.path} component={item.components} />
            })
          }
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
    </Fragment>
  )
}
export default App
