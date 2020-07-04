import React, { Component } from 'react'
import './index.scss'

import Header from '../../components/header'
class Home extends Component {
  render() {
    return (
      <div className="P-home" >
        <Header param='test'/>
        <h1>home page</h1>
      </div>
    )
  }
}

export default Home
