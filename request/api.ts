import request from './index'

// 一个接口请求数据
export const APIGetIndexData = () => {
    return request('/dataOne', {}, {}, 'get')
}
