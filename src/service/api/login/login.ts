import http from '@/service/http'
import * as T from './type'

export const loginApi: T.ILoginApi = {
  login(params) {
    return http.post('/api', params)
  }
}
