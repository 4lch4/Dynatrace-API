/**
 * Creates an object to be used as the headers for each request to the Dynatrace
 * API. It contains the following properties:
 *
 * - `Content-Type` = application/json
 * - `Authorization` = Api-Token ${apiToken}
 *
 * @param apiToken The API token for authenticating requests to the Dynatrace API.
 * @returns An object containing the default headers to send with each request.
 */
export const DefaultHeaders = (apiToken: string) => {
  return {
    'Content-Type': 'application/json',
    Authorization: `Api-Token ${apiToken}`
  }
}
