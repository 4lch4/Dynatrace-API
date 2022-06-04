import { AxiosRequestConfig, AxiosResponseHeaders } from 'axios'

/**
 * The interface that defines/describes the object that is returned when an API
 * call has finished. The optional properties are only returned when the status
 * code is greater than or equal to `300`, meaning a non-successful response.
 */
export interface IAPIResponse<T = any> {
  data: T
  status: number
  statusText: string
  config?: AxiosRequestConfig
  headers?: AxiosResponseHeaders
}
