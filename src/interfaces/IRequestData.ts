import { IRequestParams } from './IRequestParams.js'

export interface IRequestData {
  [key: string]: (...input: any) => IRequestParams
}
