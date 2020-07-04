import Mock from 'mockjs'
import {baseUrl} from './baseUrl'

// 模拟getData接口
Mock.mock(baseUrl + 'getData', function () {
  let result = {
    code: 200,
    message: 'OK',
    data: 'test'
  }
  return result
})