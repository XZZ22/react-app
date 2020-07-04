import * as constans from './constants'
export const getData = (data) => ({
  type: constans.SET_DATA,
  data
})