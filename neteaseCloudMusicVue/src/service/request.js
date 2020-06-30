import axios from "axios";
import qs from 'qs'
import { Toast } from 'mint-ui';

// 添加请求拦截器
axios.interceptors.request.use(
  // 在发送请求之前做某些事情

  config => {
    return config
  },
  // 请求错误时做某些事情
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  // 对响应数据做某些事情
  response => {
    let data = response.data;
    switch (data.status) {
      case 1 :
        Toast('1')
        break;
      case 2 :
        Toast('2')
        break;
    }

    switch (response.status) {
      case 400 :
        Toast('请求地址出错');
        break;
      case 404 :
        Toast('404');
        console.log('404')
        break;
      case 500 :
        Toast('500');
        break;
    }
    return response
  },
  // 请求错误时做某些事情
  error => {
    Toast('请求错误')
    return Promise.reject(error)
  }
)

// POST请求方法
export const POST = (url, data) => {
  return new Promise(
    (resolve, reject) => {
      axios.post(url, qs.stringify(data))
        .then(
          response => {
            if (response) {
              resolve(response.data)
            }
          }
        )
        .catch(
          error => {
            reject(error)
          }
        )
    }
  )
}

// GET请求方法
export const GET = (url, data) => {
  return new Promise(
    (resolve, reject) => {
      axios.get(url, { params: data,withCredentials: true }, )
        .then(
          response => {
            if (response) {
              resolve(response.data)
            }
          }
        )
        .catch(
          error => {
            reject(error)
          }
        )
    }
  )
}
