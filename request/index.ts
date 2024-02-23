import axios from 'axios'

import APP_URL from '@/config'

export default (url: string, data: any, headers: any, method: 'get' | 'post'): object => {
    return new Promise((resolve, reject) => {
        axios({
            url: APP_URL + url,
            data: data,
            headers: headers,
            method: method,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            // 有些系统会将业务的错误归为系统的错误（后端协商）
            // 例如服务器返回500，应从resolve抛出
            reject(err)
        })
    })
} 

// app内不存在跨越问题