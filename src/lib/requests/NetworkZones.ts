import { Method } from 'axios'
import { IRequestData, NetworkZoneStatsFilter, OAS } from '../../interfaces/index.js'

export const NetworkZonesRequests: IRequestData = {
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
