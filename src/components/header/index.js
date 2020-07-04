import React, { Component } from 'react'
import './index.scss'

class Header extends Component {
  componentDidMount(){
    console.log(this.props.param)
  }
    render() {
        return (
            <div className="M-header">
                Header
            </div>
        )
    }
}

export default Header
