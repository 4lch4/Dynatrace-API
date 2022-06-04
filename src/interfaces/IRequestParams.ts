import { Method } from 'axios'

export interface IRequestParams<T = any> {
  /** The HTTP method to use for the request. */
  method: Method

  /**
   * The path to the endpoint you wish to hit. The path is appended to the
   * `baseUrl` property from the `APIConfig`.
   */
  path: string

  /** The data to send in the body of the request. */
  payload?: T
}
