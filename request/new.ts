import axios, { AxiosRequestConfig } from "axios";
import router, { useNavigate } from "react-router-native";
// import merge from "lodash/merge";
// import { ElMessage  } from 'element-plus';
import { useLocation } from 'react-router-native';

// import store from "@/store";
import store from '@/redux'
import { getToken } from "@/routes";
import APP_URL from "@/config";

const http = axios.create({
    baseURL: APP_URL,// 接口前缀
    // headers: {
    //     "Access-Control-Allow-Origin": "*",// 允许任意域名跨域 cors跨域
    //     "Access-Control-Allow-Headers": "Content-Type",
    //     // "Content-Type": "application/json; charset=utf-8",
    // },
    // withCredentials: true,
    timeout: 10000,// 请求超时时间，单位为毫秒
});

/** 请求拦截 **/
http.interceptors.request.use(
    (config) => {
        // config.headers!["token"] = '111111';// 请求头带上token
        // config.headers!['request-startTime'] = new Date().getTime();
        // con
        config.params = {
            ...config.params, // 保留原有的参数
            token: '111111' // 添加新的参数
        };
        // store.commit("showloading");
        return config;
    },
    (error) => {
        // store.commit("closeloading");
        return Promise.reject(error);
    }
);


/** 响应拦截 **/
http.interceptors.response.use(
    (response) => {
        // const startTime = response.config.headers['request-startTime']
        // const currentTime = new Date().getTime()
        // response.requestDuration = ((currentTime - startTime)/1000).toFixed(2)// 请求过程花费时长

        // store.commit("closeloading");// 请求成功时执行

        // const { pathname } = useLocation()
        // const navigate = useNavigate()
        switch (response.data.code) {
            case 401:// 401, token失效
                // if (pathname !== 'login') {
                //     navigate('/login')
                // }
                break;
        
            default:
                break;
        }
        
        return response;
    },
    (error) => {
        // ElMessage ({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
        // store.commit("closeloading");// 地址有误///连接不上服务器时执行
        return Promise.reject(error);
    }
);


/*
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */

// http.adornParams = (params = {}, openDefultParams = true) => {
//     var defaults = {
//         t: new Date().getTime(),
//     };
//     return openDefultParams ? merge(defaults, params) : params;
// };

/*
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 * json: 'application/json; charset=utf-8'
 * form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
// http.adornData = (data = {}, openDefultdata = true, contentType = "json") => {
//     var defaults = {
//         t: new Date().getTime(),
//     };
//     data = openDefultdata ? merge(defaults, data) : data;
//     return contentType === "json" ? JSON.stringify(data) : qs.stringify(data);
// };

export default http;
