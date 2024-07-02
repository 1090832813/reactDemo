import axios from 'axios';

const service = axios.create({
    baseURL: 'http://192.168.31.189:10002/api/',
    timeout: 3 * 1000
})
//请求拦截器
service.interceptors.request.use(config => {
    // config.data = JSON.stringify(config.data);
    // @ts-ignore
    config.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    return config
}, error => {
    Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(response => {
    return response
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                alert('错误请求');
                break;
            case 401:
                alert('未授权，请重新登录')
                break;
            case 403:
                alert('拒绝访问')
                break;
            case 404:
                alert('请求错误,未找到该资源')
                window.location.href = "/NotFound"
                break;
            case 405:
                alert('请求方法未允许')
                break;
            case 408:
                alert('请求超时')
                break;
            case 500:
                alert('服务器端出错')
                break;
            case 501:
                alert('网络未实现')
                break;
            case 502:
                alert('网络错误')
                break;
            case 503:
                alert('服务不可用')
                break;
            case 504:
                alert('网络超时')
                break;
            case 505:
                alert('http版本不支持该请求')
                break;
            default:
                alert(`连接错误${error.response.status}`)
        }
    } else {
        //超时
        if (JSON.stringify(error).includes('timeout')) {
            alert('服务器响应超时，请刷新当前页')
        }
        alert('连接服务器失败')
    }
})

export default service