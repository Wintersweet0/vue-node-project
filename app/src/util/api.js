const axios = require('axios')
const baseUrl = 'http://localhost:3000/'
const api = {}

const apiAxios = async(method, url, params) => {
    //项目既定fapp
    let headers = {
        fapp: 'book',
        'Content-Type': 'application/json'
    }
    //读取存储在sessionStorage中的Token
    if(sessionStorage.getItem('token')){
        headers.token = sessionStorage.getItem('token')
    }
    return await new Promise((resolve => {
        axios({
            headers: headers,
            method: method,
            url: baseUrl + url,
            //数据内容
            data:
                method === 'POST' ? params : null,
            params:
                method === 'GET' ? params : null
        }).then((res) => {
            console.log(res.data)
            resolve(res.data)
        }).catch(e => {
            console.log(e)
        })
    }))
}

//Get请求
api.get = async(url, params) => {
    return await apiAxios('GET', url, params)
}
//Post请求
api.post = async(url, params) => {
    return await apiAxios('POST', url, params)
}

export default api