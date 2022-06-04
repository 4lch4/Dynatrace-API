import { Context } from './enums/Context.js'

export interface IEntityTag {
  context: Context
  key: string
  stringRepresentation: string
  value?: string
}
