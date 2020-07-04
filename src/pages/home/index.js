import React, { Component } from 'react'
import './index.scss'

import Header from '../../components/header'
class Home extends Component {

  render() {
    // 循环渲染
    const menuList = [{
        link:"/",
        label:"首页",
    },
    {
        link:"/stateProp",
        label:"stateProp",
    },
    {
        link:"/lifecycle",
        label:"lifecycle",
    }]
    const ifShow = false
    // 条件渲染
    function IsShow(params) {
      if(ifShow){
        return <div>展示</div>
      }else {
        return <div>不展示</div>
      }
    }
    return (
      <div className="P-home" >
        {
          menuList.map((item,index)=>{
            return <div key={index}>{item.label}</div>
          })
        }
        <Header param='test'/>
        <IsShow ifShow={ifShow}/>
        <h1>home page</h1>
      </div>
    )
  }
}

export default Home
  

