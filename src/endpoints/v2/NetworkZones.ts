import { Method } from 'axios'
import { IAPIResponse, IRequestData, NetworkZoneStatsFilter, OAS } from '../../interfaces/index.js'
import { BaseEndpoint } from '../../lib/index.js'

const RequestData: IRequestData = {
  listNetworkZones: () => {
    return {
      method: 'GET' as Method,
      path: '/networkZones'
    }
  },

  getNetworkZone: (networkZoneId: string) => {
    return {
      method: 'GET' as Method,
      path: `/networkZones/${networkZoneId}`
    }
  },

  updateNetworkZone: (networkZoneId: string, fields: OAS['Schemas']['NetworkZone']) => {
    return {
      method: 'PUT' as Method,
      path: `/networkZones/${networkZoneId}`,
      payload: fields
    }
  },

  deleteNetworkZone: (networkZoneId: string) => {
    return {
      method: 'DELETE' as Method,
      path: `/networkZones/${networkZoneId}`
    }
  },

  getNetworkZoneStats: (networkZoneId: string, filter: NetworkZoneStatsFilter) => {
    return {
      method: 'GET' as Method,
      path: `/networkZones/${networkZoneId}/stats`,
      params: { filter }
    }
  }
}


export class NetworkZonesEndpoint extends BaseEndpoint {
  async listNetworkZones(): Promise<IAPIResponse> {}

  async getNetworkZone(networkZoneId: string): Promise<IAPIResponse> {}

  async updateNetworkZone(
    networkZoneId: string,
    fields: OAS['Schemas']['NetworkZone']
  ): Promise<IAPIResponse> {}

  async deleteNetworkZone(networkZoneId: string): Promise<IAPIResponse> {}

  /**
   * Gets the statistics about hosts using the network zone
   *
   * @param networkZoneId The ID of the Network Zone to retrieve stats for.
   * @param filter Filters the resulting set of hosts.
   */
  async getNetworkZoneStats(
    networkZoneId: string,
    filter: NetworkZoneStatsFilter
  ): Promise<IAPIResponse> {}

  async getNetworkZoneSettings(): Promise<IAPIResponse> {}

  async updateNetworkZoneSettings(
    fields: OAS['Schemas']['NetworkZoneSettings']
  ): Promise<IAPIResponse> {}
}
