import axios from 'axios'

import promise from 'es6-promise' // 解决兼容性

promise.polyfill()


const BASE_URL = "http://www.chinazishun.com/"
export function get(url, data={}) {

     axios.get({
       url: 'http://www.chinazishun.com/home/case/getCaseList',
       method: 'get',
       params: {
         name: 'wei'
       }
     }).then(res => {
       console.log(res)
       return res
     })


}
