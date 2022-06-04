import Axios, { AxiosInstance } from 'axios'
import { IAPIConfig, IAPIResponse, IRequestParams } from '../../interfaces/index.js'
import { DefaultHeaders } from '../constants/index.js'

export class BaseEndpoint {
  protected client: AxiosInstance

  constructor(protected apiConfig: IAPIConfig) {
    this.client = Axios.create({
      baseURL: apiConfig.baseUrl,
      headers: DefaultHeaders(apiConfig.apiToken)
    })
  }

  /**
   * Sends an HTTP request to the Dynatrace API using the provided parameters.
   * The `<T>` parameter is used to specify the type of data that is expected
   * in the response.
   *
   * If the response is successful (i.e. the status code is in the 200 range),
   * then the following is returned:
   *
   * - Data
   * - Status Code
   * - Status Text
   *
   * If the status code is greater than or equal to 300 then all the above
   * properties plus the following are returned:
   *
   * - Request Config
   * - Headers
   *
   * @param params The parameters needed to form the request.
   * @returns The data, status code, and status text from the API.
   */
  protected async sendRequest<T = any>({
    method,
    path,
    payload
  }: IRequestParams): Promise<IAPIResponse<T>> {
    const { config, data, headers, status, statusText } = await this.client.request({
      method,
      data: payload,
      url: path
    })

    if (status >= 200 && status < 300) return { data, status, statusText }
    else return { config, data, headers, status, statusText }
  }
}
