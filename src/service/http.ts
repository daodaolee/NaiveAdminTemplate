import axios, { AxiosRequestConfig } from 'axios'
import nProgress from "nprogress"

axios.defaults.baseURL = "/api"
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      //@ts-ignore
      config.headers.token = token
    }
    return config
  },
  err => {
    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    if (res.data.code === 111) {
      // token 过期
      sessionStorage.setItem("token", "")
    }
    return res
  }
)

interface ResType<T> {
  code: number,
  data?: T,
  msg?: string,
  err?: string
}

interface HTTP {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  upload<T>(url: string, params?: unknown): Promise<ResType<T>>
}

const http: HTTP = {
  get(url, params): Promise<any> {
    return new Promise((resolve, reject) => {
      nProgress.start()
      axios
        .get(url, { params })
        .then(res => {
          nProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          nProgress.done()
          reject(err)
        })
    })
  },
  post(url, params): Promise<any> {
    return new Promise((resolve, reject) => {
      nProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then(res => {
          nProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          nProgress.done()
          reject(err)
        })
    })
  },
  upload(url, file): Promise<any> {
    return new Promise((resolve, reject) => {
      nProgress.start()
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(res => {
          nProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          nProgress.done()
          reject(err.data)
        })
    })
  }
}
export default http