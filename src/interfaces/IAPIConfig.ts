/**
 * The interface that describes the various configuration properties used for
 * interacting with the Dynatrace API.
 */
export interface IAPIConfig {
  /**
   * The base URL of the Dynatrace instance. It should include the environment
   * id as well.
   */
  baseUrl: string

  /**
   * The API token for the Dynatrace API with access to the scopes you need for
   * your application to function.
   */
  apiToken: string
}
