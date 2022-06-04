export type NetworkZoneStatsFilter =
  | 'all'
  | 'configuredButNotConnectedOnly'
  | 'connectedAsAlternativeOnly'
  | 'connectedAsFailoverOnly'
  | 'connectedAsFailoverWithoutOwnActiveGatesOnly'
