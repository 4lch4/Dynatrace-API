export interface OAS {
  Paths: {
    '/activeGates/{agId}/autoUpdate': {
      get: OASOperations['getAutoUpdateConfigById']
      put: OASOperations['putAutoUpdateConfigById']
    }
  
    '/activeGates/{agId}/autoUpdate/validator': {
      post: OASOperations['validateAutoUpdateConfigById']
    }
  
    '/activeGates/autoUpdate': {
      get: OASOperations['getGlobalAutoUpdateConfigForTenant']
      put: OASOperations['putGlobalAutoUpdateConfigForTenant']
    }
  
    '/activeGates/autoUpdate/validator': {
      post: OASOperations['validateGlobalAutoUpdateConfigForTenant']
    }
  
    '/activeGates/updateJobs': {
      /** The response includes ActiveGates that have both completed (successful and failed) jobs and jobs in progress. */
      get: OASOperations['getAllUpdateJobList']
    }
  
    '/activeGates/{agId}/updateJobs': {
      /** The job can update the ActiveGate to the specified version or the latest available one. */
      get: OASOperations['getUpdateJobListByAgId']
      post: OASOperations['createUpdateJobForAg']
    }
  
    '/activeGates/{agId}/updateJobs/{jobId}': {
      get: OASOperations['getUpdateJobByJobIdForAg']
      delete: OASOperations['deleteUpdateJobByJobIdForAg']
    }
  
    '/activeGates/{agId}/updateJobs/validator': {
      post: OASOperations['validateUpdateJobForAg']
    }
  
    '/activeGates': {
      /** The response includes all ActiveGates that are currently connected to the environment or have been connected during last 2 hours. */
      get: OASOperations['getAllActiveGates']
    }
  
    '/activeGates/{agId}': {
      get: OASOperations['getOneActiveGateById']
    }
  
    '/entities': {
      /**
       * Lists entities observed within the specified timeframe along with their properties.
       *
       * When you query entities of the `SERVICE_METHOD` type, only the following requests are returned:
       *
       * * [Key requests](https://dt-url.net/a903u9s)
       * * Top X requests that are used for [baselining](https://dt-url.net/0j23uqb)
       * * Requests that have caused a [problem](https://dt-url.net/pf43uqg)
       *
       * You can limit the output by using pagination:
       * 1. Specify the number of results per page in the **pageSize** query parameter.
       * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
       */
      get: OASOperations['getEntities']
    }
  
    '/entities/{entityId}': {
      get: OASOperations['getEntity']
    }
  
    '/entityTypes/{type}': {
      get: OASOperations['getEntityType']
    }
  
    '/entityTypes': {
      /**
       * You can limit the output by using pagination:
       * 1. Specify the number of results per page in the **pageSize** query parameter.
       * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
       */
      get: OASOperations['getEntityTypes']
    }
  
    '/entities/custom': {
      post: OASOperations['pushCustomDevice']
    }
  
    '/events/ingest': {
      /** The ingestion of custom events consumes [Davis Data Units](https://dt-url.net/ddu) (DDUs) from the events pool. */
      post: OASOperations['createEvent']
    }
  
    '/events/{eventId}': {
      get: OASOperations['getEvent']
    }
  
    '/eventProperties': {
      get: OASOperations['getEventProperties']
    }
  
    '/eventProperties/{propertyKey}': {
      get: OASOperations['getEventProperty']
    }
  
    '/eventTypes/{eventType}': {
      get: OASOperations['getEventType']
    }
  
    '/eventTypes': {
      get: OASOperations['getEventTypes']
    }
  
    '/events': {
      get: OASOperations['getEvents']
    }
  
    '/metrics/{metricKey}': {
      get: OASOperations['metric']
      /** Deletion cannot be undone! You can't delete a metric if it has data points ingested within the last two hours. */
      delete: OASOperations['delete']
    }
  
    '/metrics': {
      /**
       * You can narrow down the output by selecting metrics in the **metricSelector** field.
       *
       * You can additionally limit the output by using pagination:
       *
       * 1. Specify the number of results per page in the **pageSize** query parameter.
       *
       * 2. Then use the cursor from the **nextPageKey** field of the response in the **nextPageKey** query parameter to obtain subsequent pages. All other query parameters must be omitted.
       */
      get: OASOperations['allMetrics']
    }
  
    '/metrics/query': {
      /**
       * The following limits apply:
       * * The amount of aggregated data points in the response is limited to 1,000
       * * The amount of series in the response is limited to 1,000
       *    * The amount of data points per series is limited to 10,080 (minutes of one week)
       *    * The overall amount of data points is limited to 100,000
       */
      get: OASOperations['query']
    }
  
    '/networkZones/{id}': {
      get: OASOperations['getSingleNetworkZone']
      /**
       * If the network zone with the specified ID does not exist, a new network zone is created.
       *
       *  The ID is not case sensitive. Dynatrace stores the ID in lowercase.
       */
      put: OASOperations['createOrUpdateNetworkZone']
      /**
       * You can only delete an empty network zone (a zone that no ActiveGate or OneAgent is using).
       *
       *  If the network zone is used as an alternative zone for any OneAgent, it will be automatically removed from the list of possible alternatives.
       */
      delete: OASOperations['deleteNetworkZone']
    }
  
    '/networkZones': {
      get: OASOperations['getAllNetworkZones']
    }
  
    '/networkZones/{id}/hostConnectionStatistics': {
      get: OASOperations['getHostStats']
    }
  
    '/networkZoneSettings': {
      get: OASOperations['getNetworkZoneSettings']
      put: OASOperations['updateNetworkZoneSettings']
    }
  
    '/tags': {
      /** Automatically applied tags and imported tags are not included. */
      get: OASOperations['getTags']
      /** All existing tags remain unaffected. */
      post: OASOperations['postTags']
      delete: OASOperations['deleteTags']
    }
  
    '/activeGateTokens': {
      /**
       * You can limit the output by using pagination:
       * 1. Specify the number of results per page in the **pageSize** query parameter.
       * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
       */
      get: OASOperations['listTokens']
      /** The newly created token will be owned by the same user who owns the token used for authentication of the call. */
      post: OASOperations['createToken']
    }
  
    '/activeGateTokens/{tokenIdentifier}': {
      /** The token secret is **not** exposed. */
      get: OASOperations['getToken']
      delete: OASOperations['revokeToken']
    }
  
    '/apiTokens': {
      /**
       * You can limit the output by using pagination:
       * 1. Specify the number of results per page in the **pageSize** query parameter.
       * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
       */
      get: OASOperations['listApiTokens']
      /** The newly created token will be owned by the same user who owns the token used for authentication of the call. */
      post: OASOperations['createApiToken']
    }
  
    '/apiTokens/{id}': {
      /** The token secret is **not** exposed. */
      get: OASOperations['getApiToken']
      put: OASOperations['updateApiToken']
      delete: OASOperations['deleteApiToken']
    }
  
    '/apiTokens/lookup': {
      post: OASOperations['lookupApiToken']
    }
  
    '/auditlogs/{id}': {
      get: OASOperations['getLog']
    }
  
    '/auditlogs': {
      /**
       * You can limit the output by using pagination:
       * 1. Specify the number of results per page in the **pageSize** query parameter.
       * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
       */
      get: OASOperations['getLogs']
    }
  
    '/davis/securityAdvices': {
      /** You can narrow down the output by providing the management zone and pagination. If you specify a management zone, only problems originating from that zone are included to the request. */
      get: OASOperations['getAdviceForSecurityProblems']
    }
  
    '/securityProblems/{id}/remediationItems': {
      get: OASOperations['getRemediationItems']
    }
  
    '/securityProblems/{id}': {
      get: OASOperations['getSecurityProblem']
    }
  
    '/securityProblems': {
      get: OASOperations['getSecurityProblems']
    }
  
    '/securityProblems/{id}/mute': {
      post: OASOperations['muteSecurityProblem']
    }
  
    '/securityProblems/{id}/remediationItems/{itemId}/muteState': {
      put: OASOperations['setRemediationItemMuteState']
    }
  
    '/securityProblems/{id}/unmute': {
      post: OASOperations['unmuteSecurityProblem']
    }
  
    '/extensions/{extensionName}/environmentConfiguration': {
      get: OASOperations['getActiveEnvironmentConfiguration']
      put: OASOperations['updateExtensionEnvironmentConfiguration']
      post: OASOperations['activateExtensionEnvironmentConfiguration']
      delete: OASOperations['deleteEnvironmentConfiguration']
    }
  
    '/extensions/{extensionName}/monitoringConfigurations': {
      get: OASOperations['extensionMonitoringConfigurations']
      post: OASOperations['createMonitoringConfiguration']
    }
  
    '/extensions/{extensionName}/{extensionVersion}/schema': {
      get: OASOperations['extensionConfigurationSchema']
    }
  
    '/extensions/{extensionName}/{extensionVersion}': {
      get: OASOperations['extensionDetails']
      delete: OASOperations['removeExtension']
    }
  
    '/extensions/{extensionName}/environmentConfiguration/events': {
      get: OASOperations['getEnvironmentConfigurationEvents']
    }
  
    '/extensions/{extensionName}/monitoringConfigurations/{configurationId}/events': {
      get: OASOperations['getExtensionMonitoringConfigurationEvents']
    }
  
    '/extensions/{extensionName}/monitoringConfigurations/{configurationId}/status': {
      get: OASOperations['getExtensionMonitoringConfigurationStatus']
    }
  
    '/extensions/schemas/{schemaVersion}/{fileName}': {
      get: OASOperations['getSchemaFile']
    }
  
    '/extensions/{extensionName}': {
      get: OASOperations['listExtensionVersions']
    }
  
    '/extensions': {
      get: OASOperations['listExtensions']
      post: OASOperations['uploadExtension']
    }
  
    '/extensions/schemas/{schemaVersion}': {
      get: OASOperations['listSchemaFiles']
    }
  
    '/extensions/schemas': {
      get: OASOperations['listSchemas']
    }
  
    '/extensions/{extensionName}/monitoringConfigurations/{configurationId}': {
      get: OASOperations['monitoringConfigurationDetails']
      put: OASOperations['updateMonitoringConfiguration']
      delete: OASOperations['removeMonitoringConfiguration']
    }
  
    '/problems/{problemId}/close': {
      post: OASOperations['closeProblem']
    }
  
    '/problems/{problemId}/comments': {
      get: OASOperations['getComments']
      post: OASOperations['createComment']
    }
  
    '/problems/{problemId}/comments/{commentId}': {
      get: OASOperations['getComment']
      put: OASOperations['updateComment']
      delete: OASOperations['deleteComment']
    }
  
    '/problems/{problemId}': {
      get: OASOperations['getProblem']
    }
  
    '/problems': {
      get: OASOperations['getProblems']
    }
  
    '/logs/ingest': {
      /**
       * Ingested logs are stored in the indexed log storage.
       *
       * This endpoint requires an ActiveGate with the **Log Analytics Collector** module enabled.
       */
      post: OASOperations['storeLog']
    }
  
    '/logs/aggregate': {
      /**
       * Returns the aggregated number of occurrences of log values divided into time slots.
       *
       * It is possible that the timeframe covered by results exceeds the specified timeframe. In that case the request returns fewer time slots than specified in the **timeBuckets** query parameter.
       */
      get: OASOperations['getLogHistogramData']
    }
  
    '/logs/search': {
      /**
       * Returns the first *X* records (specified in the **limit** query parameter). Log records are sorted by the criteria specified in the **sort** query parameter.
       *
       * If the query is too large to be processed in a single request, it is divided into slices. In that case the first response contains the **nextSliceKey** cursor for the second slice. Use it in the **nextSliceKey** query parameter to obtain the second slice, which contains **nextSliceKey** cursor for the third slice, and so on.
       *
       * Results can be distributed unevenly between slices and some slices might be empty.
       */
      get: OASOperations['getLogRecords']
    }
  
    '/metrics/ingest': {
      post: OASOperations['ingest']
    }
  
    '/otlp/v1/traces': {
      /** This endpoint can be targeted by OpenTelemetry exporters. Ingested traces are forwarded to the server. */
      post: OASOperations['ingestTrace']
    }
  
    '/releases': {
      get: OASOperations['getReleases']
    }
  
    '/settings/objects/{objectId}': {
      get: OASOperations['getSettingsObjectByObjectId']
      put: OASOperations['putSettingsObjectByObjectId']
      delete: OASOperations['deleteSettingsObjectByObjectId']
    }
  
    '/settings/objects': {
      get: OASOperations['getSettingsObjects']
      /** You can upload several objects at once. In that case each object returns its own response code. Check the response body for details. */
      post: OASOperations['postSettingsObjects']
    }
  
    '/settings/schemas': {
      get: OASOperations['getAvailableSchemaDefinitions']
    }
  
    '/settings/schemas/{schemaId}': {
      get: OASOperations['getSchemaDefinition']
    }
  
    '/slo': {
      /**
       * By default the values are calculated for the SLO's own timeframe. You can use a custom timeframe:
       *
       * 1. Set the **timeFrame** parameter to `GTF`.
       * 2. Provide the timeframe in **from** and **to** parameters.
       */
      get: OASOperations['getSlo']
      post: OASOperations['createSlo']
    }
  
    '/slo/{id}': {
      /** If **from** and **to** parameters are provided, the SLO is calculated for that timeframe; otherwise the SLO's own timeframe is used. */
      get: OASOperations['getSloById']
      put: OASOperations['updateSloById']
      delete: OASOperations['deleteSlo']
    }
  
    '/synthetic/config': {
      get: OASOperations['getConfiguration']
      put: OASOperations['updateConfiguration']
    }
  
    '/synthetic/execution/{monitorId}/{resultType}': {
      get: OASOperations['getExecutionResult']
    }
  
    '/synthetic/locations': {
      get: OASOperations['getLocations']
      post: OASOperations['addLocation']
    }
  
    '/synthetic/locations/{locationId}': {
      get: OASOperations['getLocation']
      /** For public locations you can only change the location status. */
      put: OASOperations['updateLocation']
      delete: OASOperations['removeLocation']
    }
  
    '/synthetic/locations/status': {
      get: OASOperations['getLocationsStatus']
      put: OASOperations['updateLocationsStatus']
    }
  
    '/synthetic/nodes/{nodeId}': {
      get: OASOperations['getNode']
    }
  
    '/synthetic/nodes': {
      get: OASOperations['getNodes']
    }
  
    '/tenantTokenRotation/cancel': {
      /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
      post: OASOperations['cancelRotation']
    }
  
    '/tenantTokenRotation/finish': {
      /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
      post: OASOperations['finishRotation']
    }
  
    '/tenantTokenRotation/start': {
      /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
      post: OASOperations['startRotation']
    }
  
    '/units/{unitId}': {
      get: OASOperations['unit']
    }
  
    '/units': {
      /** You can narrow down the output by providing filter criteria in the **unitSelector** field. */
      get: OASOperations['allUnits']
    }
  },

  Schemas: {
    /** @description Configuration of the ActiveGate auto-updates. */
    ActiveGateAutoUpdateConfig: {
      /**
       * @description The state of the ActiveGate auto-update: enabled, disabled, or inherited.
       *
       * If set to `INHERITED`, the setting is inherited from the global configuration set on the environment or Managed cluster level.
       * @example INHERITED
       * @enum {string}
       */
      setting: 'DISABLED' | 'ENABLED' | 'INHERITED'
      /**
       * @description The actual state of the ActiveGate auto-update.
       *
       * Applicable only if the **setting** parameter is set to `INHERITED`. In that case, the value is taken from the parent setting. Otherwise, it's just a duplicate of the **setting** value.
       * @example ENABLED
       * @enum {string}
       */
      effectiveSetting?: 'ENABLED' | 'DISABLED'
    }
  
    /** @description A list of constraint violations */
    ConstraintViolation: {
      /** @enum {string} */
      parameterLocation?: 'PATH' | 'PAYLOAD_BODY' | 'QUERY'
      location?: string
      message?: string
      path?: string
    }
  
    Error: {
      /** @description A list of constraint violations */
      constraintViolations?: OASSchemas['ConstraintViolation'][]
      /** @description The error message */
      message?: string
      /**
       * Format: int32
       * @description The HTTP status code
       */
      code?: number
    }
  
    ErrorEnvelope: {
      error?: OASSchemas['Error']
    }
  
    /** @description Global configuration of ActiveGates auto-update. */
    ActiveGateGlobalAutoUpdateConfig: {
      /**
       * @description The state of auto-updates for all ActiveGates connected to the environment or Managed cluster.
       *
       * This setting is inherited by all ActiveGates that have the `INHERITED` setting.
       * @enum {string}
       */
      globalSetting: 'ENABLED' | 'DISABLED'
      metadata?: OASSchemas['ConfigurationMetadata']
    }
  
    /** @description Metadata useful for debugging */
    ConfigurationMetadata: {
      /**
       * @description A sorted list of the version numbers of the configuration.
       * @example [
       *   4,
       *   2
       * ]
       */
      configurationVersions?: number[]
      /**
       * @description A sorted list of version numbers of the configuration.
       * @example [
       *   "1.0.4",
       *   "1.23"
       * ]
       */
      currentConfigurationVersions?: string[]
      /**
       * @description Dynatrace version.
       * @example 1.192.1
       */
      clusterVersion?: string
    }
  
    /** @description Configuration of the ActiveGate update job. */
    UpdateJob: {
      /**
       * @description The status of the update job.
       * @example SUCCEED
       * @enum {string}
       */
      jobState?:
        | 'FAILED'
        | 'IN_PROGRESS'
        | 'PENDING'
        | 'ROLLBACK'
        | 'SCHEDULED'
        | 'SKIPPED'
        | 'SUCCEED'
      /**
       * @description The method of updating the ActiveGate or its component.
       * @example AUTOMATIC
       * @enum {string}
       */
      updateMethod?: 'AUTOMATIC' | 'MANUAL_INSTALLATION' | 'ON_DEMAND'
      /**
       * @description The component to be updated.
       * @example ACTIVE_GATE
       * @enum {string}
       */
      updateType?: 'ACTIVE_GATE' | 'REMOTE_PLUGIN_AGENT' | 'SYNTHETIC' | 'Z_REMOTE'
      /**
       * @description The type of the ActiveGate.
       * @example ENVIRONMENT
       * @enum {string}
       */
      agType?: 'CLUSTER' | 'ENVIRONMENT' | 'ENVIRONMENT_MULTI'
      /**
       * @description The initial version of the ActiveGate.
       * @example 1.185.0.20200201-120000
       */
      startVersion?: string
      /** @description A list of environments (specified by IDs) the ActiveGate can connect to. */
      environments?: string[]
      /**
       * @description The ID of the update job.
       * @example -3524498778810258605
       */
      jobId?: string
      /**
       * Format: int64
       * @description The timestamp of the update job completion.
       *
       *  The `null` value means the job is still running.
       * @example 1582031917814
       */
      timestamp?: number
      /**
       * @description The job can (`true`) or can't (`false`) be cancelled at the moment.
       * @example false
       */
      cancelable?: boolean
      /**
       * Format: int64
       * @description The duration of the update, in milliseconds.
       * @example 3608000
       */
      duration?: number
      /**
       * @description The target version of the update.
       *
       * Specify the version in the `<major>.<minor>.<revision>.<timestamp>` format.
       *
       * To update to the latest available version, use the `latest` value.
       * @example 1.190.0.20200301-130000
       */
      targetVersion: string
      /** @description The information about update error. */
      error?: string
    }
  
    /** @description A list of update jobs of the ActiveGate. */
    UpdateJobList: {
      /**
       * @description The ID of the ActiveGate.
       * @example 0x3efdd092
       */
      agId?: string
      /** @description A list of update jobs of the ActiveGate. */
      updateJobs?: OASSchemas['UpdateJob'][]
    }
  
    /** @description A list of ActiveGates with update jobs. */
    UpdateJobsAll: {
      /** @description A list of ActiveGates with update jobs. */
      allUpdateJobs?: OASSchemas['UpdateJobList'][]
    }
  
    /** @description Parameters of the ActiveGate. */
    ActiveGate: {
      /**
       * @description The ID of the ActiveGate.
       * @example 0x3efdd091
       */
      id?: string
      /** @description A list of network addresses of the ActiveGate. */
      networkAddresses?: string[]
      /** @description A list of Load Balancer addresses of the ActiveGate. */
      loadBalancerAddresses?: string[]
      /**
       * @description The OS type that the ActiveGate is running on.
       * @example WINDOWS
       * @enum {string}
       */
      osType?: 'LINUX' | 'WINDOWS'
      /**
       * @description The current status of auto-updates of the ActiveGate.
       * @example OUTDATED
       * @enum {string}
       */
      autoUpdateStatus?:
        | 'INCOMPATIBLE'
        | 'OUTDATED'
        | 'SCHEDULED'
        | 'SUPPRESSED'
        | 'UNKNOWN'
        | 'UP2DATE'
        | 'UPDATE_IN_PROGRESS'
        | 'UPDATE_PENDING'
        | 'UPDATE_PROBLEM'
      /**
       * Format: int64
       * @description The timestamp since when the ActiveGate is offline.
       *
       *  The `null` value means the ActiveGate is online.
       * @example 1582031917814
       */
      offlineSince?: number
      /**
       * @description The current version of the ActiveGate in the `<major>.<minor>.<revision>.<timestamp>` format.
       * @example 1.185.0.20200201-120000
       */
      version?: string
      /**
       * @description The type of the ActiveGate.
       * @example ENVIRONMENT
       * @enum {string}
       */
      type?: 'CLUSTER' | 'ENVIRONMENT' | 'ENVIRONMENT_MULTI'
      /**
       * @description The name of the host the ActiveGate is running on.
       * @example exampleHostname
       */
      hostname?: string
      /**
       * @description The ID of the main environment for a multi-environment ActiveGate.
       * @example d1bf4a7e-666b-43af-9f45-718g98372e2f
       */
      mainEnvironment?: string
      /** @description A list of environments (specified by IDs) the ActiveGate can connect to. */
      environments?: string[]
      autoUpdateSettings?: OASSchemas['ActiveGateAutoUpdateConfig']
      /**
       * @description The network zone of the ActiveGate.
       * @example exampleNetworkZone
       */
      networkZone?: string
      /**
       * @description The group of the ActiveGate.
       * @example default
       */
      group?: string
      /** @description A list of modules of the ActiveGate. */
      modules?: OASSchemas['ActiveGateModule'][]
      /** @description ActiveGate is deployed in container (`true`) or not (`false`). */
      containerized?: boolean
      connectedHosts?: OASSchemas['ActiveGateConnectedHosts']
    }
  
    /** @description Information about hosts currently connected to the ActiveGate */
    ActiveGateConnectedHosts: {
      /**
       * Format: int32
       * @description The number of hosts currently connected to the ActiveGate
       * @example 150
       */
      number?: number
    }
  
    /** @description A list of ActiveGates. */
    ActiveGateList: {
      /** @description A list of ActiveGates. */
      activeGates?: OASSchemas['ActiveGate'][]
    }
  
    /** @description Information about ActiveGate module */
    ActiveGateModule: {
      /** @description The module is misconfigured (`true`) or not (`false`). */
      misconfigured?: boolean
      /** @description The version of the ActiveGate module. */
      version?: string
      /**
       * @description The type of ActiveGate module.
       * @example KUBERNETES
       * @enum {string}
       */
      type?:
        | 'AWS'
        | 'AZURE'
        | 'BEACON_FORWARDER'
        | 'CLOUD_FOUNDRY'
        | 'DB_INSIGHT'
        | 'EXTENSIONS_V1'
        | 'EXTENSIONS_V2'
        | 'KUBERNETES'
        | 'LOGS'
        | 'MEMORY_DUMPS'
        | 'METRIC_API'
        | 'ONE_AGENT_ROUTING'
        | 'OTLP_INGEST'
        | 'REST_API'
        | 'SYNTHETIC'
        | 'VMWARE'
        | 'Z_OS'
      /** @description The attributes of the ActiveGate module. */
      attributes?: { [key: string]: string }
      /** @description The module is enabled (`true`) or disabled (`false`). */
      enabled?: boolean
    }
  
    /** @description A list of monitored entities along with their properties. */
    EntitiesList: {
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /** @description A list of monitored entities. */
      entities?: OASSchemas['Entity'][]
    }
  
    /**
     * @description The properties of a monitored entity.
     * @example {
     *   "entityId": "HOST-06F288EE2A930951",
     *   "displayName": "my host",
     *   "icon": {
     *     "primaryIconType": "linux",
     *     "secondaryIconType": "microsoft-azure-signet",
     *     "customIconPath": "host"
     *   },
     *   "firstSeenTms": 1574697667547,
     *   "lastSeenTms": 1588242361417,
     *   "properties": {
     *     "bitness": 64,
     *     "monitoringMode": "FULL_STACK",
     *     "osType": "LINUX",
     *     "osArchitecture": "X86",
     *     "networkZoneId": "aws.us.east01",
     *     "cpuCores": 8
     *   },
     *   "tags": [
     *     {
     *       "context": "CONTEXTLESS",
     *       "key": "architecture",
     *       "value": "x86",
     *       "stringRepresentation": "architecture:x86"
     *     },
     *     {
     *       "context": "ENVIRONMENT",
     *       "key": "Infrastructure",
     *       "value": "Linux",
     *       "stringRepresentation": "[ENVIRONMENT]Infrastructure:Linux"
     *     }
     *   ],
     *   "managementZones": [
     *     {
     *       "id": "6239538939987181652",
     *       "name": "main app"
     *     }
     *   ],
     *   "fromRelationships": {
     *     "isInstanceOf": [
     *       {
     *         "id": "HOST_GROUP-0E489369D663A4BF",
     *         "type": "HOST_GROUP"
     *       }
     *     ]
     *   },
     *   "toRelationships": {
     *     "isDiskOf": [
     *       {
     *         "id": "DISK-0393340DCA3853B0",
     *         "type": "DISK"
     *       }
     *     ]
     *   }
     * }
     */
    Entity: {
      /** @description A list of relationships where the entity occupies the FROM position. */
      fromRelationships?: {
        [key: string]: OASSchemas['EntityId'][]
      }
      /** @description A list of relationships where the entity occupies the TO position. */
      toRelationships?: { [key: string]: OASSchemas['EntityId'][] }
      /** @description A set of management zones to which the entity belongs. */
      managementZones?: OASSchemas['ManagementZone'][]
      /** @description The ID of the entity. */
      entityId?: string
      /**
       * Format: int64
       * @description The timestamp at which the entity was first seen, in UTC milliseconds.
       */
      firstSeenTms?: number
      /**
       * Format: int64
       * @description The timestamp at which the entity was last seen, in UTC milliseconds.
       */
      lastSeenTms?: number
      /** @description A set of tags assigned to the entity. */
      tags?: OASSchemas['METag'][]
      /** @description A list of additional properties of the entity. */
      properties?: { [key: string]: { [key: string]: unknown } }
      /** @description The name of the entity, displayed in the UI. */
      displayName?: string
      icon?: OASSchemas['EntityIcon']
    }
  
    /** @description The icon of a monitored entity. */
    EntityIcon: {
      /**
       * @description The primary icon of the entity.
       *
       * Specified by the [barista](https://dt-url.net/u403suy) ID of the icon.
       */
      primaryIconType?: string
      /**
       * @description The secondary icon of the entity.
       *
       * Specified by the [barista](https://dt-url.net/u403suy) ID of the icon.
       */
      secondaryIconType?: string
      /**
       * @description The user-defined icon of the entity.
       *
       * Specify the [barista](https://dt-url.net/u403suy) ID of the icon or a URL of your own icon.
       */
      customIconPath?: string
    }
  
    /** @description A short representation of a monitored entity. */
    EntityId: {
      /** @description The ID of the entity. */
      id?: string
      /** @description The type of the entity. */
      type?: string
    }
  
    /** @description The tag of a monitored entity. */
    METag: {
      /** @description The string representation of the tag. */
      stringRepresentation?: string
      /** @description The value of the tag. */
      value?: string
      /** @description The key of the tag. */
      key?: string
      /**
       * @description The origin of the tag, such as AWS or Cloud Foundry.
       *
       *  Custom tags use the `CONTEXTLESS` value.
       */
      context?: string
    }
  
    /** @description A short representation of a management zone. */
    ManagementZone: {
      /** @description The name of the management zone. */
      name?: string
      /** @description The ID of the management zone. */
      id?: string
    }
  
    /**
     * @description A list of properties of the monitored entity type.
     * @example {
     *   "type": "HOST",
     *   "entityLimitExceeded": "false",
     *   "properties": [
     *     {
     *       "id": "BITNESS",
     *       "type": "Enum"
     *     },
     *     {
     *       "id": "CPU_CORES",
     *       "type": "Number"
     *     }
     *   ],
     *   "tags": "placeholder for tags",
     *   "managementZones": "placeholder for management zones",
     *   "fromRelationships": [
     *     {
     *       "id": "RUNS_ON_RESOURCE",
     *       "toTypes": [
     *         "CUSTOM_DEVICE"
     *       ]
     *     },
     *     {
     *       "id": "IS_NETWORK_CLIENT_OF_HOST",
     *       "toTypes": [
     *         "HOST",
     *         "CUSTOM_DEVICE"
     *       ]
     *     }
     *   ],
     *   "toRelationships": [
     *     {
     *       "id": "IS_DISK_OF",
     *       "fromTypes": [
     *         "DISK"
     *       ]
     *     },
     *     {
     *       "id": "IS_SITE_OF",
     *       "fromTypes": [
     *         "VMWARE_DATACENTER",
     *         "GEOLOC_SITE"
     *       ]
     *     }
     *   ]
     * }
     */
    EntityType: {
      /** @description A list of possible relationships where the monitored entity type occupies the FROM position */
      fromRelationships?: OASSchemas['ToPosition'][]
      /** @description A list of possible relationships where the monitored entity type occupies the TO position. */
      toRelationships?: OASSchemas['FromPosition'][]
      /** @description The placeholder for the list of management zones of an actual entity. */
      managementZones?: string
      /** @description The dimension key used within metrics for this monitored entity. */
      dimensionKey?: string
      /** @description Whether the entity creation limit for the given type has been exceeded */
      entityLimitExceeded?: boolean
      /** @description The placeholder for the list of tags of an actual entity. */
      tags?: string
      /** @description A list of additional properties of the monitored entity type. */
      properties?: OASSchemas['EntityTypePropertyDto'][]
      /** @description The type of the monitored entity. */
      type?: string
      /** @description The display name of the monitored entity. */
      displayName?: string
    }
  
    /** @description The property of a monitored entity. */
    EntityTypePropertyDto: {
      /**
       * @description The ID of the property.
       * @example cpuCores
       */
      id?: string
      /**
       * @description The type of the property.
       * @example Number
       */
      type?: string
      /**
       * @description The display-name of the property.
       * @example cpu cores
       */
      displayName?: string
    }
  
    /** @description The FROM position of a relationship. */
    FromPosition: {
      /** @description A list of monitored entity types that can occupy the FROM position. */
      fromTypes?: string[]
      /** @description The ID of the relationship. */
      id?: string
    }
  
    /** @description The TO position of a relationship. */
    ToPosition: {
      /** @description A list of monitored entity types that can occupy the TO position. */
      toTypes?: string[]
      /** @description The ID of the relationship. */
      id?: string
    }
  
    /** @description A list of properties of all available entity types. */
    EntityTypeList: {
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /** @description The list of meta information for all available entity-types */
      types?: OASSchemas['EntityType'][]
    }
  
    /** @description The short representation of a newly created custom device. */
    CustomDeviceCreationResult: {
      /** @description The Dynatrace entity ID of the custom device. */
      entityId?: string
      /** @description The Dynatrace entity ID of the custom device group. */
      groupId?: string
    }
  
    /**
     * @description Configuration of a custom device.
     * @example {
     *   "customDeviceId": "customDeviceId",
     *   "displayName": "coffeeMachine",
     *   "group": "myCustomDeviceGroup",
     *   "ipAddresses": [
     *     "10.0.0.1"
     *   ],
     *   "listenPorts": [
     *     80
     *   ],
     *   "faviconUrl": "https://www.freefavicon.com/freefavicons/food/cup-of-coffee-152-78475.png",
     *   "configUrl": "http://coffee-machine.dynatrace.internal.com/coffeemachine/manage",
     *   "type": "coffee machine",
     *   "properties": {},
     *   "dnsNames": [
     *     "coffee-machine.dynatrace.internal.com"
     *   ]
     * }
     */
    CustomDeviceCreation: {
      /**
       * @description The internal ID of the custom device.
       *
       *  If you use the ID of an existing device, the respective parameters will be updated.
       */
      customDeviceId: string
      /** @description The name of the custom device to be displayed in the user interface. */
      displayName: string
      /**
       * @description User defined group ID of entity.
       *
       * The group ID helps to keep a consistent picture of device-group relations. One of many cases where a proper group is important is service detection: you can define which custom devices should lead to the same service by defining the same group ID for them.
       *
       * If you set a group ID, it will be hashed into the Dynatrace entity ID of the custom device. In that case the custom device can only be part of one custom device group.
       *
       * If you don't set the group ID, Dynatrace will create it based on the ID or type of the custom device. Also, the group will not be hashed into the device ID which means the device may switch groups.
       */
      group?: string
      /**
       * @description The list of IP addresses that belong to the custom device.
       *
       * These addresses are used to automatically discover the horizontal communication relationship between this component and all other observed components within Smartscape. Once a connection is discovered, it is automatically mapped and shown within Smartscape.
       *
       * If you send a value (including an empty value), the existing values will be overwritten.
       *
       * If you send `null` or omit this field, the existing values will be kept.
       */
      ipAddresses?: string[]
      /**
       * @description The list of ports the custom devices listens to.
       *
       * These ports are used to discover the horizontal communication relationship between this component and all other observed components within Smartscape.
       *
       * Once a connection is discovered, it is automatically mapped and shown within Smartscape.
       *
       * If ports are specified, you should also add at least one IP address or a DNS name for the custom device.
       *
       * If you send a value, the existing values will be overwritten.
       *
       * If you send `null`, or an empty value, or omit this field, the existing values will be kept.
       */
      listenPorts?: number[]
      /**
       * @description The technology type definition of the custom device.
       *
       * It must be the same technology type of the metric you're reporting.
       *
       * If you send a value, the existing value will be overwritten.
       *
       * If you send `null`, empty or omit this field, the existing value will be kept.
       */
      type?: string
      /** @description The icon to be displayed for your custom component within Smartscape. Provide the full URL of the icon file. */
      faviconUrl?: string
      /** @description The URL of a configuration web page for the custom device, such as a login page for a firewall or router. */
      configUrl?: string
      /** @description The list of key-value pair properties that will be shown beneath the infographics of your custom device. */
      properties?: { [key: string]: string }
      /**
       * @description The list of DNS names related to the custom device.
       *
       * These names are used to automatically discover the horizontal communication relationship between this component and all other observed components within Smartscape. Once a connection is discovered, it is automatically mapped and shown within Smartscape.
       *
       * If you send a value, the existing values will be overwritten.
       *
       * If you send `null` or an empty value; or omit this field, the existing values will be kept.
       */
      dnsNames?: string[]
      /** @enum {string} */
      messageType?:
        | 'CUSTOM_DEVICE'
        | 'DELETE_ENTITY_PER_TYPE'
        | 'FILTER_VALUE_SUGGESTIONS'
        | 'MULTI'
        | 'MULTI_TYPE'
        | 'SINGLE'
        | 'SINGLE_TYPE'
    }
  
    /** @description The result of a created event report. */
    EventIngestResult: {
      /**
       * @description The status of the ingestion.
       * @enum {string}
       */
      status?: 'INVALID_ENTITY_TYPE' | 'INVALID_METADATA' | 'INVALID_TIMESTAMPS' | 'OK'
      /** @description The correlation ID of the created event. */
      correlationId?: string
    }
  
    /** @description The results of an event ingest. */
    EventIngestResults: {
      /**
       * Format: int32
       * @description The number of created event reports.
       */
      reportCount?: number
      /** @description The result of each created event report. */
      eventIngestResults?: OASSchemas['EventIngestResult'][]
    }
  
    /** @description The configuration of an event to be ingested. */
    EventIngest: {
      /**
       * @description The type of the event.
       * @enum {string}
       */
      eventType:
        | 'AVAILABILITY_EVENT'
        | 'CUSTOM_ALERT'
        | 'CUSTOM_ANNOTATION'
        | 'CUSTOM_CONFIGURATION'
        | 'CUSTOM_DEPLOYMENT'
        | 'CUSTOM_INFO'
        | 'ERROR_EVENT'
        | 'MARKED_FOR_TERMINATION'
        | 'PERFORMANCE_EVENT'
        | 'RESOURCE_CONTENTION_EVENT'
      /** @description The title of the event. */
      title: string
      /**
       * Format: int64
       * @description The start time of the event, in UTC milliseconds.
       *
       * If not set, the current timestamp is used.
       */
      startTime?: number
      /**
       * Format: int64
       * @description The end time of the event, in UTC milliseconds.
       *
       * If not set, the start time plus timeout is used.
       */
      endTime?: number
      /**
       * Format: int32
       * @description The timeout of the event, in minutes.
       *
       * If not set, 15 is used.
       */
      timeout?: number
      /**
       * @description The [entity selector](https://dt-url.net/apientityselector), defining a set of Dynatrace entities to be associated with the event.
       *
       * Only entities that have been active within the last 24 hours can be selected.
       *
       *  If not set, the event is associated with the environment (`dt.entity.environment`) entity.
       */
      entitySelector?: string
      /**
       * @description A map of event properties.
       *
       * Keys with prefix `dt.*` are reserved and may be used to set event properties with predefined semantics within the Dynatrace product.
       * All other keys are interpreted as user-defined event properties.
       *
       * Values of Dynatrace-reserved properties (identified by a key with prefix `dt.*`) must fulfill the requirements of the respective property.
       */
      properties?: { [key: string]: string }
    }
  
    /** @description A short representation of a monitored entity. */
    EntityStub: {
      entityId?: OASSchemas['EntityId']
      /**
       * @description The name of the entity.
       *
       *  Not included in the response in case no entity with the relevant ID was found.
       */
      name?: string
    }
  
    /** @description Configuration of an event. */
    Event: {
      /**
       * @description The ID of the event.
       * @example 4293884258445543163_1564039524182
       */
      eventId?: string
      /** @description A list of all management zones that the event belongs to. */
      managementZones?: OASSchemas['ManagementZone'][]
      entityId?: OASSchemas['EntityStub']
      /**
       * @description The type of the event.
       * @example LOW_DISK_SPACE
       */
      eventType?: string
      /**
       * @description The alerting status during a [maintenance](https://dt-url.net/b2123rg0):
       *
       *  * `false`: Alerting works as usual.
       * * `true`: Alerting is disabled.
       */
      suppressAlert?: boolean
      /** @description If `true`, the event happened while the monitored system was under maintenance. */
      underMaintenance?: boolean
      /**
       * @description If `true`, the event happens [frequently](https://dt-url.net/4da3kdg).
       *
       *  A frequent event doesn't raise a problem.
       */
      frequentEvent?: boolean
      /**
       * @description The problem detection status during a [maintenance](https://dt-url.net/b2123rg0):
       *
       *  * `false`: Problem detection works as usual.
       * * `true`: Problem detection is disabled.
       */
      suppressProblem?: boolean
      /** @description A list of event properties. */
      properties?: OASSchemas['EventProperty'][]
      /**
       * @description The status of the event.
       * @example OPEN
       * @enum {string}
       */
      status?: 'CLOSED' | 'OPEN'
      /** @description A list of tags of the related entity. */
      entityTags?: OASSchemas['METag'][]
      /**
       * Format: int64
       * @description The timestamp when the event was raised, in UTC milliseconds.
       * @example 1564039524182
       */
      startTime?: number
      /**
       * Format: int64
       * @description The timestamp when the event was closed, in UTC milliseconds.
       *
       *  Has the value of `null` if the event is still active.
       * @example 1564039524182
       */
      endTime?: number
      /**
       * @description The correlation ID of the event.
       * @example 933613657e1c8fcf
       */
      correlationId?: string
      /**
       * @description The title of the event.
       * @example High CPU load on host X
       */
      title?: string
    }
  
    /** @description A property of an event. */
    EventProperty: {
      /** @description The value of the event property. */
      value?: string
      /** @description The key of the event property. */
      key?: string
    }
  
    /** @description Configuration of an event property. */
    EventPropertyDetail: {
      /**
       * @description The event property key.
       * @example dt.event.description
       */
      key?: string
      /**
       * @description The display name of the event property.
       * @example Custom description
       */
      displayName?: string
      /** @description A short description of the event property. */
      description?: string
      /** @description Indicates whether the property may be set during event ingestion. */
      writable?: boolean
    }
  
    /** @description A list of event properties. */
    EventPropertyDetails: {
      /** @description A list of event properties. */
      eventProperties?: OASSchemas['EventPropertyDetail'][]
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
    }
  
    /** @description Configuration of an event type. */
    EventType: {
      /**
       * @description The severity level associated with the event type.
       * @example PERFORMANCE
       * @enum {string}
       */
      severityLevel?:
        | 'AVAILABILITY'
        | 'CUSTOM_ALERT'
        | 'ERROR'
        | 'INFO'
        | 'MONITORING_UNAVAILABLE'
        | 'PERFORMANCE'
        | 'RESOURCE_CONTENTION'
      /**
       * @description The event type.
       * @example OSI_HIGH_CPU
       */
      type?: string
      /**
       * @description The display name of the event type.
       * @example High CPU
       */
      displayName?: string
      /** @description A short description of the event type. */
      description?: string
    }
  
    /** @description A list of event types. */
    EventTypeList: {
      /** @description A list of event types. */
      eventTypeInfos?: OASSchemas['EventType'][]
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
    }
  
    /** @description A list of events. */
    EventList: {
      /** @description A list of warnings. */
      warnings?: string[]
      /** @description A list of events. */
      events?: OASSchemas['Event'][]
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
    }
  
    /** @description The default aggregation of a metric. */
    MetricDefaultAggregation: {
      /**
       * @description The type of default aggregation.
       * @enum {string}
       */
      type?: 'auto' | 'avg' | 'count' | 'max' | 'median' | 'min' | 'percentile' | 'sum' | 'value'
      /**
       * Format: double
       * @description The percentile to be delivered. Valid values are between `0` and `100`.
       *
       * Applicable only to the `percentile` aggregation type.
       */
      parameter?: number
    }
  
    /**
     * @description The descriptor of a metric.
     * @example {
     *   "metricId": "builtin:host.cpu.user:splitBy(\"dt.entity.host\"):max:fold",
     *   "displayName": "CPU user",
     *   "description": "Percentage of user-space CPU time currently utilized, per host.",
     *   "unit": "Percent",
     *   "dduBillable": false,
     *   "created": 1597400123451,
     *   "lastWritten": 1597400717783,
     *   "entityType": [
     *     "HOST"
     *   ],
     *   "aggregationTypes": [
     *     "auto",
     *     "value"
     *   ],
     *   "transformations": [
     *     "filter",
     *     "fold",
     *     "limit",
     *     "merge",
     *     "names",
     *     "parents",
     *     "timeshift",
     *     "rate",
     *     "sort",
     *     "last",
     *     "splitBy"
     *   ],
     *   "defaultAggregation": {
     *     "type": "value"
     *   },
     *   "dimensionDefinitions": [
     *     {
     *       "key": "dt.entity.host",
     *       "name": "Host",
     *       "displayName": "Host",
     *       "index": 0,
     *       "type": "ENTITY"
     *     }
     *   ],
     *   "tags": [],
     *   "metricValueType": {
     *     "type": "unknown"
     *   },
     *   "dimensionCardinalities": [
     *     {
     *       "key": "dt.entity.host",
     *       "estimate": 20,
     *       "relative": 0.2
     *     }
     *   ],
     *   "latency": 1,
     *   "scalar": false
     * }
     */
    MetricDescriptor: {
      /**
       * @description The fully qualified key of the metric.
       *
       * If a transformation has been used it is reflected in the metric key.
       */
      metricId: string
      /**
       * Format: double
       * @description The minimum allowed value of the metric.
       *
       *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
       */
      minimumValue?: number
      /**
       * Format: double
       * @description The maximum allowed value of the metric.
       *
       *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
       */
      maximumValue?: number
      /**
       * Format: int64
       * @description The latency of the metric, in minutes.
       *
       *  The latency is the expected reporting delay (for example, caused by constraints of cloud vendors or other third-party data sources) between the observation of a metric data point and its availability in Dynatrace.
       *
       * The allowed value range is from 1 to 60 minutes.
       *
       *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
       */
      latency?: number
      /**
       * @description Indicates whether the metric expression resolves to a scalar (`true`) or to a series (`false`).
       * A scalar result always contains one data point. The amount of data points in a series result depends on the resolution you're using.
       */
      scalar?: boolean
      /** @description The metric selector that is used when querying a func: metric. */
      metricSelector?: string
      /** @description If 'true', resolution=Inf can be applied to the metric query. */
      resolutionInfSupported?: boolean
      /**
       * @description The raw value is stored in bits or bytes. The user interface can display it in these numeral systems:
       *
       * Binary: 1 MiB = 1024 KiB = 1,048,576 bytes
       *
       * Decimal: 1 MB = 1000 kB = 1,000,000 bytes
       *
       * If not set, the decimal system is used.
       *
       *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
       * @enum {string}
       */
      unitDisplayFormat?: 'binary' | 'decimal'
      /** @description The cardinalities of MINT metric dimensions. */
      dimensionCardinalities?: OASSchemas['MetricDimensionCardinality'][]
      /**
       * Format: int64
       * @description The timestamp when the metric was last written.
       *
       * Has the value of `null` for metric expressions or if the data has never been written.
       */
      lastWritten?: number
      metricValueType?: OASSchemas['MetricValueType']
      /**
       * @description The metric is (`true`) or is not (`false`) root cause relevant.
       *
       *  A root-cause relevant metric represents a strong indicator for a faulty component.
       *
       *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
       */
      rootCauseRelevant?: boolean
      /**
       * @description The metric is (`true`) or is not (`false`) impact relevant.
       *
       *  An impact-relevant metric is highly dependent on other metrics and changes because an underlying root-cause metric has changed.
       *
       *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
       */
      impactRelevant?: boolean
      /** @description List of admissible primary entity types for this metric. Can be used for the `type` predicate in the `entitySelector`. */
      entityType?: string[]
      /** @description The list of allowed aggregations for this metric. */
      aggregationTypes?: (
        | 'auto'
        | 'avg'
        | 'count'
        | 'max'
        | 'median'
        | 'min'
        | 'percentile'
        | 'sum'
        | 'value'
      )[]
      defaultAggregation?: OASSchemas['MetricDefaultAggregation']
      /**
       * @description The fine metric division (for example, process group and process ID for some process-related metric).
       *
       * For [ingested metrics](https://dt-url.net/5d63ic1), dimensions that doesn't have have any data within the last 15 days are omitted.
       */
      dimensionDefinitions?: OASSchemas['MetricDimensionDefinition'][]
      /**
       * @description If `true` the usage of metric consumes [Davis data units](https://dt-url.net/ddu).
       *
       *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
       */
      dduBillable?: boolean
      /**
       * @description The tags applied to the metric.
       *
       *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
       */
      tags?: string[]
      /**
       * Format: int64
       * @description The timestamp of metric creation.
       *
       * Built-in metrics and metric expressions have the value of `null`.
       */
      created?: number
      /** @description A list of potential warnings that affect this ID. For example deprecated feature usage etc. */
      warnings?: string[]
      /** @description The name of the metric in the user interface. */
      displayName?: string
      /** @description A short description of the metric. */
      description?: string
      /** @description Transform operators that could be appended to the current transformation list. */
      transformations?: (
        | 'asGauge'
        | 'default'
        | 'delta'
        | 'evaluateModel'
        | 'filter'
        | 'fold'
        | 'last'
        | 'lastReal'
        | 'limit'
        | 'merge'
        | 'names'
        | 'parents'
        | 'partition'
        | 'rate'
        | 'rollup'
        | 'setUnit'
        | 'smooth'
        | 'sort'
        | 'splitBy'
        | 'timeshift'
        | 'toUnit'
      )[]
      /** @description The unit of the metric. */
      unit?: string
    }
  
    /** @description The dimension cardinalities of a metric. */
    MetricDimensionCardinality: {
      /**
       * Format: int64
       * @description The cardinality estimate of the dimension.
       */
      estimate: number
      /**
       * Format: double
       * @description The relative cardinality of the dimension expressed as percentage
       */
      relative: number
      /**
       * @description The key of the dimension.
       *
       *  It must be unique within the metric.
       */
      key: string
    }
  
    /** @description The dimension of a metric. */
    MetricDimensionDefinition: {
      /** @description The name of the dimension. */
      name: string
      /**
       * @description The key of the dimension.
       *
       *  It must be unique within the metric.
       */
      key: string
      /**
       * @description The type of the dimension.
       * @enum {string}
       */
      type: 'ENTITY' | 'NUMBER' | 'OTHER' | 'STRING' | 'VOID'
      /** @description The display name of the dimension. */
      displayName: string
      /**
       * Format: int32
       * @description The unique 0-based index of the dimension.
       *
       *  Appending transformations such as :names or :parents may change the indexes of dimensions. `null` is used for the dimensions of a metric with flexible dimensions, which can be referenced with their dimension key, but do not have an intrinsic order that could be used for the index.
       */
      index: number
    }
  
    /** @description The value type for the metric. */
    MetricValueType: {
      /**
       * @description The metric value type
       * @enum {string}
       */
      type: 'error' | 'score' | 'unknown'
    }
  
    /**
     * @description A list of metrics along with their descriptors.
     * @example {
     *   "totalCount": 3,
     *   "nextPageKey": "ABCDEFABCDEFABCDEF_",
     *   "metrics": [
     *     {
     *       "metricId": "builtin:host.cpu.user:splitBy(\"dt.entity.host\"):max:fold",
     *       "displayName": "CPU user",
     *       "description": "Percentage of user-space CPU time currently utilized, per host.",
     *       "unit": "Percent",
     *       "dduBillable": false,
     *       "created": 1597400123451,
     *       "lastWritten": 1597400717783,
     *       "entityType": [
     *         "HOST"
     *       ],
     *       "aggregationTypes": [
     *         "auto",
     *         "value"
     *       ],
     *       "transformations": [
     *         "filter",
     *         "fold",
     *         "limit",
     *         "merge",
     *         "names",
     *         "parents",
     *         "timeshift",
     *         "rate",
     *         "sort",
     *         "last",
     *         "splitBy"
     *       ],
     *       "defaultAggregation": {
     *         "type": "value"
     *       },
     *       "dimensionDefinitions": [
     *         {
     *           "key": "dt.entity.host",
     *           "name": "Host",
     *           "displayName": "Host",
     *           "index": 0,
     *           "type": "ENTITY"
     *         }
     *       ],
     *       "tags": [],
     *       "metricValueType": {
     *         "type": "unknown"
     *       }
     *     },
     *     {
     *       "metricId": "builtin:host.cpu.user:splitBy()",
     *       "displayName": "CPU user",
     *       "description": "Percentage of user-space CPU time currently utilized, per host.",
     *       "unit": "Percent",
     *       "dduBillable": false,
     *       "created": 1597400123451,
     *       "lastWritten": 1597400717783,
     *       "entityType": [
     *         "HOST"
     *       ],
     *       "aggregationTypes": [
     *         "auto",
     *         "value"
     *       ],
     *       "transformations": [
     *         "filter",
     *         "fold",
     *         "limit",
     *         "merge",
     *         "names",
     *         "parents",
     *         "timeshift",
     *         "rate",
     *         "sort",
     *         "last",
     *         "splitBy"
     *       ],
     *       "defaultAggregation": {
     *         "type": "value"
     *       },
     *       "dimensionDefinitions": [
     *         {
     *           "key": "dt.entity.host",
     *           "name": "Host",
     *           "displayName": "Host",
     *           "index": 0,
     *           "type": "ENTITY"
     *         }
     *       ],
     *       "tags": [],
     *       "metricValueType": {
     *         "type": "unknown"
     *       }
     *     }
     *   ]
     * }
     */
    MetricDescriptorCollection: {
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       */
      nextPageKey: string
      /**
       * Format: int64
       * @description The estimated number of metrics in the result.
       */
      totalCount: number
      /** @description A list of potential warnings about the query. For example deprecated feature usage etc. */
      warnings?: string[]
      /** @description A list of metric along with their descriptors */
      metrics: OASSchemas['MetricDescriptor'][]
    }
  
    /** @description Optional filters that took effect. */
    AppliedFilter: {
      /**
       * @description The keys of all metrics that this filter has been applied to.
       *
       * Can contain multiple metrics for complex expressions and always at least one key.
       */
      appliedTo: string[]
      filter?: OASSchemas['Filter']
    }
  
    /** @description A dimensional or series filter on a metric. */
    Filter: {
      rollup?: OASSchemas['Rollup']
      /** @description If the type applies to n dimensions, then holds the target dimensions. Currently only used for the `remainder` filter. */
      targetDimensions?: string[]
      /** @description For filters that match a dimension against a valkue, such as `eq` or `ne`, holds the value to compare the dimension against. */
      referenceString?: string
      /** @description For the operands of `series` filters that match against a number, holds the number to compare against. */
      referenceValue?: number
      referenceInvocation?: OASSchemas['Invocation']
      /** @description If the type applies to a dimension, then holds the target dimension. */
      targetDimension?: string
      /**
       * @description Type of this filter, determines which other fields are present.Can be any of:
       * * `eq`,
       * * `ne`,
       * * `prefix`,
       * * `in`,
       * * `remainder`,
       * * `suffix`,
       * * `contains`,
       * * `existsKey`,
       * * `series`,
       * * `or`,
       * * `and`,
       * * `not`,
       * * `ge`,
       * * `gt`,
       * * `le`,
       * * `lt`,
       * * `otherwise`.
       * @enum {string}
       */
      type?:
        | 'and'
        | 'contains'
        | 'eq'
        | 'existsKey'
        | 'ge'
        | 'gt'
        | 'in'
        | 'le'
        | 'lt'
        | 'ne'
        | 'not'
        | 'or'
        | 'otherwise'
        | 'prefix'
        | 'remainder'
        | 'series'
        | 'suffix'
      /** @description If the type is `not`, `and` or `or`, then holds the contained filters. */
      operands?: OASSchemas['Filter'][]
    }
  
    /** @description Invocation of a function, e.g. the `entitySelector` function. */
    Invocation: {
      /** @description Function that is invoked, e.g. `entitySelector`. */
      function?: string
      /** @description Arguments to pass to the function, e.g. entity selector source code. */
      args?: string[]
    }
  
    /**
     * @description A list of metrics and their data points.
     * @example {
     *   "totalCount": 3,
     *   "nextPageKey": "null",
     *   "resolution": "1h",
     *   "warnings": [
     *     "The contains filter transformation is deprecated and will be removed in a future release."
     *   ],
     *   "result": [
     *     {
     *       "metricId": "builtin:host.disk.avail",
     *       "data": [
     *         {
     *           "dimensions": [
     *             "HOST-F1266E1D0AAC2C3C",
     *             "DISK-F1266E1D0AAC2C3F"
     *           ],
     *           "timestamps": [
     *             3151435100000,
     *             3151438700000,
     *             3151442300000
     *           ],
     *           "values": [
     *             11.1,
     *             22.2,
     *             33.3
     *           ]
     *         },
     *         {
     *           "dimensions": [
     *             "HOST-F1266E1D0AAC2C3C",
     *             "DISK-F1266E1D0AAC2C3D"
     *           ],
     *           "timestamps": [
     *             3151435100000,
     *             3151438700000,
     *             3151442300000
     *           ],
     *           "values": [
     *             111.1,
     *             222.2,
     *             333.3
     *           ]
     *         }
     *       ]
     *     },
     *     {
     *       "metricId": "builtin:host.cpu.idle",
     *       "data": [
     *         {
     *           "dimensions": [
     *             "HOST-F1266E1D0AAC2C3C"
     *           ],
     *           "timestamps": [
     *             3151435100000,
     *             3151438700000,
     *             3151442300000
     *           ],
     *           "values": [
     *             1.1,
     *             2.2,
     *             3.3
     *           ]
     *         }
     *       ]
     *     }
     *   ]
     * }
     */
    MetricData: {
      /** @description Deprecated. This field is returned for compatibility reasons. It always has the value of `null`. */
      nextPageKey?: string
      /**
       * Format: int64
       * @description The total number of primary entities in the result.
       *
       * Has the `0` value if none of the requested metrics is suitable for pagination.
       */
      totalCount: number
      /** @description The timeslot resolution in the result. */
      resolution: string
      /** @description A list of warnings */
      warnings?: string[]
      /** @description A list of metrics and their data points. */
      result: OASSchemas['MetricSeriesCollection'][]
    }
  
    /**
     * @description Data points per dimension of a metric.
     *
     * The data is represented by two arrays of the same length: **timestamps** and **values**. Entries of the same index from both arrays form a timestamped data point.
     * @example {
     *   "dimensions": [
     *     "HOST-F1266E1D0AAC2C3C"
     *   ],
     *   "timestamps": [
     *     3151435100000,
     *     3151438700000,
     *     3151442300000
     *   ],
     *   "values": [
     *     1.1,
     *     2.2,
     *     3.3
     *   ]
     * }
     */
    MetricSeries: {
      dimensionMap: { [key: string]: string }
      /**
       * @description A list of timestamps of data points.
       *
       * The value of data point for each time from this array is located in **values** array at the same index.
       */
      timestamps: number[]
      /**
       * @description The ordered list of dimensions to which the data point list belongs.
       *
       *  Each metric can have a certain number of dimensions. Dimensions exceeding this number are aggregated into one, which is shown as `null` here.
       */
      dimensions: string[]
      /**
       * @description A list of values of data points.
       *
       * The timestamp of data point for each value from this array is located in **timestamps** array at the same index.
       */
      values: number[]
    }
  
    /**
     * @description Data points of a metric.
     * @example {
     *   "metricId": "builtin:host.disk.avail",
     *   "data": [
     *     {
     *       "dimensions": [
     *         "HOST-F1266E1D0AAC2C3C",
     *         "DISK-F1266E1D0AAC2C3F"
     *       ],
     *       "timestamps": [
     *         3151435100000,
     *         3151438700000,
     *         3151442300000
     *       ],
     *       "values": [
     *         11.1,
     *         22.2,
     *         33.3
     *       ]
     *     },
     *     {
     *       "dimensions": [
     *         "HOST-F1266E1D0AAC2C3C",
     *         "DISK-F1266E1D0AAC2C3D"
     *       ],
     *       "timestamps": [
     *         3151435100000,
     *         3151438700000,
     *         3151442300000
     *       ],
     *       "values": [
     *         111.1,
     *         222.2,
     *         333.3
     *       ]
     *     }
     *   ]
     * }
     */
    MetricSeriesCollection: {
      /**
       * @description The key of the metric.
       *
       * If any transformation is applied, it is included here.
       */
      metricId: string
      /** @description A list of filtered metric keys along with filters that have been applied to these keys, from the `optionalFilter` parameter. */
      appliedOptionalFilters?: OASSchemas['AppliedFilter'][]
      /** @description A list of potential warnings that affect this ID. For example deprecated feature usage etc. */
      warnings?: string[]
      /** @description Data points of the metric. */
      data: OASSchemas['MetricSeries'][]
    }
  
    /** @description A way of viewing a series as a single value for the purpose of sorting or series-based filters. */
    Rollup: {
      /** @enum {string} */
      type?: 'AUTO' | 'AVG' | 'MAX' | 'MEDIAN' | 'MIN' | 'PERCENTILE' | 'SUM'
      /** Format: double */
      parameter?: number
    }
  
    /**
     * @description The short representation of a Dynatrace entity.
     * @example {
     *   "id": "6a98d7bc-abb9-44f8-ae6a-73e68e71812a",
     *   "name": "Dynatrace entity",
     *   "description": "Dynatrace entity for the REST API example"
     * }
     */
    EntityShortRepresentation: {
      /** @description The ID of the Dynatrace entity. */
      id: string
      /** @description The name of the Dynatrace entity. */
      name?: string
      /** @description A short description of the Dynatrace entity. */
      description?: string
    }
  
    /** @description Configuration of a network zone. */
    NetworkZone: {
      /** @description A list of alternative network zones. */
      alternativeZones?: string[]
      /**
       * Format: int32
       * @description The number of OneAgents that are using ActiveGates in the network zone.
       */
      numOfOneAgentsUsing?: number
      /**
       * Format: int32
       * @description The number of OneAgents that are configured to use the network zone as primary.
       */
      numOfConfiguredOneAgents?: number
      /**
       * Format: int32
       * @description The number of OneAgents from other network zones that are using ActiveGates in the network zone.
       *
       *  This is a fraction of **numOfOneAgentsUsing**.
       *
       * One possible reason for switching to another zone is that a firewall is preventing a OneAgent from connecting to any ActiveGate in the preferred network zone.
       */
      numOfOneAgentsFromOtherZones?: number
      /**
       * Format: int32
       * @description The number of ActiveGates in the network zone.
       */
      numOfConfiguredActiveGates?: number
      /** @description The ID of the network zone */
      id?: string
      /** @description A short description of the network zone */
      description?: string
    }
  
    /** @description A list of network zones. */
    NetworkZoneList: {
      /** @description A list of network zones. */
      networkZones: OASSchemas['NetworkZone'][]
    }
  
    /** @description Runtime information about host connections. */
    NetworkZoneConnectionStatistics: {
      /** @description Hosts that use the network zone as an alternative. */
      hostsConnectedAsAlternative?: string[]
      /** @description Hosts from other zones that use the zone (not configured as an alternative) and **no** ActiveGates of higher priority are available. */
      hostsConnectedAsFailoverWithoutActiveGates?: string[]
      /** @description Hosts from other zones that use the zone (not configured as an alternative) even though ActiveGates of higher priority are available. */
      hostsConnectedAsFailover?: string[]
      /** @description Hosts from the network zone that use other zones. */
      hostsConfiguredButNotConnected?: string[]
    }
  
    /** @description Global network zone configuration. */
    NetworkZoneSettings: {
      /** @description Network zones feature is enabled (`true`) or disabled (`false`). */
      networkZonesEnabled?: boolean
    }
  
    /**
     * @description Deleted custom tag.
     * @example {
     *   "matchedEntitiesCount": 2
     * }
     */
    DeletedEntityTags: {
      /**
       * Format: int64
       * @description The number of monitored entities where the tag has been deleted.
       */
      matchedEntitiesCount?: number
    }
  
    /**
     * @description A list of custom tags.
     * @example {
     *   "totalCount": 2,
     *   "tags": [
     *     {
     *       "context": "CONTEXTLESS",
     *       "key": "mainApp",
     *       "stringRepresentation": "mainApp"
     *     },
     *     {
     *       "context": "CONTEXTLESS",
     *       "key": "bookings",
     *       "stringRepresentation": "bookings"
     *     }
     *   ]
     * }
     */
    CustomEntityTags: {
      /**
       * Format: int64
       * @description The total number of tags in the response.
       */
      totalCount?: number
      /** @description A list of custom tags. */
      tags: OASSchemas['METag'][]
    }
  
    /**
     * @description A list of custom tags added to monitored entities.
     * @example {
     *   "appliedTags": [
     *     {
     *       "context": "CONTEXTLESS",
     *       "key": "mainApp",
     *       "stringRepresentation": "mainApp"
     *     },
     *     {
     *       "context": "CONTEXTLESS",
     *       "key": "booking",
     *       "stringRepresentation": "booking"
     *     }
     *   ],
     *   "matchedEntitiesCount": 2
     * }
     */
    AddedEntityTags: {
      /**
       * Format: int64
       * @description The number of monitored entities where the tags have been added.
       */
      matchedEntitiesCount?: number
      /** @description A list of added custom tags. */
      appliedTags?: OASSchemas['METag'][]
    }
  
    /** @description The custom tag to be added to monitored entities. */
    AddEntityTag: {
      /** @description The value of the custom tag to be added to monitored entities. May be null */
      value?: string
      /** @description The key of the custom tag to be added to monitored entities. */
      key: string
    }
  
    /**
     * @description A list of tags to be added to monitored entities.
     * @example {
     *   "tags": [
     *     {
     *       "key": "mainApp"
     *     },
     *     {
     *       "key": "bookings",
     *       "value": "42"
     *     }
     *   ]
     * }
     */
    AddEntityTags: {
      /** @description A list of tags to be added to monitored entities. */
      tags: OASSchemas['AddEntityTag'][]
    }
  
    /** @description The newly created ActiveGate token. */
    ActiveGateTokenCreated: {
      /**
       * @description The ID of the token, consisting of prefix and public part of the token.
       * @example dt0g02.4KWZO5EF
       */
      id?: string
      /**
       * @description The secret of the token.
       * @example dt0g02.4KWZO5EF.XT47R5DRADJIZUFOX4UDNOKTSUSABGLN7XSMJG7UXHRXKNY4WLORH4OF4T75MG7E
       */
      token?: string
      /**
       * @description The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
       * @example 2020-11-24T08:15:30.144Z
       */
      expirationDate?: string
    }
  
    /** @description Parameters of a new ActiveGate token. */
    ActiveGateTokenCreate: {
      /**
       * @description The name of the token.
       * @example myToken
       */
      name: string
      /**
       * @description The expiration date of the token.
       *
       * You can use one of the following formats:
       * * Timestamp in UTC milliseconds.
       * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
       * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
       * You can also specify relative timeframe without an alignment: `now-NU`.
       * Supported time units for the relative timeframe are:
       *    * `m`: minutes
       *    * `h`: hours
       *    * `d`: days
       *    * `w`: weeks
       *    * `M`: months
       *    * `y`: years
       *
       * If not set, the token never expires.
       * @example now+14d
       */
      expirationDate?: string
      /**
       * @description The token is a seed token (`true`) or an individual token (`false`).
       *
       *  We recommend the individual token option (false).
       * @example false
       */
      seedToken?: boolean
      /**
       * @description The type of the ActiveGate for which the token is valid.
       * @enum {string}
       */
      activeGateType: 'ENVIRONMENT' | 'CLUSTER'
    }
  
    /** @description Metadata of an ActiveGate token. */
    ActiveGateToken: {
      /**
       * @description The ID of the token, consisting of [prefix and public part](https://dt-url.net/2903ss4) of the token.
       * @example dt0g02.4KWZO5EF
       */
      id?: string
      /**
       * @description The name of the token.
       * @example myToken
       */
      name?: string
      /**
       * @description The owner of the token.
       * @example john.smith
       */
      owner?: string
      /**
       * @description The token creation date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
       * @example 2020-11-22T08:15:30.144Z
       */
      creationDate?: string
      /**
       * @description The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
       *
       *  If not set, the token never expires.
       * @example 2020-11-24T08:15:30.144Z
       */
      expirationDate?: string
      /**
       * @description The token last used date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
       * @example 2020-11-23T08:15:30.144Z
       */
      lastUsedDate?: string
      /**
       * @description The token is a seed token (`true`) or an individual token (`false`).
       * @example false
       */
      seedToken?: boolean
      /**
       * @description The type of the ActiveGate for which the token is valid.
       * @enum {string}
       */
      activeGateType?: 'ENVIRONMENT' | 'CLUSTER'
    }
  
    /**
     * @description A list of ActiveGate tokens.
     * @example {
     *   "totalCount": 1000,
     *   "pageSize": 100,
     *   "nextPageKey": "AAAAAAAAAAAAAABOAAAAAAAAAAAAAAA6ACQAEAAAABgACgAITFdXQk1BRzYAAAhtZXRhZGF0YQB___-bf___m3iIYxfF7xVQvY72rwblQkcAAwAAAAAAAADHAAAAZA==",
     *   "activeGateTokens": {
     *     "id": "dt0g02.4KWZO5EF",
     *     "name": "myToken",
     *     "owner": "john.smith",
     *     "creationDate": "2020-11-22T08:15:30.144Z",
     *     "expirationDate": "2020-11-24T08:15:30.144Z",
     *     "lastUsedDate": "2020-11-23T08:15:30.144Z",
     *     "seedToken": "false",
     *     "activeGateType": "ENVIRONMENT"
     *   }
     * }
     */
    ActiveGateTokenList: {
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /** @description A list of ActiveGate tokens. */
      activeGateTokens?: OASSchemas['ActiveGateToken'][]
    }
  
    /** @description The newly created token. */
    ApiTokenCreated: {
      /**
       * @description The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
       * @example 2020-11-12T08:15:30.144Z
       */
      expirationDate?: string
      /**
       * @description The ID of the token, consisting of prefix and public part of the token.
       * @example dt0c01.ST2EY72KQINMH574WMNVI7YN
       */
      id?: string
      /**
       * @description The secret of the token.
       * @example dt0c01.ST2EY72KQINMH574WMNVI7YN.G3DFPBEJYMODIDAEX454M7YWBUVEFOWKPRVMWFASS64NFH52PX6BNDVFFM572RZM
       */
      token?: string
    }
  
    /** @description Parameters of a new API token. */
    ApiTokenCreate: {
      /**
       * @description The token is a personal access token (`true`) or an API token (`false`).
       *
       *  Personal access tokens are tied to the permissions of their owner.
       * @example false
       */
      personalAccessToken?: boolean
      /**
       * @description The expiration date of the token.
       *
       * You can use one of the following formats:
       * * Timestamp in UTC milliseconds.
       * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
       * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
       * You can also specify relative timeframe without an alignment: `now-NU`.
       * Supported time units for the relative timeframe are:
       *    * `m`: minutes
       *    * `h`: hours
       *    * `d`: days
       *    * `w`: weeks
       *    * `M`: months
       *    * `y`: years
       *
       * If not set, the token never expires.
       * @example now+14d
       */
      expirationDate?: string
      /**
       * @description The name of the token.
       * @example tokenName
       */
      name: string
      /**
       * @description A list of the scopes to be assigned to the token.
       *
       * * `InstallerDownload`: PaaS integration - Installer download.
       * * `DataExport`: Access problem and event feed, metrics, and topology.
       * * `PluginUpload`: Upload Extension.
       * * `SupportAlert`: PaaS integration - Support alert.
       * * `DcrumIntegration`: Dynatrace module integration - NAM.
       * * `AdvancedSyntheticIntegration`: Dynatrace module integration - Synthetic Classic.
       * * `ExternalSyntheticIntegration`: Create and read synthetic monitors, locations, and nodes.
       * * `AppMonIntegration`: Dynatrace module integration - AppMon.
       * * `RumBrowserExtension`: RUM Browser Extension.
       * * `LogExport`: Read logs.
       * * `ReadConfig`: Read configuration.
       * * `WriteConfig`: Write configuration.
       * * `DTAQLAccess`: User sessions.
       * * `UserSessionAnonymization`: Anonymize user session data for data privacy reasons.
       * * `DataPrivacy`: Change data privacy settings.
       * * `CaptureRequestData`: Capture request data.
       * * `Davis`: Dynatrace module integration - Davis.
       * * `DssFileManagement`: Mobile symbolication file management.
       * * `RumJavaScriptTagManagement`: Real user monitoring JavaScript tag management.
       * * `TenantTokenManagement`: Token management.
       * * `ActiveGateCertManagement`: ActiveGate certificate management.
       * * `RestRequestForwarding`: Fetch data from a remote environment.
       * * `ReadSyntheticData`: Read synthetic monitors, locations, and nodes.
       * * `DataImport`: Data ingest, e.g.: metrics and events.
       * * `auditLogs.read`: Read audit logs.
       * * `metrics.read`: Read metrics.
       * * `metrics.write`: Write metrics.
       * * `entities.read`: Read entities.
       * * `entities.write`: Write entities.
       * * `problems.read`: Read problems.
       * * `problems.write`: Write problems.
       * * `events.read`: Read events.
       * * `events.ingest`: Ingest events.
       * * `networkZones.read`: Read network zones.
       * * `networkZones.write`: Write network zones.
       * * `activeGates.read`: Read ActiveGates.
       * * `activeGates.write`: Write ActiveGates.
       * * `activeGateTokenManagement.read`: Read ActiveGate tokens.
       * * `activeGateTokenManagement.create`: Create ActiveGate tokens.
       * * `activeGateTokenManagement.write`: Write ActiveGate tokens.
       * * `credentialVault.read`: Read credential vault entries.
       * * `credentialVault.write`: Write credential vault entries.
       * * `extensions.read`: Read extensions.
       * * `extensions.write`: Write extensions.
       * * `extensionConfigurations.read`: Read extension monitoring configurations.
       * * `extensionConfigurations.write`: Write extension monitoring configurations.
       * * `extensionEnvironment.read`: Read extension environment configurations.
       * * `extensionEnvironment.write`: Write extension environment configurations.
       * * `metrics.ingest`: Ingest metrics.
       * * `securityProblems.read`: Read security problems.
       * * `securityProblems.write`: Write security problems.
       * * `syntheticLocations.read`: Read synthetic locations.
       * * `syntheticLocations.write`: Write synthetic locations.
       * * `settings.read`: Read settings.
       * * `settings.write`: Write settings.
       * * `tenantTokenRotation.write`: Tenant token rotation.
       * * `slo.read`: Read SLO.
       * * `slo.write`: Write SLO.
       * * `releases.read`: Read releases.
       * * `apiTokens.read`: Read API tokens.
       * * `apiTokens.write`: Write API tokens.
       * * `openTelemetryTrace.ingest`: Ingest OpenTelemetry traces.
       * * `logs.read`: Read logs.
       * * `logs.ingest`: Ingest logs.
       */
      scopes: (
        | 'InstallerDownload'
        | 'DataExport'
        | 'PluginUpload'
        | 'SupportAlert'
        | 'DcrumIntegration'
        | 'AdvancedSyntheticIntegration'
        | 'ExternalSyntheticIntegration'
        | 'AppMonIntegration'
        | 'RumBrowserExtension'
        | 'LogExport'
        | 'ReadConfig'
        | 'WriteConfig'
        | 'DTAQLAccess'
        | 'UserSessionAnonymization'
        | 'DataPrivacy'
        | 'CaptureRequestData'
        | 'Davis'
        | 'DssFileManagement'
        | 'RumJavaScriptTagManagement'
        | 'TenantTokenManagement'
        | 'ActiveGateCertManagement'
        | 'RestRequestForwarding'
        | 'ReadSyntheticData'
        | 'DataImport'
        | 'auditLogs.read'
        | 'metrics.read'
        | 'metrics.write'
        | 'entities.read'
        | 'entities.write'
        | 'problems.read'
        | 'problems.write'
        | 'events.read'
        | 'events.ingest'
        | 'networkZones.read'
        | 'networkZones.write'
        | 'activeGates.read'
        | 'activeGates.write'
        | 'activeGateTokenManagement.read'
        | 'activeGateTokenManagement.create'
        | 'activeGateTokenManagement.write'
        | 'credentialVault.read'
        | 'credentialVault.write'
        | 'extensions.read'
        | 'extensions.write'
        | 'extensionConfigurations.read'
        | 'extensionConfigurations.write'
        | 'extensionEnvironment.read'
        | 'extensionEnvironment.write'
        | 'metrics.ingest'
        | 'securityProblems.read'
        | 'securityProblems.write'
        | 'syntheticLocations.read'
        | 'syntheticLocations.write'
        | 'settings.read'
        | 'settings.write'
        | 'tenantTokenRotation.write'
        | 'slo.read'
        | 'slo.write'
        | 'releases.read'
        | 'apiTokens.read'
        | 'apiTokens.write'
        | 'openTelemetryTrace.ingest'
        | 'logs.read'
        | 'logs.ingest'
      )[]
    }
  
    /** @description Metadata of an API token. */
    ApiToken: {
      /**
       * @description Token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
       *
       *  If not set, the token never expires.
       * @example 2020-11-12T08:15:30.144Z
       */
      expirationDate?: string
      /**
       * @description The token is a [personal access token](https://dt-url.net/wm03sop) (`true`) or an API token (`false`).
       * @example true
       */
      personalAccessToken?: boolean
      /**
       * @description Token last used date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`)
       * @example 2020-11-12T08:15:30.144Z
       */
      lastUsedDate?: string
      /**
       * @description Token last used IP address.
       * @example 34.197.2.44
       */
      lastUsedIpAddress?: string
      /**
       * @description Token creation date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`)
       * @example 2020-11-05T08:15:30.144Z
       */
      creationDate?: string
      /**
       * @description The name of the token.
       * @example myToken
       */
      name?: string
      /**
       * @description The ID of the token, consisting of prefix and public part of the token.
       * @example dt0c01.ST2EY72KQINMH574WMNVI7YN
       */
      id?: string
      /**
       * @description The owner of the token.
       * @example john.smith
       */
      owner?: string
      /** @description A list of scopes assigned to the token. */
      scopes?: (
        | 'ActiveGateCertManagement'
        | 'AdvancedSyntheticIntegration'
        | 'AppMonIntegration'
        | 'CaptureRequestData'
        | 'DTAQLAccess'
        | 'DataExport'
        | 'DataImport'
        | 'DataPrivacy'
        | 'Davis'
        | 'DcrumIntegration'
        | 'DiagnosticExport'
        | 'DssFileManagement'
        | 'ExternalSyntheticIntegration'
        | 'InstallerDownload'
        | 'LogExport'
        | 'MemoryDump'
        | 'Mobile'
        | 'PluginUpload'
        | 'ReadConfig'
        | 'ReadSyntheticData'
        | 'RestRequestForwarding'
        | 'RumBrowserExtension'
        | 'RumJavaScriptTagManagement'
        | 'SupportAlert'
        | 'TenantTokenManagement'
        | 'UserSessionAnonymization'
        | 'ViewDashboard'
        | 'ViewReport'
        | 'WriteConfig'
        | 'WriteSyntheticData'
        | 'activeGateTokenManagement.create'
        | 'activeGateTokenManagement.read'
        | 'activeGateTokenManagement.write'
        | 'activeGates.read'
        | 'activeGates.write'
        | 'apiTokens.read'
        | 'apiTokens.write'
        | 'auditLogs.read'
        | 'credentialVault.read'
        | 'credentialVault.write'
        | 'entities.read'
        | 'entities.write'
        | 'events.ingest'
        | 'events.read'
        | 'extensionConfigurations.read'
        | 'extensionConfigurations.write'
        | 'extensionEnvironment.read'
        | 'extensionEnvironment.write'
        | 'extensions.read'
        | 'extensions.write'
        | 'logs.ingest'
        | 'logs.read'
        | 'metrics.ingest'
        | 'metrics.read'
        | 'metrics.write'
        | 'networkZones.read'
        | 'networkZones.write'
        | 'openTelemetryTrace.ingest'
        | 'problems.read'
        | 'problems.write'
        | 'releases.read'
        | 'securityProblems.read'
        | 'securityProblems.write'
        | 'settings.read'
        | 'settings.write'
        | 'slo.read'
        | 'slo.write'
        | 'syntheticLocations.read'
        | 'syntheticLocations.write'
        | 'tenantTokenRotation.write'
      )[]
      /**
       * @description The token is enabled (`true`) or disabled (`false`).
       * @example true
       */
      enabled?: boolean
    }
  
    /**
     * @description A list of API tokens.
     * @example {
     *   "pageSize": "1",
     *   "totalCount": "1",
     *   "apiTokens": {
     *     "id": "dt0c01.ST2EY72KQINMH574WMNVI7YN",
     *     "name": "tokenName",
     *     "revoked": "false",
     *     "personalAccessToken": "true",
     *     "owner": "john.smith",
     *     "creationDate": "2020-11-05T08:15:30.144Z",
     *     "expirationDate": "2020-11-12T08:15:30.144Z",
     *     "lastUsedDate": "2020-11-12T08:15:30.144Z",
     *     "lastUsedIpAddress": "34.197.2.44",
     *     "scopes": [
     *       "metrics.read"
     *     ]
     *   }
     * }
     */
    ApiTokenList: {
      /** @description A list of API tokens. */
      apiTokens?: OASSchemas['ApiToken'][]
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
    }
  
    ApiTokenSecret: {
      /**
       * @description The API token.
       * @example dt0c01.ST2EY72KQINMH574WMNVI7YN.G3DFPBEJYMODIDAEX454M7YWBUVEFOWKPRVMWFASS64NFH52PX6BNDVFFM572RZM
       */
      token: string
    }
  
    /** @description The update of the API token. */
    ApiTokenUpdate: {
      /**
       * @description The name of the token.
       * @example myToken
       */
      name?: string
      /**
       * @description The token is enabled (`true`) or disabled (`false`)
       * @example true
       */
      enabled?: boolean
    }
  
    /**
     * @description An entry of the audit log.
     * @example {
     *   "logId": "197425568800060000",
     *   "eventType": "UPDATE",
     *   "category": "CONFIG",
     *   "entityId": "MOBILE_RUM: MOBILE_APPLICATION-752C223D59734CD2",
     *   "environmentId": "prod-env-13",
     *   "user": "test.user@company.com",
     *   "userType": "USER_NAME",
     *   "userOrigin": "webui (192.168.0.2)",
     *   "timestamp": 1974255688445,
     *   "success": true,
     *   "patch": [
     *     {
     *       "op": "replace",
     *       "path": "/refreshTimeIntervalMillis",
     *       "value": 30000,
     *       "oldValue": 20000
     *     }
     *   ]
     * }
     */
    AuditLogEntry: {
      /** @description The ID of the log entry. */
      logId: string
      /**
       * @description The type of the recorded operation.
       * @enum {string}
       */
      eventType:
        | 'CREATE'
        | 'DELETE'
        | 'GENERAL'
        | 'GET'
        | 'LOGIN'
        | 'LOGOUT'
        | 'PATCH'
        | 'POST'
        | 'PUT'
        | 'READ'
        | 'REVOKE'
        | 'TAG_ADD'
        | 'TAG_REMOVE'
        | 'TAG_UPDATE'
        | 'UPDATE'
      /**
       * @description The category of the recorded operation.
       * @enum {string}
       */
      category: 'CONFIG' | 'DEBUG_UI' | 'MANUAL_TAGGING_SERVICE' | 'TOKEN' | 'WEB_UI'
      /**
       * @description The ID of an entity from the **category**.
       *
       * For example, it can be config ID for the `CONFIG` category or token ID for the `TOKEN` category.
       */
      entityId?: string
      /** @description The ID of the Dynatrace environment where the recorded operation occurred. */
      environmentId: string
      /** @description The ID of the user who performed the recorded operation. */
      user: string
      /**
       * @description The type of the authentication of the **user**.
       * @enum {string}
       */
      userType: 'PUBLIC_TOKEN_IDENTIFIER' | 'REQUEST_ID' | 'SERVICE_NAME' | 'TOKEN_HASH' | 'USER_NAME'
      /** @description The origin and the IP address of the **user**. */
      userOrigin?: string
      /**
       * Format: int64
       * @description The timestamp of the record creation, in UTC milliseconds.
       */
      timestamp: number
      /** @description The recorded operation is successful (`true`) or failed (`false`). */
      success: boolean
      /** @description The logged message. */
      message?: string
      /**
       * @description The patch of the recorded operation as the JSON representation.
       *
       * The format is an enhanced RFC 6902. The patch also carries the previous value in the **oldValue** field.
       */
      patch?: { [key: string]: unknown }
    }
  
    /**
     * @description The audit log of your environment.
     * @example {
     *   "totalCount": 10,
     *   "pageSize": 5,
     *   "nextPageKey": "___a7acX3q0AAAAAACJidWlsdGluOnNlcnZpY2lUVEJCUzBaNVIxVjJOSGt6Y3oyLTcwMUZWRkxlclH__9rtpxferQ",
     *   "auditLogs": [
     *     {
     *       "logId": "197425568800060000",
     *       "eventType": "UPDATE",
     *       "category": "CONFIG",
     *       "entityId": "MOBILE_RUM: MOBILE_APPLICATION-752C223D59734CD2",
     *       "environmentId": "prod-env-13",
     *       "user": "test.user@company.com",
     *       "userType": "USER_NAME",
     *       "userOrigin": "webui (192.168.0.2)",
     *       "timestamp": 1974255688445,
     *       "success": true,
     *       "patch": [
     *         {
     *           "op": "replace",
     *           "path": "/refreshTimeIntervalMillis",
     *           "value": 30000,
     *           "oldValue": 20000
     *         }
     *       ]
     *     }
     *   ]
     * }
     */
    AuditLog: {
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /** @description A list of audit log entries ordered by the creation timestamp. */
      auditLogs?: OASSchemas['AuditLogEntry'][]
    }
  
    /** @description Parameters of a security problem */
    SecurityProblem: {
      /** @description The ID of the security problem. */
      securityProblemId?: string
      /** @description The displayId of the security problem. */
      displayId?: string
      /**
       * @description The status of the security problem.
       * @enum {string}
       */
      status?: 'OPEN' | 'RESOLVED'
      /** @description Indicates if a security problem is muted. */
      muted?: boolean
      /** @description The external vulnerability ID of the security problem. */
      externalVulnerabilityId?: string
      /**
       * @description The type of the vulnerability.
       * @enum {string}
       */
      vulnerabilityType?: 'RUNTIME' | 'THIRD_PARTY'
      /** @description The title of the security problem. */
      title?: string
      /** @description The package name of the security problem. */
      packageName?: string
      /** @description The URL to the security problem details page. */
      url?: string
      /**
       * @description The technology of the security problem.
       * @enum {string}
       */
      technology?: 'DOTNET' | 'JAVA' | 'KUBERNETES' | 'NODE_JS' | 'PHP'
      /**
       * Format: int64
       * @description The timestamp of the first occurrence of the security problem.
       */
      firstSeenTimestamp?: number
      /**
       * Format: int64
       * @description The timestamp of the most recent security problem change.
       */
      lastUpdatedTimestamp?: number
      riskAssessment?: OASSchemas['RiskAssessment']
      /** @description Management zones to which the affected entities belong. */
      managementZones?: OASSchemas['ManagementZone'][]
      /** @description CVE IDs of the security problem. */
      cveIds?: string[]
    }
  
    /** @description Security advice from the Davis security advisor. */
    DavisSecurityAdvice: {
      /** @description The name of the advice. */
      name?: string
      /** @description The vulnerable component to which advice applies. */
      vulnerableComponent?: string
      /**
       * @description The technology of the vulnerable component.
       * @enum {string}
       */
      technology?: 'DOTNET' | 'JAVA' | 'KUBERNETES' | 'NODE_JS' | 'PHP'
      /**
       * @description The type of the advice.
       * @enum {string}
       */
      adviceType?: 'UPGRADE'
      /** @description IDs of `critical` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
      critical?: string[]
      /** @description IDs of `high` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
      high?: string[]
      /** @description IDs of `medium` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
      medium?: string[]
      /** @description IDs of `low` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
      low?: string[]
      /** @description IDs of `none` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
      none?: string[]
    }
  
    /** @description A list of advice from the Davis security advisor. */
    DavisSecurityAdviceList: {
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      advices?: OASSchemas['DavisSecurityAdvice'][]
    }
  
    /** @description information on the muted state of a security problem in relation to an event. */
    MuteState: {
      /** @description The user who has muted or unmuted the problem. */
      user?: string
      /**
       * @description The reason for the mute state change.
       * @enum {string}
       */
      reason?:
        | 'AFFECTED'
        | 'CONFIGURATION_NOT_AFFECTED'
        | 'FALSE_POSITIVE'
        | 'IGNORE'
        | 'INITIAL_STATE'
        | 'OTHER'
        | 'VULNERABLE_CODE_NOT_IN_USE'
      /** @description A comment by the user. */
      comment?: string
    }
  
    /** @description A snapshot of the risk assessment of a security problem. */
    RiskAssessmentSnapshot: {
      /**
       * Format: int32
       * @description The number of currently affected entities.
       */
      numberOfAffectedEntities?: number
      /**
       * Format: int32
       * @description The number of currently reachable data assets by affected entities.
       */
      numberOfReachableDataAssets?: number
      /**
       * @description The availability status of public exploits.
       * @enum {string}
       */
      publicExploit?: 'AVAILABLE' | 'NOT_AVAILABLE'
      /**
       * @description The level of exposure of affected entities.
       * @enum {string}
       */
      exposure?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'PUBLIC_NETWORK'
    }
  
    /** @description The event of a security problem. */
    SecurityProblemEvent: {
      /**
       * Format: int64
       * @description The timestamp when the event occurred.
       */
      timestamp?: number
      /**
       * @description The reason of the event creation.
       * @enum {string}
       */
      reason?:
        | 'SECURITY_PROBLEM_CREATED'
        | 'SECURITY_PROBLEM_MUTED'
        | 'SECURITY_PROBLEM_REOPENED'
        | 'SECURITY_PROBLEM_RESOLVED'
        | 'SECURITY_PROBLEM_UNMUTED'
      riskAssessmentSnapshot?: OASSchemas['RiskAssessmentSnapshot']
      muteState?: OASSchemas['MuteState']
    }
  
    /** @description Assessment of the remediation item. */
    RemediationAssessment: {
      /**
       * @description The level of exposure of affected entities.
       * @enum {string}
       */
      exposure?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'PUBLIC_NETWORK'
      /**
       * @description The reachability of related data assets by affected entities.
       * @enum {string}
       */
      dataAssets?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'REACHABLE'
      /**
       * @description The usage of vulnerable functions
       * @enum {string}
       */
      vulnerableFunctionUsage?: 'IN_USE' | 'NOT_AVAILABLE' | 'NOT_IN_USE'
      /** @description The vulnerable functions in use. */
      vulnerableFunctionsInUse?: OASSchemas['VulnerableFunction'][]
      /** @description The vulnerable functions not in use. */
      vulnerableFunctionsNotInUse?: OASSchemas['VulnerableFunction'][]
      /** @description The vulnerable functions not available. */
      vulnerableFunctionsNotAvailable?: OASSchemas['VulnerableFunction'][]
    }
  
    /** @description Context of a possible remediation for a security problem. */
    RemediationItem: {
      /** @description The ID of the remediation item. */
      id?: string
      /** @description The IDs that represent the related entity. */
      entityIds?: string[]
      /** @description The name of the entity. */
      name?: string
      /**
       * Format: int64
       * @description The timestamp when the entity has first been related to the vulnerability.
       */
      firstAffectedTimestamp?: number
      assessment?: OASSchemas['RemediationAssessment']
      /**
       * Format: int64
       * @description The timestamp when the vulnerability has been resolved for the related entity.
       */
      resolvedTimestamp?: number
      /**
       * @description The current state of the entity regarding the related vulnerability.
       * @enum {string}
       */
      vulnerabilityState?: 'RESOLVED' | 'VULNERABLE'
      muteState?: OASSchemas['RemediationItemMuteStateDto']
      /**
       * @description A list of vulnerable components of the remediation item.
       *
       * A vulnerable component is what causes the security problem.
       */
      vulnerableComponents?: OASSchemas['VulnerableComponent'][]
      remediationProgress?: OASSchemas['RemediationProgressDto']
    }
  
    /** @description A list of remediation items. */
    RemediationItemList: {
      /** @description A list of remediation items. */
      remediationItems?: OASSchemas['RemediationItem'][]
    }
  
    /** @description Information about the mute state of a remediation item of a security problem. */
    RemediationItemMuteStateDto: {
      /** @description Whether the remediation item is currently muted. */
      muted?: boolean
      /** @description The user who last changed the mute state. */
      user?: string
      /**
       * Format: int64
       * @description The timestamp when the mute state was last updated.
       */
      lastUpdatedTimestamp?: number
      /**
       * @description The reason provided with the most recent mute state change.
       * @enum {string}
       */
      reason?:
        | 'AFFECTED'
        | 'CONFIGURATION_NOT_AFFECTED'
        | 'FALSE_POSITIVE'
        | 'IGNORE'
        | 'INITIAL_STATE'
        | 'OTHER'
        | 'VULNERABLE_CODE_NOT_IN_USE'
      /** @description The optional comment provided with the most recent mute state change. */
      comment?: string
    }
  
    /** @description Remediation progress of this remediation item, containing affected and unaffected entities. */
    RemediationProgressDto: {
      /** @description Entities related to the remediation item, that are affected by the security problem. */
      affectedEntities?: string[]
      /** @description Entities related to the remediation item, that are not affected by the security problem. */
      unaffectedEntities?: string[]
    }
  
    /** @description Vulnerable component of a security problem. */
    VulnerableComponent: {
      /** @description The Dynatrace entity ID of the vulnerable component. */
      id?: string
      /** @description The display name of the vulnerable component. */
      displayName?: string
      /** @description The file name of the vulnerable component. */
      fileName?: string
      /**
       * Format: int32
       * @description The number of affected entities.
       */
      numberOfAffectedEntities?: number
      /** @description The list of affected entities. */
      affectedEntities?: string[]
    }
  
    /** @description Defines an vulnerable function. */
    VulnerableFunction: {
      /** @description The class name of the vulnerable function. */
      className?: string
      /** @description The file path of the vulnerable function. */
      filePath?: string
      /** @description The function name of the vulnerable function. */
      functionName?: string
    }
  
    /** @description Related container image of a security problem. */
    RelatedContainerImage: {
      /** @description The image ID of the related container image. */
      imageId?: string
      /** @description The image name of the related container image. */
      imageName?: string
      /**
       * Format: int32
       * @description The number of affected entities.
       */
      numberOfAffectedEntities?: number
      /** @description A list of affected entities. */
      affectedEntities?: string[]
    }
  
    /**
     * @description A list of related entities of the security problem.
     *
     * A related entity is a monitored entity that is directly or indirectly related to an *affected entity* (for example, it could be a host where an affected process runs).
     *
     * Each related entity contains a list of corresponding affected entities (for example, an affected process running on this host).
     */
    RelatedEntitiesList: {
      /** @description A list of related applications. */
      applications?: OASSchemas['RelatedEntity'][]
      /** @description A list of related services. */
      services?: OASSchemas['RelatedService'][]
      /** @description A list of related hosts. */
      hosts?: OASSchemas['RelatedEntity'][]
      /** @description A list of related databases. */
      databases?: string[]
      /** @description A list of related Kubernetes workloads. */
      kubernetesWorkloads?: OASSchemas['RelatedEntity'][]
      /** @description A list of related Kubernetes clusters. */
      kubernetesClusters?: OASSchemas['RelatedEntity'][]
    }
  
    /** @description An entity related to a security problem. */
    RelatedEntity: {
      /** @description The Dynatrace entity ID of the entity. */
      id?: string
      /**
       * Format: int64
       * @description The number of affected entities related to the entity.
       */
      numberOfAffectedEntities?: number
      /** @description A list of affected entities related to the entity. */
      affectedEntities?: string[]
    }
  
    /** @description A service related to a security problem. */
    RelatedService: {
      /** @description The Dynatrace entity ID of the entity. */
      id?: string
      /**
       * Format: int64
       * @description The number of affected entities related to the entity.
       */
      numberOfAffectedEntities?: number
      /** @description A list of affected entities related to the entity. */
      affectedEntities?: string[]
      /**
       * @description The level of exposure of the service.
       * @enum {string}
       */
      exposure?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'PUBLIC_NETWORK'
    }
  
    /** @description Risk assessment of a security problem. */
    RiskAssessment: {
      /**
       * @description The Davis risk level.
       *
       *  It is calculated by Dynatrace on the basis of CVSS score.
       * @enum {string}
       */
      riskLevel?: 'CRITICAL' | 'HIGH' | 'LOW' | 'MEDIUM' | 'NONE'
      /**
       * Format: float
       * @description The Davis risk score (1-10).
       *
       *  It is calculated by Dynatrace on the basis of CVSS score.
       */
      riskScore?: number
      /** @description The attack vector calculated by DT based on the CVSS attack vector. */
      riskVector?: string
      /**
       * @description The risk level from the CVSS score.
       * @enum {string}
       */
      baseRiskLevel?: 'CRITICAL' | 'HIGH' | 'LOW' | 'MEDIUM' | 'NONE'
      /**
       * Format: float
       * @description The risk score (1-10) from the CVSS score.
       */
      baseRiskScore?: number
      /** @description The original attack vector of the CVSS assessment. */
      baseRiskVector?: string
      /**
       * @description The level of exposure of affected entities.
       * @enum {string}
       */
      exposure?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'PUBLIC_NETWORK'
      /**
       * @description The reachability of related data assets by affected entities.
       * @enum {string}
       */
      dataAssets?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'REACHABLE'
      /**
       * @description The availability status of public exploits.
       * @enum {string}
       */
      publicExploit?: 'AVAILABLE' | 'NOT_AVAILABLE'
    }
  
    /** @description Parameters of a security problem */
    SecurityProblemDetails: {
      /** @description The ID of the security problem. */
      securityProblemId?: string
      /** @description The displayId of the security problem. */
      displayId?: string
      /**
       * @description The status of the security problem.
       * @enum {string}
       */
      status?: 'OPEN' | 'RESOLVED'
      /** @description Indicates if a security problem is muted. */
      muted?: boolean
      /** @description The external vulnerability ID of the security problem. */
      externalVulnerabilityId?: string
      /**
       * @description The type of the vulnerability.
       * @enum {string}
       */
      vulnerabilityType?: 'RUNTIME' | 'THIRD_PARTY'
      /** @description The title of the security problem. */
      title?: string
      /** @description The package name of the security problem. */
      packageName?: string
      /** @description The URL to the security problem details page. */
      url?: string
      /** @description The description of the security problem. */
      description?: string
      /**
       * @description The technology of the security problem.
       * @enum {string}
       */
      technology?: 'DOTNET' | 'JAVA' | 'KUBERNETES' | 'NODE_JS' | 'PHP'
      /**
       * Format: int64
       * @description The timestamp of the first occurrence of the security problem.
       */
      firstSeenTimestamp?: number
      /**
       * Format: int64
       * @description The timestamp of the most recent security problem change.
       */
      lastUpdatedTimestamp?: number
      riskAssessment?: OASSchemas['RiskAssessment']
      /** @description Management zones to which the affected entities belong. */
      managementZones?: OASSchemas['ManagementZone'][]
      /** @description CVE IDs of the security problem. */
      cveIds?: string[]
      /** @description An ordered (newest first) list of events of the security problem. */
      events?: OASSchemas['SecurityProblemEvent'][]
      /**
       * @description A list of vulnerable components of the security problem.
       *
       * A vulnerable component is what causes the security problem.
       */
      vulnerableComponents?: OASSchemas['VulnerableComponent'][]
      /**
       * @description A list of affected entities of the security problem.
       *
       * An affected entity is an entity where a vulnerable component runs.
       */
      affectedEntities?: string[]
      /**
       * @description A list of exposed entities of the security problem.
       *
       * An exposed entity is an affected entity that is exposed to the internet.
       */
      exposedEntities?: string[]
      /**
       * @description A list of data assets reachable by affected entities of the security problem.
       *
       * A data asset is a service that has database access.
       */
      reachableDataAssets?: string[]
      relatedEntities?: OASSchemas['RelatedEntitiesList']
      /**
       * @description A list of related container images of the security problem.
       *
       * A related container image is a container image that contains at least one *affected entity*.
       */
      relatedContainerImages?: {
        /** @description A list of related container images. */
        containerImages?: OASSchemas['RelatedContainerImage'][]
      }[]
      /** @description If `true` a change of the mute state is in progress. */
      muteStateChangeInProgress?: boolean
    }
  
    /** @description A list of security problems. */
    SecurityProblemList: {
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /** @description A list of security problems. */
      securityProblems?: OASSchemas['SecurityProblem'][]
    }
  
    /** @description Information on muting a security problem. */
    Mute: {
      /**
       * @description The reason for muting a security problem.
       * @enum {string}
       */
      reason:
        | 'CONFIGURATION_NOT_AFFECTED'
        | 'FALSE_POSITIVE'
        | 'IGNORE'
        | 'OTHER'
        | 'VULNERABLE_CODE_NOT_IN_USE'
      /** @description A comment about the muting reason. */
      comment: string
    }
  
    /** @description Information about how a mute state of a remediation item should be changed. */
    RemediationItemMuteStateChangeDto: {
      /** @description The desired mute state of the remediation item */
      muted: boolean
      /**
       * @description The reason for the mute state change.
       * @enum {string}
       */
      reason:
        | 'AFFECTED'
        | 'CONFIGURATION_NOT_AFFECTED'
        | 'FALSE_POSITIVE'
        | 'IGNORE'
        | 'INITIAL_STATE'
        | 'OTHER'
        | 'VULNERABLE_CODE_NOT_IN_USE'
      /** @description A comment about the mute state change reason. */
      comment: string
    }
  
    /** @description Information on un-muting a security problem. */
    Unmute: {
      /**
       * @description The reason for un-muting a security problem.
       * @enum {string}
       */
      reason: 'AFFECTED' | 'INITIAL_STATE'
      /** @description A comment about the un-muting reason. */
      comment: string
    }
  
    ExtensionEnvironmentConfigurationVersion: {
      /**
       * @description Extension version
       * @example 1.2.3
       */
      version: string
    }
  
    MonitoringConfigurationResponse: {
      /**
       * @description The identifier of the new configuration
       * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
       */
      objectId?: string
      /**
       * Format: int32
       * @description The HTTP Status code
       */
      code?: number
    }
  
    /** @description The monitoring configuration */
    JsonNode: { [key: string]: unknown }
  
    MonitoringConfigurationDto: {
      /**
       * @description The scope this monitoring configuration will be defined for
       * @example HOST-D3A3C5A146830A79
       */
      scope: string
      value?: OASSchemas['JsonNode']
    }
  
    /** @description A constraint on the values accepted for a complex settings property. */
    ComplexConstraint: {
      /**
       * @description The ID of a custom validator.
       * @example my-min-max
       */
      customValidatorId?: string
      /**
       * Format: int32
       * @description The minimum number of properties that must be set.
       * @example 1
       */
      minimumPropertyCount?: number
      /**
       * Format: int32
       * @description The maximum number of properties that can be set.
       * @example 2
       */
      maximumPropertyCount?: number
      /** @description A custom message for invalid values. */
      customMessage?: string
      /** @description A list of properties (defined by IDs) that are used to check the constraint. */
      properties?: string[]
      /**
       * @description The type of the constraint.
       * @enum {string}
       */
      type?:
        | 'CUSTOM_VALIDATOR_REF'
        | 'GREATER_THAN'
        | 'GREATER_THAN_OR_EQUAL'
        | 'LESS_THAN'
        | 'LESS_THAN_OR_EQUAL'
        | 'PROPERTY_COUNT_RANGE'
        | 'UNKNOWN'
    }
  
    /** @description A constraint on the values accepted for a settings property. */
    Constraint: {
      /**
       * Format: int32
       * @description The maximum allowed length of string values.
       * @example 20
       */
      maxLength?: number
      /**
       * Format: int32
       * @description The minimum required length of string values.
       * @example 7
       */
      minLength?: number
      /**
       * @description A list of properties for which the combination of values must be unique.
       * @example [
       *   "my-prop-1",
       *   "my-prop-2"
       * ]
       */
      uniqueProperties?: string[]
      /**
       * @description The ID of a custom validator.
       * @example my-min-max
       */
      customValidatorId?: string
      /**
       * @description A custom message for invalid values.
       * @example customConstraintMessage
       */
      customMessage?: string
      /**
       * @description The minimum allowed value.
       * @example 3
       */
      minimum?: number
      /**
       * @description The type of the constraint.
       * @example UNKNOWN
       * @enum {string}
       */
      type?:
        | 'CUSTOM_VALIDATOR_REF'
        | 'LENGTH'
        | 'NOT_BLANK'
        | 'NOT_EMPTY'
        | 'NO_WHITESPACE'
        | 'PATTERN'
        | 'RANGE'
        | 'REGEX'
        | 'TRIMMED'
        | 'UNIQUE'
        | 'UNKNOWN'
      /**
       * @description The maximum allowed value.
       * @example 200
       */
      maximum?: number
      /**
       * @description The regular expression pattern for valid string values.
       * @example ^([a-z]|[0-9]|\-|\_|\+|\.)+\@([a-z]|[0-9]|-){2,}\.([a-z]|[0-9]|-){2,}(\.[a-z]{2,})?$
       */
      pattern?: string
    }
  
    /** @description Configuration of a datasource for a property. */
    DatasourceDefinition: {
      /** @description The properties to filter the datasource options on. */
      filterProperties?: string[]
      /** @description Whether to validate input to only allow values returned by the datasource. */
      validate?: boolean
      /** @description Whether this datasource expects full setting payload as the context. */
      fullContext?: boolean
      /** @description If true, the datasource should use the api to filter the results instead of client-side filtering. */
      useApiSearch?: boolean
      /**
       * @description When to reset datasource value in the UI on filter change.
       * @enum {string}
       */
      resetValue?: 'ALWAYS' | 'INVALID_ONLY' | 'NEVER'
      /** @description The identifier of a custom data source of the property's value. */
      identifier?: string
    }
  
    /** @description Definition of an enum property. */
    EnumType: {
      /**
       * @description An existing Java enum class that holds the allowed values of the enum.
       * @example enumClass
       */
      enumClass?: string
      /** @description A list of allowed values of the enum. */
      items?: OASSchemas['EnumValue'][]
      /**
       * @description The type of the property.
       * @example enum
       * @enum {string}
       */
      type?: 'enum'
      /**
       * @description An extended description and/or links to documentation.
       * @example typeDocumentation
       */
      documentation?: string
      /**
       * @description The display name of the property.
       * @example typeDisplayName
       */
      displayName?: string
      /**
       * @description A short description of the property.
       * @example typeDescription
       */
      description?: string
    }
  
    /** @description An allowed value for an enum property. */
    EnumValue: {
      /**
       * @description The name of the value in an existing Java enum class.
       * @example exampleJavaEnumValue
       */
      enumInstance?: string
      /**
       * @description The allowed value of the enum.
       * @example exampleValue
       */
      value?: { [key: string]: unknown }
      /**
       * @description The display name of the value.
       * @example exampleDisplayName
       */
      displayName?: string
      /**
       * @description A short description of the value.
       * @example exampleDescription
       */
      description?: string
      /**
       * @description The icon of the value.
       * @example checkmark
       */
      icon?: string
    }
  
    /** @description An item of a collection property. */
    Item: {
      /**
       * @description The type referenced by the item's value.
       * @example itemReferencedType
       */
      referencedType?: string
      /**
       * @description An extended description and/or links to documentation.
       * @example propertyDocumentation
       */
      documentation?: string
      uiCustomization?: OASSchemas['UiCustomization']
      datasource?: OASSchemas['DatasourceDefinition']
      /** @description The type of the item's value. */
      type?: { [key: string]: unknown }
      /**
       * @description The display name of the item.
       * @example itemDisplayName
       */
      displayName?: string
      /**
       * @description A short description of the item.
       * @example itemDescription
       */
      description?: string
      /** @description Metadata of the items. */
      metadata?: { [key: string]: string }
      /** @description A list of constraints limiting the values to be accepted. */
      constraints?: OASSchemas['Constraint'][]
      /**
       * @description The subtype of the item's value.
       * @example itemSubType
       */
      subType?: string
    }
  
    /** @description A precondition for visibility of a property. */
    Precondition: {
      /**
       * @description The expected value of the property.
       *
       * Only applicable to properties of the `EQUALS` type.
       * @example expectedValue
       */
      expectedValue?: { [key: string]: unknown }
      /**
       * @description A list of valid values of the property.
       *
       * Only applicable to properties of the `IN` type.
       * @example expectedValues
       */
      expectedValues?: { [key: string]: unknown }[]
      /**
       * @description A list of child preconditions to be evaluated.
       *
       * Only applicable to properties of the `AND` and `OR` types.
       */
      preconditions?: OASSchemas['Precondition'][]
      precondition?: OASSchemas['Precondition']
      /**
       * @description The property to be evaluated.
       * @example propertyToEvaluate
       */
      property?: string
      /**
       * @description The type of the precondition.
       * @example NULL
       * @enum {string}
       */
      type?: 'AND' | 'EQUALS' | 'IN' | 'NOT' | 'NULL' | 'OR' | 'REGEX_MATCH'
      /**
       * @description The Regular expression which is matched against the property.
       *
       * Only applicable to properties of the `REGEX_MATCH` type.
       * @example example Regex
       */
      pattern?: string
    }
  
    /** @description Configuration of a property in a settings schema. */
    PropertyDefinition: {
      /**
       * @description The type referenced by the property value
       * @example propertyReferencedType
       */
      referencedType?: string
      items?: OASSchemas['Item']
      /**
       * @description An extended description and/or links to documentation.
       * @example propertyDocumentation
       */
      documentation?: string
      /**
       * Format: int32
       * @description The maximum number of **objects** in a collection property.
       *
       *  Has the value of `1` for singletons.
       */
      maxObjects?: number
      uiCustomization?: OASSchemas['UiCustomization']
      /**
       * Format: int32
       * @description The minimum number of **objects** in a collection property.
       * @example 1
       */
      minObjects?: number
      /**
       * @description Modification policy of the property.
       * @example ALWAYS
       * @enum {string}
       */
      modificationPolicy?: 'ALWAYS' | 'DEFAULT' | 'NEVER'
      precondition?: OASSchemas['Precondition']
      datasource?: OASSchemas['DatasourceDefinition']
      /**
       * @description The default value to be used when no value is provided.
       *
       * If a non-singleton has the value of `null`, it means an empty collection.
       * @example propertyDefaultValue
       */
      default?: { [key: string]: unknown }
      /** @description The type of the property's value. */
      type?: { [key: string]: unknown }
      /**
       * @description The display name of the property.
       * @example propertyDisplayName
       */
      displayName?: string
      /**
       * @description A short description of the property.
       * @example propertyDescription
       */
      description?: string
      /** @description Metadata of the property. */
      metadata?: { [key: string]: string }
      /** @description A list of constraints limiting the values to be accepted. */
      constraints?: OASSchemas['Constraint'][]
      /**
       * @description The subtype of the property's value.
       * @example propertySubType
       */
      subType?: string
      /**
       * @description The value can (`true`) or can't (`false`) be `null`.
       * @example true
       */
      nullable?: boolean
    }
  
    SchemaDefinitionRestDto: {
      /**
       * @description The version of the data format.
       * @example 1
       */
      dynatrace?: string
      /**
       * @description The ID of the schema.
       * @example builtin:container.built-in-monitoring-rule
       */
      schemaId?: string
      /**
       * @description The display name of the schema.
       * @example Built-in container monitoring rules
       */
      displayName?: string
      /**
       * @description A short description of the schema.
       * @example Dynatrace disables monitoring of containers that do not run any applications
       */
      description?: string
      /** @description An extended description of the schema and/or links to documentation. */
      documentation?: string
      /**
       * @description Names of the groups, which the schema belongs to.
       * @example [
       *   "group:some.1",
       *   "group:some.2"
       * ]
       */
      schemaGroups?: string[]
      /**
       * @description The version of the schema.
       * @example 1.4.2
       */
      version?: string
      /** @description Multiple (`true`) objects per scope are permitted or a single (`false`) object per scope is permitted. */
      multiObject?: boolean
      /**
       * @description If `true` the order of objects has semantic significance.
       *
       * Only applicable when **multiObject** is set to `true`.
       */
      ordered?: boolean
      /**
       * Format: int32
       * @description The maximum amount of objects per scope.
       *
       * Only applicable when **multiObject** is set to `true`.
       * @example 10
       */
      maxObjects?: number
      /**
       * @description A list of scopes where the schema can be used.
       * @example [
       *   "host",
       *   "application"
       * ]
       */
      allowedScopes?: string[]
      /** @description A list of definitions of enum properties. */
      enums?: { [key: string]: OASSchemas['EnumType'] }
      /**
       * @description A list of definitions of types.
       *
       *  A type is a complex property that contains its own set of subproperties.
       */
      types?: { [key: string]: OASSchemas['SchemaType'] }
      /** @description A list of schema's properties. */
      properties?: {
        [key: string]: OASSchemas['PropertyDefinition']
      }
      /** @description A list of constrains limiting the values to be accepted by the schema. */
      constraints?: OASSchemas['ComplexConstraint'][]
      /** @description Metadata of the setting. */
      metadata?: { [key: string]: string }
      uiCustomization?: OASSchemas['UiCustomization']
    }
  
    /**
     * @description A list of definitions of types.
     *
     *  A type is a complex property that contains its own set of subproperties.
     */
    SchemaType: {
      /**
       * @description The pattern for the summary search(for example, "Alert after *X* minutes.") of the configuration in the UI.
       * @example searchPatternOfType
       */
      searchPattern?: string
      /**
       * @description The pattern for the summary (for example, "Alert after *X* minutes.") of the configuration in the UI.
       * @example summaryPatternOfType
       */
      summaryPattern?: string
      /**
       * @description The version of the type.
       * @example 0
       */
      version?: string
      /**
       * @description A short description of the version.
       * @example Added new property
       */
      versionInfo?: string
      /** @description Definition of properties that can be persisted. */
      properties?: {
        [key: string]: OASSchemas['PropertyDefinition']
      }
      /** @description A list of constraints limiting the values to be accepted. */
      constraints?: OASSchemas['ComplexConstraint'][]
      /**
       * @description An extended description and/or links to documentation.
       * @example typeDocumentation
       */
      documentation?: string
      /**
       * @description The display name of the property.
       * @example typeDisplayName
       */
      displayName?: string
      /**
       * @description A short description of the property.
       * @example typeDescription
       */
      description?: string
    }
  
    /** @description Customization for UI elements */
    UiCustomization: {
      table?: OASSchemas['UiTableCustomization']
    }
  
    /** @description Customization for UI table columns */
    UiTableColumnCustomization: {
      /**
       * @description The referenced property for this column.
       * @example apiColor
       */
      propertyRef?: string
      /**
       * @description The ui specific type for this column.
       * @example cell-color-picker
       */
      type?: string
      /**
       * @description The display name for this column.
       * @example Color
       */
      displayName?: string
    }
  
    /** @description Customization for UI tables */
    UiTableCustomization: {
      /** @description A list of columns for the UI table */
      columns?: OASSchemas['UiTableColumnCustomization'][]
    }
  
    /** @description Extension author */
    AuthorDto: {
      /** @description Author name */
      name?: string
    }
  
    Extension: {
      /** @description Extension name */
      extensionName?: string
      /**
       * @description Extension version
       * @example 1.2.3
       */
      version?: string
      author?: OASSchemas['AuthorDto']
      /** @description Data sources that extension uses to gather data */
      dataSources?: string[]
      /** @description Custom variables used in extension configuration */
      variables?: string[]
      /** @description Available feature sets */
      featureSets?: string[]
      /** @description Details of feature sets */
      featureSetsDetails?: {
        [key: string]: OASSchemas['FeatureSetDetails']
      }
      /** @description Minimal Dynatrace version that works with the extension */
      minDynatraceVersion?: string
      /** @description SHA-256 hash of uploaded Extension file */
      fileHash?: string
    }
  
    /** @description Additional information about a Feature Set */
    FeatureSetDetails: {
      /** @description Feature set metrics */
      metrics?: OASSchemas['MetricDto'][]
    }
  
    /** @description Metric gathered by an extension */
    MetricDto: {
      /** @description Metric key */
      key?: string
    }
  
    ExtensionMonitoringConfiguration: {
      /** @description Configuration id */
      objectId?: string
      /** @description Configuration scope */
      scope?: string
      /** @description Configuration */
      value?: string
    }
  
    ExtensionMonitoringConfigurationsList: {
      /** @description A list of extension monitoring configurations. */
      items?: OASSchemas['ExtensionMonitoringConfiguration'][]
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
    }
  
    /** @description A list of extension events. */
    ExtensionEventDto: {
      /** @description Timestamp of the event */
      timestamp?: string
      /** @description Severity of the event */
      severity?: string
      /** @description Content of the event */
      content?: string
      /**
       * @description Host that uses this monitoring configuration.
       *
       * Example: `HOST-ABCDEF0123456789`
       */
      'dt.entity.host'?: string
      /**
       * @description Hexadecimal ID of Active Gate that uses this monitoring configuration.
       *
       * Example: `0x1a2b3c4d`
       */
      'dt.active_gate.id'?: string
      /**
       * @description Data source that uses this monitoring configuration.
       *
       * Example: `snmp`
       */
      'dt.extension.ds'?: string
      /**
       * @description Status of the event
       * @enum {string}
       */
      status?: 'ERROR' | 'INFO' | 'NONE' | 'WARN'
    }
  
    ExtensionEventsList: {
      /** @description A list of extension events. */
      extensionEvents?: OASSchemas['ExtensionEventDto'][]
    }
  
    ExtensionStatusDto: {
      /**
       * Format: int64
       * @description Timestamp of the latest status of given configuration.
       */
      timestamp?: number
      /** @description Latest status of given configuration. */
      status?: string
    }
  
    ExtensionList: {
      /** @description A list of extensions. */
      extensions?: OASSchemas['MinimalExtension'][]
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
    }
  
    /** @description A list of extensions. */
    MinimalExtension: {
      /** @description Extension name */
      extensionName?: string
      /**
       * @description Extension version
       * @example 1.2.3
       */
      version?: string
    }
  
    SchemaFiles: {
      /** @description A list of schema files. */
      files?: string[]
    }
  
    SchemasList: {
      /** @description A list of schema versions. */
      versions?: string[]
    }
  
    MonitoringConfigurationUpdateDto: {
      value?: OASSchemas['JsonNode']
    }
  
    /** @description The comment to a problem. */
    Comment: {
      /**
       * Format: int64
       * @description The timestamp of comment creation, in UTC milliseconds.
       */
      createdAtTimestamp: number
      /** @description The user who wrote the comment. */
      authorName?: string
      /** @description The context of the comment. */
      context?: string
      /** @description The ID of the comment. */
      id?: string
      /** @description The text of the comment. */
      content?: string
    }
  
    /** @description The result of closing a problem. */
    ProblemCloseResult: {
      /** @description The ID of the problem. */
      problemId: string
      /**
       * Format: int64
       * @description The timestamp when the user triggered the closing.
       */
      closeTimestamp: number
      /** @description True, if the problem is being closed. */
      closing: boolean
      comment?: OASSchemas['Comment']
    }
  
    ProblemCloseRequestDtoImpl: {
      /** @description The text of the closing comment. */
      message: string
    }
  
    CommentRequestDtoImpl: {
      /** @description The text of the comment. */
      message: string
      /** @description The context of the comment. */
      context?: string
    }
  
    /** @description A list of comments. */
    CommentsList: {
      /** @description The result entries. */
      comments: OASSchemas['Comment'][]
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
    }
  
    /** @description Short representation of the alerting profile. */
    AlertingProfileStub: {
      /** @description The name of the alerting profile. */
      name?: string
      /** @description The ID of the alerting profile. */
      id: string
    }
  
    /** @description Analysis of problem impact to an application. */
    ApplicationImpact: OASSchemas['Impact'] & {
      estimatedAffectedUsers: unknown
      impactType: unknown
      impactedEntity: unknown
    }
  
    /**
     * @description The availability evidence of the problem.
     *
     * Indicates an entity that has been unavailable during the problem lifespan and that might be related to the root cause.
     */
    AvailabilityEvidence: OASSchemas['Evidence'] & {
      /**
       * Format: int64
       * @description The end time of the evidence, in UTC milliseconds.
       */
      endTime?: number
    } & {
      displayName: unknown
      endTime: unknown
      entity: unknown
      evidenceType: unknown
      rootCauseRelevant: unknown
      startTime: unknown
    }
  
    /** @description Analysis of problem impact to a custom application. */
    CustomApplicationImpact: OASSchemas['Impact'] & {
      estimatedAffectedUsers: unknown
      impactType: unknown
      impactedEntity: unknown
    }
  
    /**
     * @description The event evidence of the problem.
     *
     * An event that occurred during the problem lifespan that might be related to the root cause.
     */
    EventEvidence: OASSchemas['Evidence'] & {
      /** @description The ID of the event. */
      eventId?: string
      /** @description The type of the event. */
      eventType?: string
      data?: OASSchemas['Event']
      /**
       * Format: int64
       * @description The end timestamp of the event, in UTC milliseconds.
       *
       *  Has `-1` value, if the event is still active.
       */
      endTime?: number
    } & {
      displayName: unknown
      endTime: unknown
      entity: unknown
      eventId: unknown
      eventType: unknown
      evidenceType: unknown
      rootCauseRelevant: unknown
      startTime: unknown
    }
  
    /**
     * @description An evidence of a root cause.
     *
     *  The actual set of fields depends on the type of the evidence. Find the list of actual objects in the description of the **evidenceType** field or see [Problems API v2 - JSON models](https://dt-url.net/we03sp2).
     */
    Evidence: {
      /**
       * @description Defines the actual set of fields depending on the value. See one of the following objects:
       *
       * * `EVENT` -> EventEvidence
       * * `METRIC` -> MetricEvidence
       * * `TRANSACTIONAL` -> TransactionalEvidence
       * * `MAINTENANCE_WINDOW` -> MaintenanceWindowEvidence
       * * `AVAILABILITY_EVIDENCE` -> AvailabilityEvidence
       *
       * @enum {string}
       */
      evidenceType:
        | 'AVAILABILITY_EVIDENCE'
        | 'EVENT'
        | 'MAINTENANCE_WINDOW'
        | 'METRIC'
        | 'TRANSACTIONAL'
      /** @description The display name of the evidence. */
      displayName: string
      entity: OASSchemas['EntityStub']
      groupingEntity?: OASSchemas['EntityStub']
      /** @description The evidence is (`true`) or is not (`false`) a part of the root cause. */
      rootCauseRelevant: boolean
      /**
       * Format: int64
       * @description The start time of the evidence, in UTC milliseconds.
       */
      startTime: number
    }
  
    /** @description The evidence details of a problem. */
    EvidenceDetails: {
      /**
       * Format: int64
       * @description The total number of evidence of a problem.
       */
      totalCount: number
      /** @description A list of all evidence. */
      details: OASSchemas['Evidence'][]
    }
  
    /**
     * @description The impact analysis of the problem on other entities/users.
     *
     *  The actual set of fields depends on the type of the impact. Find the list of actual objects in the description of the **impactType** field or see [Problems API v2 - JSON models](https://dt-url.net/we03sp2).
     */
    Impact: {
      /**
       * @description Defines the actual set of fields depending on the value. See one of the following objects:
       *
       * * `SERVICE` -> ServiceImpact
       * * `APPLICATION` -> ApplicationImpact
       * * `MOBILE` -> MobileImpact
       * * `CUSTOM_APPLICATION` -> CustomApplicationImpact
       *
       * @enum {string}
       */
      impactType: 'APPLICATION' | 'CUSTOM_APPLICATION' | 'MOBILE' | 'SERVICE'
      impactedEntity: OASSchemas['EntityStub']
      /**
       * Format: int64
       * @description The estimated number of affected users.
       */
      estimatedAffectedUsers: number
    }
  
    /** @description A list of all impacts of the problem. */
    ImpactAnalysis: {
      /** @description A list of all impacts of the problem. */
      impacts: OASSchemas['Impact'][]
    }
  
    /** @description The properties of the linked problem. */
    LinkedProblem: {
      /** @description The ID of the problem. */
      problemId: string
      /** @description The display ID of the problem. */
      displayId: string
    }
  
    /**
     * @description The  maintenance window evidence of the problem.
     *
     * The maintenance window during which the problem occurred.
     */
    MaintenanceWindowEvidence: OASSchemas['Evidence'] & {
      /** @description The ID of the related maintenance window. */
      maintenanceWindowConfigId?: string
      /**
       * Format: int64
       * @description The end time of the evidence, in UTC milliseconds.
       */
      endTime?: number
    } & {
      displayName: unknown
      endTime: unknown
      entity: unknown
      evidenceType: unknown
      maintenanceWindowConfigId: unknown
      rootCauseRelevant: unknown
      startTime: unknown
    }
  
    /**
     * @description The metric evidence of the problem.
     *
     * A change of metric behavior that indicates the problem and/or is its root cause.
     */
    MetricEvidence: OASSchemas['Evidence'] & {
      /** @description The ID of the metric. */
      metricId?: string
      /**
       * Format: float
       * @description The metric's value before the problem start.
       */
      valueBeforeChangePoint?: number
      /**
       * Format: float
       * @description The metric's value after the problem start.
       */
      valueAfterChangePoint?: number
      /**
       * Format: int64
       * @description The end time of the evidence, in UTC milliseconds.
       *
       * The value `null` indicates that the evidence is still open.
       */
      endTime?: number
      /**
       * @description The unit of the metric.
       * @enum {string}
       */
      unit?:
        | 'Bit'
        | 'BitPerHour'
        | 'BitPerMinute'
        | 'BitPerSecond'
        | 'Byte'
        | 'BytePerHour'
        | 'BytePerMinute'
        | 'BytePerSecond'
        | 'Cores'
        | 'Count'
        | 'Day'
        | 'DecibelMilliWatt'
        | 'GibiByte'
        | 'Giga'
        | 'GigaByte'
        | 'Hour'
        | 'KibiByte'
        | 'KibiBytePerHour'
        | 'KibiBytePerMinute'
        | 'KibiBytePerSecond'
        | 'Kilo'
        | 'KiloByte'
        | 'KiloBytePerHour'
        | 'KiloBytePerMinute'
        | 'KiloBytePerSecond'
        | 'MSU'
        | 'MebiByte'
        | 'MebiBytePerHour'
        | 'MebiBytePerMinute'
        | 'MebiBytePerSecond'
        | 'Mega'
        | 'MegaByte'
        | 'MegaBytePerHour'
        | 'MegaBytePerMinute'
        | 'MegaBytePerSecond'
        | 'MicroSecond'
        | 'MilliCores'
        | 'MilliSecond'
        | 'MilliSecondPerMinute'
        | 'Minute'
        | 'Month'
        | 'NanoSecond'
        | 'NanoSecondPerMinute'
        | 'NotApplicable'
        | 'PerHour'
        | 'PerMinute'
        | 'PerSecond'
        | 'Percent'
        | 'Pixel'
        | 'Promille'
        | 'Ratio'
        | 'Second'
        | 'State'
        | 'Unspecified'
        | 'Week'
        | 'Year'
    } & {
      displayName: unknown
      endTime: unknown
      entity: unknown
      evidenceType: unknown
      metricId: unknown
      rootCauseRelevant: unknown
      startTime: unknown
      unit: unknown
      valueAfterChangePoint: unknown
      valueBeforeChangePoint: unknown
    }
  
    /** @description Analysis of problem impact to a mobile application. */
    MobileImpact: OASSchemas['Impact'] & {
      estimatedAffectedUsers: unknown
      impactType: unknown
      impactedEntity: unknown
    }
  
    /** @description The properties of a problem. */
    Problem: {
      /** @description The ID of the problem. */
      problemId: string
      /**
       * @description The impact level of the problem. It shows what is affected by the problem.
       * @enum {string}
       */
      impactLevel: 'APPLICATION' | 'ENVIRONMENT' | 'INFRASTRUCTURE' | 'SERVICES'
      /** @description The display ID of the problem. */
      displayId: string
      /** @description A list of all management zones that the problem belongs to. */
      managementZones: OASSchemas['ManagementZone'][]
      /** @description A list of all entities that are affected by the problem. */
      affectedEntities: OASSchemas['EntityStub'][]
      evidenceDetails?: OASSchemas['EvidenceDetails']
      recentComments?: OASSchemas['CommentsList']
      impactAnalysis?: OASSchemas['ImpactAnalysis']
      linkedProblemInfo?: OASSchemas['LinkedProblem']
      /** @description A list of alerting profiles that match the problem. */
      problemFilters: OASSchemas['AlertingProfileStub'][]
      /** @description A list of all entities that are impacted by the problem. */
      impactedEntities: OASSchemas['EntityStub'][]
      rootCauseEntity?: OASSchemas['EntityStub']
      /**
       * @description The severity of the problem.
       * @enum {string}
       */
      severityLevel:
        | 'AVAILABILITY'
        | 'CUSTOM_ALERT'
        | 'ERROR'
        | 'INFO'
        | 'MONITORING_UNAVAILABLE'
        | 'PERFORMANCE'
        | 'RESOURCE_CONTENTION'
      /**
       * @description The status of the problem.
       * @enum {string}
       */
      status: 'CLOSED' | 'OPEN'
      /** @description A list of all entity tags of the problem. */
      entityTags?: OASSchemas['METag'][]
      /**
       * Format: int64
       * @description The start timestamp of the problem, in UTC milliseconds.
       */
      startTime: number
      /**
       * Format: int64
       * @description The end timestamp of the problem, in UTC milliseconds.
       *
       *  Has `-1` value, if the problem is still open.
       */
      endTime: number
      /** @description The name of the problem, displayed in the UI. */
      title: string
    }
  
    /** @description Analysis of problem impact to a service. */
    ServiceImpact: OASSchemas['Impact'] & {
      /**
       * Format: int64
       * @description The number of potentially impacted services.
       */
      numberOfPotentiallyAffectedServiceCalls?: number
    } & {
      estimatedAffectedUsers: unknown
      impactType: unknown
      impactedEntity: unknown
      numberOfPotentiallyAffectedServiceCalls: unknown
    }
  
    /**
     * @description The transactional evidence of the problem.
     *
     * A behavior of a metric in an transaction that indicates the problem and/or is its root cause.
     */
    TransactionalEvidence: OASSchemas['Evidence'] & {
      /**
       * Format: float
       * @description The metric's value before the problem start.
       */
      valueBeforeChangePoint?: number
      /**
       * Format: float
       * @description The metric's value after the problem start.
       */
      valueAfterChangePoint?: number
      /**
       * Format: int64
       * @description The end time of the evidence, in UTC milliseconds
       */
      endTime?: number
      /** @description The unit of the metric. */
      unit?: string
    } & {
      displayName: unknown
      endTime: unknown
      entity: unknown
      evidenceType: unknown
      rootCauseRelevant: unknown
      startTime: unknown
      unit: unknown
      valueAfterChangePoint: unknown
      valueBeforeChangePoint: unknown
    }
  
    /** @description A list of problems. */
    Problems: {
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /** @description The result entries. */
      problems: OASSchemas['Problem'][]
      /** @description A list of warnings */
      warnings?: string[]
    }
  
    Success: {
      /** @description Detailed message */
      message?: string
      /**
       * Format: int32
       * @description The HTTP status code
       */
      code?: number
    }
  
    SuccessEnvelope: {
      details?: OASSchemas['Success']
    }
  
    /**
     * @description The log message in JSON format. Use one object representing a single event or an array of objects representing multiple events.
     *
     * The object might contain the following types of keys (the possible key values are listed below):
     *
     * * Timestamp.  The following formats are supported: UTC milliseconds, RFC3339, and RFC3164. If not set, the current timestamp is used.
     * * Severity. If not set, `NONE` is used.
     * * Content. If the content key is not set, the whole JSON is parsed as the content.
     * * Semantic attribute. Only values of the `String` type are supported. Semantic attributes are indexed and can be used in queries. These are also displayed in aggregations (facets). If an unsupported key occurs it is not indexed and cannot be used in indexing and aggregations.
     *
     * The object value can be a single constant or, in case of semantic attribute, an array of constants. The length of the value is limited. Any content exceeding the limit is trimmed. Default limits:
     *
     * * Content: 8,192 characters.
     * * Semantic attribute: 250 characters per value, up to 32 attribute values
     *
     * Supported timestamp keys:
     *  * @timestamp
     *  * Timestamp
     *  * _timestamp
     *  * date
     *  * eventTime
     *  * published_date
     *  * syslog.timestamp
     *  * timestamp
     *
     * Supported content keys:
     *  * body
     *  * content
     *  * message
     *  * payload
     *
     * Supported severity keys:
     *  * level
     *  * loglevel
     *  * severity
     *  * status
     *  * syslog.severity
     *
     * Supported semantic attribute keys:
     *  * audit.action
     *  * audit.identity
     *  * audit.result
     *  * aws.account.id
     *  * aws.arn
     *  * aws.log_group
     *  * aws.log_stream
     *  * aws.region
     *  * aws.resource.id
     *  * aws.resource.type
     *  * aws.service
     *  * azure.location
     *  * azure.resource.group
     *  * azure.resource.id
     *  * azure.resource.name
     *  * azure.resource.type
     *  * azure.subscription
     *  * cloud.account.id
     *  * cloud.availability_zone
     *  * cloud.provider
     *  * cloud.region
     *  * container.image.name
     *  * container.image.tag
     *  * container.name
     *  * db.cassandra.keyspace
     *  * db.connection_string
     *  * db.hbase.namespace
     *  * db.jdbc.driver_classname
     *  * db.mongodb.collection
     *  * db.mssql.instance_name
     *  * db.name
     *  * db.operation
     *  * db.redis.database_index
     *  * db.statement
     *  * db.system
     *  * db.user
     *  * dt.active_gate.group.name
     *  * dt.active_gate.id
     *  * dt.code.filepath
     *  * dt.code.func
     *  * dt.code.lineno
     *  * dt.code.ns
     *  * dt.ctg.calltype
     *  * dt.ctg.extendmode
     *  * dt.ctg.gatewayurl
     *  * dt.ctg.program
     *  * dt.ctg.rc
     *  * dt.ctg.requesttype
     *  * dt.ctg.serverid
     *  * dt.ctg.termid
     *  * dt.ctg.transid
     *  * dt.ctg.userid
     *  * dt.entity.cloud_application
     *  * dt.entity.cloud_application_instance
     *  * dt.entity.cloud_application_namespace
     *  * dt.entity.container_group
     *  * dt.entity.container_group_instance
     *  * dt.entity.custom_device
     *  * dt.entity.host
     *  * dt.entity.kubernetes_cluster
     *  * dt.entity.kubernetes_node
     *  * dt.entity.process_group
     *  * dt.entity.process_group_instance
     *  * dt.event.group_label
     *  * dt.event.key
     *  * dt.events.root_cause_relevant
     *  * dt.exception.messages
     *  * dt.exception.serialized_stacktraces
     *  * dt.exception.types
     *  * dt.extension.config.id
     *  * dt.extension.ds
     *  * dt.extension.name
     *  * dt.extension.status
     *  * dt.host.ip
     *  * dt.host.smfid
     *  * dt.host.snaid
     *  * dt.host_group.id
     *  * dt.http.application_id
     *  * dt.http.context_root
     *  * dt.kubernetes.cluster.id
     *  * dt.kubernetes.cluster.name
     *  * dt.kubernetes.config.id
     *  * dt.kubernetes.event.involved_object.kind
     *  * dt.kubernetes.event.involved_object.name
     *  * dt.kubernetes.event.reason
     *  * dt.kubernetes.node.name
     *  * dt.kubernetes.node.system_uuid
     *  * dt.kubernetes.topmost_controller.kind
     *  * dt.kubernetes.workload.kind
     *  * dt.kubernetes.workload.name
     *  * dt.network_zone.id
     *  * dt.os.description
     *  * dt.os.type
     *  * dt.process.commandline
     *  * dt.process.executable
     *  * dt.process.name
     *  * dt.source_entity
     *  * dt.source_entity_name
     *  * dt.source_entity_type
     *  * faas.id
     *  * faas.instance
     *  * faas.name
     *  * faas.version
     *  * gcp.instance.id
     *  * gcp.instance.name
     *  * gcp.project.id
     *  * gcp.region
     *  * gcp.resource.type
     *  * host.hostname
     *  * host.id
     *  * host.image.id
     *  * host.image.name
     *  * host.image.version
     *  * host.name
     *  * host.type
     *  * http.client_ip
     *  * http.flavor
     *  * http.host
     *  * http.method
     *  * http.route
     *  * http.scheme
     *  * http.server_name
     *  * http.status_code
     *  * http.status_text
     *  * http.target
     *  * http.url
     *  * k8s.cluster.name
     *  * k8s.container.name
     *  * k8s.cronjob.name
     *  * k8s.cronjob.uid
     *  * k8s.daemonset.name
     *  * k8s.daemonset.uid
     *  * k8s.deployment.name
     *  * k8s.deployment.uid
     *  * k8s.job.name
     *  * k8s.job.uid
     *  * k8s.namespace.name
     *  * k8s.pod.name
     *  * k8s.pod.uid
     *  * k8s.replicaset.name
     *  * k8s.replicaset.uid
     *  * k8s.statefulset.name
     *  * k8s.statefulset.uid
     *  * log.source
     *  * net.host.ip
     *  * net.host.name
     *  * net.host.port
     *  * net.peer.ip
     *  * net.peer.name
     *  * net.peer.port
     *  * net.transport
     *  * process.technology
     *  * service.instance.id
     *  * service.name
     *  * service.namespace
     *  * service.version
     *  * span_id
     *  * trace_id
     *  * winlog.eventid
     *  * winlog.level
     *  * winlog.opcode
     *  * winlog.provider
     *  * winlog.task
     */
    LogMessageJson: { [key: string]: unknown }
  
    /**
     * @description The log message in plain text.
     *
     * The length of the message is limited to 8,192 characters. Any content exceeding the limit is trimmed.
     */
    LogMessagePlain: { [key: string]: unknown }
  
    /**
     * @description A single log record.
     * @example {
     *   "timestamp": "1631193089000",
     *   "status": "ERROR",
     *   "content": "example log content",
     *   "event.type": "LOG",
     *   "additionalColumns": {
     *     "custom.attribute": [
     *       "value1",
     *       "value2"
     *     ],
     *     "loglevel": [
     *       "SEVERE"
     *     ]
     *   }
     * }
     */
    LogRecord: {
      /** @description Additional columns of the log record. */
      additionalColumns?: { [key: string]: string[] }
      /**
       * @description Type of event
       * @enum {string}
       */
      eventType?: 'K8S' | 'LOG' | 'SFM'
      /**
       * Format: int64
       * @description The timestamp of the log record, in UTC milliseconds.
       */
      timestamp?: number
      /** @description The content of the log record. */
      content?: string
      /**
       * @description The log status (based on the log level).
       * @enum {string}
       */
      status?: 'ERROR' | 'INFO' | 'NONE' | 'WARN'
    }
  
    /**
     * @description Aggregated log records.
     * @example {
     *   "aggregationResult": {
     *     "processId": {
     *       "1597835271": {
     *         "cassandra": "6"
     *       },
     *       "1597835331": {
     *         "apache": "12",
     *         "cassandra": "60"
     *       }
     *     },
     *     "hostId": {
     *       "1597835271": {
     *         "localhost": "12"
     *       },
     *       "1597835331": {
     *         "remotehost": "6"
     *       }
     *     },
     *     "logLevel": {
     *       "1597835271": {
     *         "ERROR": "1",
     *         "INFO": "2"
     *       },
     *       "1597835331": {
     *         "INFO": "17"
     *       }
     *     },
     *     "logPath": {
     *       "1597835271": {
     *         "/var/log/messages": "15",
     *         "/var/log/syslog": "3"
     *       },
     *       "1597835331": {
     *         "/var/log/messages": "15",
     *         "/var/log/syslog": "3"
     *       }
     *     }
     *   }
     * }
     */
    AggregatedLog: {
      /** @description Aggregated log records. */
      aggregationResult?: {
        [key: string]: { [key: string]: { [key: string]: number } }
      }
    }
  
    /**
     * @description A list of retrieved log records.
     * @example {
     *   "results": [
     *     {
     *       "timestamp": "1631193089000",
     *       "status": "ERROR",
     *       "content": "example log content",
     *       "event.type": "LOG",
     *       "additionalColumns": {
     *         "custom.attribute": [
     *           "value1",
     *           "value2"
     *         ],
     *         "loglevel": [
     *           "SEVERE"
     *         ]
     *       }
     *     }
     *   ],
     *   "sliceSize": 100,
     *   "nextSliceKey": "___-2hI03q0AAAAAAAAAAAAAA-gAAAAAAAAH0P____8AAABkAAAACXRpbWVzdGFtcAD___7aEjTerQ"
     * }
     */
    LogRecordsList: {
      /**
       * Format: int64
       * @description The total number of records in a slice.
       */
      sliceSize?: number
      /** @description A list of retrieved log records. */
      results?: OASSchemas['LogRecord'][]
      /** @description The cursor for the next slice of log records. */
      nextSliceKey?: string
    }
  
    /**
     * @description Contains data related to a single release of a component.
     * A Release is a combination of a component and a version.
     * A Component can be any form of deployable that can be associated with a version.
     * In the first draft, a Component is always a Service.
     *
     * The tuple <name, product, stage, version> is always unique.
     */
    Release: {
      /**
       * @description The instances entityIds included in this release
       * @example [
       *   "PROCESS_GROUP_INSTANCE-49D94B90FB71C45B",
       *   "PROCESS_GROUP_INSTANCE-7EA049157C82D1A5"
       * ]
       */
      instances?: OASSchemas['ReleaseInstance'][]
      /**
       * @description The product name
       * @example Sockshop
       */
      product?: string
      /**
       * @description The entity has one or more security vulnerabilities
       * @example true
       */
      affectedBySecurityVulnerabilities?: boolean
      /**
       * Format: double
       * @description The count of bytes per second of the entity
       * @example 923234
       */
      throughput?: number
      /**
       * @description The entity id of correlating release.
       * @example PROCESS_GROUP-DFDBAC9CBF104253
       */
      releaseEntityId?: string
      /**
       * Format: int32
       * @description The number of security vulnerabilities of the entity
       * @example 4
       */
      securityVulnerabilitiesCount?: number
      /**
       * @description The software technologies of the release
       * @example [
       *   {
       *     "technology": "JAVA",
       *     "edition": "OpenJDK",
       *     "version": "1.8.0_242",
       *     "verbatimType": "Java"
       *   }
       * ]
       */
      softwareTechs?: OASSchemas['SoftwareTechs'][]
      /**
       * @description The entity has one or more problems
       * @example true
       */
      affectedByProblems?: boolean
      /**
       * @description Indicates that the security vulnerabilities feature is enabled
       * @example true
       */
      securityVulnerabilitiesEnabled?: boolean
      /**
       * @description The identified release version
       * @example 1.195.34.12341232423-012342
       */
      version?: string
      /**
       * @description The related PGI is still running/monitored
       * @example true
       */
      running?: boolean
      /**
       * @description The entity name
       * @example cluster
       */
      name?: string
      /**
       * Format: int32
       * @description The number of problems of the entity
       * @example 4
       */
      problemCount?: number
      /**
       * @description The stage name
       * @example staging
       */
      stage?: string
    }
  
    /**
     * @description Contains data related to a single instance of a release.
     * An instance is a Process Group Instance and has an optional build version.
     * @example [
     *   "PROCESS_GROUP_INSTANCE-49D94B90FB71C45B",
     *   "PROCESS_GROUP_INSTANCE-7EA049157C82D1A5"
     * ]
     */
    ReleaseInstance: {
      /**
       * @description The build version
       * @example 223005
       */
      buildVersion?: string
      /**
       * @description The entity id of the instance.
       * @example PROCESS_GROUP_INSTANCE-DFDBAC9CBF104253
       */
      entityId?: string
      /**
       * @description List of Security vulnerabilities Ids
       * @example [
       *   "SNYK-JAVA-COMFASTERXMLJACKSONCORE-1234567"
       * ]
       */
      securityVulnerabilities?: string[]
      /**
       * @description List of event Ids of open problems
       * @example [
       *   "573177299181554914_1616573184015V2"
       * ]
       */
      problems?: string[]
    }
  
    /** @description A list of releases. */
    Releases: {
      /**
       * Format: int64
       * @description Number of releases with problems.
       */
      releasesWithProblems?: number
      /** @description A list of releases. */
      releases?: OASSchemas['Release'][]
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
    }
  
    /**
     * @description Contains information about the used software technology.
     * @example [
     *   {
     *     "technology": "JAVA",
     *     "edition": "OpenJDK",
     *     "version": "1.8.0_242",
     *     "verbatimType": "Java"
     *   }
     * ]
     */
    SoftwareTechs: {
      /**
       * @description The type of the technology.
       * @example JAVA
       */
      technology?: string
      /**
       * @description The verbatim type of the technology.
       * @example Java
       */
      verbatimType?: string
      /**
       * @description The edition of the technology.
       * @example OpenJDK
       */
      edition?: string
      /**
       * @description The version of the technology.
       * @example 11.0.10
       */
      version?: string
    }
  
    /** @description The response to a creation- or update-request. */
    SettingsObjectResponse: {
      invalidValue?: OASSchemas['SettingsValue']
      /**
       * @description For a successful request, the ID of the created or modified settings object.
       * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
       */
      objectId?: string
      /**
       * Format: int32
       * @description The HTTP status code for the object.
       */
      code?: number
      error?: OASSchemas['Error']
    }
  
    /**
     * @description The value of the setting.
     *
     *  It defines the actual values of settings' parameters.
     *
     * The actual content depends on the object's schema.
     * @example {
     *   "autoMonitoring": true
     * }
     */
    SettingsValue: { [key: string]: unknown }
  
    /** @description A settings object. */
    SettingsObject: {
      /**
       * @description The user (identified by a user ID or a public token ID) who performed that most recent modification.
       * @example john.doe@example.com
       */
      author?: string
      /**
       * @description The update token of the object. You can use it to detect simultaneous modifications by different users.
       *
       * It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update.
       *
       * If omitted on update/deletion, the operation overrides the current value or deletes it without any checks.
       * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
       */
      updateToken?: string
      /**
       * Format: int64
       * @description The timestamp of the last modification.
       */
      modified?: number
      /**
       * @description The version of the schema on which the object is based.
       * @example 1.0.0
       */
      schemaVersion?: string
      /**
       * @description The ID of the settings object.
       * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
       */
      objectId?: string
      /**
       * Format: int64
       * @description The timestamp of the creation.
       */
      created?: number
      /**
       * @description The schema on which the object is based.
       * @example builtin:container.built-in-monitoring-rule
       */
      schemaId?: string
      /**
       * @description The scope that the object targets.
       * @example HOST-D3A3C5A146830A79
       */
      scope?: string
      value?: OASSchemas['SettingsValue']
      /** @description A short summary of settings. */
      summary?: string
    }
  
    /** @description A list of settings objects. */
    ObjectsList: {
      /** @description A list of settings objects. */
      items?: OASSchemas['SettingsObject'][]
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
    }
  
    /** @description Configuration of a new settings object. */
    SettingsObjectCreate: {
      /**
       * @description The position of the new object. The new object will be added after the specified one.
       *
       * If `null`, the new object will be placed in the last position.
       *
       * If set to empty string, the new object will be placed in the first position.
       *
       * Only applicable for objects based on schemas with ordered objects (schema's **ordered** parameter is set to `true`).
       * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
       */
      insertAfter?: string
      /**
       * @description The version of the schema on which the object is based.
       * @example 1.0.0
       */
      schemaVersion?: string
      /**
       * @description The schema on which the object is based.
       * @example builtin:container.built-in-monitoring-rule
       */
      schemaId: string
      /**
       * @description The scope that the object targets.
       *
       * If omitted on creation of a new object and if the schema supports scope generation, the operation will generate a scope from the provided value.
       * @example HOST-D3A3C5A146830A79
       */
      scope?: string
      value: OASSchemas['SettingsValue']
    }
  
    /** @description An update of a settings object. */
    SettingsObjectUpdate: {
      /**
       * @description The update token of the object. You can use it to detect simultaneous modifications by different users.
       *
       * It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update.
       *
       * If omitted on update/deletion, the operation overrides the current value or deletes it without any checks.
       * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
       */
      updateToken?: string
      /**
       * @description The version of the schema on which the object is based.
       * @example 1.0.0
       */
      schemaVersion?: string
      value: OASSchemas['SettingsValue']
    }
  
    /** @description The list of available settings schemas. */
    SchemaList: {
      /** @description A list of settings schemas. */
      items?: OASSchemas['SchemaStub'][]
      /**
       * Format: int64
       * @description The number of schemas in the list.
       * @example 1
       */
      totalCount?: number
    }
  
    /** @description The short representation of the settings schema. */
    SchemaStub: {
      /**
       * @description The most recent version of the schema.
       * @example 1.4.2
       */
      latestSchemaVersion?: string
      /**
       * @description The ID of the schema.
       * @example builtin:container.built-in-monitoring-rule
       */
      schemaId?: string
      /**
       * @description The name of the schema.
       * @example Built-in container monitoring rules
       */
      displayName?: string
    }
  
    /** @description Parameters of a new SLO. */
    SloCreate: {
      /**
       * @description The SLO is enabled (`true`) or disabled (`false`).
       * @example true
       */
      enabled?: boolean
      /**
       * @description The name of the SLO.
       * @example Payment service availability
       */
      name?: string
      /**
       * @description The custom description of the SLO (optional).
       * @example Rate of successful payments per week
       */
      customDescription?: string
      /**
       * @description The percentage-based metric expression for the calculation of the SLO.
       * @example (100)*(builtin:service.errors.server.successCount:splitBy())/(builtin:service.requestCount.server:splitBy())
       */
      metricExpression?: string
      /**
       * @description The evaluation type of the SLO.
       * @example AGGREGATE
       * @enum {string}
       */
      evaluationType?: 'AGGREGATE'
      /**
       * @description The entity filter for the SLO evaluation. Use the [syntax of entity selector](https://dt-url.net/entityselector).
       * @example type("SERVICE")
       */
      filter?: string
      /**
       * Format: double
       * @description The target value of the SLO.
       * @example 95
       */
      target?: number
      /**
       * Format: double
       * @description The warning value of the SLO.
       *
       *  At warning state the SLO is still fulfilled but is getting close to failure.
       * @example 97.5
       */
      warning?: number
      /**
       * @description The timeframe for the SLO evaluation. Use the syntax of the global timeframe selector.
       * @example -1d
       */
      timeframe?: string
      /**
       * @description The type of the metric to use for SLO calculation:
       *
       * * `true`: An existing percentage-based metric.
       * * `false`: A ratio of two metrics.
       *
       * For a list of available metrics, see [Built-in metric page](https://dt-url.net/be03kow) or try the [GET metrics](https://dt-url.net/8e43kxf) API call.
       * @example true
       */
      useRateMetric?: boolean | null
      /**
       * @description The percentage-based metric for the calculation of the SLO.
       *
       * Required when the **useRateMetric** is set to `true`.
       * @example builtin:service.successes.server.rate
       */
      metricRate?: string
      /**
       * @description The metric for the count of successes (the numerator in rate calculation).
       *
       * Required when the **useRateMetric** is set to `false`.
       * @example builtin:service.errors.server.successCount
       */
      metricNumerator?: string
      /**
       * @description The total count metric (the denominator in rate calculation).
       *
       * Required when the **useRateMetric** is set to `false`.
       * @example builtin:service.requestCount.server
       */
      metricDenominator?: string
    }
  
    /** @description Parameters of a service-level objective (SLO). */
    SLO: {
      /**
       * @description The timeframe for the SLO evaluation. Use the syntax of the global timeframe selector.
       * @example -1d
       */
      timeframe?: string
      /**
       * Format: double
       * @deprecated
       * @description The numerator value used to evaluate the SLO when **useRateMetric** is set to `false`.
       * @example 80
       */
      numeratorValue?: number
      /**
       * Format: double
       * @deprecated
       * @description The denominator value used to evaluate the SLO when **useRateMetric** is set to `false`.
       * @example 90
       */
      denominatorValue?: number
      /**
       * @description The entity filter for fetching the number of problems related to an SLO. Auto-generated in case no filter has been added to the SLO.
       * @example type("SERVICE")
       */
      problemFilter?: string
      /**
       * Format: int32
       * @description Number of OPEN problems related to the SLO.
       *
       * Has the value of `-1` if there's an error with fetching SLO related problems.
       */
      relatedOpenProblems?: number
      /**
       * Format: int32
       * @description Total number of problems related to the SLO.
       *
       * Has the value of `-1` if there's an error with fetching SLO related problems.
       */
      relatedTotalProblems?: number
      /**
       * @description The SLO is accessible through the settings if hasAccess is `true`.
       * @example true
       */
      hasAccess?: boolean
      /**
       * Format: double
       * @description The calculated value of the SLO.
       *
       * Has the value of `-1` if there's an error with SLO calculation; in that case check the value of the **error** parameter.
       * @example 96.25
       */
      evaluatedPercentage?: number
      /**
       * Format: double
       * @description The error budget of the calculated SLO.
       *
       * The error budget is the difference between the calculated and target values. A positive number means all is good; a negative number means trouble.
       * @example 1.25
       */
      errorBudget?: number
      /**
       * @description The percentage-based metric expression for the calculation of the SLO.
       * @example (100)*(builtin:service.errors.server.successCount:splitBy())/(builtin:service.requestCount.server:splitBy())
       */
      metricExpression?: string
      /**
       * @deprecated
       * @description The type of the metric to use for SLO calculation:
       *
       * * `true`: An existing percentage-based metric.
       * * `false`: A ratio of two metrics.
       *
       * For a list of available metrics, see [Built-in metric page](https://dt-url.net/be03kow) or try the [GET metrics](https://dt-url.net/8e43kxf) API call.
       * @example true
       */
      useRateMetric?: boolean
      /**
       * @deprecated
       * @description The percentage-based metric for the calculation of the SLO.
       *
       * Required when the **useRateMetric** is set to `true`.
       * @example builtin:service.successes.server.rate
       */
      metricRate?: string
      /**
       * @deprecated
       * @description The metric for the count of successes (the numerator in rate calculation).
       *
       * Required when the **useRateMetric** is set to `false`.
       * @example builtin:service.errors.server.successCount
       */
      metricNumerator?: string
      /**
       * @deprecated
       * @description The total count metric (the denominator in rate calculation).
       *
       * Required when the **useRateMetric** is set to `false`.
       * @example builtin:service.requestCount.server
       */
      metricDenominator?: string
      /**
       * @description The evaluation type of the SLO.
       * @example AGGREGATE
       * @enum {string}
       */
      evaluationType?: 'AGGREGATE'
      /**
       * @description The name of the SLO.
       * @example Payment service availability
       */
      name?: string
      /**
       * Format: uuid
       * @description The ID of the SLO
       * @example 123e4567-e89b-42d3-a456-556642440000
       */
      id?: string
      /**
       * Format: double
       * @description The target value of the SLO.
       * @example 95
       */
      target?: number
      /**
       * @description A short description of the SLO.
       * @example Rate of successful payments per week
       */
      description?: string
      /**
       * @description The entity filter for the SLO evaluation. Use the [syntax of entity selector](https://dt-url.net/entityselector).
       * @example type("SERVICE")
       */
      filter?: string
      /**
       * @description The SLO is enabled (`true`) or disabled (`false`).
       * @example true
       */
      enabled?: boolean
      /**
       * @description The status of the calculated SLO.
       * @example WARNING
       * @enum {string}
       */
      status?: 'FAILURE' | 'SUCCESS' | 'WARNING'
      /**
       * Format: double
       * @description The warning value of the SLO.
       *
       *  At warning state the SLO is still fulfilled but is getting close to failure.
       * @example 97.5
       */
      warning?: number
      /**
       * @description The error of the SLO calculation.
       *
       * If the value differs from `NONE` there's something wrong with the SLO calculation.
       * @example NONE
       */
      error?: string
    }
  
    /** @description A list of SLOs. */
    SLOs: {
      /** @description A list of SLOs. */
      slo?: OASSchemas['SLO'][]
      /**
       * @description The cursor for the next page of results. Has the value of `null` on the last page.
       *
       * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
       * @example AQAAABQBAAAABQ==
       */
      nextPageKey?: string
      /**
       * Format: int32
       * @description The number of entries per page.
       */
      pageSize?: number
      /**
       * Format: int64
       * @description The total number of entries in the result.
       */
      totalCount: number
    }
  
    /** @description A DTO for synthetic configuration. */
    SyntheticConfigDto: {
      /**
       * Format: int64
       * @description bmMonitorTimeout - browser monitor execution timeout (ms)
       */
      bmMonitorTimeout: number
      /**
       * Format: int64
       * @description bmStepTimeout - browser monitor single step execution timeout (ms)
       */
      bmStepTimeout: number
    }
  
    /** @description Results of the execution HTTP monitor's requests at a given location */
    LocationExecutionResults: {
      /** @description Location id. */
      locationId?: string
      /** @description Execution id. */
      executionId?: string
      /** @description The list of the monitor's request results executed on this location. */
      requestResults?: OASSchemas['MonitorRequestExecutionResult'][]
    }
  
    /**
     * @description Results of the execution of all HTTP monitor's requests.
     * @example {
     *   "monitorId": "HTTP_CHECK-12B428F6D37A9197",
     *   "locationsExecutionResults": [
     *     {
     *       "locationId": "7804738439930364165",
     *       "executionId": "6136172183050046113",
     *       "requestResults": [
     *         {
     *           "requestId": "HTTP_CHECK_STEP-53071FC3C4F72E28",
     *           "requestName": "Request name",
     *           "sequenceNumber": 1,
     *           "startTimestamp": 1615806570884,
     *           "engineId": 338502283,
     *           "publicLocation": false,
     *           "url": "https://www.examplePage.com",
     *           "method": "GET",
     *           "requestBody": "",
     *           "requestHeaders": [
     *             {
     *               "name": "User-Agent",
     *               "value": "DynatraceSynthetic/1.215.1"
     *             },
     *             {
     *               "name": "X-Dynatrace-Visit",
     *               "value": "6136172183050046113"
     *             },
     *             {
     *               "name": "X-Dynatrace-Test",
     *               "value": "HTTP_CHECK-12B428F6D37A9197"
     *             }
     *           ],
     *           "responseStatusCode": 200,
     *           "responseBody": "<html><head>Title</head><body>Main Page</body></html>",
     *           "responseSize": 1112,
     *           "responseBodySizeLimitExceeded": false,
     *           "responseHeaders": [
     *             {
     *               "name": "Date",
     *               "value": "Mon, 15 Mar 2021 11:09:30 GMT"
     *             },
     *             {
     *               "name": "Content-Language",
     *               "value": "en"
     *             }
     *           ],
     *           "resolvedIps": [
     *             "80.252.0.145"
     *           ],
     *           "errorCode": 0,
     *           "responseMessage": "OK",
     *           "peerCertificateExpiryDate": 1647302399000,
     *           "peerCertificateDetails": "[Certificate details]",
     *           "totalTime": 238,
     *           "hostNameResolutionTime": 26,
     *           "tcpConnectTime": 15,
     *           "tlsHandshakeTime": 8,
     *           "timeToFirstByte": 96,
     *           "redirectionTime": 70,
     *           "waitingTime": 47,
     *           "redirectsCount": 1,
     *           "failureMessage": ""
     *         }
     *       ]
     *     }
     *   ]
     * }
     */
    MonitorExecutionResults: {
      /** @description Monitor id. */
      monitorId?: string
      /** @description The list with the results of the requests executed on assigned locations. */
      locationsExecutionResults?: OASSchemas['LocationExecutionResults'][]
    }
  
    /** @description A result of the execution HTTP monitor's request. */
    MonitorRequestExecutionResult: {
      /** @description Request id. */
      requestId?: string
      /** @description Request name. */
      requestName?: string
      /**
       * Format: int32
       * @description Request's sequence number.
       */
      sequenceNumber?: number
      /**
       * Format: int64
       * @description Request start timestamp.
       */
      startTimestamp?: number
      /**
       * Format: int64
       * @description VUC's id on which monitor's request was executed.
       */
      engineId?: number
      /** @description Flag informs whether request was executed on public location. */
      publicLocation?: boolean
      /** @description Request URL address. */
      url?: string
      /** @description Request method type. */
      method?: string
      /** @description Request's request body. */
      requestBody?: string
      /** @description A list of request's headers */
      requestHeaders?: OASSchemas['MonitorRequestHeader'][]
      /**
       * Format: int32
       * @description Request's response status code.
       */
      responseStatusCode?: number
      /** @description Request's response body. */
      responseBody?: string
      /**
       * Format: int64
       * @description Request's response size in bytes.
       */
      responseSize?: number
      /** @description A flag indicating that the response payload size limit of 10MB has been exceeded. */
      responseBodySizeLimitExceeded?: boolean
      /** @description A list of request's response headers */
      responseHeaders?: OASSchemas['MonitorRequestHeader'][]
      /** @description Request's resolved ips.' */
      resolvedIps?: string[]
      /**
       * Format: int32
       * @description Request's health status code.
       */
      healthStatusCode?: number
      /** @description Request's health status. */
      healthStatus?: string
      /** @description Request's response message.' */
      responseMessage?: string
      /**
       * Format: int64
       * @description An expiry date of the first SSL certificate from the certificate chain.
       */
      peerCertificateExpiryDate?: number
      /** @description Request's certificate details. */
      peerCertificateDetails?: string
      /**
       * Format: int64
       * @description A total request time measured in ms.
       */
      totalTime?: number
      /**
       * Format: int64
       * @description A hostname resolution time measured in ms.
       */
      hostNameResolutionTime?: number
      /**
       * Format: int64
       * @description A TCP connect time measured in ms.
       */
      tcpConnectTime?: number
      /**
       * Format: int64
       * @description A TLS handshake time measured in ms.
       */
      tlsHandshakeTime?: number
      /**
       * Format: int64
       * @description A time to first byte measured in ms.
       */
      timeToFirstByte?: number
      /**
       * Format: int64
       * @description Total number of milliseconds spent on handling all redirect requests, measured in ms.
       */
      redirectionTime?: number
      /**
       * Format: int64
       * @description Waiting time (time to first byte - (DNS lookup time + TCP connect time + TLS handshake time), measured in ms.
       */
      waitingTime?: number
      /**
       * Format: int32
       * @description Number of request's redirects.
       */
      redirectsCount?: number
      /** @description Request's failure message. */
      failureMessage?: string
    }
  
    /** @description A header of the Http request */
    MonitorRequestHeader: {
      /** @description Header's name. */
      name?: string
      /** @description Header's value. */
      value?: string
    }
  
    /** @description A DTO for synthetic Location IDs. */
    SyntheticLocationIdsDto: {
      /** @description Entity ID to be transferred */
      entityId: string
      /** @description GeoLocation ID to be transferred */
      geoLocationId: string
    }
  
    /**
     * @description Configuration of a private synthetic location.
     *
     *  Some fields are inherited from the base *SyntheticLocation* object.
     * @example {
     *   "type": "PRIVATE",
     *   "name": "Linz Location",
     *   "countryCode": "AT",
     *   "regionCode": "04",
     *   "city": "Linz",
     *   "latitude": 48.306351,
     *   "longitude": 14.287399,
     *   "nodes": [
     *     "93302281"
     *   ],
     *   "status": "ENABLED",
     *   "availabilityLocationOutage": false,
     *   "availabilityNodeOutage": false,
     *   "availabilityLocationNodeOutageDelayInMinutes": 5,
     *   "autoUpdateChromium": true
     * }
     */
    PrivateSyntheticLocation: OASSchemas['SyntheticLocation'] & {
      /**
       * @description A list of synthetic nodes belonging to the location.
       *
       *  You can retrieve the list of available nodes with the [GET all nodes](https://dt-url.net/miy3rpl) call.
       */
      nodes?: string[]
      /** @description The alerting of location outage is enabled (`true`) or disabled (`false`). */
      availabilityLocationOutage?: boolean
      /**
       * @description The alerting of node outage is enabled (`true`) or disabled (`false`).
       *
       *  If enabled, the outage of *any* node in the location triggers an alert.
       */
      availabilityNodeOutage?: boolean
      /**
       * Format: int32
       * @description Alert if the location or node outage lasts longer than *X* minutes.
       *
       *  Only applicable when **availabilityLocationOutage** or **availabilityNodeOutage** is set to `true`.
       */
      locationNodeOutageDelayInMinutes?: number
      /** @description The notifications of location and node outage is enabled (`true`) or disabled (`false`). */
      availabilityNotificationsEnabled?: boolean
      /** @description Auto upgrade of Chromium is enabled (`true`) or disabled (`false`). */
      autoUpdateChromium?: boolean
    } & {
      entityId: unknown
      latitude: unknown
      longitude: unknown
      name: unknown
      nodes: unknown
      type: unknown
    }
  
    /**
     * @description Configuration of a public synthetic location.
     *
     *  Some fields are inherited from the base *SyntheticLocation* object.
     * @example {
     *   "entityId": "SYNTHETIC_LOCATION-95196F3C9A4F4215",
     *   "geoLocationId": "GEOLOCATION-95196F3C9A4F4215",
     *   "type": "PUBLIC",
     *   "name": "Amazon US East",
     *   "countryCode": "US",
     *   "regionCode": "VA",
     *   "city": "Amazon US East (N. Virginia)",
     *   "latitude": 39.0436,
     *   "longitude": -77.4875,
     *   "cloudPlatform": "AMAZON_EC2",
     *   "ips": [
     *     "134.189.153.97",
     *     "134.189.153.98"
     *   ],
     *   "stage": "GA",
     *   "browserType": "Chrome",
     *   "browserVersion": "69.0.3497.81",
     *   "status": "ENABLED",
     *   "capabilities": [
     *     "BROWSER",
     *     "HTTP"
     *   ]
     * }
     */
    PublicSyntheticLocation: OASSchemas['SyntheticLocation'] & {
      /**
       * @description The cloud provider where the location is hosted.
       * @enum {string}
       */
      cloudPlatform?:
        | 'ALIBABA'
        | 'AMAZON_EC2'
        | 'AZURE'
        | 'DYNATRACE_CLOUD'
        | 'GOOGLE_CLOUD'
        | 'INTEROUTE'
        | 'OTHER'
        | 'UNDEFINED'
      /** @description The list of IP addresses assigned to the location. */
      ips?: string[]
      /**
       * @description The stage of the location.
       * @enum {string}
       */
      stage?: 'BETA' | 'COMING_SOON' | 'DELETED' | 'GA'
      /** @description The type of the browser the location is using to execute browser monitors. */
      browserType?: string
      /** @description The version of the browser the location is using to execute browser monitors. */
      browserVersion?: string
      /** @description A list of location capabilities. */
      capabilities?: string[]
    } & {
      browserType: unknown
      browserVersion: unknown
      cloudPlatform: unknown
      entityId: unknown
      ips: unknown
      latitude: unknown
      longitude: unknown
      name: unknown
      stage: unknown
      type: unknown
    }
  
    /**
     * @description Configuration of a synthetic location.
     *
     *  **countryCode**, **regionCode**, **city** parameters are optional as they can be retrieved based on **latitude** and **longitude** of location.
     *
     *  The actual set of fields depends on the type of the location. Find the list of actual objects in the description of the **type** field or see [Synthetic locations API v2 - JSON models](https://dt-url.net/3n43szj).
     */
    SyntheticLocation: {
      /** @description The Dynatrace entity ID of the location. */
      entityId: string
      /**
       * @description Defines the actual set of fields depending on the value. See one of the following objects:
       *
       * * `PUBLIC` -> PublicSyntheticLocation
       * * `PRIVATE` -> PrivateSyntheticLocation
       * * `CLUSTER` -> PrivateSyntheticLocation
       *
       * @enum {string}
       */
      type: 'CLUSTER' | 'PRIVATE' | 'PUBLIC'
      /** @description The name of the location. */
      name: string
      /**
       * @description The country code of the location.
       *
       *  Use the alpha-2 code of the [ISO 3166-2 standard](https://dt-url.net/iso3166-2), (for example, `AT` for Austria or `PL` for Poland).
       */
      countryCode?: string
      /**
       * @description The region code of the location.
       *
       *  For the [USA](https://dt-url.net/iso3166us) or [Canada](https://dt-url.net/iso3166ca) use ISO 3166-2 state codes (without `US-` or `CA-` prefix), for example, `VA` for Virginia or `OR` for Oregon.
       *
       *  For the rest of the world use [FIPS 10-4 codes](https://dt-url.net/fipscodes).
       */
      regionCode?: string
      /** @description The city of the location. */
      city?: string
      /**
       * Format: double
       * @description The latitude of the location in `DDD.dddd` format.
       */
      latitude: number
      /**
       * Format: double
       * @description The longitude of the location in `DDD.dddd` format.
       */
      longitude: number
      /**
       * @description The status of the location:
       *
       * * `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
       * * `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
       * * `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.
       * @enum {string}
       */
      status?: 'DISABLED' | 'ENABLED' | 'HIDDEN'
      /** @description The Dynatrace GeoLocation ID of the location. */
      geoLocationId?: string
    }
  
    /** @description A synthetic location. */
    LocationCollectionElement: {
      /** @description The name of the location. */
      name: string
      /** @description The Dynatrace entity ID of the location. */
      entityId: string
      /**
       * @description The type of the location.
       * @enum {string}
       */
      type: 'CLUSTER' | 'PRIVATE' | 'PUBLIC'
      /**
       * @description The cloud provider where the location is hosted.
       *
       *  Only applicable to `PUBLIC` locations.
       * @enum {string}
       */
      cloudPlatform?:
        | 'ALIBABA'
        | 'AMAZON_EC2'
        | 'AZURE'
        | 'DYNATRACE_CLOUD'
        | 'GOOGLE_CLOUD'
        | 'INTEROUTE'
        | 'OTHER'
        | 'UNDEFINED'
      /**
       * @description The list of IP addresses assigned to the location.
       *
       *  Only applicable to `PUBLIC` locations.
       */
      ips?: string[]
      /**
       * @description The release stage of the location.
       * @enum {string}
       */
      stage?: 'BETA' | 'COMING_SOON' | 'DELETED' | 'GA'
      /**
       * @description The status of the location.
       * @enum {string}
       */
      status?: 'DISABLED' | 'ENABLED' | 'HIDDEN'
      /** @description The Dynatrace GeoLocation ID of the location. */
      geoLocationId: string
    }
  
    /**
     * @description A list of synthetic locations.
     * @example {
     *   "locations": [
     *     {
     *       "name": "Gdansk",
     *       "entityId": "SYNTHETIC_LOCATION-53F47ECB33907667",
     *       "geoLocationId": "GEOLOCATION-95196F3C9A4F4215",
     *       "type": "PUBLIC",
     *       "cloudPlatform": "AMAZON_EC2",
     *       "ips": [
     *         "134.189.153.97",
     *         "134.189.153.98"
     *       ],
     *       "stage": "GA",
     *       "status": "ENABLED",
     *       "capabilities": [
     *         "BROWSER",
     *         "HTTP"
     *       ]
     *     },
     *     {
     *       "name": "My private location",
     *       "entityId": "SYNTHETIC_LOCATION-53F47ECB33907667",
     *       "geoLocationId": "GEOLOCATION-95196F3C9A4F4215",
     *       "type": "PRIVATE",
     *       "status": "ENABLED"
     *     }
     *   ]
     * }
     */
    SyntheticLocations: {
      /** @description A list of synthetic locations. */
      locations: OASSchemas['LocationCollectionElement'][]
    }
  
    /** @description The status of public synthetic locations. */
    SyntheticPublicLocationsStatus: {
      /** @description Synthetic monitors can (`true`) or can't (`false`) run on public synthetic locations. */
      publicLocationsEnabled: boolean
    }
  
    /** @description The synthetic location update. This is a base object, the exact type depends on the value of the `type` field. */
    SyntheticLocationUpdate: {
      /**
       * @description Defines the actual set of fields depending on the value. See one of the following objects:
       *
       * * `PUBLIC` -> SyntheticPublicLocationUpdate
       * * `PRIVATE` -> SyntheticPrivateLocationUpdate
       *
       * @enum {string}
       */
      type: 'PRIVATE' | 'PUBLIC'
    }
  
    /** @description Configuration of a private synthetic location */
    SyntheticPrivateLocationUpdate: OASSchemas['SyntheticLocationUpdate'] & {
      /**
       * @description A list of synthetic nodes belonging to the location.
       *
       *  You can retrieve the list of available nodes with the [GET all nodes](https://dt-url.net/miy3rpl) call.
       */
      nodes?: string[]
      /** @description The name of the location. */
      name?: string
      /**
       * @description The country code of the location.
       *
       *  Use the alpha-2 code of the [ISO 3166-2 standard](https://dt-url.net/iso3166-2), (for example, `AT` for Austria or `PL` for Poland).
       */
      countryCode?: string
      /**
       * @description The region code of the location.
       *
       *  For the [USA](https://dt-url.net/iso3166us) or [Canada](https://dt-url.net/iso3166ca) use ISO 3166-2 state codes (without `US-` or `CA-` prefix), for example, `VA` for Virginia or `OR` for Oregon.
       *
       *  For the rest of the world use [FIPS 10-4 codes](https://dt-url.net/fipscodes).
       */
      regionCode?: string
      /** @description The city of the location. */
      city?: string
      /**
       * Format: double
       * @description The latitude of the location in `DDD.dddd` format.
       */
      latitude?: number
      /**
       * Format: double
       * @description The longitude of the location in `DDD.dddd` format.
       */
      longitude?: number
      /**
       * @description The status of the location:
       *
       * * `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
       * * `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
       * * `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.
       * @enum {string}
       */
      status?: 'DISABLED' | 'ENABLED' | 'HIDDEN'
      /** @description The alerting of location outage is enabled (`true`) or disabled (`false`). */
      availabilityLocationOutage?: boolean
      /**
       * @description The alerting of node outage is enabled (`true`) or disabled (`false`).
       *
       *  If enabled, the outage of *any* node in the location triggers an alert.
       */
      availabilityNodeOutage?: boolean
      /**
       * Format: int32
       * @description Alert if the location or node outage lasts longer than *X* minutes.
       *
       *  Only applicable when **availabilityLocationOutage** or **availabilityNodeOutage** is set to `true`.
       */
      locationNodeOutageDelayInMinutes?: number
      /** @description The notifications of location and node outage is enabled (`true`) or disabled (`false`). */
      availabilityNotificationsEnabled?: boolean
      /** @description Auto upgrade of Chromium is enabled (`true`) or disabled (`false`). */
      autoUpdateChromium?: boolean
    } & {
      latitude: unknown
      longitude: unknown
      name: unknown
      nodes: unknown
      type: unknown
    }
  
    /** @description The update of a public Synthetic location. */
    SyntheticPublicLocationUpdate: OASSchemas['SyntheticLocationUpdate'] & {
      /**
       * @description The status of the location:
       *
       * * `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
       * * `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
       * * `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.
       * @enum {string}
       */
      status?: 'DISABLED' | 'ENABLED' | 'HIDDEN'
    } & {
      status: unknown
      type: unknown
    }
  
    /**
     * @description Configuration of a synthetic node.
     *
     *  A *synthetic node* is an ActiveGate that is able to execute synthetic monitors.
     * @example {
     *   "entityId": "3086117876",
     *   "hostname": "gdn.dyna.trace",
     *   "ips": [
     *     "238.245.160.14"
     *   ],
     *   "version": "1.161.0.20181210-173639",
     *   "browserMonitorsEnabled": true,
     *   "activeGateVersion": "1.172.2.20190607-040913",
     *   "oneAgentRoutingEnabled": true,
     *   "operatingSystem": "Linux",
     *   "autoUpdateEnabled": true,
     *   "status": "Running",
     *   "playerVersion": "1.179.0.20190920-145430",
     *   "healthCheckStatus": "Ok",
     *   "browserType": "Chrome",
     *   "browserVersion": "69.0.3497.81"
     * }
     */
    Node: {
      /** @description The ID of the synthetic node. */
      entityId: string
      /** @description The hostname of the synthetic node. */
      hostname: string
      /** @description The IP of the synthetic node. */
      ips: string[]
      /** @description The version of the synthetic node. */
      version: string
      /** @description The synthetic node is able to execute browser monitors (`true`) or not (`false`). */
      browserMonitorsEnabled: boolean
      /** @description The version of the Active Gate. */
      activeGateVersion: string
      /** @description The Active Gate has the One Agent routing enabled ('true') or not ('false'). */
      'oneAgentRoutingEnabled ': boolean
      /** @description The Active Gate's host operating system. */
      operatingSystem: string
      /** @description The Active Gate has the Auto update option enabled ('true') or not ('false') */
      autoUpdateEnabled: boolean
      /** @description The status of the synthetic node. */
      status: string
      /** @description The version of the synthetic player. */
      playerVersion: string
      /** @description The health check status of the synthetic node. */
      healthCheckStatus: string
      /** @description The browser type. */
      browserType: string
      /** @description The browser version. */
      browserVersion: string
    }
  
    /** @description The short representation of a synthetic object. Only contains the ID and the display name. */
    NodeCollectionElement: {
      /** @description The ID of a node. */
      entityId: string
      /** @description The hostname of a node. */
      hostname: string
      /** @description The IP of a node. */
      ips: string[]
      /** @description The version of a node */
      version: string
      /** @description Browser check capabilities enabled flag. */
      browserMonitorsEnabled: boolean
      /** @description The version of the Active Gate. */
      activeGateVersion: string
      /** @description The Active Gate has the One Agent routing enabled ('true') or not ('false'). */
      'oneAgentRoutingEnabled ': boolean
      /** @description The Active Gate's host operating system. */
      operatingSystem: string
      /** @description The Active Gate has the Auto update option enabled ('true') or not ('false') */
      autoUpdateEnabled: boolean
      /** @description The status of the synthetic node. */
      status: string
      /** @description The version of the synthetic player. */
      playerVersion: string
      /** @description The health check status of the synthetic node. */
      healthCheckStatus: string
    }
  
    /**
     * @description A list of synthetic nodes
     * @example {
     *   "nodes": [
     *     {
     *       "entityId": "3086117876",
     *       "hostname": "gdn.dyna.trace",
     *       "ips": [
     *         "238.245.160.14"
     *       ],
     *       "version": "1.161.0.20181210-173639",
     *       "browserMonitorsEnabled": true,
     *       "activeGateVersion": "1.172.2.20190607-040913",
     *       "oneAgentRoutingEnabled": true,
     *       "operatingSystem": "Linux",
     *       "autoUpdateEnabled": true,
     *       "status": "Running",
     *       "playerVersion": "1.179.0.20190920-145430",
     *       "healthCheckStatus": "Ok"
     *     }
     *   ]
     * }
     */
    Nodes: {
      /** @description A list of synthetic nodes */
      nodes: OASSchemas['NodeCollectionElement'][]
    }
  
    /** @description Tenant token */
    TenantToken: {
      /** @description The secret of the tenant token. */
      value?: string
    }
  
    /** @description Configuration of a [tenant token](https://dt-url.net/b403ss9). */
    TenantTokenConfig: {
      old?: OASSchemas['TenantToken']
      active?: OASSchemas['TenantToken']
    }
  
    /**
     * @description The metadata of a unit.
     * @example {
     *   "unitId": "Second",
     *   "displayName": "second",
     *   "symbol": "s",
     *   "description": "The second is the base unit of time and defined as 1/86400 of a day."
     * }
     */
    Unit: {
      /** @description The ID of the unit. */
      unitId: string
      /** @description The display name of the unit. */
      displayName?: string
      /** @description The symbol of the unit. */
      symbol?: string
      /** @description A short description of the unit. */
      description?: string
    }
  
    /**
     * @description A list of units along with their properties.
     * @example {
     *   "totalCount": 2,
     *   "units": [
     *     {
     *       "unitId": "BytePerSecond",
     *       "displayName": "byte per second",
     *       "symbol": "B/s",
     *       "description": "byte per second"
     *     },
     *     {
     *       "unitId": "BytePerMinute",
     *       "displayName": "byte per minute",
     *       "symbol": "B/min",
     *       "description": "byte per minute"
     *     }
     *   ]
     * }
     */
    UnitList: {
      /**
       * Format: int64
       * @description The total number of units in the result.
       */
      totalCount: number
      /** @description A list of units. */
      units: OASSchemas['Unit'][]
    }
  },

  Operations: {
    getAutoUpdateConfigById: {
      parameters: {
        path: {
          /** The ID of the required ActiveGate. */
          agId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ActiveGateAutoUpdateConfig']
          }
        }
        /** Not found. See response body for details. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    putAutoUpdateConfigById: {
      parameters: {
        path: {
          /** The ID of the required ActiveGate. */
          agId: string
        }
      }
      responses: {
        /** Success. The auto-update configuration have been updated. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** JSON body of the request, containing auto update parameters. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateAutoUpdateConfig']
        }
      }
    }
  
    validateAutoUpdateConfigById: {
      parameters: {
        path: {
          /** The ID of the required ActiveGate. */
          agId: string
        }
      }
      responses: {
        /** Validated. The submitted auto-update configuration is valid. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** JSON body of the request, containing auto update parameters. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateAutoUpdateConfig']
        }
      }
    }
  
    getGlobalAutoUpdateConfigForTenant: {
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ActiveGateGlobalAutoUpdateConfig']
          }
        }
      }
    }
  
    putGlobalAutoUpdateConfigForTenant: {
      responses: {
        /** Success. The global auto-update configuration have been updated. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** JSON body of the request, containing global auto update parameters. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateGlobalAutoUpdateConfig']
        }
      }
    }
  
    validateGlobalAutoUpdateConfigForTenant: {
      responses: {
        /** Validated. The submitted configuration is valid. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** JSON body of the request, containing global auto update parameters. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateGlobalAutoUpdateConfig']
        }
      }
    }
  
    /** The response includes ActiveGates that have both completed (successful and failed) jobs and jobs in progress. */
    getAllUpdateJobList: {
      parameters: {
        query: {
          /**
           * The start of the requested timeframe for update jobs.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of one day is used (`now-1d`).
           *
           * Maximum timeframe is 31 days.
           */
          from?: string
          /**
           * The end of the requested timeframe for update jobs.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * Filters the resulting set of update jobs by the specified initial version.
           *
           *  Specify the comparison operator here.
           */
          startVersionCompareType?: 'EQUAL' | 'GREATER' | 'GREATER_EQUAL' | 'LOWER' | 'LOWER_EQUAL'
          /** Filters the resulting set of update-jobs by the initial version (required format `<major>.<minor>.<revision>`). */
          startVersion?: string
          /** Filters the resulting set of update-jobs by the update type. */
          updateType?: 'ACTIVE_GATE' | 'REMOTE_PLUGIN_AGENT' | 'SYNTHETIC' | 'Z_REMOTE'
          /**
           * Filters the resulting set of update jobs by the specified target version.
           *
           *  Specify the comparison operator here.
           */
          targetVersionCompareType?: 'EQUAL' | 'GREATER' | 'GREATER_EQUAL' | 'LOWER' | 'LOWER_EQUAL'
          /** Filters the resulting set of update-jobs by the target version (required format `<major>.<minor>.<revision>`). */
          targetVersion?: string
          /** If `true`, filters the resulting set of update jobs to the most recent update of each type. */
          lastUpdates?: boolean
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['UpdateJobsAll']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /** The job can update the ActiveGate to the specified version or the latest available one. */
    getUpdateJobListByAgId: {
      parameters: {
        path: {
          /** The ID of the required ActiveGate. */
          agId: string
        }
        query: {
          /**
           * The start of the requested timeframe for update jobs.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of one week is used (`now-1w`).
           *
           * Maximum timeframe is 31 days.
           */
          from?: string
          /**
           * The end of the requested timeframe for update jobs.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * Filters the resulting set of update jobs by the specified initial version.
           *
           *  Specify the comparison operator here.
           */
          startVersionCompareType?: 'EQUAL' | 'GREATER' | 'GREATER_EQUAL' | 'LOWER' | 'LOWER_EQUAL'
          /** Filters the resulting set of update-jobs by the initial version (required format `<major>.<minor>.<revision>`). */
          startVersion?: string
          /** Filters the resulting set of update-jobs by the update type. */
          updateType?: 'ACTIVE_GATE' | 'REMOTE_PLUGIN_AGENT' | 'SYNTHETIC' | 'Z_REMOTE'
          /**
           * Filters the resulting set of update jobs by the specified target version.
           *
           *  Specify the comparison operator here.
           */
          targetVersionCompareType?: 'EQUAL' | 'GREATER' | 'GREATER_EQUAL' | 'LOWER' | 'LOWER_EQUAL'
          /** Filters the resulting set of update-jobs by the target version (required format `<major>.<minor>.<revision>`). */
          targetVersion?: string
          /** If `true`, filters the resulting set of update jobs to the most recent update of each type. */
          lastUpdates?: boolean
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['UpdateJobList']
          }
        }
        /** Not found. See response body for details. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    createUpdateJobForAg: {
      parameters: {
        path: {
          /** The ID of the required ActiveGate. */
          agId: string
        }
      }
      responses: {
        /** Success. The update-job have been created. */
        201: {
          content: {
            'application/json; charset=utf-8': OASSchemas['UpdateJob']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** JSON body of the request, containing update-job parameters. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['UpdateJob']
        }
      }
    }
  
    getUpdateJobByJobIdForAg: {
      parameters: {
        path: {
          /** The ID of the required ActiveGate. */
          agId: string
          /** A unique identifier for a update-job of ActiveGate. */
          jobId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['UpdateJob']
          }
        }
        /** Not found. See response body for details. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    deleteUpdateJobByJobIdForAg: {
      parameters: {
        path: {
          /** The ID of the required ActiveGate. */
          agId: string
          /** A unique identifier for a update-job of ActiveGate. */
          jobId: string
        }
      }
      responses: {
        /** Success. The update-job have been deleted. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Not found. See response body for details. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    validateUpdateJobForAg: {
      parameters: {
        path: {
          /** The ID of the required ActiveGate. */
          agId: string
        }
      }
      responses: {
        /** Validated. The submitted update-job is valid. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** JSON body of the request, containing update-job parameters. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['UpdateJob']
        }
      }
    }
  
    /** The response includes all ActiveGates that are currently connected to the environment or have been connected during last 2 hours. */
    getAllActiveGates: {
      parameters: {
        query: {
          /**
           * Filters the resulting set of ActiveGates by the name of the host it's running on.
           *
           *  You can specify a partial name. In that case, the `CONTAINS` operator is used.
           */
          hostname?: string
          /** Filters the resulting set of ActiveGates by the OS type of the host it's running on. */
          osType?: 'LINUX' | 'WINDOWS'
          /**
           * Filters the resulting set of ActiveGates by the network address.
           *
           *  You can specify a partial address. In that case, the `CONTAINS` operator is used.
           */
          networkAddress?: string
          /**
           * Filters the resulting set of ActiveGates by the Load Balancer address.
           *
           *  You can specify a partial address. In that case, the `CONTAINS` operator is used.
           */
          loadBalancerAddress?: string
          /** Filters the resulting set of ActiveGates by the ActiveGate type. */
          type?: 'ENVIRONMENT' | 'ENVIRONMENT_MULTI'
          /**
           * Filters the resulting set of ActiveGates by the network zone.
           *
           *  You can specify a partial name. In that case, the `CONTAINS` operator is used.
           */
          networkZone?: string
          /** Filters the resulting set of ActiveGates by the auto-update status. */
          updateStatus?:
            | 'INCOMPATIBLE'
            | 'OUTDATED'
            | 'SCHEDULED'
            | 'SUPPRESSED'
            | 'UNKNOWN'
            | 'UP2DATE'
            | 'UPDATE_IN_PROGRESS'
            | 'UPDATE_PENDING'
            | 'UPDATE_PROBLEM'
          /**
           * Filters the resulting set of ActiveGates by the specified version.
           *
           *  Specify the comparison operator here.
           */
          versionCompareType?: 'EQUAL' | 'GREATER' | 'GREATER_EQUAL' | 'LOWER' | 'LOWER_EQUAL'
          /**
           * Filters the resulting set of ActiveGates by the specified version.
           *
           *  Specify the version in `<major>.<minor>.<revision>` format (for example, `1.195.0`) here.
           */
          version?: string
          /** Filters the resulting set of ActiveGates by the actual state of auto-update. */
          autoUpdate?: 'DISABLED' | 'ENABLED'
          /**
           * Filters the resulting set of ActiveGates by the group.
           *
           *  You can specify a partial name. In that case, the `CONTAINS` operator is used.
           */
          group?: string
          /** Filters the resulting set of ActiveGates by the communication status. */
          online?: boolean
          /** Filters the resulting set of ActiveGates by the enabled modules. */
          enabledModule?: (
            | 'AWS'
            | 'AZURE'
            | 'BEACON_FORWARDER'
            | 'CLOUD_FOUNDRY'
            | 'DB_INSIGHT'
            | 'EXTENSIONS_V1'
            | 'EXTENSIONS_V2'
            | 'KUBERNETES'
            | 'LOGS'
            | 'MEMORY_DUMPS'
            | 'METRIC_API'
            | 'ONE_AGENT_ROUTING'
            | 'OTLP_INGEST'
            | 'REST_API'
            | 'SYNTHETIC'
            | 'VMWARE'
            | 'Z_OS'
          )[]
          /** Filters the resulting set of ActiveGates by the disabled modules. */
          disabledModule?: (
            | 'AWS'
            | 'AZURE'
            | 'BEACON_FORWARDER'
            | 'CLOUD_FOUNDRY'
            | 'DB_INSIGHT'
            | 'EXTENSIONS_V1'
            | 'EXTENSIONS_V2'
            | 'KUBERNETES'
            | 'LOGS'
            | 'MEMORY_DUMPS'
            | 'METRIC_API'
            | 'ONE_AGENT_ROUTING'
            | 'OTLP_INGEST'
            | 'REST_API'
            | 'SYNTHETIC'
            | 'VMWARE'
            | 'Z_OS'
          )[]
          /** Filters the resulting set of ActiveGates to those which are running in container (`true`) or not (`false`). */
          containerized?: boolean
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ActiveGateList']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    getOneActiveGateById: {
      parameters: {
        path: {
          /** The ID of the required ActiveGate. */
          agId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ActiveGate']
          }
        }
        /** Not found. See response body for details. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /**
     * Lists entities observed within the specified timeframe along with their properties.
     *
     * When you query entities of the `SERVICE_METHOD` type, only the following requests are returned:
     *
     * * [Key requests](https://dt-url.net/a903u9s)
     * * Top X requests that are used for [baselining](https://dt-url.net/0j23uqb)
     * * Requests that have caused a [problem](https://dt-url.net/pf43uqg)
     *
     * You can limit the output by using pagination:
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     */
    getEntities: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of entities.
           *
           * If not set, 50 is used.
           */
          pageSize?: number
          /**
           * Defines the scope of the query. Only entities matching the specified criteria are included into response.
           *
           * You must set one of these criteria:
           *
           * * Entity type: `type("TYPE")`
           * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
           *
           * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
           *
           * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
           * * Management zone ID: `mzId(123)`
           * * Management zone name: `mzName("value")`
           * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
           * 	The following modifications are available:
           * 	* `entityName.equals`: changes the operator to `EQUALS`.
           * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
           * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
           * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
           * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
           * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
           * 	The following operators are available:
           * 	* `lte`: earlier than or at the specified time
           * 	* `lt`: earlier than the specified time
           * 	* `gte`: later than or at the specified time
           * 	* `gt`: later than the specified time
           * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
           * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
           * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
           *
           * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
           *
           * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
           *
           * The length of the string is limited to 10,000 characters.
           *
           * The field is **required** when you're querying the first page of results.
           */
          entitySelector?: string
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of three days is used (`now-3d`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * Defines the list of entity properties included in the response. The ID and the name of an entity are **always** included to the response.
           *
           * To add properties, list them with leading plus `+`. You can specify several properties, separated by a comma (for example `fields=+lastSeenTms,+properties.BITNESS`).
           *
           * Use the [GET entity type](https://dt-url.net/2ka3ivt) request to fetch the list of properties available for your entity type. Fields from the **properties** object must be specified in the `properties.FIELD` format (for example, `properties.BITNESS`).
           */
          fields?: string
          /**
           * Defines the ordering of the entities returned.
           *
           * This field is **optional**, each field has a sign prefix (+/-), which corresponds to sorting order ( + for ascending and - for descending). If no sign prefix is set, then default ascending sorting order will be applied.
           *
           * Currently ordering is only available for the display name (for example `sort=name or sort =+name for ascending, sort=-name for descending`)
           */
          sort?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['EntitiesList']
          }
        }
      }
    }
  
    getEntity: {
      parameters: {
        path: {
          /** The ID of the required entity. */
          entityId: string
        }
        query: {
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of three days is used (`now-3d`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * Defines the list of entity properties included in the response. The ID and the name of an entity are **always** included to the response.
           *
           * To add properties, list them with leading plus `+`. You can specify several properties, separated by a comma (for example `fields=+lastSeenTms,+properties.BITNESS`).
           *
           * Use the [GET entity type](https://dt-url.net/2ka3ivt) request to fetch the list of properties available for your entity type. Fields from the **properties** object must be specified in the `properties.FIELD` format (for example, `properties.BITNESS`).
           */
          fields?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Entity']
          }
        }
      }
    }
  
    getEntityType: {
      parameters: {
        path: {
          /** The required entity type. */
          type: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['EntityType']
          }
        }
        /** Failed. The requested monitored entity type is not exportable or doesn't exist. */
        400: unknown
      }
    }
  
    /**
     * You can limit the output by using pagination:
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     */
    getEntityTypes: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of entity types in a single response payload.
           *
           * The maximal allowed page size is 500.
           *
           * If not set, 50 is used.
           */
          pageSize?: number
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['EntityTypeList']
          }
        }
        /** Failed. There are no more entity types to export. */
        400: unknown
      }
    }
  
    pushCustomDevice: {
      responses: {
        /** Success */
        201: {
          content: {
            'application/json; charset=utf-8': OASSchemas['CustomDeviceCreationResult']
          }
        }
        /** Success */
        204: never
        /** Failed. The input is invalid. */
        400: unknown
      }
      /** The JSON body of the request. Contains parameters of a custom device. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['CustomDeviceCreation']
        }
      }
    }
  
    /** The ingestion of custom events consumes [Davis Data Units](https://dt-url.net/ddu) (DDUs) from the events pool. */
    createEvent: {
      responses: {
        /** The event ingest request was received by the server. The response body indicates for each event whether its creation was successful. */
        201: {
          content: {
            'application/json; charset=utf-8': OASSchemas['EventIngestResults']
          }
        }
      }
      /** The JSON body of the request. Contains properties of the new event. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EventIngest']
        }
      }
    }
  
    getEvent: {
      parameters: {
        path: {
          /** The ID of the required event. */
          eventId: string
        }
      }
      responses: {
        /** Success. The response contains the configuration of the event. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Event']
          }
        }
      }
    }
  
    getEventProperties: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of event properties in a single response payload.
           *
           * The maximal allowed page size is 500.
           *
           * If not set, 100 is used.
           */
          pageSize?: number
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['EventPropertyDetails']
          }
        }
      }
    }
  
    getEventProperty: {
      parameters: {
        path: {
          /** The event property key you're inquiring. */
          propertyKey: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['EventPropertyDetail']
          }
        }
      }
    }
  
    getEventType: {
      parameters: {
        path: {
          /** The event type you're inquiring. */
          eventType: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['EventType']
          }
        }
      }
    }
  
    getEventTypes: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of event types in a single response payload.
           *
           * The maximal allowed page size is 500.
           *
           * If not set, 100 is used.
           */
          pageSize?: number
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['EventTypeList']
          }
        }
      }
    }
  
    getEvents: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of events in a single response payload.
           *
           * The maximal allowed page size is 1000.
           *
           * If not set, 100 is used.
           */
          pageSize?: number
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two hours is used (`now-2h`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * Defines the scope of the query. Only events matching the specified criteria are included in the response.
           *
           * You can add one or several of the criteria listed below. For each criterion you can specify multiple comma-separated values, unless stated otherwise. If several values are specified, the **OR** logic applies.
           * * Event ID: `eventId("id-1", "id-2")`.
           * * ID of related entity: `entityId("id-1", "id-2")`.
           * * Event status: `status("OPEN")` or `status("CLOSED")`. You can specify only one status.
           * * Management zone ID: `managementZoneId("123", "321")`.
           * * Event type: `eventType("event-type")`. You can specify only one event type. You can fetch the list of possible event types with the [GET event types](https://dt-url.net/qc03u6w) call.
           * * Correlation ID: `correlationId("id-1", "id-2")`.
           * * Happened during maintenance (true, false): `underMaintenance(true)`.
           * * Notifications are suppressed (true, false): `suppressAlert(true)`.
           * * Problem creation is suppressed (true, false): `suppressProblem(true)`.
           * * Frequent event (true, false): `frequentEvent(true)`.
           * * Event property: `property.<key>("value-1", "value-2")`.
           *
           * To set several criteria, separate them with commas (`,`). Only results matching **all** criteria are included in the response.
           */
          eventSelector?: string
          /**
           * The entity scope of the query. You must set one of these criteria:
           *
           * * Entity type: `type("TYPE")`
           * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
           *
           * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
           *
           * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
           * * Management zone ID: `mzId(123)`
           * * Management zone name: `mzName("value")`
           * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
           * 	The following modifications are available:
           * 	* `entityName.equals`: changes the operator to `EQUALS`.
           * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
           * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
           * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
           * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
           * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
           * 	The following operators are available:
           * 	* `lte`: earlier than or at the specified time
           * 	* `lt`: earlier than the specified time
           * 	* `gte`: later than or at the specified time
           * 	* `gt`: later than the specified time
           * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
           * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
           * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
           *
           * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
           *
           * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
           *
           * The length of the string is limited to 10,000 characters.
           *
           * The number of entities that can be selected is limited to 10000.
           */
          entitySelector?: string
        }
      }
      responses: {
        /** Success. The response contains the list of events. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['EventList']
          }
        }
      }
    }
  
    metric: {
      parameters: {
        path: {
          /**
           * The key of the required metric.
           *
           * You can set additional transformation operators, separated by a colon (`:`). See [Metrics selector transformations](https://dt-url.net/metricSelector) in Dynatrace Documentation for additional information on available result transformations.
           */
          metricKey: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['MetricDescriptor']
            'text/csv; header=present; charset=utf-8': OASSchemas['MetricDescriptor']
            'text/csv; header=absent; charset=utf-8': OASSchemas['MetricDescriptor']
          }
        }
        /** A metric has not been found. */
        404: unknown
        /** Not acceptable. The requested media type is not supported. Check the **Accept** header of your request. */
        406: unknown
      }
    }
  
    /** Deletion cannot be undone! You can't delete a metric if it has data points ingested within the last two hours. */
    delete: {
      parameters: {
        path: {
          /** The key of the required metric. */
          metricKey: string
        }
      }
      responses: {
        /** Success. The deletion of the metric has been triggered. */
        202: unknown
        /** Failed. The metric has been written within the last two hours. */
        400: unknown
        /** Failed. The metric cannot be found or the key cannot be parsed. */
        404: unknown
        /** Failed. The deletion of metric dimensions failed. */
        500: unknown
      }
    }
  
    /**
     * You can narrow down the output by selecting metrics in the **metricSelector** field.
     *
     * You can additionally limit the output by using pagination:
     *
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     *
     * 2. Then use the cursor from the **nextPageKey** field of the response in the **nextPageKey** query parameter to obtain subsequent pages. All other query parameters must be omitted.
     */
    allMetrics: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of metric schemata in a single response payload.
           *
           * The maximal allowed page size is 500.
           *
           * If not set, 100 is used.
           *
           *  If a value higher than 500 is used, only 500 results per page are returned.
           */
          pageSize?: number
          /**
           * Selects metrics for the query by their keys.
           *
           *  You can specify multiple metric keys separated by commas (for example, `metrickey1,metrickey2`). To select multiple metrics belonging to the same parent, list the last part of the required metric keys in parentheses, separated by commas, while keeping the common part untouched. For example, to list the `builtin:host.cpu.idle` and `builtin:host.cpu.user` metric, write: `builtin:host.cpu.(idle,user)`.
           *
           * You can select a full set of related metrics by using a trailing asterisk (`*`) wildcard. For example, `builtin:host.*` selects all host-based metrics and `builtin:*` selects all Dynatrace-provided metrics.
           *
           * You can set additional transformation operators, separated by a colon (`:`). See [Metrics selector transformations](https://dt-url.net/metricSelector) in Dynatrace Documentation for additional information on available result transformations.
           *
           *  Only `aggregation`, `merge`, `parents`, and `splitBy` transformations are supported by this endpoint.
           *
           *  To find metrics based on a search term, rather than metricId, use the **text** query parameter instead of this one.
           */
          metricSelector?: string
          /** Metric registry search term. Only show metrics that contain the term in their key, display name, or description. Use the `metricSelector` parameter instead of this one to select a complete metric hierarchy instead of doing a text-based search. */
          text?: string
          /**
           * Defines the list of metric properties included in the response.
           *
           * `metricId` is **always** included in the result. The following additional properties are available:
           *
           * * `displayName`: The name of the metric in the user interface. Enabled by default.
           * * `description`: A short description of the metric. Enabled by default.
           * * `unit`: The unit of the metric. Enabled by default.
           * * `tags`: The tags of the metric.
           * + `dduBillable`:  An indicator whether the usage of metric consumes [Davis data units](https://dt-url.net/ddu).
           * * `created`:  The timestamp (UTC milliseconds) when the metrics has been created.
           * * `lastWritten`:  The timestamp (UTC milliseconds) when metric data points have been written for the last time.
           * * `aggregationTypes`: The list of allowed aggregations for the metric. Note that it may be different after a [transformation](https://dt-url.net/metricSelector) is applied.
           * * `defaultAggregation`: The default aggregation of the metric. It is used when no aggregation is specified or the `:auto` transformation is set.
           * * `dimensionDefinitions`: The fine metric division (for example, process group and process ID for some process-related metric).
           * * `transformations`: A list of [transformations](https://dt-url.net/metricSelector) that can be applied to the metric.
           * * `entityType`: A list of entity types supported by the metric.
           * * `minimumValue`: The minimum allowed value of the metric.
           * * `maximumValue`: The maximum allowed value of the metric.
           * * `rootCauseRelevant`: Whether (true or false) the metric is related to a root cause of a problem. A root-cause relevant metric represents a strong indicator for a faulty component.
           * * `impactRelevant`: Whether (true or false) the metric is relevant to a problem's impact. An impact-relevant metric is highly dependent on other metrics and changes because an underlying root-cause metric has changed.
           * * `metricValueType`: The type of the metric's value. You have these options:
           * 	 * `score`: A score metric is a metric where high values indicate a good situation, while low values indicate trouble. An example of such a metric is a success rate.
           * 	 * `error`: An error metric is a metric where high values indicate trouble, while low values indicate a good situation. An example of such a metric is an error count.
           * * `latency`: The latency of the metric, in minutes. The latency is the expected reporting delay (for example, caused by constraints of cloud vendors or other third-party data sources) between the observation of a metric data point and its availability in Dynatrace. The allowed value range is from `1` to `60` minutes.
           * * `metricSelector`: The underlying metric selector used by a func: metric.
           * * `scalar`: Indicates whether the metric expression resolves to a scalar (`true`) or to a series (`false`).
           * A scalar result always contains one data point. The amount of data points in a series result depends on the resolution you're using.
           * * `resolutionInfSupported`: If `true`, resolution=Inf can be applied to the metric query.
           *
           * To add properties, list them with leading plus `+`. To exclude default properties, list them with leading minus `-`.
           *
           * To specify several properties, join them with a comma (for example `fields=+aggregationTypes,-description`).
           *
           * If you specify just one property, the response contains the metric key and the specified property. To return metric keys only, specify `metricId` here.
           */
          fields?: string
          /**
           * Filters the resulted set of metrics to those that have data points within the specified timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           */
          writtenSince?: string
          /**
           * The metadata scope of the query. Only metrics with specified properties are included to the response.
           *
           * You can set one or more of the following criteria. Values are case-sensitive and the `EQUALS` operator is used. If several values are specified, the **OR** logic applies.
           *
           * * `unit("unit-1","unit-2")`
           * * `tags("tag-1","tag-2")`
           * * `dimensionKey("dimkey")` You can specify only one value. The filtering applies only to dimensions that were written within the last 14 days.
           *
           * To set several criteria, separate them with a comma (`,`). For example, `tags("feature","cloud"),unit("Percent"),dimensionKey("location")`. Only results matching **all** criteria are included in response.
           *
           * For example, to list metrics that have the tags **feature** AND **cloud** with a unit of **Percent** OR **MegaByte** AND a dimension with a dimension key **location**, use this **metadataSelector**: `tags("feature"),unit("Percent","MegaByte"),tags("cloud"),dimensionKey("location")`.
           */
          metadataSelector?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['MetricDescriptorCollection']
            'text/csv; header=present; charset=utf-8': OASSchemas['MetricDescriptorCollection']
            'text/csv; header=absent; charset=utf-8': OASSchemas['MetricDescriptorCollection']
          }
        }
        /** Syntax or validation error. **metricSelector** or **fields** have syntactic or semantic errors. */
        400: unknown
        /** A metric has not been found. */
        404: unknown
        /** Not acceptable. The requested media type is not supported. Check the **Accept** header of your request. */
        406: unknown
      }
    }
  
    /**
     * The following limits apply:
     * * The amount of aggregated data points in the response is limited to 1,000
     * * The amount of series in the response is limited to 1,000
     *    * The amount of data points per series is limited to 10,080 (minutes of one week)
     *    * The overall amount of data points is limited to 100,000
     */
    query: {
      parameters: {
        query: {
          /**
           * Selects metrics for the query by their keys. You can select up to 10 metrics for one query.
           *
           *  You can specify multiple metric keys separated by commas (for example, `metrickey1,metrickey2`). To select multiple metrics belonging to the same parent, list the last part of the required metric keys in parentheses, separated by commas, while keeping the common part untouched. For example, to list the `builtin:host.cpu.idle` and `builtin:host.cpu.user` metric, write: `builtin:host.cpu.(idle,user)`.
           *
           * You can set additional transformation operators, separated by a colon (`:`). See [Metrics selector transformations](https://dt-url.net/metricSelector) in Dynatrace Documentation for additional information on available result transformations.
           *
           *  If the metric key contains whitespaces, they must be escaped with a tilde (`~`). For example, to query the metric with the key of **ext:selfmonitoring.jmx.Agents of Type 'APACHE'** you must specify this selector:
           *
           * `ext:selfmonitoring.jmx.Agents~ of~ Type~ 'APACHE'`
           */
          metricSelector?: string
          /**
           * The desired resolution of data points.
           *
           * You can use one of the following options:
           * * The desired amount of data points. This is the default option. This is a reference number of points, which is not necessarily equal to the number of the returned data points.
           * * The desired timespan between data points. This is a reference timespan, which is not necessarily equal to the returned timespan. To use this option, specify the unit of the timespan.
           *
           * Valid units for the timespan are:
           * * `m`: minutes
           * * `h`: hours
           * * `d`: days
           * * `w`: weeks
           * * `M`: months
           * * `y`: years
           *
           * If not set, the default is **120 data points**.
           *
           * For example:
           *
           * * Get data points which are 10 minutes apart: `resolution=10m`
           * * Get data points which are 3 weeks apart: `resolution=3w`
           */
          resolution?: string
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two hours is used (`now-2h`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * Specifies the entity scope of the query. Only data points delivered by matched entities are included in response.
           *
           * You must set one of these criteria:
           *
           * * Entity type: `type("TYPE")`
           * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
           *
           * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
           *
           * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
           * * Management zone ID: `mzId(123)`
           * * Management zone name: `mzName("value")`
           * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
           * 	The following modifications are available:
           * 	* `entityName.equals`: changes the operator to `EQUALS`.
           * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
           * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
           * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
           * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
           * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
           * 	The following operators are available:
           * 	* `lte`: earlier than or at the specified time
           * 	* `lt`: earlier than the specified time
           * 	* `gte`: later than or at the specified time
           * 	* `gt`: later than the specified time
           * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
           * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
           * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
           *
           * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
           *
           * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
           *
           * The length of the string is limited to 10,000 characters.
           *
           * Use the [`GET /metrics/{metricId}`](https://dt-url.net/6z23ifk) call to fetch the list of possible entity types for your metric.
           *
           * To set a universal scope matching all entities, omit this parameter.
           */
          entitySelector?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['MetricData']
            'text/csv; header=present; charset=utf-8': OASSchemas['MetricData']
            'text/csv; header=absent; charset=utf-8': OASSchemas['MetricData']
          }
        }
        /** Syntax or validation error. From and to parameters, entitySelector or resolution are incorrect individually or in their combined meaning. */
        400: unknown
        /** A metric has not been found. */
        404: unknown
        /** Not acceptable. The requested media type is not supported. Check the **Accept** header of your request. */
        406: unknown
      }
    }
  
    getSingleNetworkZone: {
      parameters: {
        path: {
          /** The ID of the required network zone. */
          id: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['NetworkZone']
          }
        }
      }
    }
  
    /**
     * If the network zone with the specified ID does not exist, a new network zone is created.
     *
     *  The ID is not case sensitive. Dynatrace stores the ID in lowercase.
     */
    createOrUpdateNetworkZone: {
      parameters: {
        path: {
          /**
           * The ID of the network zone to be updated.
           *
           *  If you set the ID in the body as well, it must match this ID.
           *
           *  The ID is not case sensitive. Dynatrace stores the ID in lowercase.
           */
          id: string
        }
      }
      responses: {
        /** Success. The new network zone has been created. The response body contains the ID of the new network zone. */
        201: {
          content: {
            'application/json; charset=utf-8': OASSchemas['EntityShortRepresentation']
          }
        }
        /** Success. The network zone has been updated. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** The JSON body of the request. Contains parameters of the network zone. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['NetworkZone']
        }
      }
    }
  
    /**
     * You can only delete an empty network zone (a zone that no ActiveGate or OneAgent is using).
     *
     *  If the network zone is used as an alternative zone for any OneAgent, it will be automatically removed from the list of possible alternatives.
     */
    deleteNetworkZone: {
      parameters: {
        path: {
          /** The ID of the network zone to be deleted. */
          id: string
        }
      }
      responses: {
        /** Deleted. Response doesn't have a body. */
        204: never
        /** Failed. See error message in the response body for details. */
        400: {
          content: {
            '*/*': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    getAllNetworkZones: {
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['NetworkZoneList']
          }
        }
      }
    }
  
    getHostStats: {
      parameters: {
        path: {
          /** The ID of the required network zone. */
          id: string
        }
        query: {
          /**
           * Filters the resulting set of hosts:
           *
           * * `all`: All hosts using the zone.
           * * `configuredButNotConnectedOnly`: Hosts from the network zone that use other zones.
           * * `connectedAsAlternativeOnly`: Hosts that use the network zone as an alternative.
           * * `connectedAsFailoverOnly`: Hosts from other zones that use the zone (not configured as an alternative) even though ActiveGates of higher priority are available.
           * * `connectedAsFailoverWithoutOwnActiveGatesOnly`: Hosts from other zones that use the zone (not configured as an alternative) and **no** ActiveGates of higher priority are available.
           *
           * If not set, `all` is used.
           */
          filter?:
            | 'all'
            | 'configuredButNotConnectedOnly'
            | 'connectedAsAlternativeOnly'
            | 'connectedAsFailoverOnly'
            | 'connectedAsFailoverWithoutOwnActiveGatesOnly'
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['NetworkZoneConnectionStatistics']
          }
        }
      }
    }
  
    getNetworkZoneSettings: {
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['NetworkZoneSettings']
          }
        }
      }
    }
  
    updateNetworkZoneSettings: {
      responses: {
        /** Success. The global network zones configuration has been updated. Response doesn't have a body. */
        204: never
      }
      /** The JSON body of the request. Contains global configuration of network zones. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['NetworkZoneSettings']
        }
      }
    }
  
    /** Automatically applied tags and imported tags are not included. */
    getTags: {
      parameters: {
        query: {
          /**
           * Specifies the entities where you want to read tags.
           *
           * You must set one of these criteria:
           *
           * * Entity type: `type("TYPE")`
           * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
           *
           * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
           *
           * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
           * * Management zone ID: `mzId(123)`
           * * Management zone name: `mzName("value")`
           * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
           * 	The following modifications are available:
           * 	* `entityName.equals`: changes the operator to `EQUALS`.
           * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
           * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
           * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
           * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
           * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
           * 	The following operators are available:
           * 	* `lte`: earlier than or at the specified time
           * 	* `lt`: earlier than the specified time
           * 	* `gte`: later than or at the specified time
           * 	* `gt`: later than the specified time
           * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
           * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
           * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
           *
           * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
           *
           * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
           *
           * The length of the string is limited to 10,000 characters.
           */
          entitySelector: string
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of 24 hours is used (`now-24h`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['CustomEntityTags']
          }
        }
      }
    }
  
    /** All existing tags remain unaffected. */
    postTags: {
      parameters: {
        query: {
          /**
           * Specifies the entities where you want to update tags.
           *
           * You must set one of these criteria:
           *
           * * Entity type: `type("TYPE")`
           * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
           *
           * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
           *
           * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
           * * Management zone ID: `mzId(123)`
           * * Management zone name: `mzName("value")`
           * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
           * 	The following modifications are available:
           * 	* `entityName.equals`: changes the operator to `EQUALS`.
           * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
           * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
           * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
           * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
           * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
           * 	The following operators are available:
           * 	* `lte`: earlier than or at the specified time
           * 	* `lt`: earlier than the specified time
           * 	* `gte`: later than or at the specified time
           * 	* `gt`: later than the specified time
           * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
           * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
           * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
           *
           * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
           *
           * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
           *
           * The length of the string is limited to 10,000 characters.
           */
          entitySelector: string
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of 24 hours is used (`now-24h`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['AddedEntityTags']
          }
        }
      }
      /** The JSON body of the request. Contains tags to be added to the matching entities. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['AddEntityTags']
        }
      }
    }
  
    deleteTags: {
      parameters: {
        query: {
          /**
           * The key of the tag to be deleted.
           *
           * If **deleteAllWithKey** is `true`, then all tags with this key are deleted. Otherwise, only tags with exact match of key **and** value are deleted.
           *
           * For value-only tags, specify the value here.
           */
          key: string
          /**
           * The value of the tag to be deleted. The value is ignored if **deleteAllWithKey** is `true`.
           *
           * For value-only tags, specify the value in the **key** parameter.
           */
          value?: string
          /**
           * * If `true`, all tags with the specified key are deleted, regardless of the value.
           * * If `false`, only tags with exact match of key **and** value are deleted.
           *
           * If not set, `false` is used.
           */
          deleteAllWithKey?: boolean
          /**
           * Specifies the entities where you want to delete tags.
           *
           * You must set one of these criteria:
           *
           * * Entity type: `type("TYPE")`
           * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
           *
           * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
           *
           * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
           * * Management zone ID: `mzId(123)`
           * * Management zone name: `mzName("value")`
           * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
           * 	The following modifications are available:
           * 	* `entityName.equals`: changes the operator to `EQUALS`.
           * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
           * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
           * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
           * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
           * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
           * 	The following operators are available:
           * 	* `lte`: earlier than or at the specified time
           * 	* `lt`: earlier than the specified time
           * 	* `gte`: later than or at the specified time
           * 	* `gt`: later than the specified time
           * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
           * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
           * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
           *
           * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
           *
           * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
           *
           * The length of the string is limited to 10,000 characters.
           */
          entitySelector: string
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of 24 hours is used (`now-24h`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['DeletedEntityTags']
          }
        }
      }
    }
  
    /**
     * You can limit the output by using pagination:
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     */
    listTokens: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of ActiveGate tokens in a single response payload.
           *
           * The maximal allowed page size is 3000 and the minimal size is 100.
           *
           * If not set, 100 is used.
           */
          pageSize?: number
        }
      }
      responses: {
        /** Success. The response contains the list of ActiveGate tokens. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ActiveGateTokenList']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /** The newly created token will be owned by the same user who owns the token used for authentication of the call. */
    createToken: {
      responses: {
        /** Success. The token has been created. The body of the response contains the token secret. */
        201: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ActiveGateTokenCreated']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** The JSON body of the request. Contains parameters of the new ActiveGate token. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateTokenCreate']
        }
      }
    }
  
    /** The token secret is **not** exposed. */
    getToken: {
      parameters: {
        path: {
          /** The ID of the token. */
          tokenIdentifier: string
        }
      }
      responses: {
        /** Success. The response contains the metadata of the tokens. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ActiveGateToken']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    revokeToken: {
      parameters: {
        path: {
          /**
           * The token to be deleted.
           *
           * You can specify either the ID or the secret of the token.
           */
          tokenIdentifier: string
        }
      }
      responses: {
        /** Success. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /**
     * You can limit the output by using pagination:
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     */
    listApiTokens: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of API tokens in a single response payload.
           *
           * The maximal allowed page size is 10000 and the minimal allowed page size is 100.
           *
           * If not set, 200 is used.
           */
          pageSize?: number
          /**
           * Filters the resulting sets of tokens. Only tokens matching the specified criteria are included into response.
           *
           * You can set one or more of the following criteria:
           *
           * * Owner: `owner("value")`. The user that owns the token. Case-sensitive.
           * * Personal access token: `personalAccessToken(false)`. Set to `true` to include only personal access tokens or to `false` to include only API tokens.
           * * Token scope: `scope("scope1","scope2")`. If several values are specified, the **OR** logic applies.
           *
           * To set multiple criteria, separate them with commas (`,`). Only results matching **all** criteria are included into response.
           */
          apiTokenSelector?: string
          /**
           * Specifies the fields to be included in the response.
           *
           * The following fields are included by default:
           *
           * * `id`
           * * `name`
           * * `enabled`
           * * `owner`
           * * `creationDate`
           *
           * To remove fields from the response, specify them with the minus (`-`) operator as a comma-separated list (for example, `-creationDate,-owner`).
           *
           * You can include additional fields:
           *
           * * `personalAccessToken`
           * * `expirationDate`
           * * `lastUsedDate`
           * * `lastUsedIpAddress`
           * * `scopes`
           *
           * To add fields to the response, specify them with the plus (`+`) operator as a comma-separated list (for example, `+expirationDate,+scopes`). You can combine adding and removing of fields (for example, `+scopes,-creationDate`).
           *
           * Alternatively, you can define the desired set of fields in the response. Specify the required fields as a comma-separated list, without operators (for example, `creationDate,expirationDate,owner`). The ID is always included in the response.
           *
           * The **fields** string must be URL-encoded.
           */
          fields?: string
          /**
           * Filters tokens based on the last usage time.
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           */
          from?: string
          /**
           * Filters tokens based on the last usage time.
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * The sort order of the token list.
           *
           * You can sort by the following properties with a sign prefix for the sort order:
           *
           *  * `name`: token name (`+` a...z or `-` z...a)
           *  * `lastUsedDate` last used (`+` never used tokens first `-` most recently used tokens first)
           *  * `creationDate` (`+` oldest tokens first `-` newest tokens first)
           *  * `expirationDate` (`+` tokens that expire soon first `-` unlimited tokens first)
           *
           * If no prefix is set, + is used.
           *
           * If not set, tokens are sorted by creation date with newest first.
           */
          sort?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ApiTokenList']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /** The newly created token will be owned by the same user who owns the token used for authentication of the call. */
    createApiToken: {
      responses: {
        /** Success. The token has been created. The body of the response contains the token secret. */
        201: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ApiTokenCreated']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** The JSON body of the request. Contains parameters of the new API token. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ApiTokenCreate']
        }
      }
    }
  
    /** The token secret is **not** exposed. */
    getApiToken: {
      parameters: {
        path: {
          /** The ID of the token. */
          id: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ApiToken']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: unknown
      }
    }
  
    updateApiToken: {
      parameters: {
        path: {
          /**
           * The ID of the token to be updated.
           *
           *  You can't disable the token you're using for authentication of the request.
           */
          id: string
        }
      }
      responses: {
        /** Success. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** The JSON body of the request. Contains updated parameters of the API token. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ApiTokenUpdate']
        }
      }
    }
  
    deleteApiToken: {
      parameters: {
        path: {
          /**
           * The ID of the token to be deleted.
           *
           * You can specify either the ID or the secret of the token.
           *
           * You can't delete the token you're using for authentication of the request.
           */
          id: string
        }
      }
      responses: {
        /** Success. Response doesn't have a body. */
        204: never
        /** Failed. You can't delete the token you're using for authentication of the request. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: unknown
      }
    }
  
    lookupApiToken: {
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ApiToken']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: unknown
      }
      /** The JSON body of the request. Contains the required token. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ApiTokenSecret']
        }
      }
    }
  
    getLog: {
      parameters: {
        path: {
          /** The ID of the required log entry. */
          id: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['AuditLogEntry']
          }
        }
        /** Failed. Invalid ID format. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /**
     * You can limit the output by using pagination:
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     */
    getLogs: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of log entries in a single response payload.
           *
           * The maximal allowed page size is 5000.
           *
           * If not set, 1000 is used.
           */
          pageSize?: number
          /**
           * Filters the audit log. You can use the following criteria:
           * * User: `user("userIdentification")`. The `EQUALS` operator applies.
           * * Event type: `eventType("value")`. The `EQUALS` operator applies.
           * * Category of a logged operation: `category("value")`. The `EQUALS` operator applies.
           * * Entity ID: `entityId("id")`. The `CONTAINS` operator applies.
           *
           * For each criterion, you can specify multiple alternatives with comma-separated values. In this case, the OR logic applies. For example, `eventType("CREATE","UPDATE")` means eventType can be "CREATE" or "UPDATE".
           *
           * You can specify multiple comma-separated criteria, such as `eventType("CREATE","UPDATE"),category("CONFIG")`. Only results matching **all** criteria are included in response.
           *
           * Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes:
           * * Tilde `~`
           * * Quote `"`
           */
          filter?: string
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two weeks is used (`now-2w`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * The sorting of audit log entries:
           * * `timestamp`: Oldest first.
           * * `-timestamp`: Newest first.
           *
           * If not set, the newest first sorting is applied.
           */
          sort?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['AuditLog']
          }
        }
      }
    }
  
    /** You can narrow down the output by providing the management zone and pagination. If you specify a management zone, only problems originating from that zone are included to the request. */
    getAdviceForSecurityProblems: {
      parameters: {
        query: {
          /**
           * To specify management zones, use one of the options listed below. For each option you can specify multiple comma-separated values. If several values are specified, the **OR** logic applies. All values are case-sensitive and must be quoted.
           *
           * * Management zone ID: ids("mzId-1", "mzId-2").
           * * Management zone names: names("mz-1", "mz-2").
           *
           * You can specify several comma-separated criteria (for example, `names("myMz"),ids("9130632296508575249")`).
           */
          managementZoneFilter?: string
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of security advices in a single response payload.
           *
           * The maximal allowed page size is 500.
           *
           * If not set, 5 is used.
           */
          pageSize?: number
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['DavisSecurityAdviceList']
          }
        }
      }
    }
  
    getRemediationItems: {
      parameters: {
        path: {
          /** The ID of the required security problem. */
          id: string
        }
        query: {
          /**
           * Defines the scope of the query. Only remediable entities matching the specified criteria are included in the response.
           *
           * You can add one or more of the following criteria. Values are *not* case-sensitive and the `EQUALS` operator is used unless otherwise specified.
           *
           * * Vulnerability State: `vulnerabilityState("value")`. Find the possible values in the description of the **vulnerabilityState** field of the response. If not set, all entities are returned.
           * * Muted: `muted("value")`. Possible values are `TRUE` or `FALSE`.
           * * Sensitive data asset assessment: `assessment.dataAssets("value")` Possible values are `REACHABLE`, and `NOT_DETECTED`.
           * * Network exposure assessment: `assessment.exposure("value")` Possible values are `PUBLIC_NETWORK`, and `NOT_DETECTED`.
           * * Entity name contains: `entityNameContains("value-1")`. The `CONTAINS` operator is used.
           *
           * To set several criteria, separate them with a comma (`,`). Only results matching (**all** criteria are included in the response.
           *
           * Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes:
           * * Tilde `~`
           * * Quote `"`
           */
          remediationItemSelector?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['RemediationItemList']
          }
        }
      }
    }
  
    getSecurityProblem: {
      parameters: {
        path: {
          /** The ID of the required security problem. */
          id: string
        }
        query: {
          /**
           * A list of additional security problem properties you can add to the response.
           *
           * The following properties are available (all other properties are always included and you can't remove them from the response):
           *
           * * `riskAssessment`: A risk assessment of the security problem.
           * * `managementZones`: The management zone where the security problem occurred.
           * * `description`: The description of the vulnerability.
           * * `events`: A list of events of the security problem.
           * * `vulnerableComponents`: A list of vulnerable components of the security problem.
           * * `affectedEntities`: A list of affected entities of the security problem.
           * * `exposedEntities`: A list of exposed entities of the security problem.
           * * `reachableDataAssets`: A list of data assets reachable by affected entities of the security problem.
           * * `relatedEntities`: A list of related entities of the security problem.
           * * `relatedContainerImages`: A list of related container images of the security problem.
           *
           * To add properties, specify them in a comma-separated list and prefix each property with a plus (for example, `+riskAssessment,+managementZones`).
           */
          fields?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SecurityProblemDetails']
          }
        }
      }
    }
  
    getSecurityProblems: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of security problems in a single response payload.
           *
           * The maximal allowed page size is 500.
           *
           * If not set, 100 is used.
           */
          pageSize?: number
          /**
           * Defines the scope of the query. Only security problems matching the specified criteria are included in the response.
           *
           * You can add one or more of the following criteria. Values are *not* case-sensitive and the `EQUALS` operator is used unless otherwise specified.
           *
           * * Status: `status("value")`. Find the possible values in the description of the **status** field of the response. If not set, all security problems are returned.
           * * Muted: `muted("value")`. Possible values are `TRUE` or `FALSE`.
           * * Risk level: `riskLevel("value")`. The Davis Risk Level. Find the possible values in the description of the **riskLevel** field of the response.
           * * Minimum risk score: `minRiskScore("5.5")`. The Davis minimum Risk Score. The `GREATER THAN OR EQUAL TO` operator is used. Specify a number between `1.0` and `10.0`.
           * * Maximum risk score: `maxRiskScore("5.5")`. The Davis maximum Risk Score. The `LESS THAN` operator is used. Specify a number between `1.0` and `10.0`.
           * * Base risk level: `baseRiskLevel("value")`. The Base Risk Level from the CVSS. Find the possible values in the description of the **riskLevel** field of the response.
           * * Minimum base risk score: `minBaseRiskScore("5.5")`. The Base minimum Risk Score from the CVSS. The `GREATER THAN OR EQUAL TO` operator is used. Specify a number between `1.0` and `10.0`.
           * * Maximum base risk score: `maxBaseRiskScore("5.5")`. The Base maximum Risk Score from the CVSS. The `LESS THAN` operator is used. Specify a number between `1.0` and `10.0`.
           * * External vulnerability ID contains: `externalVulnerabilityIdContains("id-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
           * * External vulnerability ID: `externalVulnerabilityId("id-1","id-2")`. Case insensitive `EQUALS` operator is used.
           * * CVE ID: `cveId("id")`.
           * * Risk assessment `riskAssessment("value-1","value-2")` Possible values are `EXPOSED`, `SENSITIVE`, and `EXPLOIT`.
           * * Related host ID: `relatedHostIds("value-1", "value-2")`. Specify Dynatrace entity IDs here.
           * * Related host name: `relatedHostNames("value-1", "value-2")`. Values are case-sensitive.
           * * Related host name contains: `relatedHostNameContains("value-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
           * * Related Kubernetes cluster ID: `relatedKubernetesClusterIds("value-1", "value-2")`. Specify Dynatrace entity IDs here.
           * * Related Kubernetes cluster name: `relatedKubernetesClusterNames("value-1", "value-2")`. Values are case-sensitive.
           * * Related Kubernetes cluster name contains: `relatedKubernetesClusterNameContains("value-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
           * * Related Kubernetes workload ID: `relatedKubernetesWorkloadIds("value-1", "value-2")`. Specify Dynatrace entity IDs here.
           * * Related Kubernetes workload name: `relatedKubernetesWorkloadNames("value-1", "value-2")`. Values are case-sensitive.
           * * Related Kubernetes workload name contains: `relatedKubernetesWorkloadNameContains("value-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
           * * Management zone ID: `managementZoneIds("mzId-1","mzId-2")`.
           * * Management zone name: `managementZones("name-1","name-2")`. Values are case-sensitive.
           * * Affected process group ID: `affectedPgIds("pgId-1", "pgId-2")`. Specify Dynatrace entity IDs here.
           * * Affected process group name: `affectedPgNames("name-1", "name-2")`. Values are case-sensitive.
           * * Affected process group name contains: `affectedPgNameContains("name-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
           * * Vulnerable component ID: `vulnerableComponentIds("componentId-1", "componentId-2")`. Specify component IDs here.
           * * Vulnerable component name: `vulnerableComponentNames("name-1", "name-2")`. Values are case-sensitive.
           * * Vulnerable component name contains: `vulnerableComponentNameContains("name-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
           * * Host tags: `hostTags("hostTag-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
           * * Process group tags: `pgTags("pgTag-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
           * * Process group instance tags: `pgiTags("pgiTag-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
           * * Tags: `tags("tag-1")`. The `CONTAINS` operator is used. This selector picks hosts, process groups, and process group instances at the same time. A maximum of 48 characters are allowed.
           * * Display ID: `displayIds("S-1234","S-5678")`. The `EQUALS` operator is used.
           * * Technology: `technology("technology-1","technology-2")`. Find the possible values in the description of the **technology** field of the response. The `EQUALS` operator is used.
           *
           * Risk score and risk category are mutually exclusive (cannot be used at the same time).
           *
           * To set several criteria, separate them with a comma (`,`). Only results matching (**all** criteria are included in the response.
           *
           * Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes:
           * * Tilde `~`
           * * Quote `"`
           */
          securityProblemSelector?: string
          /**
           * Specifies a field for sorting the security problem list.
           *
           * You can sort by the following properties with a sign prefix for the sorting order.
           *
           * * `status`: The security problem status (`+` open first or `-` resolved first)
           * * `muted`: The security problem mute state (`+` unmuted first or `-` muted first)
           * * `technology`: The security problem technology
           * * `firstSeenTimestamp`: The timestamp of the first occurrence of the security problem (`+` new problems first or `-` old problems first)
           * * `securityProblemId`: The auto-generated ID of the security problem (`+` lower number first or `-` higher number first)
           * * `externalVulnerabilityId`: The ID of the external vulnerability (`+` lower number first or `-` higher number first)
           * * `displayId`: The display ID (`+` lower number first or `-` higher number first)
           * * `riskAssessment.riskScore`: The Davis security score (`+` lower score first or `-` higher score first)
           * * `riskAssessment.riskLevel`: The Davis security level (`+` lower level first or `-` higher level first)
           * * `riskAssessment.exposure`: Whether the problem is exposed to the internet
           * * `riskAssessment.dataAssets`: Whether data assets are affected
           *
           * If no prefix is set, `+` is used.
           */
          sort?: string
          /**
           * A list of additional security problem properties you can add to the response.
           *
           * The following properties are available (all other properties are always included and you can't remove them from the response):
           *
           * * `riskAssessment`: A risk assessment of the security problem.
           * * `managementZones`: The management zone where the security problem occurred.
           *
           * To add properties, specify them in a comma-separated list and prefix each property with a plus (for example, `+riskAssessment,+managementZones`).
           */
          fields?: string
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of thirty days is used (`now-30d`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SecurityProblemList']
          }
        }
      }
    }
  
    muteSecurityProblem: {
      parameters: {
        path: {
          /** The ID of the required security problem. */
          id: string
        }
      }
      responses: {
        /** Success. The security problem has been muted. */
        200: unknown
        /** Not executed. The security problem is already muted. */
        204: never
      }
      /** The JSON body of the request. Contains the muting information. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Mute']
        }
      }
    }
  
    setRemediationItemMuteState: {
      parameters: {
        path: {
          /** The ID of the required security problem. */
          id: string
          /** The id of the remediation item. */
          itemId: string
        }
      }
      responses: {
        /** Success. The requested mute state has been applied to the remediation item. */
        200: unknown
        /** Not executed. The remediation item was previously put into the requested mute state by the same user with the same reason and comment. */
        204: never
      }
      /** The JSON body of the request. Contains the mute state information that should be applied. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['RemediationItemMuteStateChangeDto']
        }
      }
    }
  
    unmuteSecurityProblem: {
      parameters: {
        path: {
          /** The ID of the required security problem. */
          id: string
        }
      }
      responses: {
        /** Success. The security problem has been un-muted. */
        200: unknown
        /** Not executed. The security problem is already un-muted. */
        204: never
      }
      /** The JSON body of the request. Contains the un-muting information. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Unmute']
        }
      }
    }
  
    getActiveEnvironmentConfiguration: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    updateExtensionEnvironmentConfiguration: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
        }
      }
      responses: {
        /** Success. Environment configuration updated. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** The version of the requested environment configuration. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
        }
      }
    }
  
    activateExtensionEnvironmentConfiguration: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
        }
      }
      responses: {
        /** Success. Environment configuration created. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** The version of the requested environment configuration. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
        }
      }
    }
  
    deleteEnvironmentConfiguration: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
        }
      }
      responses: {
        /** Success. Environment configuration deactivated. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    extensionMonitoringConfigurations: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of extensions in a single response payload.
           *
           * The maximal allowed page size is 100.
           *
           * If not set, 20 is used.
           */
          pageSize?: number
          /** Filters the resulting set of configurations by extension 2.0 version. */
          version?: string
          /** Filters the resulting set of configurations by the active state. */
          active?: boolean
        }
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionMonitoringConfigurationsList']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    createMonitoringConfiguration: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['MonitoringConfigurationResponse'][]
          }
        }
        /** Multi-Status, if not all requests resulted in the same status */
        207: {
          content: {
            'application/json; charset=utf-8': string[]
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** JSON body of the request, containing monitoring configuration parameters. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['MonitoringConfigurationDto'][]
        }
      }
    }
  
    extensionConfigurationSchema: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
          /** The version of the requested extension 2.0 */
          extensionVersion: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SchemaDefinitionRestDto']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    extensionDetails: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
          /** The version of the requested extension 2.0 */
          extensionVersion: string
        }
        header: {
          /**
           * Accept header. Specifies part of the extension 2.0 that will be returned:
           * * application/json; charset=utf-8 - returns extension 2.0 metadata in JSON
           * * application/octet-stream - returns extension 2.0 zip package stored on the server.
           */
          Accept?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Extension']
            'application/octet-stream': OASSchemas['Extension']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
            'application/octet-stream': OASSchemas['ErrorEnvelope']
          }
        }
        /** Not acceptable */
        406: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
            'application/octet-stream': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    removeExtension: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
          /** The version of the requested extension 2.0 */
          extensionVersion: string
        }
      }
      responses: {
        /** Success. The extension 2.0 version has been deleted. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Extension']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    getEnvironmentConfigurationEvents: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
        }
        query: {
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two hours is used (`now-2h`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /** Content of the event */
          content?: string
          /** Status of the event */
          status?: 'ERROR' | 'INFO' | 'NONE' | 'WARN'
        }
      }
      responses: {
        /** List of the latest extension environment configuration events */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionEventsList']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    getExtensionMonitoringConfigurationEvents: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
          /** The ID of the requested monitoring configuration. */
          configurationId: string
        }
        query: {
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two hours is used (`now-2h`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * Host that uses this monitoring configuration.
           *
           * Example: `HOST-ABCDEF0123456789`
           */
          'dt.entity.host'?: string
          /**
           * Hexadecimal ID of Active Gate that uses this monitoring configuration.
           *
           * Example: `0x1a2b3c4d`
           */
          'dt.active_gate.id'?: string
          /**
           * Data source that uses this monitoring configuration.
           *
           * Example: `snmp`
           */
          'dt.extension.ds'?: string
          /** Content of the event */
          content?: string
          /** Status of the event */
          status?: 'ERROR' | 'INFO' | 'NONE' | 'WARN'
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionEventsList']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    getExtensionMonitoringConfigurationStatus: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
          /** The ID of the requested monitoring configuration. */
          configurationId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionStatusDto']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    getSchemaFile: {
      parameters: {
        path: {
          /** The version of the schema. */
          schemaVersion: string
          /** The name of the schema file. */
          fileName: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['JsonNode']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    listExtensionVersions: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of extensions in a single response payload.
           *
           * The maximal allowed page size is 100.
           *
           * If not set, 20 is used.
           */
          pageSize?: number
        }
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionList']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    listExtensions: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of extensions in a single response payload.
           *
           * The maximal allowed page size is 100.
           *
           * If not set, 20 is used.
           */
          pageSize?: number
          /** Filters the resulting set of extensions 2.0 by name. You can specify a partial name. In that case, the CONTAINS operator is used. */
          name?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionList']
          }
        }
      }
    }
  
    uploadExtension: {
      parameters: {
        query: {
          /** Only run validation but do not persist the extension even if validation was successful. */
          validateOnly?: boolean
        }
      }
      responses: {
        /** The extension is valid */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Extension']
          }
        }
        /** Success. The extension 2.0 has been uploaded. */
        201: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Extension']
          }
        }
        /** Failed. The input file is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Upload not possible yet, please try again in a few seconds. */
        409: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      requestBody: {
        content: {
          'multipart/form-data': {
            /**
             * Format: binary
             * @description Extension 2.0 zip file to upload.
             */
            file: string
          }
        }
      }
    }
  
    listSchemaFiles: {
      parameters: {
        path: {
          /** The version of the schema. */
          schemaVersion: string
        }
        header: {
          /**
           * Accept header. Specifies part of the extension 2.0 that will be returned:
           * * application/json; charset=utf-8 - returns extension 2.0 metadata in JSON
           * * application/octet-stream - returns extension 2.0 zip package stored on the server.
           */
          Accept?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SchemaFiles']
            'application/octet-stream': OASSchemas['SchemaFiles']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
            'application/octet-stream': OASSchemas['ErrorEnvelope']
          }
        }
        /** Not acceptable */
        406: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
            'application/octet-stream': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    listSchemas: {
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SchemasList']
          }
        }
      }
    }
  
    monitoringConfigurationDetails: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
          /** The ID of the requested monitoring configuration. */
          configurationId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ExtensionMonitoringConfiguration']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    updateMonitoringConfiguration: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
          /** The ID of the requested monitoring configuration. */
          configurationId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['MonitoringConfigurationResponse']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** JSON body of the request, containing monitoring configuration parameters. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['MonitoringConfigurationUpdateDto']
        }
      }
    }
  
    removeMonitoringConfiguration: {
      parameters: {
        path: {
          /** The name of the requested extension 2.0. */
          extensionName: string
          /** The ID of the requested monitoring configuration. */
          configurationId: string
        }
      }
      responses: {
        /** Success. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    closeProblem: {
      parameters: {
        path: {
          /** The ID of the required problem. */
          problemId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ProblemCloseResult']
          }
        }
        /** The problem is closed already the request hasn't been executed. */
        204: never
      }
      /** The JSON body of the request. Contains the closing comment on the problem. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ProblemCloseRequestDtoImpl']
        }
      }
    }
  
    getComments: {
      parameters: {
        path: {
          /** The ID of the required problem. */
          problemId: string
        }
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters except the optional **fields** parameter.
           */
          nextPageKey?: string
          /**
           * The amount of comments in a single response payload.
           *
           * The maximal allowed page size is 500.
           *
           * If not set, 10 is used.
           */
          pageSize?: number
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['CommentsList']
          }
        }
      }
    }
  
    createComment: {
      parameters: {
        path: {
          /** The ID of the required problem. */
          problemId: string
        }
      }
      responses: {
        /** Success. The comment has been added. */
        201: unknown
      }
      /** The JSON body of the request. Contains the comment to be added. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['CommentRequestDtoImpl']
        }
      }
    }
  
    getComment: {
      parameters: {
        path: {
          /** The ID of the required problem. */
          problemId: string
          /** The ID of the required comment. */
          commentId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Comment']
          }
        }
      }
    }
  
    updateComment: {
      parameters: {
        path: {
          /** The ID of the required problem. */
          problemId: string
          /** The ID of the required comment. */
          commentId: string
        }
      }
      responses: {
        /** Success. The comment has been updated. */
        204: never
      }
      /** The JSON body of the request. Contains the updated comment. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['CommentRequestDtoImpl']
        }
      }
    }
  
    deleteComment: {
      parameters: {
        path: {
          /** The ID of the required problem. */
          problemId: string
          /** The ID of the required comment. */
          commentId: string
        }
      }
      responses: {
        /** Success. The comment has been deleted. */
        204: never
      }
    }
  
    getProblem: {
      parameters: {
        path: {
          /** The ID of the required problem. */
          problemId: string
        }
        query: {
          /**
           * A list of additional problem properties you can add to the response.
           *
           * The following properties are available (all other properties are always included and you can't remove them from the response):
           *
           * * `evidenceDetails`: The details of the root cause.
           * * `impactAnalysis`: The impact analysis of the problem on other entities/users.
           * * `recentComments`: A list of the most recent comments to the problem.
           *
           * To add properties, specify them as a comma-separated list (for example, `evidenceDetails,impactAnalysis`).
           */
          fields?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Problem']
          }
        }
      }
    }
  
    getProblems: {
      parameters: {
        query: {
          /**
           * A list of additional problem properties you can add to the response.
           *
           * The following properties are available (all other properties are always included and you can't remove them from the response):
           *
           * * `evidenceDetails`: The details of the root cause.
           * * `impactAnalysis`: The impact analysis of the problem on other entities/users.
           * * `recentComments`: A list of the most recent comments to the problem.
           *
           * To add properties, specify them as a comma-separated list (for example, `evidenceDetails,impactAnalysis`).
           *
           *  The field is valid only for the current page of results. You must set it for each page you're requesting.
           */
          fields?: string
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters except the optional **fields** parameter.
           */
          nextPageKey?: string
          /**
           * The amount of problems in a single response payload.
           *
           * The maximal allowed page size is 500.
           *
           * If not set, 50 is used.
           */
          pageSize?: number
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two hours is used (`now-2h`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * Defines the scope of the query. Only problems matching the specified criteria are included into response.
           *
           * You can add one or several of the criteria listed below. For each criterion you can specify multiple comma-separated values, unless stated otherwise. If several values are specified, the **OR** logic applies. All values must be quoted.
           * * Status: `status("open")` or `status("closed")`. You can specify only one status.
           * * Severity level: `severityLevel("level-1","level-2")`. Find the possible values in the description of the **severityLevel** field of the response.
           * * Impact level: `impactLevel("level-11","level-2")` Find the possible values in the description of the **impactLevel** field of the response.
           * * Root cause entity: `rootCauseEntity("id-1", "id-2")`.
           * * Management zone ID: `managementZoneIds("mZId-1", "mzId-2")`.
           * * Management zone name: `managementZones("value-1","value-2")`.
           * * Impacted entities: `impactedEntities("id-1", "id-2")`.
           * * Affected entities: `affectedEntities("id-1", "id-2")`.
           * * Type of affected entities: `affectedEntityTypes("value-1","value-2")`.
           * * Problem ID: `problemId("id-1", "id-2")`.
           * * Alerting profile ID: `problemFilterIds("id-1", "id-2")`.
           * * Alerting profile name (contains, case-insensitive): `problemFilterNames("value-1","value-2")`.
           * * Alerting profile name (exact match, case-insensitive): `problemFilterNames.equals("value-1","value-2")`.
           * * Entity tags: `entityTags("[context]key:value","key:value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. If a value-only tag has a colon (`:`) in it, you must escape the colon with a backslash(`\`). Otherwise, the tag will be parsed as a `key:value tag`. All tag values are case-sensitive.
           * * Display ID of the problem: `displayId("id-1", "id-2")`.
           * * Under maintenance: `underMaintenance(true|false)`. Shows (true) or hides (false) all problems created during maintenance mode.
           * * Text search: `text("value")`. Text search on the following fields: problem title, event titles, displayId and the id of affected and impacted entities. The text search is case insensitive, partial matching and based on a relevance score. Therefore the `relevance` sort option should be used to get the most relevant problems first. The special characters `~` and `"` need to be escaped using a `~` (e.g. double quote search `text("~"")`).
           *
           * To set several criteria, separate them with a comma (`,`). Only results matching **all** criteria are included in the response.
           */
          problemSelector?: string
          /**
           * The entity scope of the query. You must set one of these criteria:
           *
           * * Entity type: `type("TYPE")`
           * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
           *
           * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
           *
           * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
           * * Management zone ID: `mzId(123)`
           * * Management zone name: `mzName("value")`
           * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
           * 	The following modifications are available:
           * 	* `entityName.equals`: changes the operator to `EQUALS`.
           * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
           * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
           * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
           * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
           * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
           * 	The following operators are available:
           * 	* `lte`: earlier than or at the specified time
           * 	* `lt`: earlier than the specified time
           * 	* `gte`: later than or at the specified time
           * 	* `gt`: later than the specified time
           * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
           * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
           * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
           *
           * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
           *
           * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
           *
           * The length of the string is limited to 10,000 characters.
           *
           * The maximum number of entities that may be selected is limited to 10000.
           */
          entitySelector?: string
          /**
           * Specifies a set of comma-separated (`,`) fields for sorting in the problem list.
           *
           * You can sort by the following properties with a sign prefix for the sorting order.
           *
           *  * `status`: problem status (`+` open problems first or `-` closed problems first)
           *  * `startTime`: problem start time (`+` old problems first or `-` new problems first)
           *  * `relevance`: problem relevance (`+` least relevant problems first or `-` most relevant problems first) - can be used only in combination with text search
           *
           * If no prefix is set, `+` is used.
           *
           * You can specify several levels of sorting. For example, `+status,-startTime` sorts problems by status, open problems first. Within the status, problems are sorted by start time, oldest first.
           */
          sort?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Problems']
          }
        }
      }
    }
  
    /**
     * Ingested logs are stored in the indexed log storage.
     *
     * This endpoint requires an ActiveGate with the **Log Analytics Collector** module enabled.
     */
    storeLog: {
      responses: {
        /** Only a part of input events were ingested due to event size limits or JSON parsing issues. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SuccessEnvelope']
          }
        }
        /** Success. Response doesn't have a body. */
        204: never
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. You can't add more logs to the storage, because you are out of [Davis Data Units](https://dt-url.net/dduLog) (DDU). Purchase additional DDUs. */
        402: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. This may happen when no ActiveGate is available with the Log Analytics Collector module enabled. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The server either does not recognize the request method, or it lacks the ability to fulfil the request. May happen when indexed log storage is not enabled. */
        501: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /**
       * The body of the request. Contains one or more log events to be ingested.
       *
       * The endpoint accepts one of the following payload types, defined by the **Accept** header:
       *
       * * `text/plain`: supports only one log event.
       * * `application/json`: supports multiple log events in a single payload.
       */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['LogMessageJson']
          'text/plain; charset=utf-8': OASSchemas['LogMessagePlain']
        }
      }
    }
  
    /**
     * Returns the aggregated number of occurrences of log values divided into time slots.
     *
     * It is possible that the timeframe covered by results exceeds the specified timeframe. In that case the request returns fewer time slots than specified in the **timeBuckets** query parameter.
     */
    getLogHistogramData: {
      parameters: {
        query: {
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two weeks is used (`now-2w`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * The log search query.
           *
           * The query must use the [Dynatrace search query language](https://dt-url.net/pe03s6f).
           *
           * The query has a limit of 20 relations (logical operators between simple expressions (`AND`, `OR`) or comparison operators (`=`, `!=`, `<`, `<=`, `>`, `>=`) in simple expressions).
           */
          query?: string
          /**
           * The number of time slots in the result.
           *
           * The query timeframe is divided equally into the specified number of slots.
           *
           * The minimum length of a slot is 1 ms.
           *
           * If not set, 1 is used.
           */
          timeBuckets?: number
          /**
           * The maximum number of values in each group.
           *
           * You can get up to 100 values per group.
           *
           * If not set, 10 is used.
           */
          maxGroupValues?: number
          /**
           * The groupings to be included in the response.
           *
           * You can specify several groups in the following format: `groupBy=status&groupBy=log.source`.
           *
           * If not set, all possible groups are returned. You can use this option to check for possible grouping values.
           *
           * Unique log data attributes (high-cardinality attributes) for example, `span_id` or `trace_id` cannot be used for grouping.
           */
          groupBy?: string[]
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['AggregatedLog']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /**
     * Returns the first *X* records (specified in the **limit** query parameter). Log records are sorted by the criteria specified in the **sort** query parameter.
     *
     * If the query is too large to be processed in a single request, it is divided into slices. In that case the first response contains the **nextSliceKey** cursor for the second slice. Use it in the **nextSliceKey** query parameter to obtain the second slice, which contains **nextSliceKey** cursor for the third slice, and so on.
     *
     * Results can be distributed unevenly between slices and some slices might be empty.
     */
    getLogRecords: {
      parameters: {
        query: {
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two weeks is used (`now-2w`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * The desired amount of log records.
           *
           * The maximal allowed limit is 1000.
           *
           * If not set, 1000 is used.
           */
          limit?: number
          /**
           * The log search query.
           *
           * The query must use the [Dynatrace search query language](https://dt-url.net/pe03s6f).
           *
           * The query has a limit of 20 relations (logical operators between simple expressions (`AND`, `OR`) or comparison operators (`=`, `!=`, `<`, `<=`, `>`, `>=`) in simple expressions).
           */
          query?: string
          /**
           * Defines the ordering of the log records.
           *
           * Each field has a sign prefix (+/-) for sorting order. If no sign prefix is set, then the `+` option will be applied.
           *
           * Currently, ordering is available only for the timestamp (+timestamp for the oldest records first, or -timestamp for the newest records first).
           *
           * When millisecond resolution provided by the timestamp is not enough, log records are sorted based on the order in which they appear in the log source (remote process writing to REST API endpoint or remote process from which logs are collected).
           */
          sort?: string
          /**
           * The cursor for the next slice of results. You can find it in the **nextSliceKey** field of the previous response.
           *
           * The first slice is always returned if you don't specify this parameter.
           *
           * If this parameter is set, all other query parameters are ignored.
           */
          nextSliceKey?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['LogRecordsList']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    ingest: {
      responses: {
        /** The provided metric data points are accepted and will be processed in the background. */
        202: unknown
        /** Some data points are invalid. Valid data points are accepted and will be processed in the background. */
        400: unknown
      }
      /** Data points, provided in the [line protocol](https://dt-url.net/5d63ic1). Each line represents a single data point. */
      requestBody: {
        content: {
          'text/plain; charset=utf-8': string
        }
      }
    }
  
    /** This endpoint can be targeted by OpenTelemetry exporters. Ingested traces are forwarded to the server. */
    ingestTrace: {
      responses: {
        /** The request has been received and will be processed. */
        200: unknown
        /** The request could not be processed. This may happen if the message is malformed. */
        400: unknown
        /** The request could not be processed due to an internal server error. */
        500: unknown
        /** The service is currently unavailable. This may happen if the module is paused. */
        503: unknown
      }
      /** An ExportTraceServiceRequest message in binary protobuf format. */
      requestBody: {
        content: {
          'application/x-protobuf': string[]
        }
      }
    }
  
    getReleases: {
      parameters: {
        query: {
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two weeks is used (`now-2w`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of Releases in a single response payload.
           *
           * The maximal allowed page size is 1000.
           *
           * If not set, 100 is used.
           */
          pageSize?: number
          /** Get your Releases (`false`) or a set of demo Releases (`true`). */
          demo?: boolean
          /**
           * Defines the scope of the query. Only Releases matching the provided criteria are included in the response.
           *
           * You can add one or several of the criteria listed below.
           * * ManagementZone: type(PROCESS_GROUP_INSTANCE),mzName("ManagementZone-A"). Filters for all releases in the given ManagementZone. The filter is case-sensitive.
           * * Monitoring state: monitoringState("Active") or monitoringState("Inactive"). You can specify only one monitoring state.
           * * Health state: healthState("HEALTHY") or healthState("UNHEALTHY"). You can specify only one health state.
           * * Name: entityName("name"). Filters for all releases that contain the given value in their name. The filter is case-insensitive.
           * * Entity ID: entityId("id").
           * * Product: releasesProduct("product"). Filters for all releases that contain the given value in their product. The filter is case-insensitive.
           * * Stage: releasesStage("stage"). Filters for all releases that contain the given value in their stage. The filter is case-insensitive.
           * * Version: releasesVersion("version"). Filters for all releases that contain the given value in their version. The filter is case-insensitive.
           *
           * To set several criteria, separate them with comma (,). Only results matching all criteria are included in the response.
           * e.g., .../api/v2/releases?releasesSelector=name("Server"),monitoringState("Active"),healthState("HEALTHY"),releasesVersion("1.0.7").
           *
           * The special characters ~ and " need to be escaped using a ~ (e.g. double quote search entityName("~"").
           */
          releasesSelector?: string
          /**
           * Specifies the field that is used for sorting the releases list.
           * The field has a sign prefix (+/-) which corresponds to the sorting order ('+' for ascending and '-' for descending). If no sign prefix is set, then the default ascending sorting order will be applied. You can sort by the following properties:
           * * 'product': Product name
           * * 'name': Release name
           * * 'stage': Stage name
           * * 'version': Version
           * * 'instances': Instances
           * * 'traffic': Traffic
           *
           * If not set, the ascending order sorting for name is applied.
           */
          sort?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Releases']
          }
        }
      }
    }
  
    getSettingsObjectByObjectId: {
      parameters: {
        path: {
          /** The ID of the required settings object. */
          objectId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObject']
          }
        }
        /** No object available for the given objectId */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
          }
        }
      }
    }
  
    putSettingsObjectByObjectId: {
      parameters: {
        path: {
          /** The ID of the required settings object. */
          objectId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
          }
        }
        /** Failed. Schema validation failed. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
          }
        }
        /** Failed. Conflicting resource. */
        409: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
          }
        }
      }
      /** The JSON body of the request. Contains updated parameters of the settings object. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectUpdate']
        }
      }
    }
  
    deleteSettingsObjectByObjectId: {
      parameters: {
        path: {
          /** The ID of the required settings object. */
          objectId: string
        }
        query: {
          /**
           * The update token of the object. You can use it to detect simultaneous modifications by different users.
           *
           * It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update.
           *
           * If omitted on update/deletion, the operation overrides the current value or deletes it without any checks.
           */
          updateToken?: string
        }
      }
      responses: {
        /** Success. Response doesn't have a body. */
        204: never
        /** Failed. Schema validation failed. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
          }
        }
        /** Failed. Conflicting resource. */
        409: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
          }
        }
      }
    }
  
    getSettingsObjects: {
      parameters: {
        query: {
          /**
           * A list of comma-separated schema IDs to which the requested objects belong.
           *
           * To load the first page, when the **nextPageKey** is not set, this parameter is required.
           */
          schemaIds?: string
          /**
           * A list of comma-separated scopes, that the requested objects target.
           *
           * The selection only matches objects directly targeting the specified scopes. For example, `environment` will not match objects that target a host within environment.
           *
           * To load the first page, when the **nextPageKey** is not set, this parameter is required.
           */
          scopes?: string
          /**
           * A list of fields to be included to the response. The provided set of fields replaces the default set.
           *
           *  Specify the required top-level fields, separated by commas (for example, `objectId,value`).
           */
          fields?: string
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of settings objects in a single response payload.
           *
           * The maximal allowed page size is 500.
           *
           * If not set, 100 is used.
           */
          pageSize?: number
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ObjectsList']
          }
        }
        /** Failed. The specified schema or scope is not found. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /** You can upload several objects at once. In that case each object returns its own response code. Check the response body for details. */
    postSettingsObjects: {
      parameters: {
        query: {
          /** If `true`, the request runs only validation of the submitted settings objects, without saving them. */
          validateOnly?: boolean
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse'][]
          }
        }
        /** Multi-status: different objects in the payload resulted in different statuses. */
        207: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse'][]
          }
        }
        /** Failed. Schema validation failed. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse'][]
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse'][]
          }
        }
        /** Failed. Conflicting resource. */
        409: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse'][]
          }
        }
      }
      /** The JSON body of the request. Contains the settings objects. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectCreate'][]
        }
      }
    }
  
    getAvailableSchemaDefinitions: {
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SchemaList']
          }
        }
      }
    }
  
    getSchemaDefinition: {
      parameters: {
        path: {
          /** The ID of the required schema. */
          schemaId: string
        }
        query: {
          /**
           * The version of the required schema.
           *
           *  If not set, the most recent version is returned.
           */
          schemaVersion?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SchemaDefinitionRestDto']
          }
        }
        /** Failed. The specified schema doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /**
     * By default the values are calculated for the SLO's own timeframe. You can use a custom timeframe:
     *
     * 1. Set the **timeFrame** parameter to `GTF`.
     * 2. Provide the timeframe in **from** and **to** parameters.
     */
    getSlo: {
      parameters: {
        query: {
          /**
           * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
           *
           * The first page is always returned if you don't specify the **nextPageKey** query parameter.
           *
           * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
           */
          nextPageKey?: string
          /**
           * The amount of SLOs in a single response payload.
           *
           * The maximal allowed page size is 10000.
           *
           * If not set, 10 is used.
           */
          pageSize?: number
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two weeks is used (`now-2w`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * The scope of the query. Only SLOs matching the provided criteria are included in the response.
           *
           * You can add one or several of the criteria listed below.
           * * ID: id("id"). Filters for an SLO with the given ID.
           * * Name: name("name"). Filters for an SLO with the given name. The filter is case-sensitive.
           * * Health state: healthState("HEALTHY") or healthState("UNHEALTHY"). You can specify only one health state.
           * * Text: text("value"). Filters for all SLOs that contain the given value in their name or description. The filter is case-insensitive.
           *
           * To set several criteria, separate them with comma (,). Only results matching all criteria are included in the response.
           * e.g., .../api/v2/slo?sloSelector=name("Service Availability"), .../api/v2/slo?sloSelector=id("id"), .../api/v2/slo?sloSelector=text("Description"),healthState("HEALTHY").
           *
           * The special characters ~ and " need to be escaped using a ~ (e.g. double quote search text("~"").
           */
          sloSelector?: string
          /**
           * The sorting of SLO entries:
           * * `name`: Names in ascending order.
           * * `-name`: Names in descending order.
           *
           * If not set, the ascending order is used.
           */
          sort?: string
          /**
           * The timeframe to calculate the SLO values:
           *
           * * `CURRENT`: SLO's own timeframe.
           * * `GTF`: timeframe specified by **from** and **to** parameters.
           *
           * If not set, the `CURRENT` value is used.
           */
          timeFrame?: 'CURRENT' | 'GTF'
          /** Only SLOs on the given page are included in the response. The first page has the index '1'. */
          pageIdx?: number
          /** Get your SLOs (`false`) or a set of demo SLOs (`true`). */
          demo?: boolean
          /** Get your SLOs without them being evaluated (`false`) or with evaluations (`true`) with maximum `pageSize` of 25. */
          evaluate?: boolean
          /** Get your enabled SLOs (`true`) or disabled ones (`false`) */
          enabledSlos?: boolean
          /** Get your global SLOs (`true`) regardless of the selected filter or filter them out (`false`). */
          showGlobalSlos?: boolean
        }
      }
      responses: {
        /** Success. The response contains the parameters and calculated values of the requested SLO. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SLOs']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    createSlo: {
      responses: {
        /** Success. The new SLO has been created. Response doesn't have a body. The **location** response header contains the ID of the new SLO. */
        201: unknown
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. Conflicting resource. */
        409: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Internal server error. */
        500: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** The JSON body of the request. Contains the parameters of the new SLO. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SloCreate']
        }
      }
    }
  
    /** If **from** and **to** parameters are provided, the SLO is calculated for that timeframe; otherwise the SLO's own timeframe is used. */
    getSloById: {
      parameters: {
        query: {
          /**
           * The start of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the relative timeframe of two weeks is used (`now-2w`).
           */
          from?: string
          /**
           * The end of the requested timeframe.
           *
           * You can use one of the following formats:
           * * Timestamp in UTC milliseconds.
           * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
           * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
           * You can also specify relative timeframe without an alignment: `now-NU`.
           * Supported time units for the relative timeframe are:
           *    * `m`: minutes
           *    * `h`: hours
           *    * `d`: days
           *    * `w`: weeks
           *    * `M`: months
           *    * `y`: years
           *
           * If not set, the current timestamp is used.
           */
          to?: string
          /**
           * The timeframe to calculate the SLO values:
           *
           * * `CURRENT`: SLO's own timeframe.
           * * `GTF`: timeframe specified by **from** and **to** parameters.
           *
           * If not set, the `CURRENT` value is used.
           */
          timeFrame?: 'CURRENT' | 'GTF'
        }
        path: {
          /** The ID of the required SLO. */
          id: string
        }
      }
      responses: {
        /** Success. The response contains the parameters and calculated values of the requested SLO. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SLO']
          }
        }
        /** Failed. The input is invalid. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    updateSloById: {
      parameters: {
        path: {
          /** The ID of the required SLO. */
          id: string
        }
      }
      responses: {
        /** Success */
        200: unknown
        /** Failed. The requested resource doesn't exist. */
        404: unknown
        /** Internal server error. */
        500: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
      /** The JSON body of the request. Contains the updated parameters of the SLO. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SloCreate']
        }
      }
    }
  
    deleteSlo: {
      parameters: {
        path: {
          /** The ID of the required SLO. */
          id: string
        }
      }
      responses: {
        /** Success. The SLO has been deleted. Response doesn't have a body. */
        204: never
        /** Failed. The requested resource doesn't exist. */
        404: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Failed. Conflicting resource. */
        409: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
        /** Internal server error. */
        500: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    getConfiguration: {
      responses: {
        /** Success. The response contains synthetic related parameters defined for whole tenant. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SyntheticConfigDto']
          }
        }
      }
    }
  
    updateConfiguration: {
      responses: {
        /** Success. The set of synthetic related parameters has been updated. Response doesn't have a body. */
        204: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SyntheticConfigDto']
          }
        }
      }
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SyntheticConfigDto']
        }
      }
    }
  
    getExecutionResult: {
      parameters: {
        path: {
          /** Identifier of the HTTP monitor for which last execution result is returned. */
          monitorId: string
          /** Defines the result type of the last HTTP monitor's execution. */
          resultType: 'SUCCESS' | 'FAILED'
        }
        query: {
          /** Filters the results to those executed by specified Synthetic location. Specify the ID of the location. */
          locationId?: string
        }
      }
      responses: {
        /** Success. The response contains detailed data. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['MonitorExecutionResults']
          }
        }
      }
    }
  
    getLocations: {
      parameters: {
        query: {
          /** Filters the resulting set of locations to those which are hosted on a specific cloud platform. */
          cloudPlatform?: 'AWS' | 'AZURE' | 'ALIBABA' | 'GOOGLE_CLOUD' | 'OTHER'
          /** Filters the resulting set of locations to those of a specific type. */
          type?: 'PUBLIC' | 'PRIVATE'
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SyntheticLocations']
          }
        }
      }
    }
  
    addLocation: {
      responses: {
        /** Success. The private location has been created. The response contains the ID of the new location. */
        201: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SyntheticLocationIdsDto']
          }
        }
      }
      /** The JSON body of the request. Contains parameters of the new private synthetic location. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['PrivateSyntheticLocation']
        }
      }
    }
  
    getLocation: {
      parameters: {
        path: {
          /** The Dynatrace entity ID of the required location. */
          locationId: string
        }
      }
      responses: {
        /** Success. The response contains parameters of the synthetic location. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SyntheticLocation']
          }
        }
      }
    }
  
    /** For public locations you can only change the location status. */
    updateLocation: {
      parameters: {
        path: {
          /** The Dynatrace entity ID of the synthetic location to be updated. */
          locationId: string
        }
      }
      responses: {
        /** Success. The location has been updated. Response doesn't have a body. */
        204: never
      }
      /** The JSON body of the request. Contains updated parameters of the location. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SyntheticLocationUpdate']
        }
      }
    }
  
    removeLocation: {
      parameters: {
        path: {
          /** The Dynatrace entity ID of the private synthetic location to be deleted. */
          locationId: string
        }
      }
      responses: {
        /** Success. The location has been deleted. Response doesn't have a body. */
        204: never
      }
    }
  
    getLocationsStatus: {
      responses: {
        /** Success. The response contains the public locations status. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['SyntheticPublicLocationsStatus']
          }
        }
      }
    }
  
    updateLocationsStatus: {
      responses: {
        /** Success. Locations status has been updated. */
        204: never
        /** Conflict. Public locations couldn't be disabled because there are monitors assigned to them. */
        409: unknown
      }
      /** The new status of public synthetic locations. */
      requestBody: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SyntheticPublicLocationsStatus']
        }
      }
    }
  
    getNode: {
      parameters: {
        path: {
          /** The ID of the required synthetic node. */
          nodeId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Node']
          }
        }
      }
    }
  
    getNodes: {
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Nodes']
          }
        }
      }
    }
  
    /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
    cancelRotation: {
      responses: {
        /** Success. Rotation process has been cancelled. The current tenant token remains valid. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['TenantTokenConfig']
          }
        }
        /** Failed. There is no ongoing rotation process. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
    finishRotation: {
      responses: {
        /** Success. The rotation process is completed. The **active** field of the response contains the new tenant token. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['TenantTokenConfig']
          }
        }
        /** No ongoing rotation process. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
    startRotation: {
      responses: {
        /** Success. The new tenant token is created and will replace the old one. The **active** field of the response contains the new tenant token. */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['TenantTokenConfig']
          }
        }
        /** Failed. Another rotation process is already in progress. */
        400: {
          content: {
            'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          }
        }
      }
    }
  
    unit: {
      parameters: {
        path: {
          /** The ID of the required unit. */
          unitId: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['Unit']
          }
        }
        /** Not found. The requested resource is not found or the query is incorrect. */
        404: unknown
      }
    }
  
    /** You can narrow down the output by providing filter criteria in the **unitSelector** field. */
    allUnits: {
      parameters: {
        query: {
          /**
           * Selects units to be included to the response. Available criteria:
           * * Compatibility: `compatibleTo("unit","display-format")`. Returns units that can be converted to the specified unit. The optional display format (`binary` or `decimal`) argument is supported by bit- and byte-based units and returns only units for the specified format.
           */
          unitSelector?: string
          /**
           * Defines the list of properties to be included in the response. The ID of the unit is **always** included. The following additional properties are available:
           *
           * * `displayName`: The display name of the unit.
           * * `symbol`: The symbol of the unit.
           * * `description`: A short description of the unit.
           *
           * By default, the ID, the display name, and the symbol are included.
           *
           * To add properties, list them with leading plus `+`. To exclude default properties, list them with leading minus `-`.
           *
           * To specify several properties, join them with a comma (for example `fields=+description,-symbol`).
           *
           * If you specify just one property, the response contains the unitId and the specified property. To return unit IDs only, specify `unitId` here.
           */
          fields?: string
        }
      }
      responses: {
        /** Success */
        200: {
          content: {
            'application/json; charset=utf-8': OASSchemas['UnitList']
          }
        }
      }
    }
  }
}

export interface OASPaths {
  '/activeGates/{agId}/autoUpdate': {
    get: OASOperations['getAutoUpdateConfigById']
    put: OASOperations['putAutoUpdateConfigById']
  }

  '/activeGates/{agId}/autoUpdate/validator': {
    post: OASOperations['validateAutoUpdateConfigById']
  }

  '/activeGates/autoUpdate': {
    get: OASOperations['getGlobalAutoUpdateConfigForTenant']
    put: OASOperations['putGlobalAutoUpdateConfigForTenant']
  }

  '/activeGates/autoUpdate/validator': {
    post: OASOperations['validateGlobalAutoUpdateConfigForTenant']
  }

  '/activeGates/updateJobs': {
    /** The response includes ActiveGates that have both completed (successful and failed) jobs and jobs in progress. */
    get: OASOperations['getAllUpdateJobList']
  }

  '/activeGates/{agId}/updateJobs': {
    /** The job can update the ActiveGate to the specified version or the latest available one. */
    get: OASOperations['getUpdateJobListByAgId']
    post: OASOperations['createUpdateJobForAg']
  }

  '/activeGates/{agId}/updateJobs/{jobId}': {
    get: OASOperations['getUpdateJobByJobIdForAg']
    delete: OASOperations['deleteUpdateJobByJobIdForAg']
  }

  '/activeGates/{agId}/updateJobs/validator': {
    post: OASOperations['validateUpdateJobForAg']
  }

  '/activeGates': {
    /** The response includes all ActiveGates that are currently connected to the environment or have been connected during last 2 hours. */
    get: OASOperations['getAllActiveGates']
  }

  '/activeGates/{agId}': {
    get: OASOperations['getOneActiveGateById']
  }

  '/entities': {
    /**
     * Lists entities observed within the specified timeframe along with their properties.
     *
     * When you query entities of the `SERVICE_METHOD` type, only the following requests are returned:
     *
     * * [Key requests](https://dt-url.net/a903u9s)
     * * Top X requests that are used for [baselining](https://dt-url.net/0j23uqb)
     * * Requests that have caused a [problem](https://dt-url.net/pf43uqg)
     *
     * You can limit the output by using pagination:
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     */
    get: OASOperations['getEntities']
  }

  '/entities/{entityId}': {
    get: OASOperations['getEntity']
  }

  '/entityTypes/{type}': {
    get: OASOperations['getEntityType']
  }

  '/entityTypes': {
    /**
     * You can limit the output by using pagination:
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     */
    get: OASOperations['getEntityTypes']
  }

  '/entities/custom': {
    post: OASOperations['pushCustomDevice']
  }

  '/events/ingest': {
    /** The ingestion of custom events consumes [Davis Data Units](https://dt-url.net/ddu) (DDUs) from the events pool. */
    post: OASOperations['createEvent']
  }

  '/events/{eventId}': {
    get: OASOperations['getEvent']
  }

  '/eventProperties': {
    get: OASOperations['getEventProperties']
  }

  '/eventProperties/{propertyKey}': {
    get: OASOperations['getEventProperty']
  }

  '/eventTypes/{eventType}': {
    get: OASOperations['getEventType']
  }

  '/eventTypes': {
    get: OASOperations['getEventTypes']
  }

  '/events': {
    get: OASOperations['getEvents']
  }

  '/metrics/{metricKey}': {
    get: OASOperations['metric']
    /** Deletion cannot be undone! You can't delete a metric if it has data points ingested within the last two hours. */
    delete: OASOperations['delete']
  }

  '/metrics': {
    /**
     * You can narrow down the output by selecting metrics in the **metricSelector** field.
     *
     * You can additionally limit the output by using pagination:
     *
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     *
     * 2. Then use the cursor from the **nextPageKey** field of the response in the **nextPageKey** query parameter to obtain subsequent pages. All other query parameters must be omitted.
     */
    get: OASOperations['allMetrics']
  }

  '/metrics/query': {
    /**
     * The following limits apply:
     * * The amount of aggregated data points in the response is limited to 1,000
     * * The amount of series in the response is limited to 1,000
     *    * The amount of data points per series is limited to 10,080 (minutes of one week)
     *    * The overall amount of data points is limited to 100,000
     */
    get: OASOperations['query']
  }

  '/networkZones/{id}': {
    get: OASOperations['getSingleNetworkZone']
    /**
     * If the network zone with the specified ID does not exist, a new network zone is created.
     *
     *  The ID is not case sensitive. Dynatrace stores the ID in lowercase.
     */
    put: OASOperations['createOrUpdateNetworkZone']
    /**
     * You can only delete an empty network zone (a zone that no ActiveGate or OneAgent is using).
     *
     *  If the network zone is used as an alternative zone for any OneAgent, it will be automatically removed from the list of possible alternatives.
     */
    delete: OASOperations['deleteNetworkZone']
  }

  '/networkZones': {
    get: OASOperations['getAllNetworkZones']
  }

  '/networkZones/{id}/hostConnectionStatistics': {
    get: OASOperations['getHostStats']
  }

  '/networkZoneSettings': {
    get: OASOperations['getNetworkZoneSettings']
    put: OASOperations['updateNetworkZoneSettings']
  }

  '/tags': {
    /** Automatically applied tags and imported tags are not included. */
    get: OASOperations['getTags']
    /** All existing tags remain unaffected. */
    post: OASOperations['postTags']
    delete: OASOperations['deleteTags']
  }

  '/activeGateTokens': {
    /**
     * You can limit the output by using pagination:
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     */
    get: OASOperations['listTokens']
    /** The newly created token will be owned by the same user who owns the token used for authentication of the call. */
    post: OASOperations['createToken']
  }

  '/activeGateTokens/{tokenIdentifier}': {
    /** The token secret is **not** exposed. */
    get: OASOperations['getToken']
    delete: OASOperations['revokeToken']
  }

  '/apiTokens': {
    /**
     * You can limit the output by using pagination:
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     */
    get: OASOperations['listApiTokens']
    /** The newly created token will be owned by the same user who owns the token used for authentication of the call. */
    post: OASOperations['createApiToken']
  }

  '/apiTokens/{id}': {
    /** The token secret is **not** exposed. */
    get: OASOperations['getApiToken']
    put: OASOperations['updateApiToken']
    delete: OASOperations['deleteApiToken']
  }

  '/apiTokens/lookup': {
    post: OASOperations['lookupApiToken']
  }

  '/auditlogs/{id}': {
    get: OASOperations['getLog']
  }

  '/auditlogs': {
    /**
     * You can limit the output by using pagination:
     * 1. Specify the number of results per page in the **pageSize** query parameter.
     * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     */
    get: OASOperations['getLogs']
  }

  '/davis/securityAdvices': {
    /** You can narrow down the output by providing the management zone and pagination. If you specify a management zone, only problems originating from that zone are included to the request. */
    get: OASOperations['getAdviceForSecurityProblems']
  }

  '/securityProblems/{id}/remediationItems': {
    get: OASOperations['getRemediationItems']
  }

  '/securityProblems/{id}': {
    get: OASOperations['getSecurityProblem']
  }

  '/securityProblems': {
    get: OASOperations['getSecurityProblems']
  }

  '/securityProblems/{id}/mute': {
    post: OASOperations['muteSecurityProblem']
  }

  '/securityProblems/{id}/remediationItems/{itemId}/muteState': {
    put: OASOperations['setRemediationItemMuteState']
  }

  '/securityProblems/{id}/unmute': {
    post: OASOperations['unmuteSecurityProblem']
  }

  '/extensions/{extensionName}/environmentConfiguration': {
    get: OASOperations['getActiveEnvironmentConfiguration']
    put: OASOperations['updateExtensionEnvironmentConfiguration']
    post: OASOperations['activateExtensionEnvironmentConfiguration']
    delete: OASOperations['deleteEnvironmentConfiguration']
  }

  '/extensions/{extensionName}/monitoringConfigurations': {
    get: OASOperations['extensionMonitoringConfigurations']
    post: OASOperations['createMonitoringConfiguration']
  }

  '/extensions/{extensionName}/{extensionVersion}/schema': {
    get: OASOperations['extensionConfigurationSchema']
  }

  '/extensions/{extensionName}/{extensionVersion}': {
    get: OASOperations['extensionDetails']
    delete: OASOperations['removeExtension']
  }

  '/extensions/{extensionName}/environmentConfiguration/events': {
    get: OASOperations['getEnvironmentConfigurationEvents']
  }

  '/extensions/{extensionName}/monitoringConfigurations/{configurationId}/events': {
    get: OASOperations['getExtensionMonitoringConfigurationEvents']
  }

  '/extensions/{extensionName}/monitoringConfigurations/{configurationId}/status': {
    get: OASOperations['getExtensionMonitoringConfigurationStatus']
  }

  '/extensions/schemas/{schemaVersion}/{fileName}': {
    get: OASOperations['getSchemaFile']
  }

  '/extensions/{extensionName}': {
    get: OASOperations['listExtensionVersions']
  }

  '/extensions': {
    get: OASOperations['listExtensions']
    post: OASOperations['uploadExtension']
  }

  '/extensions/schemas/{schemaVersion}': {
    get: OASOperations['listSchemaFiles']
  }

  '/extensions/schemas': {
    get: OASOperations['listSchemas']
  }

  '/extensions/{extensionName}/monitoringConfigurations/{configurationId}': {
    get: OASOperations['monitoringConfigurationDetails']
    put: OASOperations['updateMonitoringConfiguration']
    delete: OASOperations['removeMonitoringConfiguration']
  }

  '/problems/{problemId}/close': {
    post: OASOperations['closeProblem']
  }

  '/problems/{problemId}/comments': {
    get: OASOperations['getComments']
    post: OASOperations['createComment']
  }

  '/problems/{problemId}/comments/{commentId}': {
    get: OASOperations['getComment']
    put: OASOperations['updateComment']
    delete: OASOperations['deleteComment']
  }

  '/problems/{problemId}': {
    get: OASOperations['getProblem']
  }

  '/problems': {
    get: OASOperations['getProblems']
  }

  '/logs/ingest': {
    /**
     * Ingested logs are stored in the indexed log storage.
     *
     * This endpoint requires an ActiveGate with the **Log Analytics Collector** module enabled.
     */
    post: OASOperations['storeLog']
  }

  '/logs/aggregate': {
    /**
     * Returns the aggregated number of occurrences of log values divided into time slots.
     *
     * It is possible that the timeframe covered by results exceeds the specified timeframe. In that case the request returns fewer time slots than specified in the **timeBuckets** query parameter.
     */
    get: OASOperations['getLogHistogramData']
  }

  '/logs/search': {
    /**
     * Returns the first *X* records (specified in the **limit** query parameter). Log records are sorted by the criteria specified in the **sort** query parameter.
     *
     * If the query is too large to be processed in a single request, it is divided into slices. In that case the first response contains the **nextSliceKey** cursor for the second slice. Use it in the **nextSliceKey** query parameter to obtain the second slice, which contains **nextSliceKey** cursor for the third slice, and so on.
     *
     * Results can be distributed unevenly between slices and some slices might be empty.
     */
    get: OASOperations['getLogRecords']
  }

  '/metrics/ingest': {
    post: OASOperations['ingest']
  }

  '/otlp/v1/traces': {
    /** This endpoint can be targeted by OpenTelemetry exporters. Ingested traces are forwarded to the server. */
    post: OASOperations['ingestTrace']
  }

  '/releases': {
    get: OASOperations['getReleases']
  }

  '/settings/objects/{objectId}': {
    get: OASOperations['getSettingsObjectByObjectId']
    put: OASOperations['putSettingsObjectByObjectId']
    delete: OASOperations['deleteSettingsObjectByObjectId']
  }

  '/settings/objects': {
    get: OASOperations['getSettingsObjects']
    /** You can upload several objects at once. In that case each object returns its own response code. Check the response body for details. */
    post: OASOperations['postSettingsObjects']
  }

  '/settings/schemas': {
    get: OASOperations['getAvailableSchemaDefinitions']
  }

  '/settings/schemas/{schemaId}': {
    get: OASOperations['getSchemaDefinition']
  }

  '/slo': {
    /**
     * By default the values are calculated for the SLO's own timeframe. You can use a custom timeframe:
     *
     * 1. Set the **timeFrame** parameter to `GTF`.
     * 2. Provide the timeframe in **from** and **to** parameters.
     */
    get: OASOperations['getSlo']
    post: OASOperations['createSlo']
  }

  '/slo/{id}': {
    /** If **from** and **to** parameters are provided, the SLO is calculated for that timeframe; otherwise the SLO's own timeframe is used. */
    get: OASOperations['getSloById']
    put: OASOperations['updateSloById']
    delete: OASOperations['deleteSlo']
  }

  '/synthetic/config': {
    get: OASOperations['getConfiguration']
    put: OASOperations['updateConfiguration']
  }

  '/synthetic/execution/{monitorId}/{resultType}': {
    get: OASOperations['getExecutionResult']
  }

  '/synthetic/locations': {
    get: OASOperations['getLocations']
    post: OASOperations['addLocation']
  }

  '/synthetic/locations/{locationId}': {
    get: OASOperations['getLocation']
    /** For public locations you can only change the location status. */
    put: OASOperations['updateLocation']
    delete: OASOperations['removeLocation']
  }

  '/synthetic/locations/status': {
    get: OASOperations['getLocationsStatus']
    put: OASOperations['updateLocationsStatus']
  }

  '/synthetic/nodes/{nodeId}': {
    get: OASOperations['getNode']
  }

  '/synthetic/nodes': {
    get: OASOperations['getNodes']
  }

  '/tenantTokenRotation/cancel': {
    /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
    post: OASOperations['cancelRotation']
  }

  '/tenantTokenRotation/finish': {
    /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
    post: OASOperations['finishRotation']
  }

  '/tenantTokenRotation/start': {
    /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
    post: OASOperations['startRotation']
  }

  '/units/{unitId}': {
    get: OASOperations['unit']
  }

  '/units': {
    /** You can narrow down the output by providing filter criteria in the **unitSelector** field. */
    get: OASOperations['allUnits']
  }
}

export interface OASSchemas {
  /** @description Configuration of the ActiveGate auto-updates. */
  ActiveGateAutoUpdateConfig: {
    /**
     * @description The state of the ActiveGate auto-update: enabled, disabled, or inherited.
     *
     * If set to `INHERITED`, the setting is inherited from the global configuration set on the environment or Managed cluster level.
     * @example INHERITED
     * @enum {string}
     */
    setting: 'DISABLED' | 'ENABLED' | 'INHERITED'
    /**
     * @description The actual state of the ActiveGate auto-update.
     *
     * Applicable only if the **setting** parameter is set to `INHERITED`. In that case, the value is taken from the parent setting. Otherwise, it's just a duplicate of the **setting** value.
     * @example ENABLED
     * @enum {string}
     */
    effectiveSetting?: 'ENABLED' | 'DISABLED'
  }

  /** @description A list of constraint violations */
  ConstraintViolation: {
    /** @enum {string} */
    parameterLocation?: 'PATH' | 'PAYLOAD_BODY' | 'QUERY'
    location?: string
    message?: string
    path?: string
  }

  Error: {
    /** @description A list of constraint violations */
    constraintViolations?: OASSchemas['ConstraintViolation'][]
    /** @description The error message */
    message?: string
    /**
     * Format: int32
     * @description The HTTP status code
     */
    code?: number
  }

  ErrorEnvelope: {
    error?: OASSchemas['Error']
  }

  /** @description Global configuration of ActiveGates auto-update. */
  ActiveGateGlobalAutoUpdateConfig: {
    /**
     * @description The state of auto-updates for all ActiveGates connected to the environment or Managed cluster.
     *
     * This setting is inherited by all ActiveGates that have the `INHERITED` setting.
     * @enum {string}
     */
    globalSetting: 'ENABLED' | 'DISABLED'
    metadata?: OASSchemas['ConfigurationMetadata']
  }

  /** @description Metadata useful for debugging */
  ConfigurationMetadata: {
    /**
     * @description A sorted list of the version numbers of the configuration.
     * @example [
     *   4,
     *   2
     * ]
     */
    configurationVersions?: number[]
    /**
     * @description A sorted list of version numbers of the configuration.
     * @example [
     *   "1.0.4",
     *   "1.23"
     * ]
     */
    currentConfigurationVersions?: string[]
    /**
     * @description Dynatrace version.
     * @example 1.192.1
     */
    clusterVersion?: string
  }

  /** @description Configuration of the ActiveGate update job. */
  UpdateJob: {
    /**
     * @description The status of the update job.
     * @example SUCCEED
     * @enum {string}
     */
    jobState?:
      | 'FAILED'
      | 'IN_PROGRESS'
      | 'PENDING'
      | 'ROLLBACK'
      | 'SCHEDULED'
      | 'SKIPPED'
      | 'SUCCEED'
    /**
     * @description The method of updating the ActiveGate or its component.
     * @example AUTOMATIC
     * @enum {string}
     */
    updateMethod?: 'AUTOMATIC' | 'MANUAL_INSTALLATION' | 'ON_DEMAND'
    /**
     * @description The component to be updated.
     * @example ACTIVE_GATE
     * @enum {string}
     */
    updateType?: 'ACTIVE_GATE' | 'REMOTE_PLUGIN_AGENT' | 'SYNTHETIC' | 'Z_REMOTE'
    /**
     * @description The type of the ActiveGate.
     * @example ENVIRONMENT
     * @enum {string}
     */
    agType?: 'CLUSTER' | 'ENVIRONMENT' | 'ENVIRONMENT_MULTI'
    /**
     * @description The initial version of the ActiveGate.
     * @example 1.185.0.20200201-120000
     */
    startVersion?: string
    /** @description A list of environments (specified by IDs) the ActiveGate can connect to. */
    environments?: string[]
    /**
     * @description The ID of the update job.
     * @example -3524498778810258605
     */
    jobId?: string
    /**
     * Format: int64
     * @description The timestamp of the update job completion.
     *
     *  The `null` value means the job is still running.
     * @example 1582031917814
     */
    timestamp?: number
    /**
     * @description The job can (`true`) or can't (`false`) be cancelled at the moment.
     * @example false
     */
    cancelable?: boolean
    /**
     * Format: int64
     * @description The duration of the update, in milliseconds.
     * @example 3608000
     */
    duration?: number
    /**
     * @description The target version of the update.
     *
     * Specify the version in the `<major>.<minor>.<revision>.<timestamp>` format.
     *
     * To update to the latest available version, use the `latest` value.
     * @example 1.190.0.20200301-130000
     */
    targetVersion: string
    /** @description The information about update error. */
    error?: string
  }

  /** @description A list of update jobs of the ActiveGate. */
  UpdateJobList: {
    /**
     * @description The ID of the ActiveGate.
     * @example 0x3efdd092
     */
    agId?: string
    /** @description A list of update jobs of the ActiveGate. */
    updateJobs?: OASSchemas['UpdateJob'][]
  }

  /** @description A list of ActiveGates with update jobs. */
  UpdateJobsAll: {
    /** @description A list of ActiveGates with update jobs. */
    allUpdateJobs?: OASSchemas['UpdateJobList'][]
  }

  /** @description Parameters of the ActiveGate. */
  ActiveGate: {
    /**
     * @description The ID of the ActiveGate.
     * @example 0x3efdd091
     */
    id?: string
    /** @description A list of network addresses of the ActiveGate. */
    networkAddresses?: string[]
    /** @description A list of Load Balancer addresses of the ActiveGate. */
    loadBalancerAddresses?: string[]
    /**
     * @description The OS type that the ActiveGate is running on.
     * @example WINDOWS
     * @enum {string}
     */
    osType?: 'LINUX' | 'WINDOWS'
    /**
     * @description The current status of auto-updates of the ActiveGate.
     * @example OUTDATED
     * @enum {string}
     */
    autoUpdateStatus?:
      | 'INCOMPATIBLE'
      | 'OUTDATED'
      | 'SCHEDULED'
      | 'SUPPRESSED'
      | 'UNKNOWN'
      | 'UP2DATE'
      | 'UPDATE_IN_PROGRESS'
      | 'UPDATE_PENDING'
      | 'UPDATE_PROBLEM'
    /**
     * Format: int64
     * @description The timestamp since when the ActiveGate is offline.
     *
     *  The `null` value means the ActiveGate is online.
     * @example 1582031917814
     */
    offlineSince?: number
    /**
     * @description The current version of the ActiveGate in the `<major>.<minor>.<revision>.<timestamp>` format.
     * @example 1.185.0.20200201-120000
     */
    version?: string
    /**
     * @description The type of the ActiveGate.
     * @example ENVIRONMENT
     * @enum {string}
     */
    type?: 'CLUSTER' | 'ENVIRONMENT' | 'ENVIRONMENT_MULTI'
    /**
     * @description The name of the host the ActiveGate is running on.
     * @example exampleHostname
     */
    hostname?: string
    /**
     * @description The ID of the main environment for a multi-environment ActiveGate.
     * @example d1bf4a7e-666b-43af-9f45-718g98372e2f
     */
    mainEnvironment?: string
    /** @description A list of environments (specified by IDs) the ActiveGate can connect to. */
    environments?: string[]
    autoUpdateSettings?: OASSchemas['ActiveGateAutoUpdateConfig']
    /**
     * @description The network zone of the ActiveGate.
     * @example exampleNetworkZone
     */
    networkZone?: string
    /**
     * @description The group of the ActiveGate.
     * @example default
     */
    group?: string
    /** @description A list of modules of the ActiveGate. */
    modules?: OASSchemas['ActiveGateModule'][]
    /** @description ActiveGate is deployed in container (`true`) or not (`false`). */
    containerized?: boolean
    connectedHosts?: OASSchemas['ActiveGateConnectedHosts']
  }

  /** @description Information about hosts currently connected to the ActiveGate */
  ActiveGateConnectedHosts: {
    /**
     * Format: int32
     * @description The number of hosts currently connected to the ActiveGate
     * @example 150
     */
    number?: number
  }

  /** @description A list of ActiveGates. */
  ActiveGateList: {
    /** @description A list of ActiveGates. */
    activeGates?: OASSchemas['ActiveGate'][]
  }

  /** @description Information about ActiveGate module */
  ActiveGateModule: {
    /** @description The module is misconfigured (`true`) or not (`false`). */
    misconfigured?: boolean
    /** @description The version of the ActiveGate module. */
    version?: string
    /**
     * @description The type of ActiveGate module.
     * @example KUBERNETES
     * @enum {string}
     */
    type?:
      | 'AWS'
      | 'AZURE'
      | 'BEACON_FORWARDER'
      | 'CLOUD_FOUNDRY'
      | 'DB_INSIGHT'
      | 'EXTENSIONS_V1'
      | 'EXTENSIONS_V2'
      | 'KUBERNETES'
      | 'LOGS'
      | 'MEMORY_DUMPS'
      | 'METRIC_API'
      | 'ONE_AGENT_ROUTING'
      | 'OTLP_INGEST'
      | 'REST_API'
      | 'SYNTHETIC'
      | 'VMWARE'
      | 'Z_OS'
    /** @description The attributes of the ActiveGate module. */
    attributes?: { [key: string]: string }
    /** @description The module is enabled (`true`) or disabled (`false`). */
    enabled?: boolean
  }

  /** @description A list of monitored entities along with their properties. */
  EntitiesList: {
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /** @description A list of monitored entities. */
    entities?: OASSchemas['Entity'][]
  }

  /**
   * @description The properties of a monitored entity.
   * @example {
   *   "entityId": "HOST-06F288EE2A930951",
   *   "displayName": "my host",
   *   "icon": {
   *     "primaryIconType": "linux",
   *     "secondaryIconType": "microsoft-azure-signet",
   *     "customIconPath": "host"
   *   },
   *   "firstSeenTms": 1574697667547,
   *   "lastSeenTms": 1588242361417,
   *   "properties": {
   *     "bitness": 64,
   *     "monitoringMode": "FULL_STACK",
   *     "osType": "LINUX",
   *     "osArchitecture": "X86",
   *     "networkZoneId": "aws.us.east01",
   *     "cpuCores": 8
   *   },
   *   "tags": [
   *     {
   *       "context": "CONTEXTLESS",
   *       "key": "architecture",
   *       "value": "x86",
   *       "stringRepresentation": "architecture:x86"
   *     },
   *     {
   *       "context": "ENVIRONMENT",
   *       "key": "Infrastructure",
   *       "value": "Linux",
   *       "stringRepresentation": "[ENVIRONMENT]Infrastructure:Linux"
   *     }
   *   ],
   *   "managementZones": [
   *     {
   *       "id": "6239538939987181652",
   *       "name": "main app"
   *     }
   *   ],
   *   "fromRelationships": {
   *     "isInstanceOf": [
   *       {
   *         "id": "HOST_GROUP-0E489369D663A4BF",
   *         "type": "HOST_GROUP"
   *       }
   *     ]
   *   },
   *   "toRelationships": {
   *     "isDiskOf": [
   *       {
   *         "id": "DISK-0393340DCA3853B0",
   *         "type": "DISK"
   *       }
   *     ]
   *   }
   * }
   */
  Entity: {
    /** @description A list of relationships where the entity occupies the FROM position. */
    fromRelationships?: {
      [key: string]: OASSchemas['EntityId'][]
    }
    /** @description A list of relationships where the entity occupies the TO position. */
    toRelationships?: { [key: string]: OASSchemas['EntityId'][] }
    /** @description A set of management zones to which the entity belongs. */
    managementZones?: OASSchemas['ManagementZone'][]
    /** @description The ID of the entity. */
    entityId?: string
    /**
     * Format: int64
     * @description The timestamp at which the entity was first seen, in UTC milliseconds.
     */
    firstSeenTms?: number
    /**
     * Format: int64
     * @description The timestamp at which the entity was last seen, in UTC milliseconds.
     */
    lastSeenTms?: number
    /** @description A set of tags assigned to the entity. */
    tags?: OASSchemas['METag'][]
    /** @description A list of additional properties of the entity. */
    properties?: { [key: string]: { [key: string]: unknown } }
    /** @description The name of the entity, displayed in the UI. */
    displayName?: string
    icon?: OASSchemas['EntityIcon']
  }

  /** @description The icon of a monitored entity. */
  EntityIcon: {
    /**
     * @description The primary icon of the entity.
     *
     * Specified by the [barista](https://dt-url.net/u403suy) ID of the icon.
     */
    primaryIconType?: string
    /**
     * @description The secondary icon of the entity.
     *
     * Specified by the [barista](https://dt-url.net/u403suy) ID of the icon.
     */
    secondaryIconType?: string
    /**
     * @description The user-defined icon of the entity.
     *
     * Specify the [barista](https://dt-url.net/u403suy) ID of the icon or a URL of your own icon.
     */
    customIconPath?: string
  }

  /** @description A short representation of a monitored entity. */
  EntityId: {
    /** @description The ID of the entity. */
    id?: string
    /** @description The type of the entity. */
    type?: string
  }

  /** @description The tag of a monitored entity. */
  METag: {
    /** @description The string representation of the tag. */
    stringRepresentation?: string
    /** @description The value of the tag. */
    value?: string
    /** @description The key of the tag. */
    key?: string
    /**
     * @description The origin of the tag, such as AWS or Cloud Foundry.
     *
     *  Custom tags use the `CONTEXTLESS` value.
     */
    context?: string
  }

  /** @description A short representation of a management zone. */
  ManagementZone: {
    /** @description The name of the management zone. */
    name?: string
    /** @description The ID of the management zone. */
    id?: string
  }

  /**
   * @description A list of properties of the monitored entity type.
   * @example {
   *   "type": "HOST",
   *   "entityLimitExceeded": "false",
   *   "properties": [
   *     {
   *       "id": "BITNESS",
   *       "type": "Enum"
   *     },
   *     {
   *       "id": "CPU_CORES",
   *       "type": "Number"
   *     }
   *   ],
   *   "tags": "placeholder for tags",
   *   "managementZones": "placeholder for management zones",
   *   "fromRelationships": [
   *     {
   *       "id": "RUNS_ON_RESOURCE",
   *       "toTypes": [
   *         "CUSTOM_DEVICE"
   *       ]
   *     },
   *     {
   *       "id": "IS_NETWORK_CLIENT_OF_HOST",
   *       "toTypes": [
   *         "HOST",
   *         "CUSTOM_DEVICE"
   *       ]
   *     }
   *   ],
   *   "toRelationships": [
   *     {
   *       "id": "IS_DISK_OF",
   *       "fromTypes": [
   *         "DISK"
   *       ]
   *     },
   *     {
   *       "id": "IS_SITE_OF",
   *       "fromTypes": [
   *         "VMWARE_DATACENTER",
   *         "GEOLOC_SITE"
   *       ]
   *     }
   *   ]
   * }
   */
  EntityType: {
    /** @description A list of possible relationships where the monitored entity type occupies the FROM position */
    fromRelationships?: OASSchemas['ToPosition'][]
    /** @description A list of possible relationships where the monitored entity type occupies the TO position. */
    toRelationships?: OASSchemas['FromPosition'][]
    /** @description The placeholder for the list of management zones of an actual entity. */
    managementZones?: string
    /** @description The dimension key used within metrics for this monitored entity. */
    dimensionKey?: string
    /** @description Whether the entity creation limit for the given type has been exceeded */
    entityLimitExceeded?: boolean
    /** @description The placeholder for the list of tags of an actual entity. */
    tags?: string
    /** @description A list of additional properties of the monitored entity type. */
    properties?: OASSchemas['EntityTypePropertyDto'][]
    /** @description The type of the monitored entity. */
    type?: string
    /** @description The display name of the monitored entity. */
    displayName?: string
  }

  /** @description The property of a monitored entity. */
  EntityTypePropertyDto: {
    /**
     * @description The ID of the property.
     * @example cpuCores
     */
    id?: string
    /**
     * @description The type of the property.
     * @example Number
     */
    type?: string
    /**
     * @description The display-name of the property.
     * @example cpu cores
     */
    displayName?: string
  }

  /** @description The FROM position of a relationship. */
  FromPosition: {
    /** @description A list of monitored entity types that can occupy the FROM position. */
    fromTypes?: string[]
    /** @description The ID of the relationship. */
    id?: string
  }

  /** @description The TO position of a relationship. */
  ToPosition: {
    /** @description A list of monitored entity types that can occupy the TO position. */
    toTypes?: string[]
    /** @description The ID of the relationship. */
    id?: string
  }

  /** @description A list of properties of all available entity types. */
  EntityTypeList: {
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /** @description The list of meta information for all available entity-types */
    types?: OASSchemas['EntityType'][]
  }

  /** @description The short representation of a newly created custom device. */
  CustomDeviceCreationResult: {
    /** @description The Dynatrace entity ID of the custom device. */
    entityId?: string
    /** @description The Dynatrace entity ID of the custom device group. */
    groupId?: string
  }

  /**
   * @description Configuration of a custom device.
   * @example {
   *   "customDeviceId": "customDeviceId",
   *   "displayName": "coffeeMachine",
   *   "group": "myCustomDeviceGroup",
   *   "ipAddresses": [
   *     "10.0.0.1"
   *   ],
   *   "listenPorts": [
   *     80
   *   ],
   *   "faviconUrl": "https://www.freefavicon.com/freefavicons/food/cup-of-coffee-152-78475.png",
   *   "configUrl": "http://coffee-machine.dynatrace.internal.com/coffeemachine/manage",
   *   "type": "coffee machine",
   *   "properties": {},
   *   "dnsNames": [
   *     "coffee-machine.dynatrace.internal.com"
   *   ]
   * }
   */
  CustomDeviceCreation: {
    /**
     * @description The internal ID of the custom device.
     *
     *  If you use the ID of an existing device, the respective parameters will be updated.
     */
    customDeviceId: string
    /** @description The name of the custom device to be displayed in the user interface. */
    displayName: string
    /**
     * @description User defined group ID of entity.
     *
     * The group ID helps to keep a consistent picture of device-group relations. One of many cases where a proper group is important is service detection: you can define which custom devices should lead to the same service by defining the same group ID for them.
     *
     * If you set a group ID, it will be hashed into the Dynatrace entity ID of the custom device. In that case the custom device can only be part of one custom device group.
     *
     * If you don't set the group ID, Dynatrace will create it based on the ID or type of the custom device. Also, the group will not be hashed into the device ID which means the device may switch groups.
     */
    group?: string
    /**
     * @description The list of IP addresses that belong to the custom device.
     *
     * These addresses are used to automatically discover the horizontal communication relationship between this component and all other observed components within Smartscape. Once a connection is discovered, it is automatically mapped and shown within Smartscape.
     *
     * If you send a value (including an empty value), the existing values will be overwritten.
     *
     * If you send `null` or omit this field, the existing values will be kept.
     */
    ipAddresses?: string[]
    /**
     * @description The list of ports the custom devices listens to.
     *
     * These ports are used to discover the horizontal communication relationship between this component and all other observed components within Smartscape.
     *
     * Once a connection is discovered, it is automatically mapped and shown within Smartscape.
     *
     * If ports are specified, you should also add at least one IP address or a DNS name for the custom device.
     *
     * If you send a value, the existing values will be overwritten.
     *
     * If you send `null`, or an empty value, or omit this field, the existing values will be kept.
     */
    listenPorts?: number[]
    /**
     * @description The technology type definition of the custom device.
     *
     * It must be the same technology type of the metric you're reporting.
     *
     * If you send a value, the existing value will be overwritten.
     *
     * If you send `null`, empty or omit this field, the existing value will be kept.
     */
    type?: string
    /** @description The icon to be displayed for your custom component within Smartscape. Provide the full URL of the icon file. */
    faviconUrl?: string
    /** @description The URL of a configuration web page for the custom device, such as a login page for a firewall or router. */
    configUrl?: string
    /** @description The list of key-value pair properties that will be shown beneath the infographics of your custom device. */
    properties?: { [key: string]: string }
    /**
     * @description The list of DNS names related to the custom device.
     *
     * These names are used to automatically discover the horizontal communication relationship between this component and all other observed components within Smartscape. Once a connection is discovered, it is automatically mapped and shown within Smartscape.
     *
     * If you send a value, the existing values will be overwritten.
     *
     * If you send `null` or an empty value; or omit this field, the existing values will be kept.
     */
    dnsNames?: string[]
    /** @enum {string} */
    messageType?:
      | 'CUSTOM_DEVICE'
      | 'DELETE_ENTITY_PER_TYPE'
      | 'FILTER_VALUE_SUGGESTIONS'
      | 'MULTI'
      | 'MULTI_TYPE'
      | 'SINGLE'
      | 'SINGLE_TYPE'
  }

  /** @description The result of a created event report. */
  EventIngestResult: {
    /**
     * @description The status of the ingestion.
     * @enum {string}
     */
    status?: 'INVALID_ENTITY_TYPE' | 'INVALID_METADATA' | 'INVALID_TIMESTAMPS' | 'OK'
    /** @description The correlation ID of the created event. */
    correlationId?: string
  }

  /** @description The results of an event ingest. */
  EventIngestResults: {
    /**
     * Format: int32
     * @description The number of created event reports.
     */
    reportCount?: number
    /** @description The result of each created event report. */
    eventIngestResults?: OASSchemas['EventIngestResult'][]
  }

  /** @description The configuration of an event to be ingested. */
  EventIngest: {
    /**
     * @description The type of the event.
     * @enum {string}
     */
    eventType:
      | 'AVAILABILITY_EVENT'
      | 'CUSTOM_ALERT'
      | 'CUSTOM_ANNOTATION'
      | 'CUSTOM_CONFIGURATION'
      | 'CUSTOM_DEPLOYMENT'
      | 'CUSTOM_INFO'
      | 'ERROR_EVENT'
      | 'MARKED_FOR_TERMINATION'
      | 'PERFORMANCE_EVENT'
      | 'RESOURCE_CONTENTION_EVENT'
    /** @description The title of the event. */
    title: string
    /**
     * Format: int64
     * @description The start time of the event, in UTC milliseconds.
     *
     * If not set, the current timestamp is used.
     */
    startTime?: number
    /**
     * Format: int64
     * @description The end time of the event, in UTC milliseconds.
     *
     * If not set, the start time plus timeout is used.
     */
    endTime?: number
    /**
     * Format: int32
     * @description The timeout of the event, in minutes.
     *
     * If not set, 15 is used.
     */
    timeout?: number
    /**
     * @description The [entity selector](https://dt-url.net/apientityselector), defining a set of Dynatrace entities to be associated with the event.
     *
     * Only entities that have been active within the last 24 hours can be selected.
     *
     *  If not set, the event is associated with the environment (`dt.entity.environment`) entity.
     */
    entitySelector?: string
    /**
     * @description A map of event properties.
     *
     * Keys with prefix `dt.*` are reserved and may be used to set event properties with predefined semantics within the Dynatrace product.
     * All other keys are interpreted as user-defined event properties.
     *
     * Values of Dynatrace-reserved properties (identified by a key with prefix `dt.*`) must fulfill the requirements of the respective property.
     */
    properties?: { [key: string]: string }
  }

  /** @description A short representation of a monitored entity. */
  EntityStub: {
    entityId?: OASSchemas['EntityId']
    /**
     * @description The name of the entity.
     *
     *  Not included in the response in case no entity with the relevant ID was found.
     */
    name?: string
  }

  /** @description Configuration of an event. */
  Event: {
    /**
     * @description The ID of the event.
     * @example 4293884258445543163_1564039524182
     */
    eventId?: string
    /** @description A list of all management zones that the event belongs to. */
    managementZones?: OASSchemas['ManagementZone'][]
    entityId?: OASSchemas['EntityStub']
    /**
     * @description The type of the event.
     * @example LOW_DISK_SPACE
     */
    eventType?: string
    /**
     * @description The alerting status during a [maintenance](https://dt-url.net/b2123rg0):
     *
     *  * `false`: Alerting works as usual.
     * * `true`: Alerting is disabled.
     */
    suppressAlert?: boolean
    /** @description If `true`, the event happened while the monitored system was under maintenance. */
    underMaintenance?: boolean
    /**
     * @description If `true`, the event happens [frequently](https://dt-url.net/4da3kdg).
     *
     *  A frequent event doesn't raise a problem.
     */
    frequentEvent?: boolean
    /**
     * @description The problem detection status during a [maintenance](https://dt-url.net/b2123rg0):
     *
     *  * `false`: Problem detection works as usual.
     * * `true`: Problem detection is disabled.
     */
    suppressProblem?: boolean
    /** @description A list of event properties. */
    properties?: OASSchemas['EventProperty'][]
    /**
     * @description The status of the event.
     * @example OPEN
     * @enum {string}
     */
    status?: 'CLOSED' | 'OPEN'
    /** @description A list of tags of the related entity. */
    entityTags?: OASSchemas['METag'][]
    /**
     * Format: int64
     * @description The timestamp when the event was raised, in UTC milliseconds.
     * @example 1564039524182
     */
    startTime?: number
    /**
     * Format: int64
     * @description The timestamp when the event was closed, in UTC milliseconds.
     *
     *  Has the value of `null` if the event is still active.
     * @example 1564039524182
     */
    endTime?: number
    /**
     * @description The correlation ID of the event.
     * @example 933613657e1c8fcf
     */
    correlationId?: string
    /**
     * @description The title of the event.
     * @example High CPU load on host X
     */
    title?: string
  }

  /** @description A property of an event. */
  EventProperty: {
    /** @description The value of the event property. */
    value?: string
    /** @description The key of the event property. */
    key?: string
  }

  /** @description Configuration of an event property. */
  EventPropertyDetail: {
    /**
     * @description The event property key.
     * @example dt.event.description
     */
    key?: string
    /**
     * @description The display name of the event property.
     * @example Custom description
     */
    displayName?: string
    /** @description A short description of the event property. */
    description?: string
    /** @description Indicates whether the property may be set during event ingestion. */
    writable?: boolean
  }

  /** @description A list of event properties. */
  EventPropertyDetails: {
    /** @description A list of event properties. */
    eventProperties?: OASSchemas['EventPropertyDetail'][]
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
  }

  /** @description Configuration of an event type. */
  EventType: {
    /**
     * @description The severity level associated with the event type.
     * @example PERFORMANCE
     * @enum {string}
     */
    severityLevel?:
      | 'AVAILABILITY'
      | 'CUSTOM_ALERT'
      | 'ERROR'
      | 'INFO'
      | 'MONITORING_UNAVAILABLE'
      | 'PERFORMANCE'
      | 'RESOURCE_CONTENTION'
    /**
     * @description The event type.
     * @example OSI_HIGH_CPU
     */
    type?: string
    /**
     * @description The display name of the event type.
     * @example High CPU
     */
    displayName?: string
    /** @description A short description of the event type. */
    description?: string
  }

  /** @description A list of event types. */
  EventTypeList: {
    /** @description A list of event types. */
    eventTypeInfos?: OASSchemas['EventType'][]
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
  }

  /** @description A list of events. */
  EventList: {
    /** @description A list of warnings. */
    warnings?: string[]
    /** @description A list of events. */
    events?: OASSchemas['Event'][]
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
  }

  /** @description The default aggregation of a metric. */
  MetricDefaultAggregation: {
    /**
     * @description The type of default aggregation.
     * @enum {string}
     */
    type?: 'auto' | 'avg' | 'count' | 'max' | 'median' | 'min' | 'percentile' | 'sum' | 'value'
    /**
     * Format: double
     * @description The percentile to be delivered. Valid values are between `0` and `100`.
     *
     * Applicable only to the `percentile` aggregation type.
     */
    parameter?: number
  }

  /**
   * @description The descriptor of a metric.
   * @example {
   *   "metricId": "builtin:host.cpu.user:splitBy(\"dt.entity.host\"):max:fold",
   *   "displayName": "CPU user",
   *   "description": "Percentage of user-space CPU time currently utilized, per host.",
   *   "unit": "Percent",
   *   "dduBillable": false,
   *   "created": 1597400123451,
   *   "lastWritten": 1597400717783,
   *   "entityType": [
   *     "HOST"
   *   ],
   *   "aggregationTypes": [
   *     "auto",
   *     "value"
   *   ],
   *   "transformations": [
   *     "filter",
   *     "fold",
   *     "limit",
   *     "merge",
   *     "names",
   *     "parents",
   *     "timeshift",
   *     "rate",
   *     "sort",
   *     "last",
   *     "splitBy"
   *   ],
   *   "defaultAggregation": {
   *     "type": "value"
   *   },
   *   "dimensionDefinitions": [
   *     {
   *       "key": "dt.entity.host",
   *       "name": "Host",
   *       "displayName": "Host",
   *       "index": 0,
   *       "type": "ENTITY"
   *     }
   *   ],
   *   "tags": [],
   *   "metricValueType": {
   *     "type": "unknown"
   *   },
   *   "dimensionCardinalities": [
   *     {
   *       "key": "dt.entity.host",
   *       "estimate": 20,
   *       "relative": 0.2
   *     }
   *   ],
   *   "latency": 1,
   *   "scalar": false
   * }
   */
  MetricDescriptor: {
    /**
     * @description The fully qualified key of the metric.
     *
     * If a transformation has been used it is reflected in the metric key.
     */
    metricId: string
    /**
     * Format: double
     * @description The minimum allowed value of the metric.
     *
     *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
     */
    minimumValue?: number
    /**
     * Format: double
     * @description The maximum allowed value of the metric.
     *
     *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
     */
    maximumValue?: number
    /**
     * Format: int64
     * @description The latency of the metric, in minutes.
     *
     *  The latency is the expected reporting delay (for example, caused by constraints of cloud vendors or other third-party data sources) between the observation of a metric data point and its availability in Dynatrace.
     *
     * The allowed value range is from 1 to 60 minutes.
     *
     *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
     */
    latency?: number
    /**
     * @description Indicates whether the metric expression resolves to a scalar (`true`) or to a series (`false`).
     * A scalar result always contains one data point. The amount of data points in a series result depends on the resolution you're using.
     */
    scalar?: boolean
    /** @description The metric selector that is used when querying a func: metric. */
    metricSelector?: string
    /** @description If 'true', resolution=Inf can be applied to the metric query. */
    resolutionInfSupported?: boolean
    /**
     * @description The raw value is stored in bits or bytes. The user interface can display it in these numeral systems:
     *
     * Binary: 1 MiB = 1024 KiB = 1,048,576 bytes
     *
     * Decimal: 1 MB = 1000 kB = 1,000,000 bytes
     *
     * If not set, the decimal system is used.
     *
     *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
     * @enum {string}
     */
    unitDisplayFormat?: 'binary' | 'decimal'
    /** @description The cardinalities of MINT metric dimensions. */
    dimensionCardinalities?: OASSchemas['MetricDimensionCardinality'][]
    /**
     * Format: int64
     * @description The timestamp when the metric was last written.
     *
     * Has the value of `null` for metric expressions or if the data has never been written.
     */
    lastWritten?: number
    metricValueType?: OASSchemas['MetricValueType']
    /**
     * @description The metric is (`true`) or is not (`false`) root cause relevant.
     *
     *  A root-cause relevant metric represents a strong indicator for a faulty component.
     *
     *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
     */
    rootCauseRelevant?: boolean
    /**
     * @description The metric is (`true`) or is not (`false`) impact relevant.
     *
     *  An impact-relevant metric is highly dependent on other metrics and changes because an underlying root-cause metric has changed.
     *
     *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
     */
    impactRelevant?: boolean
    /** @description List of admissible primary entity types for this metric. Can be used for the `type` predicate in the `entitySelector`. */
    entityType?: string[]
    /** @description The list of allowed aggregations for this metric. */
    aggregationTypes?: (
      | 'auto'
      | 'avg'
      | 'count'
      | 'max'
      | 'median'
      | 'min'
      | 'percentile'
      | 'sum'
      | 'value'
    )[]
    defaultAggregation?: OASSchemas['MetricDefaultAggregation']
    /**
     * @description The fine metric division (for example, process group and process ID for some process-related metric).
     *
     * For [ingested metrics](https://dt-url.net/5d63ic1), dimensions that doesn't have have any data within the last 15 days are omitted.
     */
    dimensionDefinitions?: OASSchemas['MetricDimensionDefinition'][]
    /**
     * @description If `true` the usage of metric consumes [Davis data units](https://dt-url.net/ddu).
     *
     *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
     */
    dduBillable?: boolean
    /**
     * @description The tags applied to the metric.
     *
     *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
     */
    tags?: string[]
    /**
     * Format: int64
     * @description The timestamp of metric creation.
     *
     * Built-in metrics and metric expressions have the value of `null`.
     */
    created?: number
    /** @description A list of potential warnings that affect this ID. For example deprecated feature usage etc. */
    warnings?: string[]
    /** @description The name of the metric in the user interface. */
    displayName?: string
    /** @description A short description of the metric. */
    description?: string
    /** @description Transform operators that could be appended to the current transformation list. */
    transformations?: (
      | 'asGauge'
      | 'default'
      | 'delta'
      | 'evaluateModel'
      | 'filter'
      | 'fold'
      | 'last'
      | 'lastReal'
      | 'limit'
      | 'merge'
      | 'names'
      | 'parents'
      | 'partition'
      | 'rate'
      | 'rollup'
      | 'setUnit'
      | 'smooth'
      | 'sort'
      | 'splitBy'
      | 'timeshift'
      | 'toUnit'
    )[]
    /** @description The unit of the metric. */
    unit?: string
  }

  /** @description The dimension cardinalities of a metric. */
  MetricDimensionCardinality: {
    /**
     * Format: int64
     * @description The cardinality estimate of the dimension.
     */
    estimate: number
    /**
     * Format: double
     * @description The relative cardinality of the dimension expressed as percentage
     */
    relative: number
    /**
     * @description The key of the dimension.
     *
     *  It must be unique within the metric.
     */
    key: string
  }

  /** @description The dimension of a metric. */
  MetricDimensionDefinition: {
    /** @description The name of the dimension. */
    name: string
    /**
     * @description The key of the dimension.
     *
     *  It must be unique within the metric.
     */
    key: string
    /**
     * @description The type of the dimension.
     * @enum {string}
     */
    type: 'ENTITY' | 'NUMBER' | 'OTHER' | 'STRING' | 'VOID'
    /** @description The display name of the dimension. */
    displayName: string
    /**
     * Format: int32
     * @description The unique 0-based index of the dimension.
     *
     *  Appending transformations such as :names or :parents may change the indexes of dimensions. `null` is used for the dimensions of a metric with flexible dimensions, which can be referenced with their dimension key, but do not have an intrinsic order that could be used for the index.
     */
    index: number
  }

  /** @description The value type for the metric. */
  MetricValueType: {
    /**
     * @description The metric value type
     * @enum {string}
     */
    type: 'error' | 'score' | 'unknown'
  }

  /**
   * @description A list of metrics along with their descriptors.
   * @example {
   *   "totalCount": 3,
   *   "nextPageKey": "ABCDEFABCDEFABCDEF_",
   *   "metrics": [
   *     {
   *       "metricId": "builtin:host.cpu.user:splitBy(\"dt.entity.host\"):max:fold",
   *       "displayName": "CPU user",
   *       "description": "Percentage of user-space CPU time currently utilized, per host.",
   *       "unit": "Percent",
   *       "dduBillable": false,
   *       "created": 1597400123451,
   *       "lastWritten": 1597400717783,
   *       "entityType": [
   *         "HOST"
   *       ],
   *       "aggregationTypes": [
   *         "auto",
   *         "value"
   *       ],
   *       "transformations": [
   *         "filter",
   *         "fold",
   *         "limit",
   *         "merge",
   *         "names",
   *         "parents",
   *         "timeshift",
   *         "rate",
   *         "sort",
   *         "last",
   *         "splitBy"
   *       ],
   *       "defaultAggregation": {
   *         "type": "value"
   *       },
   *       "dimensionDefinitions": [
   *         {
   *           "key": "dt.entity.host",
   *           "name": "Host",
   *           "displayName": "Host",
   *           "index": 0,
   *           "type": "ENTITY"
   *         }
   *       ],
   *       "tags": [],
   *       "metricValueType": {
   *         "type": "unknown"
   *       }
   *     },
   *     {
   *       "metricId": "builtin:host.cpu.user:splitBy()",
   *       "displayName": "CPU user",
   *       "description": "Percentage of user-space CPU time currently utilized, per host.",
   *       "unit": "Percent",
   *       "dduBillable": false,
   *       "created": 1597400123451,
   *       "lastWritten": 1597400717783,
   *       "entityType": [
   *         "HOST"
   *       ],
   *       "aggregationTypes": [
   *         "auto",
   *         "value"
   *       ],
   *       "transformations": [
   *         "filter",
   *         "fold",
   *         "limit",
   *         "merge",
   *         "names",
   *         "parents",
   *         "timeshift",
   *         "rate",
   *         "sort",
   *         "last",
   *         "splitBy"
   *       ],
   *       "defaultAggregation": {
   *         "type": "value"
   *       },
   *       "dimensionDefinitions": [
   *         {
   *           "key": "dt.entity.host",
   *           "name": "Host",
   *           "displayName": "Host",
   *           "index": 0,
   *           "type": "ENTITY"
   *         }
   *       ],
   *       "tags": [],
   *       "metricValueType": {
   *         "type": "unknown"
   *       }
   *     }
   *   ]
   * }
   */
  MetricDescriptorCollection: {
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     */
    nextPageKey: string
    /**
     * Format: int64
     * @description The estimated number of metrics in the result.
     */
    totalCount: number
    /** @description A list of potential warnings about the query. For example deprecated feature usage etc. */
    warnings?: string[]
    /** @description A list of metric along with their descriptors */
    metrics: OASSchemas['MetricDescriptor'][]
  }

  /** @description Optional filters that took effect. */
  AppliedFilter: {
    /**
     * @description The keys of all metrics that this filter has been applied to.
     *
     * Can contain multiple metrics for complex expressions and always at least one key.
     */
    appliedTo: string[]
    filter?: OASSchemas['Filter']
  }

  /** @description A dimensional or series filter on a metric. */
  Filter: {
    rollup?: OASSchemas['Rollup']
    /** @description If the type applies to n dimensions, then holds the target dimensions. Currently only used for the `remainder` filter. */
    targetDimensions?: string[]
    /** @description For filters that match a dimension against a valkue, such as `eq` or `ne`, holds the value to compare the dimension against. */
    referenceString?: string
    /** @description For the operands of `series` filters that match against a number, holds the number to compare against. */
    referenceValue?: number
    referenceInvocation?: OASSchemas['Invocation']
    /** @description If the type applies to a dimension, then holds the target dimension. */
    targetDimension?: string
    /**
     * @description Type of this filter, determines which other fields are present.Can be any of:
     * * `eq`,
     * * `ne`,
     * * `prefix`,
     * * `in`,
     * * `remainder`,
     * * `suffix`,
     * * `contains`,
     * * `existsKey`,
     * * `series`,
     * * `or`,
     * * `and`,
     * * `not`,
     * * `ge`,
     * * `gt`,
     * * `le`,
     * * `lt`,
     * * `otherwise`.
     * @enum {string}
     */
    type?:
      | 'and'
      | 'contains'
      | 'eq'
      | 'existsKey'
      | 'ge'
      | 'gt'
      | 'in'
      | 'le'
      | 'lt'
      | 'ne'
      | 'not'
      | 'or'
      | 'otherwise'
      | 'prefix'
      | 'remainder'
      | 'series'
      | 'suffix'
    /** @description If the type is `not`, `and` or `or`, then holds the contained filters. */
    operands?: OASSchemas['Filter'][]
  }

  /** @description Invocation of a function, e.g. the `entitySelector` function. */
  Invocation: {
    /** @description Function that is invoked, e.g. `entitySelector`. */
    function?: string
    /** @description Arguments to pass to the function, e.g. entity selector source code. */
    args?: string[]
  }

  /**
   * @description A list of metrics and their data points.
   * @example {
   *   "totalCount": 3,
   *   "nextPageKey": "null",
   *   "resolution": "1h",
   *   "warnings": [
   *     "The contains filter transformation is deprecated and will be removed in a future release."
   *   ],
   *   "result": [
   *     {
   *       "metricId": "builtin:host.disk.avail",
   *       "data": [
   *         {
   *           "dimensions": [
   *             "HOST-F1266E1D0AAC2C3C",
   *             "DISK-F1266E1D0AAC2C3F"
   *           ],
   *           "timestamps": [
   *             3151435100000,
   *             3151438700000,
   *             3151442300000
   *           ],
   *           "values": [
   *             11.1,
   *             22.2,
   *             33.3
   *           ]
   *         },
   *         {
   *           "dimensions": [
   *             "HOST-F1266E1D0AAC2C3C",
   *             "DISK-F1266E1D0AAC2C3D"
   *           ],
   *           "timestamps": [
   *             3151435100000,
   *             3151438700000,
   *             3151442300000
   *           ],
   *           "values": [
   *             111.1,
   *             222.2,
   *             333.3
   *           ]
   *         }
   *       ]
   *     },
   *     {
   *       "metricId": "builtin:host.cpu.idle",
   *       "data": [
   *         {
   *           "dimensions": [
   *             "HOST-F1266E1D0AAC2C3C"
   *           ],
   *           "timestamps": [
   *             3151435100000,
   *             3151438700000,
   *             3151442300000
   *           ],
   *           "values": [
   *             1.1,
   *             2.2,
   *             3.3
   *           ]
   *         }
   *       ]
   *     }
   *   ]
   * }
   */
  MetricData: {
    /** @description Deprecated. This field is returned for compatibility reasons. It always has the value of `null`. */
    nextPageKey?: string
    /**
     * Format: int64
     * @description The total number of primary entities in the result.
     *
     * Has the `0` value if none of the requested metrics is suitable for pagination.
     */
    totalCount: number
    /** @description The timeslot resolution in the result. */
    resolution: string
    /** @description A list of warnings */
    warnings?: string[]
    /** @description A list of metrics and their data points. */
    result: OASSchemas['MetricSeriesCollection'][]
  }

  /**
   * @description Data points per dimension of a metric.
   *
   * The data is represented by two arrays of the same length: **timestamps** and **values**. Entries of the same index from both arrays form a timestamped data point.
   * @example {
   *   "dimensions": [
   *     "HOST-F1266E1D0AAC2C3C"
   *   ],
   *   "timestamps": [
   *     3151435100000,
   *     3151438700000,
   *     3151442300000
   *   ],
   *   "values": [
   *     1.1,
   *     2.2,
   *     3.3
   *   ]
   * }
   */
  MetricSeries: {
    dimensionMap: { [key: string]: string }
    /**
     * @description A list of timestamps of data points.
     *
     * The value of data point for each time from this array is located in **values** array at the same index.
     */
    timestamps: number[]
    /**
     * @description The ordered list of dimensions to which the data point list belongs.
     *
     *  Each metric can have a certain number of dimensions. Dimensions exceeding this number are aggregated into one, which is shown as `null` here.
     */
    dimensions: string[]
    /**
     * @description A list of values of data points.
     *
     * The timestamp of data point for each value from this array is located in **timestamps** array at the same index.
     */
    values: number[]
  }

  /**
   * @description Data points of a metric.
   * @example {
   *   "metricId": "builtin:host.disk.avail",
   *   "data": [
   *     {
   *       "dimensions": [
   *         "HOST-F1266E1D0AAC2C3C",
   *         "DISK-F1266E1D0AAC2C3F"
   *       ],
   *       "timestamps": [
   *         3151435100000,
   *         3151438700000,
   *         3151442300000
   *       ],
   *       "values": [
   *         11.1,
   *         22.2,
   *         33.3
   *       ]
   *     },
   *     {
   *       "dimensions": [
   *         "HOST-F1266E1D0AAC2C3C",
   *         "DISK-F1266E1D0AAC2C3D"
   *       ],
   *       "timestamps": [
   *         3151435100000,
   *         3151438700000,
   *         3151442300000
   *       ],
   *       "values": [
   *         111.1,
   *         222.2,
   *         333.3
   *       ]
   *     }
   *   ]
   * }
   */
  MetricSeriesCollection: {
    /**
     * @description The key of the metric.
     *
     * If any transformation is applied, it is included here.
     */
    metricId: string
    /** @description A list of filtered metric keys along with filters that have been applied to these keys, from the `optionalFilter` parameter. */
    appliedOptionalFilters?: OASSchemas['AppliedFilter'][]
    /** @description A list of potential warnings that affect this ID. For example deprecated feature usage etc. */
    warnings?: string[]
    /** @description Data points of the metric. */
    data: OASSchemas['MetricSeries'][]
  }

  /** @description A way of viewing a series as a single value for the purpose of sorting or series-based filters. */
  Rollup: {
    /** @enum {string} */
    type?: 'AUTO' | 'AVG' | 'MAX' | 'MEDIAN' | 'MIN' | 'PERCENTILE' | 'SUM'
    /** Format: double */
    parameter?: number
  }

  /**
   * @description The short representation of a Dynatrace entity.
   * @example {
   *   "id": "6a98d7bc-abb9-44f8-ae6a-73e68e71812a",
   *   "name": "Dynatrace entity",
   *   "description": "Dynatrace entity for the REST API example"
   * }
   */
  EntityShortRepresentation: {
    /** @description The ID of the Dynatrace entity. */
    id: string
    /** @description The name of the Dynatrace entity. */
    name?: string
    /** @description A short description of the Dynatrace entity. */
    description?: string
  }

  /** @description Configuration of a network zone. */
  NetworkZone: {
    /** @description A list of alternative network zones. */
    alternativeZones?: string[]
    /**
     * Format: int32
     * @description The number of OneAgents that are using ActiveGates in the network zone.
     */
    numOfOneAgentsUsing?: number
    /**
     * Format: int32
     * @description The number of OneAgents that are configured to use the network zone as primary.
     */
    numOfConfiguredOneAgents?: number
    /**
     * Format: int32
     * @description The number of OneAgents from other network zones that are using ActiveGates in the network zone.
     *
     *  This is a fraction of **numOfOneAgentsUsing**.
     *
     * One possible reason for switching to another zone is that a firewall is preventing a OneAgent from connecting to any ActiveGate in the preferred network zone.
     */
    numOfOneAgentsFromOtherZones?: number
    /**
     * Format: int32
     * @description The number of ActiveGates in the network zone.
     */
    numOfConfiguredActiveGates?: number
    /** @description The ID of the network zone */
    id?: string
    /** @description A short description of the network zone */
    description?: string
  }

  /** @description A list of network zones. */
  NetworkZoneList: {
    /** @description A list of network zones. */
    networkZones: OASSchemas['NetworkZone'][]
  }

  /** @description Runtime information about host connections. */
  NetworkZoneConnectionStatistics: {
    /** @description Hosts that use the network zone as an alternative. */
    hostsConnectedAsAlternative?: string[]
    /** @description Hosts from other zones that use the zone (not configured as an alternative) and **no** ActiveGates of higher priority are available. */
    hostsConnectedAsFailoverWithoutActiveGates?: string[]
    /** @description Hosts from other zones that use the zone (not configured as an alternative) even though ActiveGates of higher priority are available. */
    hostsConnectedAsFailover?: string[]
    /** @description Hosts from the network zone that use other zones. */
    hostsConfiguredButNotConnected?: string[]
  }

  /** @description Global network zone configuration. */
  NetworkZoneSettings: {
    /** @description Network zones feature is enabled (`true`) or disabled (`false`). */
    networkZonesEnabled?: boolean
  }

  /**
   * @description Deleted custom tag.
   * @example {
   *   "matchedEntitiesCount": 2
   * }
   */
  DeletedEntityTags: {
    /**
     * Format: int64
     * @description The number of monitored entities where the tag has been deleted.
     */
    matchedEntitiesCount?: number
  }

  /**
   * @description A list of custom tags.
   * @example {
   *   "totalCount": 2,
   *   "tags": [
   *     {
   *       "context": "CONTEXTLESS",
   *       "key": "mainApp",
   *       "stringRepresentation": "mainApp"
   *     },
   *     {
   *       "context": "CONTEXTLESS",
   *       "key": "bookings",
   *       "stringRepresentation": "bookings"
   *     }
   *   ]
   * }
   */
  CustomEntityTags: {
    /**
     * Format: int64
     * @description The total number of tags in the response.
     */
    totalCount?: number
    /** @description A list of custom tags. */
    tags: OASSchemas['METag'][]
  }

  /**
   * @description A list of custom tags added to monitored entities.
   * @example {
   *   "appliedTags": [
   *     {
   *       "context": "CONTEXTLESS",
   *       "key": "mainApp",
   *       "stringRepresentation": "mainApp"
   *     },
   *     {
   *       "context": "CONTEXTLESS",
   *       "key": "booking",
   *       "stringRepresentation": "booking"
   *     }
   *   ],
   *   "matchedEntitiesCount": 2
   * }
   */
  AddedEntityTags: {
    /**
     * Format: int64
     * @description The number of monitored entities where the tags have been added.
     */
    matchedEntitiesCount?: number
    /** @description A list of added custom tags. */
    appliedTags?: OASSchemas['METag'][]
  }

  /** @description The custom tag to be added to monitored entities. */
  AddEntityTag: {
    /** @description The value of the custom tag to be added to monitored entities. May be null */
    value?: string
    /** @description The key of the custom tag to be added to monitored entities. */
    key: string
  }

  /**
   * @description A list of tags to be added to monitored entities.
   * @example {
   *   "tags": [
   *     {
   *       "key": "mainApp"
   *     },
   *     {
   *       "key": "bookings",
   *       "value": "42"
   *     }
   *   ]
   * }
   */
  AddEntityTags: {
    /** @description A list of tags to be added to monitored entities. */
    tags: OASSchemas['AddEntityTag'][]
  }

  /** @description The newly created ActiveGate token. */
  ActiveGateTokenCreated: {
    /**
     * @description The ID of the token, consisting of prefix and public part of the token.
     * @example dt0g02.4KWZO5EF
     */
    id?: string
    /**
     * @description The secret of the token.
     * @example dt0g02.4KWZO5EF.XT47R5DRADJIZUFOX4UDNOKTSUSABGLN7XSMJG7UXHRXKNY4WLORH4OF4T75MG7E
     */
    token?: string
    /**
     * @description The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
     * @example 2020-11-24T08:15:30.144Z
     */
    expirationDate?: string
  }

  /** @description Parameters of a new ActiveGate token. */
  ActiveGateTokenCreate: {
    /**
     * @description The name of the token.
     * @example myToken
     */
    name: string
    /**
     * @description The expiration date of the token.
     *
     * You can use one of the following formats:
     * * Timestamp in UTC milliseconds.
     * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
     * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
     * You can also specify relative timeframe without an alignment: `now-NU`.
     * Supported time units for the relative timeframe are:
     *    * `m`: minutes
     *    * `h`: hours
     *    * `d`: days
     *    * `w`: weeks
     *    * `M`: months
     *    * `y`: years
     *
     * If not set, the token never expires.
     * @example now+14d
     */
    expirationDate?: string
    /**
     * @description The token is a seed token (`true`) or an individual token (`false`).
     *
     *  We recommend the individual token option (false).
     * @example false
     */
    seedToken?: boolean
    /**
     * @description The type of the ActiveGate for which the token is valid.
     * @enum {string}
     */
    activeGateType: 'ENVIRONMENT' | 'CLUSTER'
  }

  /** @description Metadata of an ActiveGate token. */
  ActiveGateToken: {
    /**
     * @description The ID of the token, consisting of [prefix and public part](https://dt-url.net/2903ss4) of the token.
     * @example dt0g02.4KWZO5EF
     */
    id?: string
    /**
     * @description The name of the token.
     * @example myToken
     */
    name?: string
    /**
     * @description The owner of the token.
     * @example john.smith
     */
    owner?: string
    /**
     * @description The token creation date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
     * @example 2020-11-22T08:15:30.144Z
     */
    creationDate?: string
    /**
     * @description The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
     *
     *  If not set, the token never expires.
     * @example 2020-11-24T08:15:30.144Z
     */
    expirationDate?: string
    /**
     * @description The token last used date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
     * @example 2020-11-23T08:15:30.144Z
     */
    lastUsedDate?: string
    /**
     * @description The token is a seed token (`true`) or an individual token (`false`).
     * @example false
     */
    seedToken?: boolean
    /**
     * @description The type of the ActiveGate for which the token is valid.
     * @enum {string}
     */
    activeGateType?: 'ENVIRONMENT' | 'CLUSTER'
  }

  /**
   * @description A list of ActiveGate tokens.
   * @example {
   *   "totalCount": 1000,
   *   "pageSize": 100,
   *   "nextPageKey": "AAAAAAAAAAAAAABOAAAAAAAAAAAAAAA6ACQAEAAAABgACgAITFdXQk1BRzYAAAhtZXRhZGF0YQB___-bf___m3iIYxfF7xVQvY72rwblQkcAAwAAAAAAAADHAAAAZA==",
   *   "activeGateTokens": {
   *     "id": "dt0g02.4KWZO5EF",
   *     "name": "myToken",
   *     "owner": "john.smith",
   *     "creationDate": "2020-11-22T08:15:30.144Z",
   *     "expirationDate": "2020-11-24T08:15:30.144Z",
   *     "lastUsedDate": "2020-11-23T08:15:30.144Z",
   *     "seedToken": "false",
   *     "activeGateType": "ENVIRONMENT"
   *   }
   * }
   */
  ActiveGateTokenList: {
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /** @description A list of ActiveGate tokens. */
    activeGateTokens?: OASSchemas['ActiveGateToken'][]
  }

  /** @description The newly created token. */
  ApiTokenCreated: {
    /**
     * @description The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
     * @example 2020-11-12T08:15:30.144Z
     */
    expirationDate?: string
    /**
     * @description The ID of the token, consisting of prefix and public part of the token.
     * @example dt0c01.ST2EY72KQINMH574WMNVI7YN
     */
    id?: string
    /**
     * @description The secret of the token.
     * @example dt0c01.ST2EY72KQINMH574WMNVI7YN.G3DFPBEJYMODIDAEX454M7YWBUVEFOWKPRVMWFASS64NFH52PX6BNDVFFM572RZM
     */
    token?: string
  }

  /** @description Parameters of a new API token. */
  ApiTokenCreate: {
    /**
     * @description The token is a personal access token (`true`) or an API token (`false`).
     *
     *  Personal access tokens are tied to the permissions of their owner.
     * @example false
     */
    personalAccessToken?: boolean
    /**
     * @description The expiration date of the token.
     *
     * You can use one of the following formats:
     * * Timestamp in UTC milliseconds.
     * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
     * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
     * You can also specify relative timeframe without an alignment: `now-NU`.
     * Supported time units for the relative timeframe are:
     *    * `m`: minutes
     *    * `h`: hours
     *    * `d`: days
     *    * `w`: weeks
     *    * `M`: months
     *    * `y`: years
     *
     * If not set, the token never expires.
     * @example now+14d
     */
    expirationDate?: string
    /**
     * @description The name of the token.
     * @example tokenName
     */
    name: string
    /**
     * @description A list of the scopes to be assigned to the token.
     *
     * * `InstallerDownload`: PaaS integration - Installer download.
     * * `DataExport`: Access problem and event feed, metrics, and topology.
     * * `PluginUpload`: Upload Extension.
     * * `SupportAlert`: PaaS integration - Support alert.
     * * `DcrumIntegration`: Dynatrace module integration - NAM.
     * * `AdvancedSyntheticIntegration`: Dynatrace module integration - Synthetic Classic.
     * * `ExternalSyntheticIntegration`: Create and read synthetic monitors, locations, and nodes.
     * * `AppMonIntegration`: Dynatrace module integration - AppMon.
     * * `RumBrowserExtension`: RUM Browser Extension.
     * * `LogExport`: Read logs.
     * * `ReadConfig`: Read configuration.
     * * `WriteConfig`: Write configuration.
     * * `DTAQLAccess`: User sessions.
     * * `UserSessionAnonymization`: Anonymize user session data for data privacy reasons.
     * * `DataPrivacy`: Change data privacy settings.
     * * `CaptureRequestData`: Capture request data.
     * * `Davis`: Dynatrace module integration - Davis.
     * * `DssFileManagement`: Mobile symbolication file management.
     * * `RumJavaScriptTagManagement`: Real user monitoring JavaScript tag management.
     * * `TenantTokenManagement`: Token management.
     * * `ActiveGateCertManagement`: ActiveGate certificate management.
     * * `RestRequestForwarding`: Fetch data from a remote environment.
     * * `ReadSyntheticData`: Read synthetic monitors, locations, and nodes.
     * * `DataImport`: Data ingest, e.g.: metrics and events.
     * * `auditLogs.read`: Read audit logs.
     * * `metrics.read`: Read metrics.
     * * `metrics.write`: Write metrics.
     * * `entities.read`: Read entities.
     * * `entities.write`: Write entities.
     * * `problems.read`: Read problems.
     * * `problems.write`: Write problems.
     * * `events.read`: Read events.
     * * `events.ingest`: Ingest events.
     * * `networkZones.read`: Read network zones.
     * * `networkZones.write`: Write network zones.
     * * `activeGates.read`: Read ActiveGates.
     * * `activeGates.write`: Write ActiveGates.
     * * `activeGateTokenManagement.read`: Read ActiveGate tokens.
     * * `activeGateTokenManagement.create`: Create ActiveGate tokens.
     * * `activeGateTokenManagement.write`: Write ActiveGate tokens.
     * * `credentialVault.read`: Read credential vault entries.
     * * `credentialVault.write`: Write credential vault entries.
     * * `extensions.read`: Read extensions.
     * * `extensions.write`: Write extensions.
     * * `extensionConfigurations.read`: Read extension monitoring configurations.
     * * `extensionConfigurations.write`: Write extension monitoring configurations.
     * * `extensionEnvironment.read`: Read extension environment configurations.
     * * `extensionEnvironment.write`: Write extension environment configurations.
     * * `metrics.ingest`: Ingest metrics.
     * * `securityProblems.read`: Read security problems.
     * * `securityProblems.write`: Write security problems.
     * * `syntheticLocations.read`: Read synthetic locations.
     * * `syntheticLocations.write`: Write synthetic locations.
     * * `settings.read`: Read settings.
     * * `settings.write`: Write settings.
     * * `tenantTokenRotation.write`: Tenant token rotation.
     * * `slo.read`: Read SLO.
     * * `slo.write`: Write SLO.
     * * `releases.read`: Read releases.
     * * `apiTokens.read`: Read API tokens.
     * * `apiTokens.write`: Write API tokens.
     * * `openTelemetryTrace.ingest`: Ingest OpenTelemetry traces.
     * * `logs.read`: Read logs.
     * * `logs.ingest`: Ingest logs.
     */
    scopes: (
      | 'InstallerDownload'
      | 'DataExport'
      | 'PluginUpload'
      | 'SupportAlert'
      | 'DcrumIntegration'
      | 'AdvancedSyntheticIntegration'
      | 'ExternalSyntheticIntegration'
      | 'AppMonIntegration'
      | 'RumBrowserExtension'
      | 'LogExport'
      | 'ReadConfig'
      | 'WriteConfig'
      | 'DTAQLAccess'
      | 'UserSessionAnonymization'
      | 'DataPrivacy'
      | 'CaptureRequestData'
      | 'Davis'
      | 'DssFileManagement'
      | 'RumJavaScriptTagManagement'
      | 'TenantTokenManagement'
      | 'ActiveGateCertManagement'
      | 'RestRequestForwarding'
      | 'ReadSyntheticData'
      | 'DataImport'
      | 'auditLogs.read'
      | 'metrics.read'
      | 'metrics.write'
      | 'entities.read'
      | 'entities.write'
      | 'problems.read'
      | 'problems.write'
      | 'events.read'
      | 'events.ingest'
      | 'networkZones.read'
      | 'networkZones.write'
      | 'activeGates.read'
      | 'activeGates.write'
      | 'activeGateTokenManagement.read'
      | 'activeGateTokenManagement.create'
      | 'activeGateTokenManagement.write'
      | 'credentialVault.read'
      | 'credentialVault.write'
      | 'extensions.read'
      | 'extensions.write'
      | 'extensionConfigurations.read'
      | 'extensionConfigurations.write'
      | 'extensionEnvironment.read'
      | 'extensionEnvironment.write'
      | 'metrics.ingest'
      | 'securityProblems.read'
      | 'securityProblems.write'
      | 'syntheticLocations.read'
      | 'syntheticLocations.write'
      | 'settings.read'
      | 'settings.write'
      | 'tenantTokenRotation.write'
      | 'slo.read'
      | 'slo.write'
      | 'releases.read'
      | 'apiTokens.read'
      | 'apiTokens.write'
      | 'openTelemetryTrace.ingest'
      | 'logs.read'
      | 'logs.ingest'
    )[]
  }

  /** @description Metadata of an API token. */
  ApiToken: {
    /**
     * @description Token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
     *
     *  If not set, the token never expires.
     * @example 2020-11-12T08:15:30.144Z
     */
    expirationDate?: string
    /**
     * @description The token is a [personal access token](https://dt-url.net/wm03sop) (`true`) or an API token (`false`).
     * @example true
     */
    personalAccessToken?: boolean
    /**
     * @description Token last used date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`)
     * @example 2020-11-12T08:15:30.144Z
     */
    lastUsedDate?: string
    /**
     * @description Token last used IP address.
     * @example 34.197.2.44
     */
    lastUsedIpAddress?: string
    /**
     * @description Token creation date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`)
     * @example 2020-11-05T08:15:30.144Z
     */
    creationDate?: string
    /**
     * @description The name of the token.
     * @example myToken
     */
    name?: string
    /**
     * @description The ID of the token, consisting of prefix and public part of the token.
     * @example dt0c01.ST2EY72KQINMH574WMNVI7YN
     */
    id?: string
    /**
     * @description The owner of the token.
     * @example john.smith
     */
    owner?: string
    /** @description A list of scopes assigned to the token. */
    scopes?: (
      | 'ActiveGateCertManagement'
      | 'AdvancedSyntheticIntegration'
      | 'AppMonIntegration'
      | 'CaptureRequestData'
      | 'DTAQLAccess'
      | 'DataExport'
      | 'DataImport'
      | 'DataPrivacy'
      | 'Davis'
      | 'DcrumIntegration'
      | 'DiagnosticExport'
      | 'DssFileManagement'
      | 'ExternalSyntheticIntegration'
      | 'InstallerDownload'
      | 'LogExport'
      | 'MemoryDump'
      | 'Mobile'
      | 'PluginUpload'
      | 'ReadConfig'
      | 'ReadSyntheticData'
      | 'RestRequestForwarding'
      | 'RumBrowserExtension'
      | 'RumJavaScriptTagManagement'
      | 'SupportAlert'
      | 'TenantTokenManagement'
      | 'UserSessionAnonymization'
      | 'ViewDashboard'
      | 'ViewReport'
      | 'WriteConfig'
      | 'WriteSyntheticData'
      | 'activeGateTokenManagement.create'
      | 'activeGateTokenManagement.read'
      | 'activeGateTokenManagement.write'
      | 'activeGates.read'
      | 'activeGates.write'
      | 'apiTokens.read'
      | 'apiTokens.write'
      | 'auditLogs.read'
      | 'credentialVault.read'
      | 'credentialVault.write'
      | 'entities.read'
      | 'entities.write'
      | 'events.ingest'
      | 'events.read'
      | 'extensionConfigurations.read'
      | 'extensionConfigurations.write'
      | 'extensionEnvironment.read'
      | 'extensionEnvironment.write'
      | 'extensions.read'
      | 'extensions.write'
      | 'logs.ingest'
      | 'logs.read'
      | 'metrics.ingest'
      | 'metrics.read'
      | 'metrics.write'
      | 'networkZones.read'
      | 'networkZones.write'
      | 'openTelemetryTrace.ingest'
      | 'problems.read'
      | 'problems.write'
      | 'releases.read'
      | 'securityProblems.read'
      | 'securityProblems.write'
      | 'settings.read'
      | 'settings.write'
      | 'slo.read'
      | 'slo.write'
      | 'syntheticLocations.read'
      | 'syntheticLocations.write'
      | 'tenantTokenRotation.write'
    )[]
    /**
     * @description The token is enabled (`true`) or disabled (`false`).
     * @example true
     */
    enabled?: boolean
  }

  /**
   * @description A list of API tokens.
   * @example {
   *   "pageSize": "1",
   *   "totalCount": "1",
   *   "apiTokens": {
   *     "id": "dt0c01.ST2EY72KQINMH574WMNVI7YN",
   *     "name": "tokenName",
   *     "revoked": "false",
   *     "personalAccessToken": "true",
   *     "owner": "john.smith",
   *     "creationDate": "2020-11-05T08:15:30.144Z",
   *     "expirationDate": "2020-11-12T08:15:30.144Z",
   *     "lastUsedDate": "2020-11-12T08:15:30.144Z",
   *     "lastUsedIpAddress": "34.197.2.44",
   *     "scopes": [
   *       "metrics.read"
   *     ]
   *   }
   * }
   */
  ApiTokenList: {
    /** @description A list of API tokens. */
    apiTokens?: OASSchemas['ApiToken'][]
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
  }

  ApiTokenSecret: {
    /**
     * @description The API token.
     * @example dt0c01.ST2EY72KQINMH574WMNVI7YN.G3DFPBEJYMODIDAEX454M7YWBUVEFOWKPRVMWFASS64NFH52PX6BNDVFFM572RZM
     */
    token: string
  }

  /** @description The update of the API token. */
  ApiTokenUpdate: {
    /**
     * @description The name of the token.
     * @example myToken
     */
    name?: string
    /**
     * @description The token is enabled (`true`) or disabled (`false`)
     * @example true
     */
    enabled?: boolean
  }

  /**
   * @description An entry of the audit log.
   * @example {
   *   "logId": "197425568800060000",
   *   "eventType": "UPDATE",
   *   "category": "CONFIG",
   *   "entityId": "MOBILE_RUM: MOBILE_APPLICATION-752C223D59734CD2",
   *   "environmentId": "prod-env-13",
   *   "user": "test.user@company.com",
   *   "userType": "USER_NAME",
   *   "userOrigin": "webui (192.168.0.2)",
   *   "timestamp": 1974255688445,
   *   "success": true,
   *   "patch": [
   *     {
   *       "op": "replace",
   *       "path": "/refreshTimeIntervalMillis",
   *       "value": 30000,
   *       "oldValue": 20000
   *     }
   *   ]
   * }
   */
  AuditLogEntry: {
    /** @description The ID of the log entry. */
    logId: string
    /**
     * @description The type of the recorded operation.
     * @enum {string}
     */
    eventType:
      | 'CREATE'
      | 'DELETE'
      | 'GENERAL'
      | 'GET'
      | 'LOGIN'
      | 'LOGOUT'
      | 'PATCH'
      | 'POST'
      | 'PUT'
      | 'READ'
      | 'REVOKE'
      | 'TAG_ADD'
      | 'TAG_REMOVE'
      | 'TAG_UPDATE'
      | 'UPDATE'
    /**
     * @description The category of the recorded operation.
     * @enum {string}
     */
    category: 'CONFIG' | 'DEBUG_UI' | 'MANUAL_TAGGING_SERVICE' | 'TOKEN' | 'WEB_UI'
    /**
     * @description The ID of an entity from the **category**.
     *
     * For example, it can be config ID for the `CONFIG` category or token ID for the `TOKEN` category.
     */
    entityId?: string
    /** @description The ID of the Dynatrace environment where the recorded operation occurred. */
    environmentId: string
    /** @description The ID of the user who performed the recorded operation. */
    user: string
    /**
     * @description The type of the authentication of the **user**.
     * @enum {string}
     */
    userType: 'PUBLIC_TOKEN_IDENTIFIER' | 'REQUEST_ID' | 'SERVICE_NAME' | 'TOKEN_HASH' | 'USER_NAME'
    /** @description The origin and the IP address of the **user**. */
    userOrigin?: string
    /**
     * Format: int64
     * @description The timestamp of the record creation, in UTC milliseconds.
     */
    timestamp: number
    /** @description The recorded operation is successful (`true`) or failed (`false`). */
    success: boolean
    /** @description The logged message. */
    message?: string
    /**
     * @description The patch of the recorded operation as the JSON representation.
     *
     * The format is an enhanced RFC 6902. The patch also carries the previous value in the **oldValue** field.
     */
    patch?: { [key: string]: unknown }
  }

  /**
   * @description The audit log of your environment.
   * @example {
   *   "totalCount": 10,
   *   "pageSize": 5,
   *   "nextPageKey": "___a7acX3q0AAAAAACJidWlsdGluOnNlcnZpY2lUVEJCUzBaNVIxVjJOSGt6Y3oyLTcwMUZWRkxlclH__9rtpxferQ",
   *   "auditLogs": [
   *     {
   *       "logId": "197425568800060000",
   *       "eventType": "UPDATE",
   *       "category": "CONFIG",
   *       "entityId": "MOBILE_RUM: MOBILE_APPLICATION-752C223D59734CD2",
   *       "environmentId": "prod-env-13",
   *       "user": "test.user@company.com",
   *       "userType": "USER_NAME",
   *       "userOrigin": "webui (192.168.0.2)",
   *       "timestamp": 1974255688445,
   *       "success": true,
   *       "patch": [
   *         {
   *           "op": "replace",
   *           "path": "/refreshTimeIntervalMillis",
   *           "value": 30000,
   *           "oldValue": 20000
   *         }
   *       ]
   *     }
   *   ]
   * }
   */
  AuditLog: {
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /** @description A list of audit log entries ordered by the creation timestamp. */
    auditLogs?: OASSchemas['AuditLogEntry'][]
  }

  /** @description Parameters of a security problem */
  SecurityProblem: {
    /** @description The ID of the security problem. */
    securityProblemId?: string
    /** @description The displayId of the security problem. */
    displayId?: string
    /**
     * @description The status of the security problem.
     * @enum {string}
     */
    status?: 'OPEN' | 'RESOLVED'
    /** @description Indicates if a security problem is muted. */
    muted?: boolean
    /** @description The external vulnerability ID of the security problem. */
    externalVulnerabilityId?: string
    /**
     * @description The type of the vulnerability.
     * @enum {string}
     */
    vulnerabilityType?: 'RUNTIME' | 'THIRD_PARTY'
    /** @description The title of the security problem. */
    title?: string
    /** @description The package name of the security problem. */
    packageName?: string
    /** @description The URL to the security problem details page. */
    url?: string
    /**
     * @description The technology of the security problem.
     * @enum {string}
     */
    technology?: 'DOTNET' | 'JAVA' | 'KUBERNETES' | 'NODE_JS' | 'PHP'
    /**
     * Format: int64
     * @description The timestamp of the first occurrence of the security problem.
     */
    firstSeenTimestamp?: number
    /**
     * Format: int64
     * @description The timestamp of the most recent security problem change.
     */
    lastUpdatedTimestamp?: number
    riskAssessment?: OASSchemas['RiskAssessment']
    /** @description Management zones to which the affected entities belong. */
    managementZones?: OASSchemas['ManagementZone'][]
    /** @description CVE IDs of the security problem. */
    cveIds?: string[]
  }

  /** @description Security advice from the Davis security advisor. */
  DavisSecurityAdvice: {
    /** @description The name of the advice. */
    name?: string
    /** @description The vulnerable component to which advice applies. */
    vulnerableComponent?: string
    /**
     * @description The technology of the vulnerable component.
     * @enum {string}
     */
    technology?: 'DOTNET' | 'JAVA' | 'KUBERNETES' | 'NODE_JS' | 'PHP'
    /**
     * @description The type of the advice.
     * @enum {string}
     */
    adviceType?: 'UPGRADE'
    /** @description IDs of `critical` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
    critical?: string[]
    /** @description IDs of `high` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
    high?: string[]
    /** @description IDs of `medium` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
    medium?: string[]
    /** @description IDs of `low` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
    low?: string[]
    /** @description IDs of `none` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
    none?: string[]
  }

  /** @description A list of advice from the Davis security advisor. */
  DavisSecurityAdviceList: {
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    advices?: OASSchemas['DavisSecurityAdvice'][]
  }

  /** @description information on the muted state of a security problem in relation to an event. */
  MuteState: {
    /** @description The user who has muted or unmuted the problem. */
    user?: string
    /**
     * @description The reason for the mute state change.
     * @enum {string}
     */
    reason?:
      | 'AFFECTED'
      | 'CONFIGURATION_NOT_AFFECTED'
      | 'FALSE_POSITIVE'
      | 'IGNORE'
      | 'INITIAL_STATE'
      | 'OTHER'
      | 'VULNERABLE_CODE_NOT_IN_USE'
    /** @description A comment by the user. */
    comment?: string
  }

  /** @description A snapshot of the risk assessment of a security problem. */
  RiskAssessmentSnapshot: {
    /**
     * Format: int32
     * @description The number of currently affected entities.
     */
    numberOfAffectedEntities?: number
    /**
     * Format: int32
     * @description The number of currently reachable data assets by affected entities.
     */
    numberOfReachableDataAssets?: number
    /**
     * @description The availability status of public exploits.
     * @enum {string}
     */
    publicExploit?: 'AVAILABLE' | 'NOT_AVAILABLE'
    /**
     * @description The level of exposure of affected entities.
     * @enum {string}
     */
    exposure?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'PUBLIC_NETWORK'
  }

  /** @description The event of a security problem. */
  SecurityProblemEvent: {
    /**
     * Format: int64
     * @description The timestamp when the event occurred.
     */
    timestamp?: number
    /**
     * @description The reason of the event creation.
     * @enum {string}
     */
    reason?:
      | 'SECURITY_PROBLEM_CREATED'
      | 'SECURITY_PROBLEM_MUTED'
      | 'SECURITY_PROBLEM_REOPENED'
      | 'SECURITY_PROBLEM_RESOLVED'
      | 'SECURITY_PROBLEM_UNMUTED'
    riskAssessmentSnapshot?: OASSchemas['RiskAssessmentSnapshot']
    muteState?: OASSchemas['MuteState']
  }

  /** @description Assessment of the remediation item. */
  RemediationAssessment: {
    /**
     * @description The level of exposure of affected entities.
     * @enum {string}
     */
    exposure?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'PUBLIC_NETWORK'
    /**
     * @description The reachability of related data assets by affected entities.
     * @enum {string}
     */
    dataAssets?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'REACHABLE'
    /**
     * @description The usage of vulnerable functions
     * @enum {string}
     */
    vulnerableFunctionUsage?: 'IN_USE' | 'NOT_AVAILABLE' | 'NOT_IN_USE'
    /** @description The vulnerable functions in use. */
    vulnerableFunctionsInUse?: OASSchemas['VulnerableFunction'][]
    /** @description The vulnerable functions not in use. */
    vulnerableFunctionsNotInUse?: OASSchemas['VulnerableFunction'][]
    /** @description The vulnerable functions not available. */
    vulnerableFunctionsNotAvailable?: OASSchemas['VulnerableFunction'][]
  }

  /** @description Context of a possible remediation for a security problem. */
  RemediationItem: {
    /** @description The ID of the remediation item. */
    id?: string
    /** @description The IDs that represent the related entity. */
    entityIds?: string[]
    /** @description The name of the entity. */
    name?: string
    /**
     * Format: int64
     * @description The timestamp when the entity has first been related to the vulnerability.
     */
    firstAffectedTimestamp?: number
    assessment?: OASSchemas['RemediationAssessment']
    /**
     * Format: int64
     * @description The timestamp when the vulnerability has been resolved for the related entity.
     */
    resolvedTimestamp?: number
    /**
     * @description The current state of the entity regarding the related vulnerability.
     * @enum {string}
     */
    vulnerabilityState?: 'RESOLVED' | 'VULNERABLE'
    muteState?: OASSchemas['RemediationItemMuteStateDto']
    /**
     * @description A list of vulnerable components of the remediation item.
     *
     * A vulnerable component is what causes the security problem.
     */
    vulnerableComponents?: OASSchemas['VulnerableComponent'][]
    remediationProgress?: OASSchemas['RemediationProgressDto']
  }

  /** @description A list of remediation items. */
  RemediationItemList: {
    /** @description A list of remediation items. */
    remediationItems?: OASSchemas['RemediationItem'][]
  }

  /** @description Information about the mute state of a remediation item of a security problem. */
  RemediationItemMuteStateDto: {
    /** @description Whether the remediation item is currently muted. */
    muted?: boolean
    /** @description The user who last changed the mute state. */
    user?: string
    /**
     * Format: int64
     * @description The timestamp when the mute state was last updated.
     */
    lastUpdatedTimestamp?: number
    /**
     * @description The reason provided with the most recent mute state change.
     * @enum {string}
     */
    reason?:
      | 'AFFECTED'
      | 'CONFIGURATION_NOT_AFFECTED'
      | 'FALSE_POSITIVE'
      | 'IGNORE'
      | 'INITIAL_STATE'
      | 'OTHER'
      | 'VULNERABLE_CODE_NOT_IN_USE'
    /** @description The optional comment provided with the most recent mute state change. */
    comment?: string
  }

  /** @description Remediation progress of this remediation item, containing affected and unaffected entities. */
  RemediationProgressDto: {
    /** @description Entities related to the remediation item, that are affected by the security problem. */
    affectedEntities?: string[]
    /** @description Entities related to the remediation item, that are not affected by the security problem. */
    unaffectedEntities?: string[]
  }

  /** @description Vulnerable component of a security problem. */
  VulnerableComponent: {
    /** @description The Dynatrace entity ID of the vulnerable component. */
    id?: string
    /** @description The display name of the vulnerable component. */
    displayName?: string
    /** @description The file name of the vulnerable component. */
    fileName?: string
    /**
     * Format: int32
     * @description The number of affected entities.
     */
    numberOfAffectedEntities?: number
    /** @description The list of affected entities. */
    affectedEntities?: string[]
  }

  /** @description Defines an vulnerable function. */
  VulnerableFunction: {
    /** @description The class name of the vulnerable function. */
    className?: string
    /** @description The file path of the vulnerable function. */
    filePath?: string
    /** @description The function name of the vulnerable function. */
    functionName?: string
  }

  /** @description Related container image of a security problem. */
  RelatedContainerImage: {
    /** @description The image ID of the related container image. */
    imageId?: string
    /** @description The image name of the related container image. */
    imageName?: string
    /**
     * Format: int32
     * @description The number of affected entities.
     */
    numberOfAffectedEntities?: number
    /** @description A list of affected entities. */
    affectedEntities?: string[]
  }

  /**
   * @description A list of related entities of the security problem.
   *
   * A related entity is a monitored entity that is directly or indirectly related to an *affected entity* (for example, it could be a host where an affected process runs).
   *
   * Each related entity contains a list of corresponding affected entities (for example, an affected process running on this host).
   */
  RelatedEntitiesList: {
    /** @description A list of related applications. */
    applications?: OASSchemas['RelatedEntity'][]
    /** @description A list of related services. */
    services?: OASSchemas['RelatedService'][]
    /** @description A list of related hosts. */
    hosts?: OASSchemas['RelatedEntity'][]
    /** @description A list of related databases. */
    databases?: string[]
    /** @description A list of related Kubernetes workloads. */
    kubernetesWorkloads?: OASSchemas['RelatedEntity'][]
    /** @description A list of related Kubernetes clusters. */
    kubernetesClusters?: OASSchemas['RelatedEntity'][]
  }

  /** @description An entity related to a security problem. */
  RelatedEntity: {
    /** @description The Dynatrace entity ID of the entity. */
    id?: string
    /**
     * Format: int64
     * @description The number of affected entities related to the entity.
     */
    numberOfAffectedEntities?: number
    /** @description A list of affected entities related to the entity. */
    affectedEntities?: string[]
  }

  /** @description A service related to a security problem. */
  RelatedService: {
    /** @description The Dynatrace entity ID of the entity. */
    id?: string
    /**
     * Format: int64
     * @description The number of affected entities related to the entity.
     */
    numberOfAffectedEntities?: number
    /** @description A list of affected entities related to the entity. */
    affectedEntities?: string[]
    /**
     * @description The level of exposure of the service.
     * @enum {string}
     */
    exposure?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'PUBLIC_NETWORK'
  }

  /** @description Risk assessment of a security problem. */
  RiskAssessment: {
    /**
     * @description The Davis risk level.
     *
     *  It is calculated by Dynatrace on the basis of CVSS score.
     * @enum {string}
     */
    riskLevel?: 'CRITICAL' | 'HIGH' | 'LOW' | 'MEDIUM' | 'NONE'
    /**
     * Format: float
     * @description The Davis risk score (1-10).
     *
     *  It is calculated by Dynatrace on the basis of CVSS score.
     */
    riskScore?: number
    /** @description The attack vector calculated by DT based on the CVSS attack vector. */
    riskVector?: string
    /**
     * @description The risk level from the CVSS score.
     * @enum {string}
     */
    baseRiskLevel?: 'CRITICAL' | 'HIGH' | 'LOW' | 'MEDIUM' | 'NONE'
    /**
     * Format: float
     * @description The risk score (1-10) from the CVSS score.
     */
    baseRiskScore?: number
    /** @description The original attack vector of the CVSS assessment. */
    baseRiskVector?: string
    /**
     * @description The level of exposure of affected entities.
     * @enum {string}
     */
    exposure?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'PUBLIC_NETWORK'
    /**
     * @description The reachability of related data assets by affected entities.
     * @enum {string}
     */
    dataAssets?: 'NOT_AVAILABLE' | 'NOT_DETECTED' | 'REACHABLE'
    /**
     * @description The availability status of public exploits.
     * @enum {string}
     */
    publicExploit?: 'AVAILABLE' | 'NOT_AVAILABLE'
  }

  /** @description Parameters of a security problem */
  SecurityProblemDetails: {
    /** @description The ID of the security problem. */
    securityProblemId?: string
    /** @description The displayId of the security problem. */
    displayId?: string
    /**
     * @description The status of the security problem.
     * @enum {string}
     */
    status?: 'OPEN' | 'RESOLVED'
    /** @description Indicates if a security problem is muted. */
    muted?: boolean
    /** @description The external vulnerability ID of the security problem. */
    externalVulnerabilityId?: string
    /**
     * @description The type of the vulnerability.
     * @enum {string}
     */
    vulnerabilityType?: 'RUNTIME' | 'THIRD_PARTY'
    /** @description The title of the security problem. */
    title?: string
    /** @description The package name of the security problem. */
    packageName?: string
    /** @description The URL to the security problem details page. */
    url?: string
    /** @description The description of the security problem. */
    description?: string
    /**
     * @description The technology of the security problem.
     * @enum {string}
     */
    technology?: 'DOTNET' | 'JAVA' | 'KUBERNETES' | 'NODE_JS' | 'PHP'
    /**
     * Format: int64
     * @description The timestamp of the first occurrence of the security problem.
     */
    firstSeenTimestamp?: number
    /**
     * Format: int64
     * @description The timestamp of the most recent security problem change.
     */
    lastUpdatedTimestamp?: number
    riskAssessment?: OASSchemas['RiskAssessment']
    /** @description Management zones to which the affected entities belong. */
    managementZones?: OASSchemas['ManagementZone'][]
    /** @description CVE IDs of the security problem. */
    cveIds?: string[]
    /** @description An ordered (newest first) list of events of the security problem. */
    events?: OASSchemas['SecurityProblemEvent'][]
    /**
     * @description A list of vulnerable components of the security problem.
     *
     * A vulnerable component is what causes the security problem.
     */
    vulnerableComponents?: OASSchemas['VulnerableComponent'][]
    /**
     * @description A list of affected entities of the security problem.
     *
     * An affected entity is an entity where a vulnerable component runs.
     */
    affectedEntities?: string[]
    /**
     * @description A list of exposed entities of the security problem.
     *
     * An exposed entity is an affected entity that is exposed to the internet.
     */
    exposedEntities?: string[]
    /**
     * @description A list of data assets reachable by affected entities of the security problem.
     *
     * A data asset is a service that has database access.
     */
    reachableDataAssets?: string[]
    relatedEntities?: OASSchemas['RelatedEntitiesList']
    /**
     * @description A list of related container images of the security problem.
     *
     * A related container image is a container image that contains at least one *affected entity*.
     */
    relatedContainerImages?: {
      /** @description A list of related container images. */
      containerImages?: OASSchemas['RelatedContainerImage'][]
    }[]
    /** @description If `true` a change of the mute state is in progress. */
    muteStateChangeInProgress?: boolean
  }

  /** @description A list of security problems. */
  SecurityProblemList: {
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /** @description A list of security problems. */
    securityProblems?: OASSchemas['SecurityProblem'][]
  }

  /** @description Information on muting a security problem. */
  Mute: {
    /**
     * @description The reason for muting a security problem.
     * @enum {string}
     */
    reason:
      | 'CONFIGURATION_NOT_AFFECTED'
      | 'FALSE_POSITIVE'
      | 'IGNORE'
      | 'OTHER'
      | 'VULNERABLE_CODE_NOT_IN_USE'
    /** @description A comment about the muting reason. */
    comment: string
  }

  /** @description Information about how a mute state of a remediation item should be changed. */
  RemediationItemMuteStateChangeDto: {
    /** @description The desired mute state of the remediation item */
    muted: boolean
    /**
     * @description The reason for the mute state change.
     * @enum {string}
     */
    reason:
      | 'AFFECTED'
      | 'CONFIGURATION_NOT_AFFECTED'
      | 'FALSE_POSITIVE'
      | 'IGNORE'
      | 'INITIAL_STATE'
      | 'OTHER'
      | 'VULNERABLE_CODE_NOT_IN_USE'
    /** @description A comment about the mute state change reason. */
    comment: string
  }

  /** @description Information on un-muting a security problem. */
  Unmute: {
    /**
     * @description The reason for un-muting a security problem.
     * @enum {string}
     */
    reason: 'AFFECTED' | 'INITIAL_STATE'
    /** @description A comment about the un-muting reason. */
    comment: string
  }

  ExtensionEnvironmentConfigurationVersion: {
    /**
     * @description Extension version
     * @example 1.2.3
     */
    version: string
  }

  MonitoringConfigurationResponse: {
    /**
     * @description The identifier of the new configuration
     * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
     */
    objectId?: string
    /**
     * Format: int32
     * @description The HTTP Status code
     */
    code?: number
  }

  /** @description The monitoring configuration */
  JsonNode: { [key: string]: unknown }

  MonitoringConfigurationDto: {
    /**
     * @description The scope this monitoring configuration will be defined for
     * @example HOST-D3A3C5A146830A79
     */
    scope: string
    value?: OASSchemas['JsonNode']
  }

  /** @description A constraint on the values accepted for a complex settings property. */
  ComplexConstraint: {
    /**
     * @description The ID of a custom validator.
     * @example my-min-max
     */
    customValidatorId?: string
    /**
     * Format: int32
     * @description The minimum number of properties that must be set.
     * @example 1
     */
    minimumPropertyCount?: number
    /**
     * Format: int32
     * @description The maximum number of properties that can be set.
     * @example 2
     */
    maximumPropertyCount?: number
    /** @description A custom message for invalid values. */
    customMessage?: string
    /** @description A list of properties (defined by IDs) that are used to check the constraint. */
    properties?: string[]
    /**
     * @description The type of the constraint.
     * @enum {string}
     */
    type?:
      | 'CUSTOM_VALIDATOR_REF'
      | 'GREATER_THAN'
      | 'GREATER_THAN_OR_EQUAL'
      | 'LESS_THAN'
      | 'LESS_THAN_OR_EQUAL'
      | 'PROPERTY_COUNT_RANGE'
      | 'UNKNOWN'
  }

  /** @description A constraint on the values accepted for a settings property. */
  Constraint: {
    /**
     * Format: int32
     * @description The maximum allowed length of string values.
     * @example 20
     */
    maxLength?: number
    /**
     * Format: int32
     * @description The minimum required length of string values.
     * @example 7
     */
    minLength?: number
    /**
     * @description A list of properties for which the combination of values must be unique.
     * @example [
     *   "my-prop-1",
     *   "my-prop-2"
     * ]
     */
    uniqueProperties?: string[]
    /**
     * @description The ID of a custom validator.
     * @example my-min-max
     */
    customValidatorId?: string
    /**
     * @description A custom message for invalid values.
     * @example customConstraintMessage
     */
    customMessage?: string
    /**
     * @description The minimum allowed value.
     * @example 3
     */
    minimum?: number
    /**
     * @description The type of the constraint.
     * @example UNKNOWN
     * @enum {string}
     */
    type?:
      | 'CUSTOM_VALIDATOR_REF'
      | 'LENGTH'
      | 'NOT_BLANK'
      | 'NOT_EMPTY'
      | 'NO_WHITESPACE'
      | 'PATTERN'
      | 'RANGE'
      | 'REGEX'
      | 'TRIMMED'
      | 'UNIQUE'
      | 'UNKNOWN'
    /**
     * @description The maximum allowed value.
     * @example 200
     */
    maximum?: number
    /**
     * @description The regular expression pattern for valid string values.
     * @example ^([a-z]|[0-9]|\-|\_|\+|\.)+\@([a-z]|[0-9]|-){2,}\.([a-z]|[0-9]|-){2,}(\.[a-z]{2,})?$
     */
    pattern?: string
  }

  /** @description Configuration of a datasource for a property. */
  DatasourceDefinition: {
    /** @description The properties to filter the datasource options on. */
    filterProperties?: string[]
    /** @description Whether to validate input to only allow values returned by the datasource. */
    validate?: boolean
    /** @description Whether this datasource expects full setting payload as the context. */
    fullContext?: boolean
    /** @description If true, the datasource should use the api to filter the results instead of client-side filtering. */
    useApiSearch?: boolean
    /**
     * @description When to reset datasource value in the UI on filter change.
     * @enum {string}
     */
    resetValue?: 'ALWAYS' | 'INVALID_ONLY' | 'NEVER'
    /** @description The identifier of a custom data source of the property's value. */
    identifier?: string
  }

  /** @description Definition of an enum property. */
  EnumType: {
    /**
     * @description An existing Java enum class that holds the allowed values of the enum.
     * @example enumClass
     */
    enumClass?: string
    /** @description A list of allowed values of the enum. */
    items?: OASSchemas['EnumValue'][]
    /**
     * @description The type of the property.
     * @example enum
     * @enum {string}
     */
    type?: 'enum'
    /**
     * @description An extended description and/or links to documentation.
     * @example typeDocumentation
     */
    documentation?: string
    /**
     * @description The display name of the property.
     * @example typeDisplayName
     */
    displayName?: string
    /**
     * @description A short description of the property.
     * @example typeDescription
     */
    description?: string
  }

  /** @description An allowed value for an enum property. */
  EnumValue: {
    /**
     * @description The name of the value in an existing Java enum class.
     * @example exampleJavaEnumValue
     */
    enumInstance?: string
    /**
     * @description The allowed value of the enum.
     * @example exampleValue
     */
    value?: { [key: string]: unknown }
    /**
     * @description The display name of the value.
     * @example exampleDisplayName
     */
    displayName?: string
    /**
     * @description A short description of the value.
     * @example exampleDescription
     */
    description?: string
    /**
     * @description The icon of the value.
     * @example checkmark
     */
    icon?: string
  }

  /** @description An item of a collection property. */
  Item: {
    /**
     * @description The type referenced by the item's value.
     * @example itemReferencedType
     */
    referencedType?: string
    /**
     * @description An extended description and/or links to documentation.
     * @example propertyDocumentation
     */
    documentation?: string
    uiCustomization?: OASSchemas['UiCustomization']
    datasource?: OASSchemas['DatasourceDefinition']
    /** @description The type of the item's value. */
    type?: { [key: string]: unknown }
    /**
     * @description The display name of the item.
     * @example itemDisplayName
     */
    displayName?: string
    /**
     * @description A short description of the item.
     * @example itemDescription
     */
    description?: string
    /** @description Metadata of the items. */
    metadata?: { [key: string]: string }
    /** @description A list of constraints limiting the values to be accepted. */
    constraints?: OASSchemas['Constraint'][]
    /**
     * @description The subtype of the item's value.
     * @example itemSubType
     */
    subType?: string
  }

  /** @description A precondition for visibility of a property. */
  Precondition: {
    /**
     * @description The expected value of the property.
     *
     * Only applicable to properties of the `EQUALS` type.
     * @example expectedValue
     */
    expectedValue?: { [key: string]: unknown }
    /**
     * @description A list of valid values of the property.
     *
     * Only applicable to properties of the `IN` type.
     * @example expectedValues
     */
    expectedValues?: { [key: string]: unknown }[]
    /**
     * @description A list of child preconditions to be evaluated.
     *
     * Only applicable to properties of the `AND` and `OR` types.
     */
    preconditions?: OASSchemas['Precondition'][]
    precondition?: OASSchemas['Precondition']
    /**
     * @description The property to be evaluated.
     * @example propertyToEvaluate
     */
    property?: string
    /**
     * @description The type of the precondition.
     * @example NULL
     * @enum {string}
     */
    type?: 'AND' | 'EQUALS' | 'IN' | 'NOT' | 'NULL' | 'OR' | 'REGEX_MATCH'
    /**
     * @description The Regular expression which is matched against the property.
     *
     * Only applicable to properties of the `REGEX_MATCH` type.
     * @example example Regex
     */
    pattern?: string
  }

  /** @description Configuration of a property in a settings schema. */
  PropertyDefinition: {
    /**
     * @description The type referenced by the property value
     * @example propertyReferencedType
     */
    referencedType?: string
    items?: OASSchemas['Item']
    /**
     * @description An extended description and/or links to documentation.
     * @example propertyDocumentation
     */
    documentation?: string
    /**
     * Format: int32
     * @description The maximum number of **objects** in a collection property.
     *
     *  Has the value of `1` for singletons.
     */
    maxObjects?: number
    uiCustomization?: OASSchemas['UiCustomization']
    /**
     * Format: int32
     * @description The minimum number of **objects** in a collection property.
     * @example 1
     */
    minObjects?: number
    /**
     * @description Modification policy of the property.
     * @example ALWAYS
     * @enum {string}
     */
    modificationPolicy?: 'ALWAYS' | 'DEFAULT' | 'NEVER'
    precondition?: OASSchemas['Precondition']
    datasource?: OASSchemas['DatasourceDefinition']
    /**
     * @description The default value to be used when no value is provided.
     *
     * If a non-singleton has the value of `null`, it means an empty collection.
     * @example propertyDefaultValue
     */
    default?: { [key: string]: unknown }
    /** @description The type of the property's value. */
    type?: { [key: string]: unknown }
    /**
     * @description The display name of the property.
     * @example propertyDisplayName
     */
    displayName?: string
    /**
     * @description A short description of the property.
     * @example propertyDescription
     */
    description?: string
    /** @description Metadata of the property. */
    metadata?: { [key: string]: string }
    /** @description A list of constraints limiting the values to be accepted. */
    constraints?: OASSchemas['Constraint'][]
    /**
     * @description The subtype of the property's value.
     * @example propertySubType
     */
    subType?: string
    /**
     * @description The value can (`true`) or can't (`false`) be `null`.
     * @example true
     */
    nullable?: boolean
  }

  SchemaDefinitionRestDto: {
    /**
     * @description The version of the data format.
     * @example 1
     */
    dynatrace?: string
    /**
     * @description The ID of the schema.
     * @example builtin:container.built-in-monitoring-rule
     */
    schemaId?: string
    /**
     * @description The display name of the schema.
     * @example Built-in container monitoring rules
     */
    displayName?: string
    /**
     * @description A short description of the schema.
     * @example Dynatrace disables monitoring of containers that do not run any applications
     */
    description?: string
    /** @description An extended description of the schema and/or links to documentation. */
    documentation?: string
    /**
     * @description Names of the groups, which the schema belongs to.
     * @example [
     *   "group:some.1",
     *   "group:some.2"
     * ]
     */
    schemaGroups?: string[]
    /**
     * @description The version of the schema.
     * @example 1.4.2
     */
    version?: string
    /** @description Multiple (`true`) objects per scope are permitted or a single (`false`) object per scope is permitted. */
    multiObject?: boolean
    /**
     * @description If `true` the order of objects has semantic significance.
     *
     * Only applicable when **multiObject** is set to `true`.
     */
    ordered?: boolean
    /**
     * Format: int32
     * @description The maximum amount of objects per scope.
     *
     * Only applicable when **multiObject** is set to `true`.
     * @example 10
     */
    maxObjects?: number
    /**
     * @description A list of scopes where the schema can be used.
     * @example [
     *   "host",
     *   "application"
     * ]
     */
    allowedScopes?: string[]
    /** @description A list of definitions of enum properties. */
    enums?: { [key: string]: OASSchemas['EnumType'] }
    /**
     * @description A list of definitions of types.
     *
     *  A type is a complex property that contains its own set of subproperties.
     */
    types?: { [key: string]: OASSchemas['SchemaType'] }
    /** @description A list of schema's properties. */
    properties?: {
      [key: string]: OASSchemas['PropertyDefinition']
    }
    /** @description A list of constrains limiting the values to be accepted by the schema. */
    constraints?: OASSchemas['ComplexConstraint'][]
    /** @description Metadata of the setting. */
    metadata?: { [key: string]: string }
    uiCustomization?: OASSchemas['UiCustomization']
  }

  /**
   * @description A list of definitions of types.
   *
   *  A type is a complex property that contains its own set of subproperties.
   */
  SchemaType: {
    /**
     * @description The pattern for the summary search(for example, "Alert after *X* minutes.") of the configuration in the UI.
     * @example searchPatternOfType
     */
    searchPattern?: string
    /**
     * @description The pattern for the summary (for example, "Alert after *X* minutes.") of the configuration in the UI.
     * @example summaryPatternOfType
     */
    summaryPattern?: string
    /**
     * @description The version of the type.
     * @example 0
     */
    version?: string
    /**
     * @description A short description of the version.
     * @example Added new property
     */
    versionInfo?: string
    /** @description Definition of properties that can be persisted. */
    properties?: {
      [key: string]: OASSchemas['PropertyDefinition']
    }
    /** @description A list of constraints limiting the values to be accepted. */
    constraints?: OASSchemas['ComplexConstraint'][]
    /**
     * @description An extended description and/or links to documentation.
     * @example typeDocumentation
     */
    documentation?: string
    /**
     * @description The display name of the property.
     * @example typeDisplayName
     */
    displayName?: string
    /**
     * @description A short description of the property.
     * @example typeDescription
     */
    description?: string
  }

  /** @description Customization for UI elements */
  UiCustomization: {
    table?: OASSchemas['UiTableCustomization']
  }

  /** @description Customization for UI table columns */
  UiTableColumnCustomization: {
    /**
     * @description The referenced property for this column.
     * @example apiColor
     */
    propertyRef?: string
    /**
     * @description The ui specific type for this column.
     * @example cell-color-picker
     */
    type?: string
    /**
     * @description The display name for this column.
     * @example Color
     */
    displayName?: string
  }

  /** @description Customization for UI tables */
  UiTableCustomization: {
    /** @description A list of columns for the UI table */
    columns?: OASSchemas['UiTableColumnCustomization'][]
  }

  /** @description Extension author */
  AuthorDto: {
    /** @description Author name */
    name?: string
  }

  Extension: {
    /** @description Extension name */
    extensionName?: string
    /**
     * @description Extension version
     * @example 1.2.3
     */
    version?: string
    author?: OASSchemas['AuthorDto']
    /** @description Data sources that extension uses to gather data */
    dataSources?: string[]
    /** @description Custom variables used in extension configuration */
    variables?: string[]
    /** @description Available feature sets */
    featureSets?: string[]
    /** @description Details of feature sets */
    featureSetsDetails?: {
      [key: string]: OASSchemas['FeatureSetDetails']
    }
    /** @description Minimal Dynatrace version that works with the extension */
    minDynatraceVersion?: string
    /** @description SHA-256 hash of uploaded Extension file */
    fileHash?: string
  }

  /** @description Additional information about a Feature Set */
  FeatureSetDetails: {
    /** @description Feature set metrics */
    metrics?: OASSchemas['MetricDto'][]
  }

  /** @description Metric gathered by an extension */
  MetricDto: {
    /** @description Metric key */
    key?: string
  }

  ExtensionMonitoringConfiguration: {
    /** @description Configuration id */
    objectId?: string
    /** @description Configuration scope */
    scope?: string
    /** @description Configuration */
    value?: string
  }

  ExtensionMonitoringConfigurationsList: {
    /** @description A list of extension monitoring configurations. */
    items?: OASSchemas['ExtensionMonitoringConfiguration'][]
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
  }

  /** @description A list of extension events. */
  ExtensionEventDto: {
    /** @description Timestamp of the event */
    timestamp?: string
    /** @description Severity of the event */
    severity?: string
    /** @description Content of the event */
    content?: string
    /**
     * @description Host that uses this monitoring configuration.
     *
     * Example: `HOST-ABCDEF0123456789`
     */
    'dt.entity.host'?: string
    /**
     * @description Hexadecimal ID of Active Gate that uses this monitoring configuration.
     *
     * Example: `0x1a2b3c4d`
     */
    'dt.active_gate.id'?: string
    /**
     * @description Data source that uses this monitoring configuration.
     *
     * Example: `snmp`
     */
    'dt.extension.ds'?: string
    /**
     * @description Status of the event
     * @enum {string}
     */
    status?: 'ERROR' | 'INFO' | 'NONE' | 'WARN'
  }

  ExtensionEventsList: {
    /** @description A list of extension events. */
    extensionEvents?: OASSchemas['ExtensionEventDto'][]
  }

  ExtensionStatusDto: {
    /**
     * Format: int64
     * @description Timestamp of the latest status of given configuration.
     */
    timestamp?: number
    /** @description Latest status of given configuration. */
    status?: string
  }

  ExtensionList: {
    /** @description A list of extensions. */
    extensions?: OASSchemas['MinimalExtension'][]
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
  }

  /** @description A list of extensions. */
  MinimalExtension: {
    /** @description Extension name */
    extensionName?: string
    /**
     * @description Extension version
     * @example 1.2.3
     */
    version?: string
  }

  SchemaFiles: {
    /** @description A list of schema files. */
    files?: string[]
  }

  SchemasList: {
    /** @description A list of schema versions. */
    versions?: string[]
  }

  MonitoringConfigurationUpdateDto: {
    value?: OASSchemas['JsonNode']
  }

  /** @description The comment to a problem. */
  Comment: {
    /**
     * Format: int64
     * @description The timestamp of comment creation, in UTC milliseconds.
     */
    createdAtTimestamp: number
    /** @description The user who wrote the comment. */
    authorName?: string
    /** @description The context of the comment. */
    context?: string
    /** @description The ID of the comment. */
    id?: string
    /** @description The text of the comment. */
    content?: string
  }

  /** @description The result of closing a problem. */
  ProblemCloseResult: {
    /** @description The ID of the problem. */
    problemId: string
    /**
     * Format: int64
     * @description The timestamp when the user triggered the closing.
     */
    closeTimestamp: number
    /** @description True, if the problem is being closed. */
    closing: boolean
    comment?: OASSchemas['Comment']
  }

  ProblemCloseRequestDtoImpl: {
    /** @description The text of the closing comment. */
    message: string
  }

  CommentRequestDtoImpl: {
    /** @description The text of the comment. */
    message: string
    /** @description The context of the comment. */
    context?: string
  }

  /** @description A list of comments. */
  CommentsList: {
    /** @description The result entries. */
    comments: OASSchemas['Comment'][]
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
  }

  /** @description Short representation of the alerting profile. */
  AlertingProfileStub: {
    /** @description The name of the alerting profile. */
    name?: string
    /** @description The ID of the alerting profile. */
    id: string
  }

  /** @description Analysis of problem impact to an application. */
  ApplicationImpact: OASSchemas['Impact'] & {
    estimatedAffectedUsers: unknown
    impactType: unknown
    impactedEntity: unknown
  }

  /**
   * @description The availability evidence of the problem.
   *
   * Indicates an entity that has been unavailable during the problem lifespan and that might be related to the root cause.
   */
  AvailabilityEvidence: OASSchemas['Evidence'] & {
    /**
     * Format: int64
     * @description The end time of the evidence, in UTC milliseconds.
     */
    endTime?: number
  } & {
    displayName: unknown
    endTime: unknown
    entity: unknown
    evidenceType: unknown
    rootCauseRelevant: unknown
    startTime: unknown
  }

  /** @description Analysis of problem impact to a custom application. */
  CustomApplicationImpact: OASSchemas['Impact'] & {
    estimatedAffectedUsers: unknown
    impactType: unknown
    impactedEntity: unknown
  }

  /**
   * @description The event evidence of the problem.
   *
   * An event that occurred during the problem lifespan that might be related to the root cause.
   */
  EventEvidence: OASSchemas['Evidence'] & {
    /** @description The ID of the event. */
    eventId?: string
    /** @description The type of the event. */
    eventType?: string
    data?: OASSchemas['Event']
    /**
     * Format: int64
     * @description The end timestamp of the event, in UTC milliseconds.
     *
     *  Has `-1` value, if the event is still active.
     */
    endTime?: number
  } & {
    displayName: unknown
    endTime: unknown
    entity: unknown
    eventId: unknown
    eventType: unknown
    evidenceType: unknown
    rootCauseRelevant: unknown
    startTime: unknown
  }

  /**
   * @description An evidence of a root cause.
   *
   *  The actual set of fields depends on the type of the evidence. Find the list of actual objects in the description of the **evidenceType** field or see [Problems API v2 - JSON models](https://dt-url.net/we03sp2).
   */
  Evidence: {
    /**
     * @description Defines the actual set of fields depending on the value. See one of the following objects:
     *
     * * `EVENT` -> EventEvidence
     * * `METRIC` -> MetricEvidence
     * * `TRANSACTIONAL` -> TransactionalEvidence
     * * `MAINTENANCE_WINDOW` -> MaintenanceWindowEvidence
     * * `AVAILABILITY_EVIDENCE` -> AvailabilityEvidence
     *
     * @enum {string}
     */
    evidenceType:
      | 'AVAILABILITY_EVIDENCE'
      | 'EVENT'
      | 'MAINTENANCE_WINDOW'
      | 'METRIC'
      | 'TRANSACTIONAL'
    /** @description The display name of the evidence. */
    displayName: string
    entity: OASSchemas['EntityStub']
    groupingEntity?: OASSchemas['EntityStub']
    /** @description The evidence is (`true`) or is not (`false`) a part of the root cause. */
    rootCauseRelevant: boolean
    /**
     * Format: int64
     * @description The start time of the evidence, in UTC milliseconds.
     */
    startTime: number
  }

  /** @description The evidence details of a problem. */
  EvidenceDetails: {
    /**
     * Format: int64
     * @description The total number of evidence of a problem.
     */
    totalCount: number
    /** @description A list of all evidence. */
    details: OASSchemas['Evidence'][]
  }

  /**
   * @description The impact analysis of the problem on other entities/users.
   *
   *  The actual set of fields depends on the type of the impact. Find the list of actual objects in the description of the **impactType** field or see [Problems API v2 - JSON models](https://dt-url.net/we03sp2).
   */
  Impact: {
    /**
     * @description Defines the actual set of fields depending on the value. See one of the following objects:
     *
     * * `SERVICE` -> ServiceImpact
     * * `APPLICATION` -> ApplicationImpact
     * * `MOBILE` -> MobileImpact
     * * `CUSTOM_APPLICATION` -> CustomApplicationImpact
     *
     * @enum {string}
     */
    impactType: 'APPLICATION' | 'CUSTOM_APPLICATION' | 'MOBILE' | 'SERVICE'
    impactedEntity: OASSchemas['EntityStub']
    /**
     * Format: int64
     * @description The estimated number of affected users.
     */
    estimatedAffectedUsers: number
  }

  /** @description A list of all impacts of the problem. */
  ImpactAnalysis: {
    /** @description A list of all impacts of the problem. */
    impacts: OASSchemas['Impact'][]
  }

  /** @description The properties of the linked problem. */
  LinkedProblem: {
    /** @description The ID of the problem. */
    problemId: string
    /** @description The display ID of the problem. */
    displayId: string
  }

  /**
   * @description The  maintenance window evidence of the problem.
   *
   * The maintenance window during which the problem occurred.
   */
  MaintenanceWindowEvidence: OASSchemas['Evidence'] & {
    /** @description The ID of the related maintenance window. */
    maintenanceWindowConfigId?: string
    /**
     * Format: int64
     * @description The end time of the evidence, in UTC milliseconds.
     */
    endTime?: number
  } & {
    displayName: unknown
    endTime: unknown
    entity: unknown
    evidenceType: unknown
    maintenanceWindowConfigId: unknown
    rootCauseRelevant: unknown
    startTime: unknown
  }

  /**
   * @description The metric evidence of the problem.
   *
   * A change of metric behavior that indicates the problem and/or is its root cause.
   */
  MetricEvidence: OASSchemas['Evidence'] & {
    /** @description The ID of the metric. */
    metricId?: string
    /**
     * Format: float
     * @description The metric's value before the problem start.
     */
    valueBeforeChangePoint?: number
    /**
     * Format: float
     * @description The metric's value after the problem start.
     */
    valueAfterChangePoint?: number
    /**
     * Format: int64
     * @description The end time of the evidence, in UTC milliseconds.
     *
     * The value `null` indicates that the evidence is still open.
     */
    endTime?: number
    /**
     * @description The unit of the metric.
     * @enum {string}
     */
    unit?:
      | 'Bit'
      | 'BitPerHour'
      | 'BitPerMinute'
      | 'BitPerSecond'
      | 'Byte'
      | 'BytePerHour'
      | 'BytePerMinute'
      | 'BytePerSecond'
      | 'Cores'
      | 'Count'
      | 'Day'
      | 'DecibelMilliWatt'
      | 'GibiByte'
      | 'Giga'
      | 'GigaByte'
      | 'Hour'
      | 'KibiByte'
      | 'KibiBytePerHour'
      | 'KibiBytePerMinute'
      | 'KibiBytePerSecond'
      | 'Kilo'
      | 'KiloByte'
      | 'KiloBytePerHour'
      | 'KiloBytePerMinute'
      | 'KiloBytePerSecond'
      | 'MSU'
      | 'MebiByte'
      | 'MebiBytePerHour'
      | 'MebiBytePerMinute'
      | 'MebiBytePerSecond'
      | 'Mega'
      | 'MegaByte'
      | 'MegaBytePerHour'
      | 'MegaBytePerMinute'
      | 'MegaBytePerSecond'
      | 'MicroSecond'
      | 'MilliCores'
      | 'MilliSecond'
      | 'MilliSecondPerMinute'
      | 'Minute'
      | 'Month'
      | 'NanoSecond'
      | 'NanoSecondPerMinute'
      | 'NotApplicable'
      | 'PerHour'
      | 'PerMinute'
      | 'PerSecond'
      | 'Percent'
      | 'Pixel'
      | 'Promille'
      | 'Ratio'
      | 'Second'
      | 'State'
      | 'Unspecified'
      | 'Week'
      | 'Year'
  } & {
    displayName: unknown
    endTime: unknown
    entity: unknown
    evidenceType: unknown
    metricId: unknown
    rootCauseRelevant: unknown
    startTime: unknown
    unit: unknown
    valueAfterChangePoint: unknown
    valueBeforeChangePoint: unknown
  }

  /** @description Analysis of problem impact to a mobile application. */
  MobileImpact: OASSchemas['Impact'] & {
    estimatedAffectedUsers: unknown
    impactType: unknown
    impactedEntity: unknown
  }

  /** @description The properties of a problem. */
  Problem: {
    /** @description The ID of the problem. */
    problemId: string
    /**
     * @description The impact level of the problem. It shows what is affected by the problem.
     * @enum {string}
     */
    impactLevel: 'APPLICATION' | 'ENVIRONMENT' | 'INFRASTRUCTURE' | 'SERVICES'
    /** @description The display ID of the problem. */
    displayId: string
    /** @description A list of all management zones that the problem belongs to. */
    managementZones: OASSchemas['ManagementZone'][]
    /** @description A list of all entities that are affected by the problem. */
    affectedEntities: OASSchemas['EntityStub'][]
    evidenceDetails?: OASSchemas['EvidenceDetails']
    recentComments?: OASSchemas['CommentsList']
    impactAnalysis?: OASSchemas['ImpactAnalysis']
    linkedProblemInfo?: OASSchemas['LinkedProblem']
    /** @description A list of alerting profiles that match the problem. */
    problemFilters: OASSchemas['AlertingProfileStub'][]
    /** @description A list of all entities that are impacted by the problem. */
    impactedEntities: OASSchemas['EntityStub'][]
    rootCauseEntity?: OASSchemas['EntityStub']
    /**
     * @description The severity of the problem.
     * @enum {string}
     */
    severityLevel:
      | 'AVAILABILITY'
      | 'CUSTOM_ALERT'
      | 'ERROR'
      | 'INFO'
      | 'MONITORING_UNAVAILABLE'
      | 'PERFORMANCE'
      | 'RESOURCE_CONTENTION'
    /**
     * @description The status of the problem.
     * @enum {string}
     */
    status: 'CLOSED' | 'OPEN'
    /** @description A list of all entity tags of the problem. */
    entityTags?: OASSchemas['METag'][]
    /**
     * Format: int64
     * @description The start timestamp of the problem, in UTC milliseconds.
     */
    startTime: number
    /**
     * Format: int64
     * @description The end timestamp of the problem, in UTC milliseconds.
     *
     *  Has `-1` value, if the problem is still open.
     */
    endTime: number
    /** @description The name of the problem, displayed in the UI. */
    title: string
  }

  /** @description Analysis of problem impact to a service. */
  ServiceImpact: OASSchemas['Impact'] & {
    /**
     * Format: int64
     * @description The number of potentially impacted services.
     */
    numberOfPotentiallyAffectedServiceCalls?: number
  } & {
    estimatedAffectedUsers: unknown
    impactType: unknown
    impactedEntity: unknown
    numberOfPotentiallyAffectedServiceCalls: unknown
  }

  /**
   * @description The transactional evidence of the problem.
   *
   * A behavior of a metric in an transaction that indicates the problem and/or is its root cause.
   */
  TransactionalEvidence: OASSchemas['Evidence'] & {
    /**
     * Format: float
     * @description The metric's value before the problem start.
     */
    valueBeforeChangePoint?: number
    /**
     * Format: float
     * @description The metric's value after the problem start.
     */
    valueAfterChangePoint?: number
    /**
     * Format: int64
     * @description The end time of the evidence, in UTC milliseconds
     */
    endTime?: number
    /** @description The unit of the metric. */
    unit?: string
  } & {
    displayName: unknown
    endTime: unknown
    entity: unknown
    evidenceType: unknown
    rootCauseRelevant: unknown
    startTime: unknown
    unit: unknown
    valueAfterChangePoint: unknown
    valueBeforeChangePoint: unknown
  }

  /** @description A list of problems. */
  Problems: {
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /** @description The result entries. */
    problems: OASSchemas['Problem'][]
    /** @description A list of warnings */
    warnings?: string[]
  }

  Success: {
    /** @description Detailed message */
    message?: string
    /**
     * Format: int32
     * @description The HTTP status code
     */
    code?: number
  }

  SuccessEnvelope: {
    details?: OASSchemas['Success']
  }

  /**
   * @description The log message in JSON format. Use one object representing a single event or an array of objects representing multiple events.
   *
   * The object might contain the following types of keys (the possible key values are listed below):
   *
   * * Timestamp.  The following formats are supported: UTC milliseconds, RFC3339, and RFC3164. If not set, the current timestamp is used.
   * * Severity. If not set, `NONE` is used.
   * * Content. If the content key is not set, the whole JSON is parsed as the content.
   * * Semantic attribute. Only values of the `String` type are supported. Semantic attributes are indexed and can be used in queries. These are also displayed in aggregations (facets). If an unsupported key occurs it is not indexed and cannot be used in indexing and aggregations.
   *
   * The object value can be a single constant or, in case of semantic attribute, an array of constants. The length of the value is limited. Any content exceeding the limit is trimmed. Default limits:
   *
   * * Content: 8,192 characters.
   * * Semantic attribute: 250 characters per value, up to 32 attribute values
   *
   * Supported timestamp keys:
   *  * @timestamp
   *  * Timestamp
   *  * _timestamp
   *  * date
   *  * eventTime
   *  * published_date
   *  * syslog.timestamp
   *  * timestamp
   *
   * Supported content keys:
   *  * body
   *  * content
   *  * message
   *  * payload
   *
   * Supported severity keys:
   *  * level
   *  * loglevel
   *  * severity
   *  * status
   *  * syslog.severity
   *
   * Supported semantic attribute keys:
   *  * audit.action
   *  * audit.identity
   *  * audit.result
   *  * aws.account.id
   *  * aws.arn
   *  * aws.log_group
   *  * aws.log_stream
   *  * aws.region
   *  * aws.resource.id
   *  * aws.resource.type
   *  * aws.service
   *  * azure.location
   *  * azure.resource.group
   *  * azure.resource.id
   *  * azure.resource.name
   *  * azure.resource.type
   *  * azure.subscription
   *  * cloud.account.id
   *  * cloud.availability_zone
   *  * cloud.provider
   *  * cloud.region
   *  * container.image.name
   *  * container.image.tag
   *  * container.name
   *  * db.cassandra.keyspace
   *  * db.connection_string
   *  * db.hbase.namespace
   *  * db.jdbc.driver_classname
   *  * db.mongodb.collection
   *  * db.mssql.instance_name
   *  * db.name
   *  * db.operation
   *  * db.redis.database_index
   *  * db.statement
   *  * db.system
   *  * db.user
   *  * dt.active_gate.group.name
   *  * dt.active_gate.id
   *  * dt.code.filepath
   *  * dt.code.func
   *  * dt.code.lineno
   *  * dt.code.ns
   *  * dt.ctg.calltype
   *  * dt.ctg.extendmode
   *  * dt.ctg.gatewayurl
   *  * dt.ctg.program
   *  * dt.ctg.rc
   *  * dt.ctg.requesttype
   *  * dt.ctg.serverid
   *  * dt.ctg.termid
   *  * dt.ctg.transid
   *  * dt.ctg.userid
   *  * dt.entity.cloud_application
   *  * dt.entity.cloud_application_instance
   *  * dt.entity.cloud_application_namespace
   *  * dt.entity.container_group
   *  * dt.entity.container_group_instance
   *  * dt.entity.custom_device
   *  * dt.entity.host
   *  * dt.entity.kubernetes_cluster
   *  * dt.entity.kubernetes_node
   *  * dt.entity.process_group
   *  * dt.entity.process_group_instance
   *  * dt.event.group_label
   *  * dt.event.key
   *  * dt.events.root_cause_relevant
   *  * dt.exception.messages
   *  * dt.exception.serialized_stacktraces
   *  * dt.exception.types
   *  * dt.extension.config.id
   *  * dt.extension.ds
   *  * dt.extension.name
   *  * dt.extension.status
   *  * dt.host.ip
   *  * dt.host.smfid
   *  * dt.host.snaid
   *  * dt.host_group.id
   *  * dt.http.application_id
   *  * dt.http.context_root
   *  * dt.kubernetes.cluster.id
   *  * dt.kubernetes.cluster.name
   *  * dt.kubernetes.config.id
   *  * dt.kubernetes.event.involved_object.kind
   *  * dt.kubernetes.event.involved_object.name
   *  * dt.kubernetes.event.reason
   *  * dt.kubernetes.node.name
   *  * dt.kubernetes.node.system_uuid
   *  * dt.kubernetes.topmost_controller.kind
   *  * dt.kubernetes.workload.kind
   *  * dt.kubernetes.workload.name
   *  * dt.network_zone.id
   *  * dt.os.description
   *  * dt.os.type
   *  * dt.process.commandline
   *  * dt.process.executable
   *  * dt.process.name
   *  * dt.source_entity
   *  * dt.source_entity_name
   *  * dt.source_entity_type
   *  * faas.id
   *  * faas.instance
   *  * faas.name
   *  * faas.version
   *  * gcp.instance.id
   *  * gcp.instance.name
   *  * gcp.project.id
   *  * gcp.region
   *  * gcp.resource.type
   *  * host.hostname
   *  * host.id
   *  * host.image.id
   *  * host.image.name
   *  * host.image.version
   *  * host.name
   *  * host.type
   *  * http.client_ip
   *  * http.flavor
   *  * http.host
   *  * http.method
   *  * http.route
   *  * http.scheme
   *  * http.server_name
   *  * http.status_code
   *  * http.status_text
   *  * http.target
   *  * http.url
   *  * k8s.cluster.name
   *  * k8s.container.name
   *  * k8s.cronjob.name
   *  * k8s.cronjob.uid
   *  * k8s.daemonset.name
   *  * k8s.daemonset.uid
   *  * k8s.deployment.name
   *  * k8s.deployment.uid
   *  * k8s.job.name
   *  * k8s.job.uid
   *  * k8s.namespace.name
   *  * k8s.pod.name
   *  * k8s.pod.uid
   *  * k8s.replicaset.name
   *  * k8s.replicaset.uid
   *  * k8s.statefulset.name
   *  * k8s.statefulset.uid
   *  * log.source
   *  * net.host.ip
   *  * net.host.name
   *  * net.host.port
   *  * net.peer.ip
   *  * net.peer.name
   *  * net.peer.port
   *  * net.transport
   *  * process.technology
   *  * service.instance.id
   *  * service.name
   *  * service.namespace
   *  * service.version
   *  * span_id
   *  * trace_id
   *  * winlog.eventid
   *  * winlog.level
   *  * winlog.opcode
   *  * winlog.provider
   *  * winlog.task
   */
  LogMessageJson: { [key: string]: unknown }

  /**
   * @description The log message in plain text.
   *
   * The length of the message is limited to 8,192 characters. Any content exceeding the limit is trimmed.
   */
  LogMessagePlain: { [key: string]: unknown }

  /**
   * @description A single log record.
   * @example {
   *   "timestamp": "1631193089000",
   *   "status": "ERROR",
   *   "content": "example log content",
   *   "event.type": "LOG",
   *   "additionalColumns": {
   *     "custom.attribute": [
   *       "value1",
   *       "value2"
   *     ],
   *     "loglevel": [
   *       "SEVERE"
   *     ]
   *   }
   * }
   */
  LogRecord: {
    /** @description Additional columns of the log record. */
    additionalColumns?: { [key: string]: string[] }
    /**
     * @description Type of event
     * @enum {string}
     */
    eventType?: 'K8S' | 'LOG' | 'SFM'
    /**
     * Format: int64
     * @description The timestamp of the log record, in UTC milliseconds.
     */
    timestamp?: number
    /** @description The content of the log record. */
    content?: string
    /**
     * @description The log status (based on the log level).
     * @enum {string}
     */
    status?: 'ERROR' | 'INFO' | 'NONE' | 'WARN'
  }

  /**
   * @description Aggregated log records.
   * @example {
   *   "aggregationResult": {
   *     "processId": {
   *       "1597835271": {
   *         "cassandra": "6"
   *       },
   *       "1597835331": {
   *         "apache": "12",
   *         "cassandra": "60"
   *       }
   *     },
   *     "hostId": {
   *       "1597835271": {
   *         "localhost": "12"
   *       },
   *       "1597835331": {
   *         "remotehost": "6"
   *       }
   *     },
   *     "logLevel": {
   *       "1597835271": {
   *         "ERROR": "1",
   *         "INFO": "2"
   *       },
   *       "1597835331": {
   *         "INFO": "17"
   *       }
   *     },
   *     "logPath": {
   *       "1597835271": {
   *         "/var/log/messages": "15",
   *         "/var/log/syslog": "3"
   *       },
   *       "1597835331": {
   *         "/var/log/messages": "15",
   *         "/var/log/syslog": "3"
   *       }
   *     }
   *   }
   * }
   */
  AggregatedLog: {
    /** @description Aggregated log records. */
    aggregationResult?: {
      [key: string]: { [key: string]: { [key: string]: number } }
    }
  }

  /**
   * @description A list of retrieved log records.
   * @example {
   *   "results": [
   *     {
   *       "timestamp": "1631193089000",
   *       "status": "ERROR",
   *       "content": "example log content",
   *       "event.type": "LOG",
   *       "additionalColumns": {
   *         "custom.attribute": [
   *           "value1",
   *           "value2"
   *         ],
   *         "loglevel": [
   *           "SEVERE"
   *         ]
   *       }
   *     }
   *   ],
   *   "sliceSize": 100,
   *   "nextSliceKey": "___-2hI03q0AAAAAAAAAAAAAA-gAAAAAAAAH0P____8AAABkAAAACXRpbWVzdGFtcAD___7aEjTerQ"
   * }
   */
  LogRecordsList: {
    /**
     * Format: int64
     * @description The total number of records in a slice.
     */
    sliceSize?: number
    /** @description A list of retrieved log records. */
    results?: OASSchemas['LogRecord'][]
    /** @description The cursor for the next slice of log records. */
    nextSliceKey?: string
  }

  /**
   * @description Contains data related to a single release of a component.
   * A Release is a combination of a component and a version.
   * A Component can be any form of deployable that can be associated with a version.
   * In the first draft, a Component is always a Service.
   *
   * The tuple <name, product, stage, version> is always unique.
   */
  Release: {
    /**
     * @description The instances entityIds included in this release
     * @example [
     *   "PROCESS_GROUP_INSTANCE-49D94B90FB71C45B",
     *   "PROCESS_GROUP_INSTANCE-7EA049157C82D1A5"
     * ]
     */
    instances?: OASSchemas['ReleaseInstance'][]
    /**
     * @description The product name
     * @example Sockshop
     */
    product?: string
    /**
     * @description The entity has one or more security vulnerabilities
     * @example true
     */
    affectedBySecurityVulnerabilities?: boolean
    /**
     * Format: double
     * @description The count of bytes per second of the entity
     * @example 923234
     */
    throughput?: number
    /**
     * @description The entity id of correlating release.
     * @example PROCESS_GROUP-DFDBAC9CBF104253
     */
    releaseEntityId?: string
    /**
     * Format: int32
     * @description The number of security vulnerabilities of the entity
     * @example 4
     */
    securityVulnerabilitiesCount?: number
    /**
     * @description The software technologies of the release
     * @example [
     *   {
     *     "technology": "JAVA",
     *     "edition": "OpenJDK",
     *     "version": "1.8.0_242",
     *     "verbatimType": "Java"
     *   }
     * ]
     */
    softwareTechs?: OASSchemas['SoftwareTechs'][]
    /**
     * @description The entity has one or more problems
     * @example true
     */
    affectedByProblems?: boolean
    /**
     * @description Indicates that the security vulnerabilities feature is enabled
     * @example true
     */
    securityVulnerabilitiesEnabled?: boolean
    /**
     * @description The identified release version
     * @example 1.195.34.12341232423-012342
     */
    version?: string
    /**
     * @description The related PGI is still running/monitored
     * @example true
     */
    running?: boolean
    /**
     * @description The entity name
     * @example cluster
     */
    name?: string
    /**
     * Format: int32
     * @description The number of problems of the entity
     * @example 4
     */
    problemCount?: number
    /**
     * @description The stage name
     * @example staging
     */
    stage?: string
  }

  /**
   * @description Contains data related to a single instance of a release.
   * An instance is a Process Group Instance and has an optional build version.
   * @example [
   *   "PROCESS_GROUP_INSTANCE-49D94B90FB71C45B",
   *   "PROCESS_GROUP_INSTANCE-7EA049157C82D1A5"
   * ]
   */
  ReleaseInstance: {
    /**
     * @description The build version
     * @example 223005
     */
    buildVersion?: string
    /**
     * @description The entity id of the instance.
     * @example PROCESS_GROUP_INSTANCE-DFDBAC9CBF104253
     */
    entityId?: string
    /**
     * @description List of Security vulnerabilities Ids
     * @example [
     *   "SNYK-JAVA-COMFASTERXMLJACKSONCORE-1234567"
     * ]
     */
    securityVulnerabilities?: string[]
    /**
     * @description List of event Ids of open problems
     * @example [
     *   "573177299181554914_1616573184015V2"
     * ]
     */
    problems?: string[]
  }

  /** @description A list of releases. */
  Releases: {
    /**
     * Format: int64
     * @description Number of releases with problems.
     */
    releasesWithProblems?: number
    /** @description A list of releases. */
    releases?: OASSchemas['Release'][]
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
  }

  /**
   * @description Contains information about the used software technology.
   * @example [
   *   {
   *     "technology": "JAVA",
   *     "edition": "OpenJDK",
   *     "version": "1.8.0_242",
   *     "verbatimType": "Java"
   *   }
   * ]
   */
  SoftwareTechs: {
    /**
     * @description The type of the technology.
     * @example JAVA
     */
    technology?: string
    /**
     * @description The verbatim type of the technology.
     * @example Java
     */
    verbatimType?: string
    /**
     * @description The edition of the technology.
     * @example OpenJDK
     */
    edition?: string
    /**
     * @description The version of the technology.
     * @example 11.0.10
     */
    version?: string
  }

  /** @description The response to a creation- or update-request. */
  SettingsObjectResponse: {
    invalidValue?: OASSchemas['SettingsValue']
    /**
     * @description For a successful request, the ID of the created or modified settings object.
     * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
     */
    objectId?: string
    /**
     * Format: int32
     * @description The HTTP status code for the object.
     */
    code?: number
    error?: OASSchemas['Error']
  }

  /**
   * @description The value of the setting.
   *
   *  It defines the actual values of settings' parameters.
   *
   * The actual content depends on the object's schema.
   * @example {
   *   "autoMonitoring": true
   * }
   */
  SettingsValue: { [key: string]: unknown }

  /** @description A settings object. */
  SettingsObject: {
    /**
     * @description The user (identified by a user ID or a public token ID) who performed that most recent modification.
     * @example john.doe@example.com
     */
    author?: string
    /**
     * @description The update token of the object. You can use it to detect simultaneous modifications by different users.
     *
     * It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update.
     *
     * If omitted on update/deletion, the operation overrides the current value or deletes it without any checks.
     * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
     */
    updateToken?: string
    /**
     * Format: int64
     * @description The timestamp of the last modification.
     */
    modified?: number
    /**
     * @description The version of the schema on which the object is based.
     * @example 1.0.0
     */
    schemaVersion?: string
    /**
     * @description The ID of the settings object.
     * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
     */
    objectId?: string
    /**
     * Format: int64
     * @description The timestamp of the creation.
     */
    created?: number
    /**
     * @description The schema on which the object is based.
     * @example builtin:container.built-in-monitoring-rule
     */
    schemaId?: string
    /**
     * @description The scope that the object targets.
     * @example HOST-D3A3C5A146830A79
     */
    scope?: string
    value?: OASSchemas['SettingsValue']
    /** @description A short summary of settings. */
    summary?: string
  }

  /** @description A list of settings objects. */
  ObjectsList: {
    /** @description A list of settings objects. */
    items?: OASSchemas['SettingsObject'][]
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
  }

  /** @description Configuration of a new settings object. */
  SettingsObjectCreate: {
    /**
     * @description The position of the new object. The new object will be added after the specified one.
     *
     * If `null`, the new object will be placed in the last position.
     *
     * If set to empty string, the new object will be placed in the first position.
     *
     * Only applicable for objects based on schemas with ordered objects (schema's **ordered** parameter is set to `true`).
     * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
     */
    insertAfter?: string
    /**
     * @description The version of the schema on which the object is based.
     * @example 1.0.0
     */
    schemaVersion?: string
    /**
     * @description The schema on which the object is based.
     * @example builtin:container.built-in-monitoring-rule
     */
    schemaId: string
    /**
     * @description The scope that the object targets.
     *
     * If omitted on creation of a new object and if the schema supports scope generation, the operation will generate a scope from the provided value.
     * @example HOST-D3A3C5A146830A79
     */
    scope?: string
    value: OASSchemas['SettingsValue']
  }

  /** @description An update of a settings object. */
  SettingsObjectUpdate: {
    /**
     * @description The update token of the object. You can use it to detect simultaneous modifications by different users.
     *
     * It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update.
     *
     * If omitted on update/deletion, the operation overrides the current value or deletes it without any checks.
     * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
     */
    updateToken?: string
    /**
     * @description The version of the schema on which the object is based.
     * @example 1.0.0
     */
    schemaVersion?: string
    value: OASSchemas['SettingsValue']
  }

  /** @description The list of available settings schemas. */
  SchemaList: {
    /** @description A list of settings schemas. */
    items?: OASSchemas['SchemaStub'][]
    /**
     * Format: int64
     * @description The number of schemas in the list.
     * @example 1
     */
    totalCount?: number
  }

  /** @description The short representation of the settings schema. */
  SchemaStub: {
    /**
     * @description The most recent version of the schema.
     * @example 1.4.2
     */
    latestSchemaVersion?: string
    /**
     * @description The ID of the schema.
     * @example builtin:container.built-in-monitoring-rule
     */
    schemaId?: string
    /**
     * @description The name of the schema.
     * @example Built-in container monitoring rules
     */
    displayName?: string
  }

  /** @description Parameters of a new SLO. */
  SloCreate: {
    /**
     * @description The SLO is enabled (`true`) or disabled (`false`).
     * @example true
     */
    enabled?: boolean
    /**
     * @description The name of the SLO.
     * @example Payment service availability
     */
    name?: string
    /**
     * @description The custom description of the SLO (optional).
     * @example Rate of successful payments per week
     */
    customDescription?: string
    /**
     * @description The percentage-based metric expression for the calculation of the SLO.
     * @example (100)*(builtin:service.errors.server.successCount:splitBy())/(builtin:service.requestCount.server:splitBy())
     */
    metricExpression?: string
    /**
     * @description The evaluation type of the SLO.
     * @example AGGREGATE
     * @enum {string}
     */
    evaluationType?: 'AGGREGATE'
    /**
     * @description The entity filter for the SLO evaluation. Use the [syntax of entity selector](https://dt-url.net/entityselector).
     * @example type("SERVICE")
     */
    filter?: string
    /**
     * Format: double
     * @description The target value of the SLO.
     * @example 95
     */
    target?: number
    /**
     * Format: double
     * @description The warning value of the SLO.
     *
     *  At warning state the SLO is still fulfilled but is getting close to failure.
     * @example 97.5
     */
    warning?: number
    /**
     * @description The timeframe for the SLO evaluation. Use the syntax of the global timeframe selector.
     * @example -1d
     */
    timeframe?: string
    /**
     * @description The type of the metric to use for SLO calculation:
     *
     * * `true`: An existing percentage-based metric.
     * * `false`: A ratio of two metrics.
     *
     * For a list of available metrics, see [Built-in metric page](https://dt-url.net/be03kow) or try the [GET metrics](https://dt-url.net/8e43kxf) API call.
     * @example true
     */
    useRateMetric?: boolean | null
    /**
     * @description The percentage-based metric for the calculation of the SLO.
     *
     * Required when the **useRateMetric** is set to `true`.
     * @example builtin:service.successes.server.rate
     */
    metricRate?: string
    /**
     * @description The metric for the count of successes (the numerator in rate calculation).
     *
     * Required when the **useRateMetric** is set to `false`.
     * @example builtin:service.errors.server.successCount
     */
    metricNumerator?: string
    /**
     * @description The total count metric (the denominator in rate calculation).
     *
     * Required when the **useRateMetric** is set to `false`.
     * @example builtin:service.requestCount.server
     */
    metricDenominator?: string
  }

  /** @description Parameters of a service-level objective (SLO). */
  SLO: {
    /**
     * @description The timeframe for the SLO evaluation. Use the syntax of the global timeframe selector.
     * @example -1d
     */
    timeframe?: string
    /**
     * Format: double
     * @deprecated
     * @description The numerator value used to evaluate the SLO when **useRateMetric** is set to `false`.
     * @example 80
     */
    numeratorValue?: number
    /**
     * Format: double
     * @deprecated
     * @description The denominator value used to evaluate the SLO when **useRateMetric** is set to `false`.
     * @example 90
     */
    denominatorValue?: number
    /**
     * @description The entity filter for fetching the number of problems related to an SLO. Auto-generated in case no filter has been added to the SLO.
     * @example type("SERVICE")
     */
    problemFilter?: string
    /**
     * Format: int32
     * @description Number of OPEN problems related to the SLO.
     *
     * Has the value of `-1` if there's an error with fetching SLO related problems.
     */
    relatedOpenProblems?: number
    /**
     * Format: int32
     * @description Total number of problems related to the SLO.
     *
     * Has the value of `-1` if there's an error with fetching SLO related problems.
     */
    relatedTotalProblems?: number
    /**
     * @description The SLO is accessible through the settings if hasAccess is `true`.
     * @example true
     */
    hasAccess?: boolean
    /**
     * Format: double
     * @description The calculated value of the SLO.
     *
     * Has the value of `-1` if there's an error with SLO calculation; in that case check the value of the **error** parameter.
     * @example 96.25
     */
    evaluatedPercentage?: number
    /**
     * Format: double
     * @description The error budget of the calculated SLO.
     *
     * The error budget is the difference between the calculated and target values. A positive number means all is good; a negative number means trouble.
     * @example 1.25
     */
    errorBudget?: number
    /**
     * @description The percentage-based metric expression for the calculation of the SLO.
     * @example (100)*(builtin:service.errors.server.successCount:splitBy())/(builtin:service.requestCount.server:splitBy())
     */
    metricExpression?: string
    /**
     * @deprecated
     * @description The type of the metric to use for SLO calculation:
     *
     * * `true`: An existing percentage-based metric.
     * * `false`: A ratio of two metrics.
     *
     * For a list of available metrics, see [Built-in metric page](https://dt-url.net/be03kow) or try the [GET metrics](https://dt-url.net/8e43kxf) API call.
     * @example true
     */
    useRateMetric?: boolean
    /**
     * @deprecated
     * @description The percentage-based metric for the calculation of the SLO.
     *
     * Required when the **useRateMetric** is set to `true`.
     * @example builtin:service.successes.server.rate
     */
    metricRate?: string
    /**
     * @deprecated
     * @description The metric for the count of successes (the numerator in rate calculation).
     *
     * Required when the **useRateMetric** is set to `false`.
     * @example builtin:service.errors.server.successCount
     */
    metricNumerator?: string
    /**
     * @deprecated
     * @description The total count metric (the denominator in rate calculation).
     *
     * Required when the **useRateMetric** is set to `false`.
     * @example builtin:service.requestCount.server
     */
    metricDenominator?: string
    /**
     * @description The evaluation type of the SLO.
     * @example AGGREGATE
     * @enum {string}
     */
    evaluationType?: 'AGGREGATE'
    /**
     * @description The name of the SLO.
     * @example Payment service availability
     */
    name?: string
    /**
     * Format: uuid
     * @description The ID of the SLO
     * @example 123e4567-e89b-42d3-a456-556642440000
     */
    id?: string
    /**
     * Format: double
     * @description The target value of the SLO.
     * @example 95
     */
    target?: number
    /**
     * @description A short description of the SLO.
     * @example Rate of successful payments per week
     */
    description?: string
    /**
     * @description The entity filter for the SLO evaluation. Use the [syntax of entity selector](https://dt-url.net/entityselector).
     * @example type("SERVICE")
     */
    filter?: string
    /**
     * @description The SLO is enabled (`true`) or disabled (`false`).
     * @example true
     */
    enabled?: boolean
    /**
     * @description The status of the calculated SLO.
     * @example WARNING
     * @enum {string}
     */
    status?: 'FAILURE' | 'SUCCESS' | 'WARNING'
    /**
     * Format: double
     * @description The warning value of the SLO.
     *
     *  At warning state the SLO is still fulfilled but is getting close to failure.
     * @example 97.5
     */
    warning?: number
    /**
     * @description The error of the SLO calculation.
     *
     * If the value differs from `NONE` there's something wrong with the SLO calculation.
     * @example NONE
     */
    error?: string
  }

  /** @description A list of SLOs. */
  SLOs: {
    /** @description A list of SLOs. */
    slo?: OASSchemas['SLO'][]
    /**
     * @description The cursor for the next page of results. Has the value of `null` on the last page.
     *
     * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
     * @example AQAAABQBAAAABQ==
     */
    nextPageKey?: string
    /**
     * Format: int32
     * @description The number of entries per page.
     */
    pageSize?: number
    /**
     * Format: int64
     * @description The total number of entries in the result.
     */
    totalCount: number
  }

  /** @description A DTO for synthetic configuration. */
  SyntheticConfigDto: {
    /**
     * Format: int64
     * @description bmMonitorTimeout - browser monitor execution timeout (ms)
     */
    bmMonitorTimeout: number
    /**
     * Format: int64
     * @description bmStepTimeout - browser monitor single step execution timeout (ms)
     */
    bmStepTimeout: number
  }

  /** @description Results of the execution HTTP monitor's requests at a given location */
  LocationExecutionResults: {
    /** @description Location id. */
    locationId?: string
    /** @description Execution id. */
    executionId?: string
    /** @description The list of the monitor's request results executed on this location. */
    requestResults?: OASSchemas['MonitorRequestExecutionResult'][]
  }

  /**
   * @description Results of the execution of all HTTP monitor's requests.
   * @example {
   *   "monitorId": "HTTP_CHECK-12B428F6D37A9197",
   *   "locationsExecutionResults": [
   *     {
   *       "locationId": "7804738439930364165",
   *       "executionId": "6136172183050046113",
   *       "requestResults": [
   *         {
   *           "requestId": "HTTP_CHECK_STEP-53071FC3C4F72E28",
   *           "requestName": "Request name",
   *           "sequenceNumber": 1,
   *           "startTimestamp": 1615806570884,
   *           "engineId": 338502283,
   *           "publicLocation": false,
   *           "url": "https://www.examplePage.com",
   *           "method": "GET",
   *           "requestBody": "",
   *           "requestHeaders": [
   *             {
   *               "name": "User-Agent",
   *               "value": "DynatraceSynthetic/1.215.1"
   *             },
   *             {
   *               "name": "X-Dynatrace-Visit",
   *               "value": "6136172183050046113"
   *             },
   *             {
   *               "name": "X-Dynatrace-Test",
   *               "value": "HTTP_CHECK-12B428F6D37A9197"
   *             }
   *           ],
   *           "responseStatusCode": 200,
   *           "responseBody": "<html><head>Title</head><body>Main Page</body></html>",
   *           "responseSize": 1112,
   *           "responseBodySizeLimitExceeded": false,
   *           "responseHeaders": [
   *             {
   *               "name": "Date",
   *               "value": "Mon, 15 Mar 2021 11:09:30 GMT"
   *             },
   *             {
   *               "name": "Content-Language",
   *               "value": "en"
   *             }
   *           ],
   *           "resolvedIps": [
   *             "80.252.0.145"
   *           ],
   *           "errorCode": 0,
   *           "responseMessage": "OK",
   *           "peerCertificateExpiryDate": 1647302399000,
   *           "peerCertificateDetails": "[Certificate details]",
   *           "totalTime": 238,
   *           "hostNameResolutionTime": 26,
   *           "tcpConnectTime": 15,
   *           "tlsHandshakeTime": 8,
   *           "timeToFirstByte": 96,
   *           "redirectionTime": 70,
   *           "waitingTime": 47,
   *           "redirectsCount": 1,
   *           "failureMessage": ""
   *         }
   *       ]
   *     }
   *   ]
   * }
   */
  MonitorExecutionResults: {
    /** @description Monitor id. */
    monitorId?: string
    /** @description The list with the results of the requests executed on assigned locations. */
    locationsExecutionResults?: OASSchemas['LocationExecutionResults'][]
  }

  /** @description A result of the execution HTTP monitor's request. */
  MonitorRequestExecutionResult: {
    /** @description Request id. */
    requestId?: string
    /** @description Request name. */
    requestName?: string
    /**
     * Format: int32
     * @description Request's sequence number.
     */
    sequenceNumber?: number
    /**
     * Format: int64
     * @description Request start timestamp.
     */
    startTimestamp?: number
    /**
     * Format: int64
     * @description VUC's id on which monitor's request was executed.
     */
    engineId?: number
    /** @description Flag informs whether request was executed on public location. */
    publicLocation?: boolean
    /** @description Request URL address. */
    url?: string
    /** @description Request method type. */
    method?: string
    /** @description Request's request body. */
    requestBody?: string
    /** @description A list of request's headers */
    requestHeaders?: OASSchemas['MonitorRequestHeader'][]
    /**
     * Format: int32
     * @description Request's response status code.
     */
    responseStatusCode?: number
    /** @description Request's response body. */
    responseBody?: string
    /**
     * Format: int64
     * @description Request's response size in bytes.
     */
    responseSize?: number
    /** @description A flag indicating that the response payload size limit of 10MB has been exceeded. */
    responseBodySizeLimitExceeded?: boolean
    /** @description A list of request's response headers */
    responseHeaders?: OASSchemas['MonitorRequestHeader'][]
    /** @description Request's resolved ips.' */
    resolvedIps?: string[]
    /**
     * Format: int32
     * @description Request's health status code.
     */
    healthStatusCode?: number
    /** @description Request's health status. */
    healthStatus?: string
    /** @description Request's response message.' */
    responseMessage?: string
    /**
     * Format: int64
     * @description An expiry date of the first SSL certificate from the certificate chain.
     */
    peerCertificateExpiryDate?: number
    /** @description Request's certificate details. */
    peerCertificateDetails?: string
    /**
     * Format: int64
     * @description A total request time measured in ms.
     */
    totalTime?: number
    /**
     * Format: int64
     * @description A hostname resolution time measured in ms.
     */
    hostNameResolutionTime?: number
    /**
     * Format: int64
     * @description A TCP connect time measured in ms.
     */
    tcpConnectTime?: number
    /**
     * Format: int64
     * @description A TLS handshake time measured in ms.
     */
    tlsHandshakeTime?: number
    /**
     * Format: int64
     * @description A time to first byte measured in ms.
     */
    timeToFirstByte?: number
    /**
     * Format: int64
     * @description Total number of milliseconds spent on handling all redirect requests, measured in ms.
     */
    redirectionTime?: number
    /**
     * Format: int64
     * @description Waiting time (time to first byte - (DNS lookup time + TCP connect time + TLS handshake time), measured in ms.
     */
    waitingTime?: number
    /**
     * Format: int32
     * @description Number of request's redirects.
     */
    redirectsCount?: number
    /** @description Request's failure message. */
    failureMessage?: string
  }

  /** @description A header of the Http request */
  MonitorRequestHeader: {
    /** @description Header's name. */
    name?: string
    /** @description Header's value. */
    value?: string
  }

  /** @description A DTO for synthetic Location IDs. */
  SyntheticLocationIdsDto: {
    /** @description Entity ID to be transferred */
    entityId: string
    /** @description GeoLocation ID to be transferred */
    geoLocationId: string
  }

  /**
   * @description Configuration of a private synthetic location.
   *
   *  Some fields are inherited from the base *SyntheticLocation* object.
   * @example {
   *   "type": "PRIVATE",
   *   "name": "Linz Location",
   *   "countryCode": "AT",
   *   "regionCode": "04",
   *   "city": "Linz",
   *   "latitude": 48.306351,
   *   "longitude": 14.287399,
   *   "nodes": [
   *     "93302281"
   *   ],
   *   "status": "ENABLED",
   *   "availabilityLocationOutage": false,
   *   "availabilityNodeOutage": false,
   *   "availabilityLocationNodeOutageDelayInMinutes": 5,
   *   "autoUpdateChromium": true
   * }
   */
  PrivateSyntheticLocation: OASSchemas['SyntheticLocation'] & {
    /**
     * @description A list of synthetic nodes belonging to the location.
     *
     *  You can retrieve the list of available nodes with the [GET all nodes](https://dt-url.net/miy3rpl) call.
     */
    nodes?: string[]
    /** @description The alerting of location outage is enabled (`true`) or disabled (`false`). */
    availabilityLocationOutage?: boolean
    /**
     * @description The alerting of node outage is enabled (`true`) or disabled (`false`).
     *
     *  If enabled, the outage of *any* node in the location triggers an alert.
     */
    availabilityNodeOutage?: boolean
    /**
     * Format: int32
     * @description Alert if the location or node outage lasts longer than *X* minutes.
     *
     *  Only applicable when **availabilityLocationOutage** or **availabilityNodeOutage** is set to `true`.
     */
    locationNodeOutageDelayInMinutes?: number
    /** @description The notifications of location and node outage is enabled (`true`) or disabled (`false`). */
    availabilityNotificationsEnabled?: boolean
    /** @description Auto upgrade of Chromium is enabled (`true`) or disabled (`false`). */
    autoUpdateChromium?: boolean
  } & {
    entityId: unknown
    latitude: unknown
    longitude: unknown
    name: unknown
    nodes: unknown
    type: unknown
  }

  /**
   * @description Configuration of a public synthetic location.
   *
   *  Some fields are inherited from the base *SyntheticLocation* object.
   * @example {
   *   "entityId": "SYNTHETIC_LOCATION-95196F3C9A4F4215",
   *   "geoLocationId": "GEOLOCATION-95196F3C9A4F4215",
   *   "type": "PUBLIC",
   *   "name": "Amazon US East",
   *   "countryCode": "US",
   *   "regionCode": "VA",
   *   "city": "Amazon US East (N. Virginia)",
   *   "latitude": 39.0436,
   *   "longitude": -77.4875,
   *   "cloudPlatform": "AMAZON_EC2",
   *   "ips": [
   *     "134.189.153.97",
   *     "134.189.153.98"
   *   ],
   *   "stage": "GA",
   *   "browserType": "Chrome",
   *   "browserVersion": "69.0.3497.81",
   *   "status": "ENABLED",
   *   "capabilities": [
   *     "BROWSER",
   *     "HTTP"
   *   ]
   * }
   */
  PublicSyntheticLocation: OASSchemas['SyntheticLocation'] & {
    /**
     * @description The cloud provider where the location is hosted.
     * @enum {string}
     */
    cloudPlatform?:
      | 'ALIBABA'
      | 'AMAZON_EC2'
      | 'AZURE'
      | 'DYNATRACE_CLOUD'
      | 'GOOGLE_CLOUD'
      | 'INTEROUTE'
      | 'OTHER'
      | 'UNDEFINED'
    /** @description The list of IP addresses assigned to the location. */
    ips?: string[]
    /**
     * @description The stage of the location.
     * @enum {string}
     */
    stage?: 'BETA' | 'COMING_SOON' | 'DELETED' | 'GA'
    /** @description The type of the browser the location is using to execute browser monitors. */
    browserType?: string
    /** @description The version of the browser the location is using to execute browser monitors. */
    browserVersion?: string
    /** @description A list of location capabilities. */
    capabilities?: string[]
  } & {
    browserType: unknown
    browserVersion: unknown
    cloudPlatform: unknown
    entityId: unknown
    ips: unknown
    latitude: unknown
    longitude: unknown
    name: unknown
    stage: unknown
    type: unknown
  }

  /**
   * @description Configuration of a synthetic location.
   *
   *  **countryCode**, **regionCode**, **city** parameters are optional as they can be retrieved based on **latitude** and **longitude** of location.
   *
   *  The actual set of fields depends on the type of the location. Find the list of actual objects in the description of the **type** field or see [Synthetic locations API v2 - JSON models](https://dt-url.net/3n43szj).
   */
  SyntheticLocation: {
    /** @description The Dynatrace entity ID of the location. */
    entityId: string
    /**
     * @description Defines the actual set of fields depending on the value. See one of the following objects:
     *
     * * `PUBLIC` -> PublicSyntheticLocation
     * * `PRIVATE` -> PrivateSyntheticLocation
     * * `CLUSTER` -> PrivateSyntheticLocation
     *
     * @enum {string}
     */
    type: 'CLUSTER' | 'PRIVATE' | 'PUBLIC'
    /** @description The name of the location. */
    name: string
    /**
     * @description The country code of the location.
     *
     *  Use the alpha-2 code of the [ISO 3166-2 standard](https://dt-url.net/iso3166-2), (for example, `AT` for Austria or `PL` for Poland).
     */
    countryCode?: string
    /**
     * @description The region code of the location.
     *
     *  For the [USA](https://dt-url.net/iso3166us) or [Canada](https://dt-url.net/iso3166ca) use ISO 3166-2 state codes (without `US-` or `CA-` prefix), for example, `VA` for Virginia or `OR` for Oregon.
     *
     *  For the rest of the world use [FIPS 10-4 codes](https://dt-url.net/fipscodes).
     */
    regionCode?: string
    /** @description The city of the location. */
    city?: string
    /**
     * Format: double
     * @description The latitude of the location in `DDD.dddd` format.
     */
    latitude: number
    /**
     * Format: double
     * @description The longitude of the location in `DDD.dddd` format.
     */
    longitude: number
    /**
     * @description The status of the location:
     *
     * * `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
     * * `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
     * * `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.
     * @enum {string}
     */
    status?: 'DISABLED' | 'ENABLED' | 'HIDDEN'
    /** @description The Dynatrace GeoLocation ID of the location. */
    geoLocationId?: string
  }

  /** @description A synthetic location. */
  LocationCollectionElement: {
    /** @description The name of the location. */
    name: string
    /** @description The Dynatrace entity ID of the location. */
    entityId: string
    /**
     * @description The type of the location.
     * @enum {string}
     */
    type: 'CLUSTER' | 'PRIVATE' | 'PUBLIC'
    /**
     * @description The cloud provider where the location is hosted.
     *
     *  Only applicable to `PUBLIC` locations.
     * @enum {string}
     */
    cloudPlatform?:
      | 'ALIBABA'
      | 'AMAZON_EC2'
      | 'AZURE'
      | 'DYNATRACE_CLOUD'
      | 'GOOGLE_CLOUD'
      | 'INTEROUTE'
      | 'OTHER'
      | 'UNDEFINED'
    /**
     * @description The list of IP addresses assigned to the location.
     *
     *  Only applicable to `PUBLIC` locations.
     */
    ips?: string[]
    /**
     * @description The release stage of the location.
     * @enum {string}
     */
    stage?: 'BETA' | 'COMING_SOON' | 'DELETED' | 'GA'
    /**
     * @description The status of the location.
     * @enum {string}
     */
    status?: 'DISABLED' | 'ENABLED' | 'HIDDEN'
    /** @description The Dynatrace GeoLocation ID of the location. */
    geoLocationId: string
  }

  /**
   * @description A list of synthetic locations.
   * @example {
   *   "locations": [
   *     {
   *       "name": "Gdansk",
   *       "entityId": "SYNTHETIC_LOCATION-53F47ECB33907667",
   *       "geoLocationId": "GEOLOCATION-95196F3C9A4F4215",
   *       "type": "PUBLIC",
   *       "cloudPlatform": "AMAZON_EC2",
   *       "ips": [
   *         "134.189.153.97",
   *         "134.189.153.98"
   *       ],
   *       "stage": "GA",
   *       "status": "ENABLED",
   *       "capabilities": [
   *         "BROWSER",
   *         "HTTP"
   *       ]
   *     },
   *     {
   *       "name": "My private location",
   *       "entityId": "SYNTHETIC_LOCATION-53F47ECB33907667",
   *       "geoLocationId": "GEOLOCATION-95196F3C9A4F4215",
   *       "type": "PRIVATE",
   *       "status": "ENABLED"
   *     }
   *   ]
   * }
   */
  SyntheticLocations: {
    /** @description A list of synthetic locations. */
    locations: OASSchemas['LocationCollectionElement'][]
  }

  /** @description The status of public synthetic locations. */
  SyntheticPublicLocationsStatus: {
    /** @description Synthetic monitors can (`true`) or can't (`false`) run on public synthetic locations. */
    publicLocationsEnabled: boolean
  }

  /** @description The synthetic location update. This is a base object, the exact type depends on the value of the `type` field. */
  SyntheticLocationUpdate: {
    /**
     * @description Defines the actual set of fields depending on the value. See one of the following objects:
     *
     * * `PUBLIC` -> SyntheticPublicLocationUpdate
     * * `PRIVATE` -> SyntheticPrivateLocationUpdate
     *
     * @enum {string}
     */
    type: 'PRIVATE' | 'PUBLIC'
  }

  /** @description Configuration of a private synthetic location */
  SyntheticPrivateLocationUpdate: OASSchemas['SyntheticLocationUpdate'] & {
    /**
     * @description A list of synthetic nodes belonging to the location.
     *
     *  You can retrieve the list of available nodes with the [GET all nodes](https://dt-url.net/miy3rpl) call.
     */
    nodes?: string[]
    /** @description The name of the location. */
    name?: string
    /**
     * @description The country code of the location.
     *
     *  Use the alpha-2 code of the [ISO 3166-2 standard](https://dt-url.net/iso3166-2), (for example, `AT` for Austria or `PL` for Poland).
     */
    countryCode?: string
    /**
     * @description The region code of the location.
     *
     *  For the [USA](https://dt-url.net/iso3166us) or [Canada](https://dt-url.net/iso3166ca) use ISO 3166-2 state codes (without `US-` or `CA-` prefix), for example, `VA` for Virginia or `OR` for Oregon.
     *
     *  For the rest of the world use [FIPS 10-4 codes](https://dt-url.net/fipscodes).
     */
    regionCode?: string
    /** @description The city of the location. */
    city?: string
    /**
     * Format: double
     * @description The latitude of the location in `DDD.dddd` format.
     */
    latitude?: number
    /**
     * Format: double
     * @description The longitude of the location in `DDD.dddd` format.
     */
    longitude?: number
    /**
     * @description The status of the location:
     *
     * * `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
     * * `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
     * * `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.
     * @enum {string}
     */
    status?: 'DISABLED' | 'ENABLED' | 'HIDDEN'
    /** @description The alerting of location outage is enabled (`true`) or disabled (`false`). */
    availabilityLocationOutage?: boolean
    /**
     * @description The alerting of node outage is enabled (`true`) or disabled (`false`).
     *
     *  If enabled, the outage of *any* node in the location triggers an alert.
     */
    availabilityNodeOutage?: boolean
    /**
     * Format: int32
     * @description Alert if the location or node outage lasts longer than *X* minutes.
     *
     *  Only applicable when **availabilityLocationOutage** or **availabilityNodeOutage** is set to `true`.
     */
    locationNodeOutageDelayInMinutes?: number
    /** @description The notifications of location and node outage is enabled (`true`) or disabled (`false`). */
    availabilityNotificationsEnabled?: boolean
    /** @description Auto upgrade of Chromium is enabled (`true`) or disabled (`false`). */
    autoUpdateChromium?: boolean
  } & {
    latitude: unknown
    longitude: unknown
    name: unknown
    nodes: unknown
    type: unknown
  }

  /** @description The update of a public Synthetic location. */
  SyntheticPublicLocationUpdate: OASSchemas['SyntheticLocationUpdate'] & {
    /**
     * @description The status of the location:
     *
     * * `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
     * * `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
     * * `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.
     * @enum {string}
     */
    status?: 'DISABLED' | 'ENABLED' | 'HIDDEN'
  } & {
    status: unknown
    type: unknown
  }

  /**
   * @description Configuration of a synthetic node.
   *
   *  A *synthetic node* is an ActiveGate that is able to execute synthetic monitors.
   * @example {
   *   "entityId": "3086117876",
   *   "hostname": "gdn.dyna.trace",
   *   "ips": [
   *     "238.245.160.14"
   *   ],
   *   "version": "1.161.0.20181210-173639",
   *   "browserMonitorsEnabled": true,
   *   "activeGateVersion": "1.172.2.20190607-040913",
   *   "oneAgentRoutingEnabled": true,
   *   "operatingSystem": "Linux",
   *   "autoUpdateEnabled": true,
   *   "status": "Running",
   *   "playerVersion": "1.179.0.20190920-145430",
   *   "healthCheckStatus": "Ok",
   *   "browserType": "Chrome",
   *   "browserVersion": "69.0.3497.81"
   * }
   */
  Node: {
    /** @description The ID of the synthetic node. */
    entityId: string
    /** @description The hostname of the synthetic node. */
    hostname: string
    /** @description The IP of the synthetic node. */
    ips: string[]
    /** @description The version of the synthetic node. */
    version: string
    /** @description The synthetic node is able to execute browser monitors (`true`) or not (`false`). */
    browserMonitorsEnabled: boolean
    /** @description The version of the Active Gate. */
    activeGateVersion: string
    /** @description The Active Gate has the One Agent routing enabled ('true') or not ('false'). */
    'oneAgentRoutingEnabled ': boolean
    /** @description The Active Gate's host operating system. */
    operatingSystem: string
    /** @description The Active Gate has the Auto update option enabled ('true') or not ('false') */
    autoUpdateEnabled: boolean
    /** @description The status of the synthetic node. */
    status: string
    /** @description The version of the synthetic player. */
    playerVersion: string
    /** @description The health check status of the synthetic node. */
    healthCheckStatus: string
    /** @description The browser type. */
    browserType: string
    /** @description The browser version. */
    browserVersion: string
  }

  /** @description The short representation of a synthetic object. Only contains the ID and the display name. */
  NodeCollectionElement: {
    /** @description The ID of a node. */
    entityId: string
    /** @description The hostname of a node. */
    hostname: string
    /** @description The IP of a node. */
    ips: string[]
    /** @description The version of a node */
    version: string
    /** @description Browser check capabilities enabled flag. */
    browserMonitorsEnabled: boolean
    /** @description The version of the Active Gate. */
    activeGateVersion: string
    /** @description The Active Gate has the One Agent routing enabled ('true') or not ('false'). */
    'oneAgentRoutingEnabled ': boolean
    /** @description The Active Gate's host operating system. */
    operatingSystem: string
    /** @description The Active Gate has the Auto update option enabled ('true') or not ('false') */
    autoUpdateEnabled: boolean
    /** @description The status of the synthetic node. */
    status: string
    /** @description The version of the synthetic player. */
    playerVersion: string
    /** @description The health check status of the synthetic node. */
    healthCheckStatus: string
  }

  /**
   * @description A list of synthetic nodes
   * @example {
   *   "nodes": [
   *     {
   *       "entityId": "3086117876",
   *       "hostname": "gdn.dyna.trace",
   *       "ips": [
   *         "238.245.160.14"
   *       ],
   *       "version": "1.161.0.20181210-173639",
   *       "browserMonitorsEnabled": true,
   *       "activeGateVersion": "1.172.2.20190607-040913",
   *       "oneAgentRoutingEnabled": true,
   *       "operatingSystem": "Linux",
   *       "autoUpdateEnabled": true,
   *       "status": "Running",
   *       "playerVersion": "1.179.0.20190920-145430",
   *       "healthCheckStatus": "Ok"
   *     }
   *   ]
   * }
   */
  Nodes: {
    /** @description A list of synthetic nodes */
    nodes: OASSchemas['NodeCollectionElement'][]
  }

  /** @description Tenant token */
  TenantToken: {
    /** @description The secret of the tenant token. */
    value?: string
  }

  /** @description Configuration of a [tenant token](https://dt-url.net/b403ss9). */
  TenantTokenConfig: {
    old?: OASSchemas['TenantToken']
    active?: OASSchemas['TenantToken']
  }

  /**
   * @description The metadata of a unit.
   * @example {
   *   "unitId": "Second",
   *   "displayName": "second",
   *   "symbol": "s",
   *   "description": "The second is the base unit of time and defined as 1/86400 of a day."
   * }
   */
  Unit: {
    /** @description The ID of the unit. */
    unitId: string
    /** @description The display name of the unit. */
    displayName?: string
    /** @description The symbol of the unit. */
    symbol?: string
    /** @description A short description of the unit. */
    description?: string
  }

  /**
   * @description A list of units along with their properties.
   * @example {
   *   "totalCount": 2,
   *   "units": [
   *     {
   *       "unitId": "BytePerSecond",
   *       "displayName": "byte per second",
   *       "symbol": "B/s",
   *       "description": "byte per second"
   *     },
   *     {
   *       "unitId": "BytePerMinute",
   *       "displayName": "byte per minute",
   *       "symbol": "B/min",
   *       "description": "byte per minute"
   *     }
   *   ]
   * }
   */
  UnitList: {
    /**
     * Format: int64
     * @description The total number of units in the result.
     */
    totalCount: number
    /** @description A list of units. */
    units: OASSchemas['Unit'][]
  }
}

export interface OASOperations {
  getAutoUpdateConfigById: {
    parameters: {
      path: {
        /** The ID of the required ActiveGate. */
        agId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateAutoUpdateConfig']
        }
      }
      /** Not found. See response body for details. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  putAutoUpdateConfigById: {
    parameters: {
      path: {
        /** The ID of the required ActiveGate. */
        agId: string
      }
    }
    responses: {
      /** Success. The auto-update configuration have been updated. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** JSON body of the request, containing auto update parameters. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ActiveGateAutoUpdateConfig']
      }
    }
  }

  validateAutoUpdateConfigById: {
    parameters: {
      path: {
        /** The ID of the required ActiveGate. */
        agId: string
      }
    }
    responses: {
      /** Validated. The submitted auto-update configuration is valid. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** JSON body of the request, containing auto update parameters. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ActiveGateAutoUpdateConfig']
      }
    }
  }

  getGlobalAutoUpdateConfigForTenant: {
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateGlobalAutoUpdateConfig']
        }
      }
    }
  }

  putGlobalAutoUpdateConfigForTenant: {
    responses: {
      /** Success. The global auto-update configuration have been updated. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** JSON body of the request, containing global auto update parameters. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ActiveGateGlobalAutoUpdateConfig']
      }
    }
  }

  validateGlobalAutoUpdateConfigForTenant: {
    responses: {
      /** Validated. The submitted configuration is valid. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** JSON body of the request, containing global auto update parameters. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ActiveGateGlobalAutoUpdateConfig']
      }
    }
  }

  /** The response includes ActiveGates that have both completed (successful and failed) jobs and jobs in progress. */
  getAllUpdateJobList: {
    parameters: {
      query: {
        /**
         * The start of the requested timeframe for update jobs.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of one day is used (`now-1d`).
         *
         * Maximum timeframe is 31 days.
         */
        from?: string
        /**
         * The end of the requested timeframe for update jobs.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * Filters the resulting set of update jobs by the specified initial version.
         *
         *  Specify the comparison operator here.
         */
        startVersionCompareType?: 'EQUAL' | 'GREATER' | 'GREATER_EQUAL' | 'LOWER' | 'LOWER_EQUAL'
        /** Filters the resulting set of update-jobs by the initial version (required format `<major>.<minor>.<revision>`). */
        startVersion?: string
        /** Filters the resulting set of update-jobs by the update type. */
        updateType?: 'ACTIVE_GATE' | 'REMOTE_PLUGIN_AGENT' | 'SYNTHETIC' | 'Z_REMOTE'
        /**
         * Filters the resulting set of update jobs by the specified target version.
         *
         *  Specify the comparison operator here.
         */
        targetVersionCompareType?: 'EQUAL' | 'GREATER' | 'GREATER_EQUAL' | 'LOWER' | 'LOWER_EQUAL'
        /** Filters the resulting set of update-jobs by the target version (required format `<major>.<minor>.<revision>`). */
        targetVersion?: string
        /** If `true`, filters the resulting set of update jobs to the most recent update of each type. */
        lastUpdates?: boolean
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['UpdateJobsAll']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /** The job can update the ActiveGate to the specified version or the latest available one. */
  getUpdateJobListByAgId: {
    parameters: {
      path: {
        /** The ID of the required ActiveGate. */
        agId: string
      }
      query: {
        /**
         * The start of the requested timeframe for update jobs.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of one week is used (`now-1w`).
         *
         * Maximum timeframe is 31 days.
         */
        from?: string
        /**
         * The end of the requested timeframe for update jobs.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * Filters the resulting set of update jobs by the specified initial version.
         *
         *  Specify the comparison operator here.
         */
        startVersionCompareType?: 'EQUAL' | 'GREATER' | 'GREATER_EQUAL' | 'LOWER' | 'LOWER_EQUAL'
        /** Filters the resulting set of update-jobs by the initial version (required format `<major>.<minor>.<revision>`). */
        startVersion?: string
        /** Filters the resulting set of update-jobs by the update type. */
        updateType?: 'ACTIVE_GATE' | 'REMOTE_PLUGIN_AGENT' | 'SYNTHETIC' | 'Z_REMOTE'
        /**
         * Filters the resulting set of update jobs by the specified target version.
         *
         *  Specify the comparison operator here.
         */
        targetVersionCompareType?: 'EQUAL' | 'GREATER' | 'GREATER_EQUAL' | 'LOWER' | 'LOWER_EQUAL'
        /** Filters the resulting set of update-jobs by the target version (required format `<major>.<minor>.<revision>`). */
        targetVersion?: string
        /** If `true`, filters the resulting set of update jobs to the most recent update of each type. */
        lastUpdates?: boolean
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['UpdateJobList']
        }
      }
      /** Not found. See response body for details. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  createUpdateJobForAg: {
    parameters: {
      path: {
        /** The ID of the required ActiveGate. */
        agId: string
      }
    }
    responses: {
      /** Success. The update-job have been created. */
      201: {
        content: {
          'application/json; charset=utf-8': OASSchemas['UpdateJob']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** JSON body of the request, containing update-job parameters. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['UpdateJob']
      }
    }
  }

  getUpdateJobByJobIdForAg: {
    parameters: {
      path: {
        /** The ID of the required ActiveGate. */
        agId: string
        /** A unique identifier for a update-job of ActiveGate. */
        jobId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['UpdateJob']
        }
      }
      /** Not found. See response body for details. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  deleteUpdateJobByJobIdForAg: {
    parameters: {
      path: {
        /** The ID of the required ActiveGate. */
        agId: string
        /** A unique identifier for a update-job of ActiveGate. */
        jobId: string
      }
    }
    responses: {
      /** Success. The update-job have been deleted. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Not found. See response body for details. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  validateUpdateJobForAg: {
    parameters: {
      path: {
        /** The ID of the required ActiveGate. */
        agId: string
      }
    }
    responses: {
      /** Validated. The submitted update-job is valid. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** JSON body of the request, containing update-job parameters. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['UpdateJob']
      }
    }
  }

  /** The response includes all ActiveGates that are currently connected to the environment or have been connected during last 2 hours. */
  getAllActiveGates: {
    parameters: {
      query: {
        /**
         * Filters the resulting set of ActiveGates by the name of the host it's running on.
         *
         *  You can specify a partial name. In that case, the `CONTAINS` operator is used.
         */
        hostname?: string
        /** Filters the resulting set of ActiveGates by the OS type of the host it's running on. */
        osType?: 'LINUX' | 'WINDOWS'
        /**
         * Filters the resulting set of ActiveGates by the network address.
         *
         *  You can specify a partial address. In that case, the `CONTAINS` operator is used.
         */
        networkAddress?: string
        /**
         * Filters the resulting set of ActiveGates by the Load Balancer address.
         *
         *  You can specify a partial address. In that case, the `CONTAINS` operator is used.
         */
        loadBalancerAddress?: string
        /** Filters the resulting set of ActiveGates by the ActiveGate type. */
        type?: 'ENVIRONMENT' | 'ENVIRONMENT_MULTI'
        /**
         * Filters the resulting set of ActiveGates by the network zone.
         *
         *  You can specify a partial name. In that case, the `CONTAINS` operator is used.
         */
        networkZone?: string
        /** Filters the resulting set of ActiveGates by the auto-update status. */
        updateStatus?:
          | 'INCOMPATIBLE'
          | 'OUTDATED'
          | 'SCHEDULED'
          | 'SUPPRESSED'
          | 'UNKNOWN'
          | 'UP2DATE'
          | 'UPDATE_IN_PROGRESS'
          | 'UPDATE_PENDING'
          | 'UPDATE_PROBLEM'
        /**
         * Filters the resulting set of ActiveGates by the specified version.
         *
         *  Specify the comparison operator here.
         */
        versionCompareType?: 'EQUAL' | 'GREATER' | 'GREATER_EQUAL' | 'LOWER' | 'LOWER_EQUAL'
        /**
         * Filters the resulting set of ActiveGates by the specified version.
         *
         *  Specify the version in `<major>.<minor>.<revision>` format (for example, `1.195.0`) here.
         */
        version?: string
        /** Filters the resulting set of ActiveGates by the actual state of auto-update. */
        autoUpdate?: 'DISABLED' | 'ENABLED'
        /**
         * Filters the resulting set of ActiveGates by the group.
         *
         *  You can specify a partial name. In that case, the `CONTAINS` operator is used.
         */
        group?: string
        /** Filters the resulting set of ActiveGates by the communication status. */
        online?: boolean
        /** Filters the resulting set of ActiveGates by the enabled modules. */
        enabledModule?: (
          | 'AWS'
          | 'AZURE'
          | 'BEACON_FORWARDER'
          | 'CLOUD_FOUNDRY'
          | 'DB_INSIGHT'
          | 'EXTENSIONS_V1'
          | 'EXTENSIONS_V2'
          | 'KUBERNETES'
          | 'LOGS'
          | 'MEMORY_DUMPS'
          | 'METRIC_API'
          | 'ONE_AGENT_ROUTING'
          | 'OTLP_INGEST'
          | 'REST_API'
          | 'SYNTHETIC'
          | 'VMWARE'
          | 'Z_OS'
        )[]
        /** Filters the resulting set of ActiveGates by the disabled modules. */
        disabledModule?: (
          | 'AWS'
          | 'AZURE'
          | 'BEACON_FORWARDER'
          | 'CLOUD_FOUNDRY'
          | 'DB_INSIGHT'
          | 'EXTENSIONS_V1'
          | 'EXTENSIONS_V2'
          | 'KUBERNETES'
          | 'LOGS'
          | 'MEMORY_DUMPS'
          | 'METRIC_API'
          | 'ONE_AGENT_ROUTING'
          | 'OTLP_INGEST'
          | 'REST_API'
          | 'SYNTHETIC'
          | 'VMWARE'
          | 'Z_OS'
        )[]
        /** Filters the resulting set of ActiveGates to those which are running in container (`true`) or not (`false`). */
        containerized?: boolean
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateList']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  getOneActiveGateById: {
    parameters: {
      path: {
        /** The ID of the required ActiveGate. */
        agId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGate']
        }
      }
      /** Not found. See response body for details. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /**
   * Lists entities observed within the specified timeframe along with their properties.
   *
   * When you query entities of the `SERVICE_METHOD` type, only the following requests are returned:
   *
   * * [Key requests](https://dt-url.net/a903u9s)
   * * Top X requests that are used for [baselining](https://dt-url.net/0j23uqb)
   * * Requests that have caused a [problem](https://dt-url.net/pf43uqg)
   *
   * You can limit the output by using pagination:
   * 1. Specify the number of results per page in the **pageSize** query parameter.
   * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
   */
  getEntities: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of entities.
         *
         * If not set, 50 is used.
         */
        pageSize?: number
        /**
         * Defines the scope of the query. Only entities matching the specified criteria are included into response.
         *
         * You must set one of these criteria:
         *
         * * Entity type: `type("TYPE")`
         * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
         *
         * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
         *
         * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
         * * Management zone ID: `mzId(123)`
         * * Management zone name: `mzName("value")`
         * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
         * 	The following modifications are available:
         * 	* `entityName.equals`: changes the operator to `EQUALS`.
         * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
         * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
         * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
         * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
         * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
         * 	The following operators are available:
         * 	* `lte`: earlier than or at the specified time
         * 	* `lt`: earlier than the specified time
         * 	* `gte`: later than or at the specified time
         * 	* `gt`: later than the specified time
         * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
         * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
         * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
         *
         * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
         *
         * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
         *
         * The length of the string is limited to 10,000 characters.
         *
         * The field is **required** when you're querying the first page of results.
         */
        entitySelector?: string
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of three days is used (`now-3d`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * Defines the list of entity properties included in the response. The ID and the name of an entity are **always** included to the response.
         *
         * To add properties, list them with leading plus `+`. You can specify several properties, separated by a comma (for example `fields=+lastSeenTms,+properties.BITNESS`).
         *
         * Use the [GET entity type](https://dt-url.net/2ka3ivt) request to fetch the list of properties available for your entity type. Fields from the **properties** object must be specified in the `properties.FIELD` format (for example, `properties.BITNESS`).
         */
        fields?: string
        /**
         * Defines the ordering of the entities returned.
         *
         * This field is **optional**, each field has a sign prefix (+/-), which corresponds to sorting order ( + for ascending and - for descending). If no sign prefix is set, then default ascending sorting order will be applied.
         *
         * Currently ordering is only available for the display name (for example `sort=name or sort =+name for ascending, sort=-name for descending`)
         */
        sort?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EntitiesList']
        }
      }
    }
  }

  getEntity: {
    parameters: {
      path: {
        /** The ID of the required entity. */
        entityId: string
      }
      query: {
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of three days is used (`now-3d`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * Defines the list of entity properties included in the response. The ID and the name of an entity are **always** included to the response.
         *
         * To add properties, list them with leading plus `+`. You can specify several properties, separated by a comma (for example `fields=+lastSeenTms,+properties.BITNESS`).
         *
         * Use the [GET entity type](https://dt-url.net/2ka3ivt) request to fetch the list of properties available for your entity type. Fields from the **properties** object must be specified in the `properties.FIELD` format (for example, `properties.BITNESS`).
         */
        fields?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Entity']
        }
      }
    }
  }

  getEntityType: {
    parameters: {
      path: {
        /** The required entity type. */
        type: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EntityType']
        }
      }
      /** Failed. The requested monitored entity type is not exportable or doesn't exist. */
      400: unknown
    }
  }

  /**
   * You can limit the output by using pagination:
   * 1. Specify the number of results per page in the **pageSize** query parameter.
   * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
   */
  getEntityTypes: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of entity types in a single response payload.
         *
         * The maximal allowed page size is 500.
         *
         * If not set, 50 is used.
         */
        pageSize?: number
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EntityTypeList']
        }
      }
      /** Failed. There are no more entity types to export. */
      400: unknown
    }
  }

  pushCustomDevice: {
    responses: {
      /** Success */
      201: {
        content: {
          'application/json; charset=utf-8': OASSchemas['CustomDeviceCreationResult']
        }
      }
      /** Success */
      204: never
      /** Failed. The input is invalid. */
      400: unknown
    }
    /** The JSON body of the request. Contains parameters of a custom device. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['CustomDeviceCreation']
      }
    }
  }

  /** The ingestion of custom events consumes [Davis Data Units](https://dt-url.net/ddu) (DDUs) from the events pool. */
  createEvent: {
    responses: {
      /** The event ingest request was received by the server. The response body indicates for each event whether its creation was successful. */
      201: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EventIngestResults']
        }
      }
    }
    /** The JSON body of the request. Contains properties of the new event. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['EventIngest']
      }
    }
  }

  getEvent: {
    parameters: {
      path: {
        /** The ID of the required event. */
        eventId: string
      }
    }
    responses: {
      /** Success. The response contains the configuration of the event. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Event']
        }
      }
    }
  }

  getEventProperties: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of event properties in a single response payload.
         *
         * The maximal allowed page size is 500.
         *
         * If not set, 100 is used.
         */
        pageSize?: number
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EventPropertyDetails']
        }
      }
    }
  }

  getEventProperty: {
    parameters: {
      path: {
        /** The event property key you're inquiring. */
        propertyKey: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EventPropertyDetail']
        }
      }
    }
  }

  getEventType: {
    parameters: {
      path: {
        /** The event type you're inquiring. */
        eventType: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EventType']
        }
      }
    }
  }

  getEventTypes: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of event types in a single response payload.
         *
         * The maximal allowed page size is 500.
         *
         * If not set, 100 is used.
         */
        pageSize?: number
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EventTypeList']
        }
      }
    }
  }

  getEvents: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of events in a single response payload.
         *
         * The maximal allowed page size is 1000.
         *
         * If not set, 100 is used.
         */
        pageSize?: number
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two hours is used (`now-2h`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * Defines the scope of the query. Only events matching the specified criteria are included in the response.
         *
         * You can add one or several of the criteria listed below. For each criterion you can specify multiple comma-separated values, unless stated otherwise. If several values are specified, the **OR** logic applies.
         * * Event ID: `eventId("id-1", "id-2")`.
         * * ID of related entity: `entityId("id-1", "id-2")`.
         * * Event status: `status("OPEN")` or `status("CLOSED")`. You can specify only one status.
         * * Management zone ID: `managementZoneId("123", "321")`.
         * * Event type: `eventType("event-type")`. You can specify only one event type. You can fetch the list of possible event types with the [GET event types](https://dt-url.net/qc03u6w) call.
         * * Correlation ID: `correlationId("id-1", "id-2")`.
         * * Happened during maintenance (true, false): `underMaintenance(true)`.
         * * Notifications are suppressed (true, false): `suppressAlert(true)`.
         * * Problem creation is suppressed (true, false): `suppressProblem(true)`.
         * * Frequent event (true, false): `frequentEvent(true)`.
         * * Event property: `property.<key>("value-1", "value-2")`.
         *
         * To set several criteria, separate them with commas (`,`). Only results matching **all** criteria are included in the response.
         */
        eventSelector?: string
        /**
         * The entity scope of the query. You must set one of these criteria:
         *
         * * Entity type: `type("TYPE")`
         * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
         *
         * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
         *
         * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
         * * Management zone ID: `mzId(123)`
         * * Management zone name: `mzName("value")`
         * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
         * 	The following modifications are available:
         * 	* `entityName.equals`: changes the operator to `EQUALS`.
         * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
         * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
         * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
         * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
         * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
         * 	The following operators are available:
         * 	* `lte`: earlier than or at the specified time
         * 	* `lt`: earlier than the specified time
         * 	* `gte`: later than or at the specified time
         * 	* `gt`: later than the specified time
         * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
         * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
         * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
         *
         * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
         *
         * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
         *
         * The length of the string is limited to 10,000 characters.
         *
         * The number of entities that can be selected is limited to 10000.
         */
        entitySelector?: string
      }
    }
    responses: {
      /** Success. The response contains the list of events. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EventList']
        }
      }
    }
  }

  metric: {
    parameters: {
      path: {
        /**
         * The key of the required metric.
         *
         * You can set additional transformation operators, separated by a colon (`:`). See [Metrics selector transformations](https://dt-url.net/metricSelector) in Dynatrace Documentation for additional information on available result transformations.
         */
        metricKey: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['MetricDescriptor']
          'text/csv; header=present; charset=utf-8': OASSchemas['MetricDescriptor']
          'text/csv; header=absent; charset=utf-8': OASSchemas['MetricDescriptor']
        }
      }
      /** A metric has not been found. */
      404: unknown
      /** Not acceptable. The requested media type is not supported. Check the **Accept** header of your request. */
      406: unknown
    }
  }

  /** Deletion cannot be undone! You can't delete a metric if it has data points ingested within the last two hours. */
  delete: {
    parameters: {
      path: {
        /** The key of the required metric. */
        metricKey: string
      }
    }
    responses: {
      /** Success. The deletion of the metric has been triggered. */
      202: unknown
      /** Failed. The metric has been written within the last two hours. */
      400: unknown
      /** Failed. The metric cannot be found or the key cannot be parsed. */
      404: unknown
      /** Failed. The deletion of metric dimensions failed. */
      500: unknown
    }
  }

  /**
   * You can narrow down the output by selecting metrics in the **metricSelector** field.
   *
   * You can additionally limit the output by using pagination:
   *
   * 1. Specify the number of results per page in the **pageSize** query parameter.
   *
   * 2. Then use the cursor from the **nextPageKey** field of the response in the **nextPageKey** query parameter to obtain subsequent pages. All other query parameters must be omitted.
   */
  allMetrics: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of metric schemata in a single response payload.
         *
         * The maximal allowed page size is 500.
         *
         * If not set, 100 is used.
         *
         *  If a value higher than 500 is used, only 500 results per page are returned.
         */
        pageSize?: number
        /**
         * Selects metrics for the query by their keys.
         *
         *  You can specify multiple metric keys separated by commas (for example, `metrickey1,metrickey2`). To select multiple metrics belonging to the same parent, list the last part of the required metric keys in parentheses, separated by commas, while keeping the common part untouched. For example, to list the `builtin:host.cpu.idle` and `builtin:host.cpu.user` metric, write: `builtin:host.cpu.(idle,user)`.
         *
         * You can select a full set of related metrics by using a trailing asterisk (`*`) wildcard. For example, `builtin:host.*` selects all host-based metrics and `builtin:*` selects all Dynatrace-provided metrics.
         *
         * You can set additional transformation operators, separated by a colon (`:`). See [Metrics selector transformations](https://dt-url.net/metricSelector) in Dynatrace Documentation for additional information on available result transformations.
         *
         *  Only `aggregation`, `merge`, `parents`, and `splitBy` transformations are supported by this endpoint.
         *
         *  To find metrics based on a search term, rather than metricId, use the **text** query parameter instead of this one.
         */
        metricSelector?: string
        /** Metric registry search term. Only show metrics that contain the term in their key, display name, or description. Use the `metricSelector` parameter instead of this one to select a complete metric hierarchy instead of doing a text-based search. */
        text?: string
        /**
         * Defines the list of metric properties included in the response.
         *
         * `metricId` is **always** included in the result. The following additional properties are available:
         *
         * * `displayName`: The name of the metric in the user interface. Enabled by default.
         * * `description`: A short description of the metric. Enabled by default.
         * * `unit`: The unit of the metric. Enabled by default.
         * * `tags`: The tags of the metric.
         * + `dduBillable`:  An indicator whether the usage of metric consumes [Davis data units](https://dt-url.net/ddu).
         * * `created`:  The timestamp (UTC milliseconds) when the metrics has been created.
         * * `lastWritten`:  The timestamp (UTC milliseconds) when metric data points have been written for the last time.
         * * `aggregationTypes`: The list of allowed aggregations for the metric. Note that it may be different after a [transformation](https://dt-url.net/metricSelector) is applied.
         * * `defaultAggregation`: The default aggregation of the metric. It is used when no aggregation is specified or the `:auto` transformation is set.
         * * `dimensionDefinitions`: The fine metric division (for example, process group and process ID for some process-related metric).
         * * `transformations`: A list of [transformations](https://dt-url.net/metricSelector) that can be applied to the metric.
         * * `entityType`: A list of entity types supported by the metric.
         * * `minimumValue`: The minimum allowed value of the metric.
         * * `maximumValue`: The maximum allowed value of the metric.
         * * `rootCauseRelevant`: Whether (true or false) the metric is related to a root cause of a problem. A root-cause relevant metric represents a strong indicator for a faulty component.
         * * `impactRelevant`: Whether (true or false) the metric is relevant to a problem's impact. An impact-relevant metric is highly dependent on other metrics and changes because an underlying root-cause metric has changed.
         * * `metricValueType`: The type of the metric's value. You have these options:
         * 	 * `score`: A score metric is a metric where high values indicate a good situation, while low values indicate trouble. An example of such a metric is a success rate.
         * 	 * `error`: An error metric is a metric where high values indicate trouble, while low values indicate a good situation. An example of such a metric is an error count.
         * * `latency`: The latency of the metric, in minutes. The latency is the expected reporting delay (for example, caused by constraints of cloud vendors or other third-party data sources) between the observation of a metric data point and its availability in Dynatrace. The allowed value range is from `1` to `60` minutes.
         * * `metricSelector`: The underlying metric selector used by a func: metric.
         * * `scalar`: Indicates whether the metric expression resolves to a scalar (`true`) or to a series (`false`).
         * A scalar result always contains one data point. The amount of data points in a series result depends on the resolution you're using.
         * * `resolutionInfSupported`: If `true`, resolution=Inf can be applied to the metric query.
         *
         * To add properties, list them with leading plus `+`. To exclude default properties, list them with leading minus `-`.
         *
         * To specify several properties, join them with a comma (for example `fields=+aggregationTypes,-description`).
         *
         * If you specify just one property, the response contains the metric key and the specified property. To return metric keys only, specify `metricId` here.
         */
        fields?: string
        /**
         * Filters the resulted set of metrics to those that have data points within the specified timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         */
        writtenSince?: string
        /**
         * The metadata scope of the query. Only metrics with specified properties are included to the response.
         *
         * You can set one or more of the following criteria. Values are case-sensitive and the `EQUALS` operator is used. If several values are specified, the **OR** logic applies.
         *
         * * `unit("unit-1","unit-2")`
         * * `tags("tag-1","tag-2")`
         * * `dimensionKey("dimkey")` You can specify only one value. The filtering applies only to dimensions that were written within the last 14 days.
         *
         * To set several criteria, separate them with a comma (`,`). For example, `tags("feature","cloud"),unit("Percent"),dimensionKey("location")`. Only results matching **all** criteria are included in response.
         *
         * For example, to list metrics that have the tags **feature** AND **cloud** with a unit of **Percent** OR **MegaByte** AND a dimension with a dimension key **location**, use this **metadataSelector**: `tags("feature"),unit("Percent","MegaByte"),tags("cloud"),dimensionKey("location")`.
         */
        metadataSelector?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['MetricDescriptorCollection']
          'text/csv; header=present; charset=utf-8': OASSchemas['MetricDescriptorCollection']
          'text/csv; header=absent; charset=utf-8': OASSchemas['MetricDescriptorCollection']
        }
      }
      /** Syntax or validation error. **metricSelector** or **fields** have syntactic or semantic errors. */
      400: unknown
      /** A metric has not been found. */
      404: unknown
      /** Not acceptable. The requested media type is not supported. Check the **Accept** header of your request. */
      406: unknown
    }
  }

  /**
   * The following limits apply:
   * * The amount of aggregated data points in the response is limited to 1,000
   * * The amount of series in the response is limited to 1,000
   *    * The amount of data points per series is limited to 10,080 (minutes of one week)
   *    * The overall amount of data points is limited to 100,000
   */
  query: {
    parameters: {
      query: {
        /**
         * Selects metrics for the query by their keys. You can select up to 10 metrics for one query.
         *
         *  You can specify multiple metric keys separated by commas (for example, `metrickey1,metrickey2`). To select multiple metrics belonging to the same parent, list the last part of the required metric keys in parentheses, separated by commas, while keeping the common part untouched. For example, to list the `builtin:host.cpu.idle` and `builtin:host.cpu.user` metric, write: `builtin:host.cpu.(idle,user)`.
         *
         * You can set additional transformation operators, separated by a colon (`:`). See [Metrics selector transformations](https://dt-url.net/metricSelector) in Dynatrace Documentation for additional information on available result transformations.
         *
         *  If the metric key contains whitespaces, they must be escaped with a tilde (`~`). For example, to query the metric with the key of **ext:selfmonitoring.jmx.Agents of Type 'APACHE'** you must specify this selector:
         *
         * `ext:selfmonitoring.jmx.Agents~ of~ Type~ 'APACHE'`
         */
        metricSelector?: string
        /**
         * The desired resolution of data points.
         *
         * You can use one of the following options:
         * * The desired amount of data points. This is the default option. This is a reference number of points, which is not necessarily equal to the number of the returned data points.
         * * The desired timespan between data points. This is a reference timespan, which is not necessarily equal to the returned timespan. To use this option, specify the unit of the timespan.
         *
         * Valid units for the timespan are:
         * * `m`: minutes
         * * `h`: hours
         * * `d`: days
         * * `w`: weeks
         * * `M`: months
         * * `y`: years
         *
         * If not set, the default is **120 data points**.
         *
         * For example:
         *
         * * Get data points which are 10 minutes apart: `resolution=10m`
         * * Get data points which are 3 weeks apart: `resolution=3w`
         */
        resolution?: string
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two hours is used (`now-2h`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * Specifies the entity scope of the query. Only data points delivered by matched entities are included in response.
         *
         * You must set one of these criteria:
         *
         * * Entity type: `type("TYPE")`
         * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
         *
         * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
         *
         * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
         * * Management zone ID: `mzId(123)`
         * * Management zone name: `mzName("value")`
         * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
         * 	The following modifications are available:
         * 	* `entityName.equals`: changes the operator to `EQUALS`.
         * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
         * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
         * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
         * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
         * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
         * 	The following operators are available:
         * 	* `lte`: earlier than or at the specified time
         * 	* `lt`: earlier than the specified time
         * 	* `gte`: later than or at the specified time
         * 	* `gt`: later than the specified time
         * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
         * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
         * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
         *
         * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
         *
         * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
         *
         * The length of the string is limited to 10,000 characters.
         *
         * Use the [`GET /metrics/{metricId}`](https://dt-url.net/6z23ifk) call to fetch the list of possible entity types for your metric.
         *
         * To set a universal scope matching all entities, omit this parameter.
         */
        entitySelector?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['MetricData']
          'text/csv; header=present; charset=utf-8': OASSchemas['MetricData']
          'text/csv; header=absent; charset=utf-8': OASSchemas['MetricData']
        }
      }
      /** Syntax or validation error. From and to parameters, entitySelector or resolution are incorrect individually or in their combined meaning. */
      400: unknown
      /** A metric has not been found. */
      404: unknown
      /** Not acceptable. The requested media type is not supported. Check the **Accept** header of your request. */
      406: unknown
    }
  }

  getSingleNetworkZone: {
    parameters: {
      path: {
        /** The ID of the required network zone. */
        id: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['NetworkZone']
        }
      }
    }
  }

  /**
   * If the network zone with the specified ID does not exist, a new network zone is created.
   *
   *  The ID is not case sensitive. Dynatrace stores the ID in lowercase.
   */
  createOrUpdateNetworkZone: {
    parameters: {
      path: {
        /**
         * The ID of the network zone to be updated.
         *
         *  If you set the ID in the body as well, it must match this ID.
         *
         *  The ID is not case sensitive. Dynatrace stores the ID in lowercase.
         */
        id: string
      }
    }
    responses: {
      /** Success. The new network zone has been created. The response body contains the ID of the new network zone. */
      201: {
        content: {
          'application/json; charset=utf-8': OASSchemas['EntityShortRepresentation']
        }
      }
      /** Success. The network zone has been updated. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** The JSON body of the request. Contains parameters of the network zone. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['NetworkZone']
      }
    }
  }

  /**
   * You can only delete an empty network zone (a zone that no ActiveGate or OneAgent is using).
   *
   *  If the network zone is used as an alternative zone for any OneAgent, it will be automatically removed from the list of possible alternatives.
   */
  deleteNetworkZone: {
    parameters: {
      path: {
        /** The ID of the network zone to be deleted. */
        id: string
      }
    }
    responses: {
      /** Deleted. Response doesn't have a body. */
      204: never
      /** Failed. See error message in the response body for details. */
      400: {
        content: {
          '*/*': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  getAllNetworkZones: {
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['NetworkZoneList']
        }
      }
    }
  }

  getHostStats: {
    parameters: {
      path: {
        /** The ID of the required network zone. */
        id: string
      }
      query: {
        /**
         * Filters the resulting set of hosts:
         *
         * * `all`: All hosts using the zone.
         * * `configuredButNotConnectedOnly`: Hosts from the network zone that use other zones.
         * * `connectedAsAlternativeOnly`: Hosts that use the network zone as an alternative.
         * * `connectedAsFailoverOnly`: Hosts from other zones that use the zone (not configured as an alternative) even though ActiveGates of higher priority are available.
         * * `connectedAsFailoverWithoutOwnActiveGatesOnly`: Hosts from other zones that use the zone (not configured as an alternative) and **no** ActiveGates of higher priority are available.
         *
         * If not set, `all` is used.
         */
        filter?:
          | 'all'
          | 'configuredButNotConnectedOnly'
          | 'connectedAsAlternativeOnly'
          | 'connectedAsFailoverOnly'
          | 'connectedAsFailoverWithoutOwnActiveGatesOnly'
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['NetworkZoneConnectionStatistics']
        }
      }
    }
  }

  getNetworkZoneSettings: {
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['NetworkZoneSettings']
        }
      }
    }
  }

  updateNetworkZoneSettings: {
    responses: {
      /** Success. The global network zones configuration has been updated. Response doesn't have a body. */
      204: never
    }
    /** The JSON body of the request. Contains global configuration of network zones. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['NetworkZoneSettings']
      }
    }
  }

  /** Automatically applied tags and imported tags are not included. */
  getTags: {
    parameters: {
      query: {
        /**
         * Specifies the entities where you want to read tags.
         *
         * You must set one of these criteria:
         *
         * * Entity type: `type("TYPE")`
         * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
         *
         * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
         *
         * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
         * * Management zone ID: `mzId(123)`
         * * Management zone name: `mzName("value")`
         * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
         * 	The following modifications are available:
         * 	* `entityName.equals`: changes the operator to `EQUALS`.
         * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
         * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
         * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
         * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
         * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
         * 	The following operators are available:
         * 	* `lte`: earlier than or at the specified time
         * 	* `lt`: earlier than the specified time
         * 	* `gte`: later than or at the specified time
         * 	* `gt`: later than the specified time
         * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
         * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
         * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
         *
         * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
         *
         * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
         *
         * The length of the string is limited to 10,000 characters.
         */
        entitySelector: string
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of 24 hours is used (`now-24h`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['CustomEntityTags']
        }
      }
    }
  }

  /** All existing tags remain unaffected. */
  postTags: {
    parameters: {
      query: {
        /**
         * Specifies the entities where you want to update tags.
         *
         * You must set one of these criteria:
         *
         * * Entity type: `type("TYPE")`
         * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
         *
         * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
         *
         * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
         * * Management zone ID: `mzId(123)`
         * * Management zone name: `mzName("value")`
         * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
         * 	The following modifications are available:
         * 	* `entityName.equals`: changes the operator to `EQUALS`.
         * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
         * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
         * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
         * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
         * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
         * 	The following operators are available:
         * 	* `lte`: earlier than or at the specified time
         * 	* `lt`: earlier than the specified time
         * 	* `gte`: later than or at the specified time
         * 	* `gt`: later than the specified time
         * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
         * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
         * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
         *
         * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
         *
         * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
         *
         * The length of the string is limited to 10,000 characters.
         */
        entitySelector: string
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of 24 hours is used (`now-24h`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['AddedEntityTags']
        }
      }
    }
    /** The JSON body of the request. Contains tags to be added to the matching entities. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['AddEntityTags']
      }
    }
  }

  deleteTags: {
    parameters: {
      query: {
        /**
         * The key of the tag to be deleted.
         *
         * If **deleteAllWithKey** is `true`, then all tags with this key are deleted. Otherwise, only tags with exact match of key **and** value are deleted.
         *
         * For value-only tags, specify the value here.
         */
        key: string
        /**
         * The value of the tag to be deleted. The value is ignored if **deleteAllWithKey** is `true`.
         *
         * For value-only tags, specify the value in the **key** parameter.
         */
        value?: string
        /**
         * * If `true`, all tags with the specified key are deleted, regardless of the value.
         * * If `false`, only tags with exact match of key **and** value are deleted.
         *
         * If not set, `false` is used.
         */
        deleteAllWithKey?: boolean
        /**
         * Specifies the entities where you want to delete tags.
         *
         * You must set one of these criteria:
         *
         * * Entity type: `type("TYPE")`
         * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
         *
         * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
         *
         * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
         * * Management zone ID: `mzId(123)`
         * * Management zone name: `mzName("value")`
         * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
         * 	The following modifications are available:
         * 	* `entityName.equals`: changes the operator to `EQUALS`.
         * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
         * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
         * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
         * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
         * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
         * 	The following operators are available:
         * 	* `lte`: earlier than or at the specified time
         * 	* `lt`: earlier than the specified time
         * 	* `gte`: later than or at the specified time
         * 	* `gt`: later than the specified time
         * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
         * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
         * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
         *
         * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
         *
         * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
         *
         * The length of the string is limited to 10,000 characters.
         */
        entitySelector: string
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of 24 hours is used (`now-24h`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['DeletedEntityTags']
        }
      }
    }
  }

  /**
   * You can limit the output by using pagination:
   * 1. Specify the number of results per page in the **pageSize** query parameter.
   * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
   */
  listTokens: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of ActiveGate tokens in a single response payload.
         *
         * The maximal allowed page size is 3000 and the minimal size is 100.
         *
         * If not set, 100 is used.
         */
        pageSize?: number
      }
    }
    responses: {
      /** Success. The response contains the list of ActiveGate tokens. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateTokenList']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /** The newly created token will be owned by the same user who owns the token used for authentication of the call. */
  createToken: {
    responses: {
      /** Success. The token has been created. The body of the response contains the token secret. */
      201: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateTokenCreated']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** The JSON body of the request. Contains parameters of the new ActiveGate token. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ActiveGateTokenCreate']
      }
    }
  }

  /** The token secret is **not** exposed. */
  getToken: {
    parameters: {
      path: {
        /** The ID of the token. */
        tokenIdentifier: string
      }
    }
    responses: {
      /** Success. The response contains the metadata of the tokens. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ActiveGateToken']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  revokeToken: {
    parameters: {
      path: {
        /**
         * The token to be deleted.
         *
         * You can specify either the ID or the secret of the token.
         */
        tokenIdentifier: string
      }
    }
    responses: {
      /** Success. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /**
   * You can limit the output by using pagination:
   * 1. Specify the number of results per page in the **pageSize** query parameter.
   * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
   */
  listApiTokens: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of API tokens in a single response payload.
         *
         * The maximal allowed page size is 10000 and the minimal allowed page size is 100.
         *
         * If not set, 200 is used.
         */
        pageSize?: number
        /**
         * Filters the resulting sets of tokens. Only tokens matching the specified criteria are included into response.
         *
         * You can set one or more of the following criteria:
         *
         * * Owner: `owner("value")`. The user that owns the token. Case-sensitive.
         * * Personal access token: `personalAccessToken(false)`. Set to `true` to include only personal access tokens or to `false` to include only API tokens.
         * * Token scope: `scope("scope1","scope2")`. If several values are specified, the **OR** logic applies.
         *
         * To set multiple criteria, separate them with commas (`,`). Only results matching **all** criteria are included into response.
         */
        apiTokenSelector?: string
        /**
         * Specifies the fields to be included in the response.
         *
         * The following fields are included by default:
         *
         * * `id`
         * * `name`
         * * `enabled`
         * * `owner`
         * * `creationDate`
         *
         * To remove fields from the response, specify them with the minus (`-`) operator as a comma-separated list (for example, `-creationDate,-owner`).
         *
         * You can include additional fields:
         *
         * * `personalAccessToken`
         * * `expirationDate`
         * * `lastUsedDate`
         * * `lastUsedIpAddress`
         * * `scopes`
         *
         * To add fields to the response, specify them with the plus (`+`) operator as a comma-separated list (for example, `+expirationDate,+scopes`). You can combine adding and removing of fields (for example, `+scopes,-creationDate`).
         *
         * Alternatively, you can define the desired set of fields in the response. Specify the required fields as a comma-separated list, without operators (for example, `creationDate,expirationDate,owner`). The ID is always included in the response.
         *
         * The **fields** string must be URL-encoded.
         */
        fields?: string
        /**
         * Filters tokens based on the last usage time.
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         */
        from?: string
        /**
         * Filters tokens based on the last usage time.
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * The sort order of the token list.
         *
         * You can sort by the following properties with a sign prefix for the sort order:
         *
         *  * `name`: token name (`+` a...z or `-` z...a)
         *  * `lastUsedDate` last used (`+` never used tokens first `-` most recently used tokens first)
         *  * `creationDate` (`+` oldest tokens first `-` newest tokens first)
         *  * `expirationDate` (`+` tokens that expire soon first `-` unlimited tokens first)
         *
         * If no prefix is set, + is used.
         *
         * If not set, tokens are sorted by creation date with newest first.
         */
        sort?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ApiTokenList']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /** The newly created token will be owned by the same user who owns the token used for authentication of the call. */
  createApiToken: {
    responses: {
      /** Success. The token has been created. The body of the response contains the token secret. */
      201: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ApiTokenCreated']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** The JSON body of the request. Contains parameters of the new API token. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ApiTokenCreate']
      }
    }
  }

  /** The token secret is **not** exposed. */
  getApiToken: {
    parameters: {
      path: {
        /** The ID of the token. */
        id: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ApiToken']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: unknown
    }
  }

  updateApiToken: {
    parameters: {
      path: {
        /**
         * The ID of the token to be updated.
         *
         *  You can't disable the token you're using for authentication of the request.
         */
        id: string
      }
    }
    responses: {
      /** Success. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** The JSON body of the request. Contains updated parameters of the API token. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ApiTokenUpdate']
      }
    }
  }

  deleteApiToken: {
    parameters: {
      path: {
        /**
         * The ID of the token to be deleted.
         *
         * You can specify either the ID or the secret of the token.
         *
         * You can't delete the token you're using for authentication of the request.
         */
        id: string
      }
    }
    responses: {
      /** Success. Response doesn't have a body. */
      204: never
      /** Failed. You can't delete the token you're using for authentication of the request. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: unknown
    }
  }

  lookupApiToken: {
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ApiToken']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: unknown
    }
    /** The JSON body of the request. Contains the required token. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ApiTokenSecret']
      }
    }
  }

  getLog: {
    parameters: {
      path: {
        /** The ID of the required log entry. */
        id: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['AuditLogEntry']
        }
      }
      /** Failed. Invalid ID format. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /**
   * You can limit the output by using pagination:
   * 1. Specify the number of results per page in the **pageSize** query parameter.
   * 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
   */
  getLogs: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of log entries in a single response payload.
         *
         * The maximal allowed page size is 5000.
         *
         * If not set, 1000 is used.
         */
        pageSize?: number
        /**
         * Filters the audit log. You can use the following criteria:
         * * User: `user("userIdentification")`. The `EQUALS` operator applies.
         * * Event type: `eventType("value")`. The `EQUALS` operator applies.
         * * Category of a logged operation: `category("value")`. The `EQUALS` operator applies.
         * * Entity ID: `entityId("id")`. The `CONTAINS` operator applies.
         *
         * For each criterion, you can specify multiple alternatives with comma-separated values. In this case, the OR logic applies. For example, `eventType("CREATE","UPDATE")` means eventType can be "CREATE" or "UPDATE".
         *
         * You can specify multiple comma-separated criteria, such as `eventType("CREATE","UPDATE"),category("CONFIG")`. Only results matching **all** criteria are included in response.
         *
         * Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes:
         * * Tilde `~`
         * * Quote `"`
         */
        filter?: string
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two weeks is used (`now-2w`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * The sorting of audit log entries:
         * * `timestamp`: Oldest first.
         * * `-timestamp`: Newest first.
         *
         * If not set, the newest first sorting is applied.
         */
        sort?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['AuditLog']
        }
      }
    }
  }

  /** You can narrow down the output by providing the management zone and pagination. If you specify a management zone, only problems originating from that zone are included to the request. */
  getAdviceForSecurityProblems: {
    parameters: {
      query: {
        /**
         * To specify management zones, use one of the options listed below. For each option you can specify multiple comma-separated values. If several values are specified, the **OR** logic applies. All values are case-sensitive and must be quoted.
         *
         * * Management zone ID: ids("mzId-1", "mzId-2").
         * * Management zone names: names("mz-1", "mz-2").
         *
         * You can specify several comma-separated criteria (for example, `names("myMz"),ids("9130632296508575249")`).
         */
        managementZoneFilter?: string
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of security advices in a single response payload.
         *
         * The maximal allowed page size is 500.
         *
         * If not set, 5 is used.
         */
        pageSize?: number
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['DavisSecurityAdviceList']
        }
      }
    }
  }

  getRemediationItems: {
    parameters: {
      path: {
        /** The ID of the required security problem. */
        id: string
      }
      query: {
        /**
         * Defines the scope of the query. Only remediable entities matching the specified criteria are included in the response.
         *
         * You can add one or more of the following criteria. Values are *not* case-sensitive and the `EQUALS` operator is used unless otherwise specified.
         *
         * * Vulnerability State: `vulnerabilityState("value")`. Find the possible values in the description of the **vulnerabilityState** field of the response. If not set, all entities are returned.
         * * Muted: `muted("value")`. Possible values are `TRUE` or `FALSE`.
         * * Sensitive data asset assessment: `assessment.dataAssets("value")` Possible values are `REACHABLE`, and `NOT_DETECTED`.
         * * Network exposure assessment: `assessment.exposure("value")` Possible values are `PUBLIC_NETWORK`, and `NOT_DETECTED`.
         * * Entity name contains: `entityNameContains("value-1")`. The `CONTAINS` operator is used.
         *
         * To set several criteria, separate them with a comma (`,`). Only results matching (**all** criteria are included in the response.
         *
         * Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes:
         * * Tilde `~`
         * * Quote `"`
         */
        remediationItemSelector?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['RemediationItemList']
        }
      }
    }
  }

  getSecurityProblem: {
    parameters: {
      path: {
        /** The ID of the required security problem. */
        id: string
      }
      query: {
        /**
         * A list of additional security problem properties you can add to the response.
         *
         * The following properties are available (all other properties are always included and you can't remove them from the response):
         *
         * * `riskAssessment`: A risk assessment of the security problem.
         * * `managementZones`: The management zone where the security problem occurred.
         * * `description`: The description of the vulnerability.
         * * `events`: A list of events of the security problem.
         * * `vulnerableComponents`: A list of vulnerable components of the security problem.
         * * `affectedEntities`: A list of affected entities of the security problem.
         * * `exposedEntities`: A list of exposed entities of the security problem.
         * * `reachableDataAssets`: A list of data assets reachable by affected entities of the security problem.
         * * `relatedEntities`: A list of related entities of the security problem.
         * * `relatedContainerImages`: A list of related container images of the security problem.
         *
         * To add properties, specify them in a comma-separated list and prefix each property with a plus (for example, `+riskAssessment,+managementZones`).
         */
        fields?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SecurityProblemDetails']
        }
      }
    }
  }

  getSecurityProblems: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of security problems in a single response payload.
         *
         * The maximal allowed page size is 500.
         *
         * If not set, 100 is used.
         */
        pageSize?: number
        /**
         * Defines the scope of the query. Only security problems matching the specified criteria are included in the response.
         *
         * You can add one or more of the following criteria. Values are *not* case-sensitive and the `EQUALS` operator is used unless otherwise specified.
         *
         * * Status: `status("value")`. Find the possible values in the description of the **status** field of the response. If not set, all security problems are returned.
         * * Muted: `muted("value")`. Possible values are `TRUE` or `FALSE`.
         * * Risk level: `riskLevel("value")`. The Davis Risk Level. Find the possible values in the description of the **riskLevel** field of the response.
         * * Minimum risk score: `minRiskScore("5.5")`. The Davis minimum Risk Score. The `GREATER THAN OR EQUAL TO` operator is used. Specify a number between `1.0` and `10.0`.
         * * Maximum risk score: `maxRiskScore("5.5")`. The Davis maximum Risk Score. The `LESS THAN` operator is used. Specify a number between `1.0` and `10.0`.
         * * Base risk level: `baseRiskLevel("value")`. The Base Risk Level from the CVSS. Find the possible values in the description of the **riskLevel** field of the response.
         * * Minimum base risk score: `minBaseRiskScore("5.5")`. The Base minimum Risk Score from the CVSS. The `GREATER THAN OR EQUAL TO` operator is used. Specify a number between `1.0` and `10.0`.
         * * Maximum base risk score: `maxBaseRiskScore("5.5")`. The Base maximum Risk Score from the CVSS. The `LESS THAN` operator is used. Specify a number between `1.0` and `10.0`.
         * * External vulnerability ID contains: `externalVulnerabilityIdContains("id-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
         * * External vulnerability ID: `externalVulnerabilityId("id-1","id-2")`. Case insensitive `EQUALS` operator is used.
         * * CVE ID: `cveId("id")`.
         * * Risk assessment `riskAssessment("value-1","value-2")` Possible values are `EXPOSED`, `SENSITIVE`, and `EXPLOIT`.
         * * Related host ID: `relatedHostIds("value-1", "value-2")`. Specify Dynatrace entity IDs here.
         * * Related host name: `relatedHostNames("value-1", "value-2")`. Values are case-sensitive.
         * * Related host name contains: `relatedHostNameContains("value-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
         * * Related Kubernetes cluster ID: `relatedKubernetesClusterIds("value-1", "value-2")`. Specify Dynatrace entity IDs here.
         * * Related Kubernetes cluster name: `relatedKubernetesClusterNames("value-1", "value-2")`. Values are case-sensitive.
         * * Related Kubernetes cluster name contains: `relatedKubernetesClusterNameContains("value-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
         * * Related Kubernetes workload ID: `relatedKubernetesWorkloadIds("value-1", "value-2")`. Specify Dynatrace entity IDs here.
         * * Related Kubernetes workload name: `relatedKubernetesWorkloadNames("value-1", "value-2")`. Values are case-sensitive.
         * * Related Kubernetes workload name contains: `relatedKubernetesWorkloadNameContains("value-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
         * * Management zone ID: `managementZoneIds("mzId-1","mzId-2")`.
         * * Management zone name: `managementZones("name-1","name-2")`. Values are case-sensitive.
         * * Affected process group ID: `affectedPgIds("pgId-1", "pgId-2")`. Specify Dynatrace entity IDs here.
         * * Affected process group name: `affectedPgNames("name-1", "name-2")`. Values are case-sensitive.
         * * Affected process group name contains: `affectedPgNameContains("name-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
         * * Vulnerable component ID: `vulnerableComponentIds("componentId-1", "componentId-2")`. Specify component IDs here.
         * * Vulnerable component name: `vulnerableComponentNames("name-1", "name-2")`. Values are case-sensitive.
         * * Vulnerable component name contains: `vulnerableComponentNameContains("name-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
         * * Host tags: `hostTags("hostTag-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
         * * Process group tags: `pgTags("pgTag-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
         * * Process group instance tags: `pgiTags("pgiTag-1")`. The `CONTAINS` operator is used. A maximum of 48 characters are allowed.
         * * Tags: `tags("tag-1")`. The `CONTAINS` operator is used. This selector picks hosts, process groups, and process group instances at the same time. A maximum of 48 characters are allowed.
         * * Display ID: `displayIds("S-1234","S-5678")`. The `EQUALS` operator is used.
         * * Technology: `technology("technology-1","technology-2")`. Find the possible values in the description of the **technology** field of the response. The `EQUALS` operator is used.
         *
         * Risk score and risk category are mutually exclusive (cannot be used at the same time).
         *
         * To set several criteria, separate them with a comma (`,`). Only results matching (**all** criteria are included in the response.
         *
         * Specify the value of a criterion as a quoted string. The following special characters must be escaped with a tilde (`~`) inside quotes:
         * * Tilde `~`
         * * Quote `"`
         */
        securityProblemSelector?: string
        /**
         * Specifies a field for sorting the security problem list.
         *
         * You can sort by the following properties with a sign prefix for the sorting order.
         *
         * * `status`: The security problem status (`+` open first or `-` resolved first)
         * * `muted`: The security problem mute state (`+` unmuted first or `-` muted first)
         * * `technology`: The security problem technology
         * * `firstSeenTimestamp`: The timestamp of the first occurrence of the security problem (`+` new problems first or `-` old problems first)
         * * `securityProblemId`: The auto-generated ID of the security problem (`+` lower number first or `-` higher number first)
         * * `externalVulnerabilityId`: The ID of the external vulnerability (`+` lower number first or `-` higher number first)
         * * `displayId`: The display ID (`+` lower number first or `-` higher number first)
         * * `riskAssessment.riskScore`: The Davis security score (`+` lower score first or `-` higher score first)
         * * `riskAssessment.riskLevel`: The Davis security level (`+` lower level first or `-` higher level first)
         * * `riskAssessment.exposure`: Whether the problem is exposed to the internet
         * * `riskAssessment.dataAssets`: Whether data assets are affected
         *
         * If no prefix is set, `+` is used.
         */
        sort?: string
        /**
         * A list of additional security problem properties you can add to the response.
         *
         * The following properties are available (all other properties are always included and you can't remove them from the response):
         *
         * * `riskAssessment`: A risk assessment of the security problem.
         * * `managementZones`: The management zone where the security problem occurred.
         *
         * To add properties, specify them in a comma-separated list and prefix each property with a plus (for example, `+riskAssessment,+managementZones`).
         */
        fields?: string
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of thirty days is used (`now-30d`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SecurityProblemList']
        }
      }
    }
  }

  muteSecurityProblem: {
    parameters: {
      path: {
        /** The ID of the required security problem. */
        id: string
      }
    }
    responses: {
      /** Success. The security problem has been muted. */
      200: unknown
      /** Not executed. The security problem is already muted. */
      204: never
    }
    /** The JSON body of the request. Contains the muting information. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['Mute']
      }
    }
  }

  setRemediationItemMuteState: {
    parameters: {
      path: {
        /** The ID of the required security problem. */
        id: string
        /** The id of the remediation item. */
        itemId: string
      }
    }
    responses: {
      /** Success. The requested mute state has been applied to the remediation item. */
      200: unknown
      /** Not executed. The remediation item was previously put into the requested mute state by the same user with the same reason and comment. */
      204: never
    }
    /** The JSON body of the request. Contains the mute state information that should be applied. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['RemediationItemMuteStateChangeDto']
      }
    }
  }

  unmuteSecurityProblem: {
    parameters: {
      path: {
        /** The ID of the required security problem. */
        id: string
      }
    }
    responses: {
      /** Success. The security problem has been un-muted. */
      200: unknown
      /** Not executed. The security problem is already un-muted. */
      204: never
    }
    /** The JSON body of the request. Contains the un-muting information. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['Unmute']
      }
    }
  }

  getActiveEnvironmentConfiguration: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  updateExtensionEnvironmentConfiguration: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
      }
    }
    responses: {
      /** Success. Environment configuration updated. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** The version of the requested environment configuration. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
      }
    }
  }

  activateExtensionEnvironmentConfiguration: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
      }
    }
    responses: {
      /** Success. Environment configuration created. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** The version of the requested environment configuration. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
      }
    }
  }

  deleteEnvironmentConfiguration: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
      }
    }
    responses: {
      /** Success. Environment configuration deactivated. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionEnvironmentConfigurationVersion']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  extensionMonitoringConfigurations: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of extensions in a single response payload.
         *
         * The maximal allowed page size is 100.
         *
         * If not set, 20 is used.
         */
        pageSize?: number
        /** Filters the resulting set of configurations by extension 2.0 version. */
        version?: string
        /** Filters the resulting set of configurations by the active state. */
        active?: boolean
      }
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionMonitoringConfigurationsList']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  createMonitoringConfiguration: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['MonitoringConfigurationResponse'][]
        }
      }
      /** Multi-Status, if not all requests resulted in the same status */
      207: {
        content: {
          'application/json; charset=utf-8': string[]
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** JSON body of the request, containing monitoring configuration parameters. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['MonitoringConfigurationDto'][]
      }
    }
  }

  extensionConfigurationSchema: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
        /** The version of the requested extension 2.0 */
        extensionVersion: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SchemaDefinitionRestDto']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  extensionDetails: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
        /** The version of the requested extension 2.0 */
        extensionVersion: string
      }
      header: {
        /**
         * Accept header. Specifies part of the extension 2.0 that will be returned:
         * * application/json; charset=utf-8 - returns extension 2.0 metadata in JSON
         * * application/octet-stream - returns extension 2.0 zip package stored on the server.
         */
        Accept?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Extension']
          'application/octet-stream': OASSchemas['Extension']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          'application/octet-stream': OASSchemas['ErrorEnvelope']
        }
      }
      /** Not acceptable */
      406: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          'application/octet-stream': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  removeExtension: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
        /** The version of the requested extension 2.0 */
        extensionVersion: string
      }
    }
    responses: {
      /** Success. The extension 2.0 version has been deleted. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Extension']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  getEnvironmentConfigurationEvents: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
      }
      query: {
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two hours is used (`now-2h`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /** Content of the event */
        content?: string
        /** Status of the event */
        status?: 'ERROR' | 'INFO' | 'NONE' | 'WARN'
      }
    }
    responses: {
      /** List of the latest extension environment configuration events */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionEventsList']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  getExtensionMonitoringConfigurationEvents: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
        /** The ID of the requested monitoring configuration. */
        configurationId: string
      }
      query: {
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two hours is used (`now-2h`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * Host that uses this monitoring configuration.
         *
         * Example: `HOST-ABCDEF0123456789`
         */
        'dt.entity.host'?: string
        /**
         * Hexadecimal ID of Active Gate that uses this monitoring configuration.
         *
         * Example: `0x1a2b3c4d`
         */
        'dt.active_gate.id'?: string
        /**
         * Data source that uses this monitoring configuration.
         *
         * Example: `snmp`
         */
        'dt.extension.ds'?: string
        /** Content of the event */
        content?: string
        /** Status of the event */
        status?: 'ERROR' | 'INFO' | 'NONE' | 'WARN'
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionEventsList']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  getExtensionMonitoringConfigurationStatus: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
        /** The ID of the requested monitoring configuration. */
        configurationId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionStatusDto']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  getSchemaFile: {
    parameters: {
      path: {
        /** The version of the schema. */
        schemaVersion: string
        /** The name of the schema file. */
        fileName: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['JsonNode']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  listExtensionVersions: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of extensions in a single response payload.
         *
         * The maximal allowed page size is 100.
         *
         * If not set, 20 is used.
         */
        pageSize?: number
      }
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionList']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  listExtensions: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of extensions in a single response payload.
         *
         * The maximal allowed page size is 100.
         *
         * If not set, 20 is used.
         */
        pageSize?: number
        /** Filters the resulting set of extensions 2.0 by name. You can specify a partial name. In that case, the CONTAINS operator is used. */
        name?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionList']
        }
      }
    }
  }

  uploadExtension: {
    parameters: {
      query: {
        /** Only run validation but do not persist the extension even if validation was successful. */
        validateOnly?: boolean
      }
    }
    responses: {
      /** The extension is valid */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Extension']
        }
      }
      /** Success. The extension 2.0 has been uploaded. */
      201: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Extension']
        }
      }
      /** Failed. The input file is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Upload not possible yet, please try again in a few seconds. */
      409: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    requestBody: {
      content: {
        'multipart/form-data': {
          /**
           * Format: binary
           * @description Extension 2.0 zip file to upload.
           */
          file: string
        }
      }
    }
  }

  listSchemaFiles: {
    parameters: {
      path: {
        /** The version of the schema. */
        schemaVersion: string
      }
      header: {
        /**
         * Accept header. Specifies part of the extension 2.0 that will be returned:
         * * application/json; charset=utf-8 - returns extension 2.0 metadata in JSON
         * * application/octet-stream - returns extension 2.0 zip package stored on the server.
         */
        Accept?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SchemaFiles']
          'application/octet-stream': OASSchemas['SchemaFiles']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          'application/octet-stream': OASSchemas['ErrorEnvelope']
        }
      }
      /** Not acceptable */
      406: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
          'application/octet-stream': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  listSchemas: {
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SchemasList']
        }
      }
    }
  }

  monitoringConfigurationDetails: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
        /** The ID of the requested monitoring configuration. */
        configurationId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ExtensionMonitoringConfiguration']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  updateMonitoringConfiguration: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
        /** The ID of the requested monitoring configuration. */
        configurationId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['MonitoringConfigurationResponse']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** JSON body of the request, containing monitoring configuration parameters. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['MonitoringConfigurationUpdateDto']
      }
    }
  }

  removeMonitoringConfiguration: {
    parameters: {
      path: {
        /** The name of the requested extension 2.0. */
        extensionName: string
        /** The ID of the requested monitoring configuration. */
        configurationId: string
      }
    }
    responses: {
      /** Success. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  closeProblem: {
    parameters: {
      path: {
        /** The ID of the required problem. */
        problemId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ProblemCloseResult']
        }
      }
      /** The problem is closed already the request hasn't been executed. */
      204: never
    }
    /** The JSON body of the request. Contains the closing comment on the problem. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['ProblemCloseRequestDtoImpl']
      }
    }
  }

  getComments: {
    parameters: {
      path: {
        /** The ID of the required problem. */
        problemId: string
      }
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters except the optional **fields** parameter.
         */
        nextPageKey?: string
        /**
         * The amount of comments in a single response payload.
         *
         * The maximal allowed page size is 500.
         *
         * If not set, 10 is used.
         */
        pageSize?: number
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['CommentsList']
        }
      }
    }
  }

  createComment: {
    parameters: {
      path: {
        /** The ID of the required problem. */
        problemId: string
      }
    }
    responses: {
      /** Success. The comment has been added. */
      201: unknown
    }
    /** The JSON body of the request. Contains the comment to be added. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['CommentRequestDtoImpl']
      }
    }
  }

  getComment: {
    parameters: {
      path: {
        /** The ID of the required problem. */
        problemId: string
        /** The ID of the required comment. */
        commentId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Comment']
        }
      }
    }
  }

  updateComment: {
    parameters: {
      path: {
        /** The ID of the required problem. */
        problemId: string
        /** The ID of the required comment. */
        commentId: string
      }
    }
    responses: {
      /** Success. The comment has been updated. */
      204: never
    }
    /** The JSON body of the request. Contains the updated comment. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['CommentRequestDtoImpl']
      }
    }
  }

  deleteComment: {
    parameters: {
      path: {
        /** The ID of the required problem. */
        problemId: string
        /** The ID of the required comment. */
        commentId: string
      }
    }
    responses: {
      /** Success. The comment has been deleted. */
      204: never
    }
  }

  getProblem: {
    parameters: {
      path: {
        /** The ID of the required problem. */
        problemId: string
      }
      query: {
        /**
         * A list of additional problem properties you can add to the response.
         *
         * The following properties are available (all other properties are always included and you can't remove them from the response):
         *
         * * `evidenceDetails`: The details of the root cause.
         * * `impactAnalysis`: The impact analysis of the problem on other entities/users.
         * * `recentComments`: A list of the most recent comments to the problem.
         *
         * To add properties, specify them as a comma-separated list (for example, `evidenceDetails,impactAnalysis`).
         */
        fields?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Problem']
        }
      }
    }
  }

  getProblems: {
    parameters: {
      query: {
        /**
         * A list of additional problem properties you can add to the response.
         *
         * The following properties are available (all other properties are always included and you can't remove them from the response):
         *
         * * `evidenceDetails`: The details of the root cause.
         * * `impactAnalysis`: The impact analysis of the problem on other entities/users.
         * * `recentComments`: A list of the most recent comments to the problem.
         *
         * To add properties, specify them as a comma-separated list (for example, `evidenceDetails,impactAnalysis`).
         *
         *  The field is valid only for the current page of results. You must set it for each page you're requesting.
         */
        fields?: string
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters except the optional **fields** parameter.
         */
        nextPageKey?: string
        /**
         * The amount of problems in a single response payload.
         *
         * The maximal allowed page size is 500.
         *
         * If not set, 50 is used.
         */
        pageSize?: number
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two hours is used (`now-2h`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * Defines the scope of the query. Only problems matching the specified criteria are included into response.
         *
         * You can add one or several of the criteria listed below. For each criterion you can specify multiple comma-separated values, unless stated otherwise. If several values are specified, the **OR** logic applies. All values must be quoted.
         * * Status: `status("open")` or `status("closed")`. You can specify only one status.
         * * Severity level: `severityLevel("level-1","level-2")`. Find the possible values in the description of the **severityLevel** field of the response.
         * * Impact level: `impactLevel("level-11","level-2")` Find the possible values in the description of the **impactLevel** field of the response.
         * * Root cause entity: `rootCauseEntity("id-1", "id-2")`.
         * * Management zone ID: `managementZoneIds("mZId-1", "mzId-2")`.
         * * Management zone name: `managementZones("value-1","value-2")`.
         * * Impacted entities: `impactedEntities("id-1", "id-2")`.
         * * Affected entities: `affectedEntities("id-1", "id-2")`.
         * * Type of affected entities: `affectedEntityTypes("value-1","value-2")`.
         * * Problem ID: `problemId("id-1", "id-2")`.
         * * Alerting profile ID: `problemFilterIds("id-1", "id-2")`.
         * * Alerting profile name (contains, case-insensitive): `problemFilterNames("value-1","value-2")`.
         * * Alerting profile name (exact match, case-insensitive): `problemFilterNames.equals("value-1","value-2")`.
         * * Entity tags: `entityTags("[context]key:value","key:value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. If a value-only tag has a colon (`:`) in it, you must escape the colon with a backslash(`\`). Otherwise, the tag will be parsed as a `key:value tag`. All tag values are case-sensitive.
         * * Display ID of the problem: `displayId("id-1", "id-2")`.
         * * Under maintenance: `underMaintenance(true|false)`. Shows (true) or hides (false) all problems created during maintenance mode.
         * * Text search: `text("value")`. Text search on the following fields: problem title, event titles, displayId and the id of affected and impacted entities. The text search is case insensitive, partial matching and based on a relevance score. Therefore the `relevance` sort option should be used to get the most relevant problems first. The special characters `~` and `"` need to be escaped using a `~` (e.g. double quote search `text("~"")`).
         *
         * To set several criteria, separate them with a comma (`,`). Only results matching **all** criteria are included in the response.
         */
        problemSelector?: string
        /**
         * The entity scope of the query. You must set one of these criteria:
         *
         * * Entity type: `type("TYPE")`
         * * Dynatrace entity ID: `entityId("id")`. You can specify several IDs, separated by a comma (`entityId("id-1","id-2")`). All requested entities must be of the same type.
         *
         * You can add one or several of the following criteria. Values are case-sensitive and the `EQUALS` operator is used unless otherwise specified.
         *
         * * Tag: `tag("value")`. Tags in `[context]key:value`, `key:value`, and `value` formats are detected and parsed automatically. Any colons (`:`) that are part of the key or value must be escaped with a backslash(`\`), otherwise, it will be interpreted as the separator between the key and the value. All tag values are case-sensitive.
         * * Management zone ID: `mzId(123)`
         * * Management zone name: `mzName("value")`
         * * Entity name: `entityName("value")`. By default this filters for entities, whose name **contains** the given value and is **not** case sensitive.
         * 	The following modifications are available:
         * 	* `entityName.equals`: changes the operator to `EQUALS`.
         * 	* `entityName.startsWith`: changes the operator to `BEGINS WITH`.
         * 	* `entityName.in`: enables you to provide multiple values. The `EQUALS` operator applies.
         * 	* `caseSensitive(entityName("value"))`: takes any entity name criterion as an arguments and makes the value case-sensitive.
         * * Health state (HEALTHY,UNHEALTHY): `healthState("HEALTHY")`
         * * First seen timestamp: `firstSeenTms.<operator>(now-3h)`. Use any timestamp format from the **from**\/**to** parameters.
         * 	The following operators are available:
         * 	* `lte`: earlier than or at the specified time
         * 	* `lt`: earlier than the specified time
         * 	* `gte`: later than or at the specified time
         * 	* `gt`: later than the specified time
         * * Entity attribute: `<attribute>("value1","value2")` and `<attribute>.exists()`. To fetch the list of available attributes, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **properties** field of the response.
         * * Relationships: `fromRelationships.<relationshipName>()` and `toRelationships.<relationshipName>()`. The criterion takes an entity selector as an attribute. To fetch the list of available relationships, execute the [GET entity type](https://dt-url.net/2ka3ivt) request and check the **fromRelationships** and **toRelationships** fields.
         * * Negation: `not(<criterion>)`. Inverts any criterion except for **type**.
         *
         * For more information, see [Entity selector](https://dt-url.net/apientityselector) in Dynatrace Documentation.
         *
         * To set several criteria, separate them with a comma (`,`). For example, `type("HOST"),healthState("HEALTHY")`. Only results matching **all** criteria are included in response.
         *
         * The length of the string is limited to 10,000 characters.
         *
         * The maximum number of entities that may be selected is limited to 10000.
         */
        entitySelector?: string
        /**
         * Specifies a set of comma-separated (`,`) fields for sorting in the problem list.
         *
         * You can sort by the following properties with a sign prefix for the sorting order.
         *
         *  * `status`: problem status (`+` open problems first or `-` closed problems first)
         *  * `startTime`: problem start time (`+` old problems first or `-` new problems first)
         *  * `relevance`: problem relevance (`+` least relevant problems first or `-` most relevant problems first) - can be used only in combination with text search
         *
         * If no prefix is set, `+` is used.
         *
         * You can specify several levels of sorting. For example, `+status,-startTime` sorts problems by status, open problems first. Within the status, problems are sorted by start time, oldest first.
         */
        sort?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Problems']
        }
      }
    }
  }

  /**
   * Ingested logs are stored in the indexed log storage.
   *
   * This endpoint requires an ActiveGate with the **Log Analytics Collector** module enabled.
   */
  storeLog: {
    responses: {
      /** Only a part of input events were ingested due to event size limits or JSON parsing issues. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SuccessEnvelope']
        }
      }
      /** Success. Response doesn't have a body. */
      204: never
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. You can't add more logs to the storage, because you are out of [Davis Data Units](https://dt-url.net/dduLog) (DDU). Purchase additional DDUs. */
      402: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. This may happen when no ActiveGate is available with the Log Analytics Collector module enabled. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The server either does not recognize the request method, or it lacks the ability to fulfil the request. May happen when indexed log storage is not enabled. */
      501: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /**
     * The body of the request. Contains one or more log events to be ingested.
     *
     * The endpoint accepts one of the following payload types, defined by the **Accept** header:
     *
     * * `text/plain`: supports only one log event.
     * * `application/json`: supports multiple log events in a single payload.
     */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['LogMessageJson']
        'text/plain; charset=utf-8': OASSchemas['LogMessagePlain']
      }
    }
  }

  /**
   * Returns the aggregated number of occurrences of log values divided into time slots.
   *
   * It is possible that the timeframe covered by results exceeds the specified timeframe. In that case the request returns fewer time slots than specified in the **timeBuckets** query parameter.
   */
  getLogHistogramData: {
    parameters: {
      query: {
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two weeks is used (`now-2w`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * The log search query.
         *
         * The query must use the [Dynatrace search query language](https://dt-url.net/pe03s6f).
         *
         * The query has a limit of 20 relations (logical operators between simple expressions (`AND`, `OR`) or comparison operators (`=`, `!=`, `<`, `<=`, `>`, `>=`) in simple expressions).
         */
        query?: string
        /**
         * The number of time slots in the result.
         *
         * The query timeframe is divided equally into the specified number of slots.
         *
         * The minimum length of a slot is 1 ms.
         *
         * If not set, 1 is used.
         */
        timeBuckets?: number
        /**
         * The maximum number of values in each group.
         *
         * You can get up to 100 values per group.
         *
         * If not set, 10 is used.
         */
        maxGroupValues?: number
        /**
         * The groupings to be included in the response.
         *
         * You can specify several groups in the following format: `groupBy=status&groupBy=log.source`.
         *
         * If not set, all possible groups are returned. You can use this option to check for possible grouping values.
         *
         * Unique log data attributes (high-cardinality attributes) for example, `span_id` or `trace_id` cannot be used for grouping.
         */
        groupBy?: string[]
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['AggregatedLog']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /**
   * Returns the first *X* records (specified in the **limit** query parameter). Log records are sorted by the criteria specified in the **sort** query parameter.
   *
   * If the query is too large to be processed in a single request, it is divided into slices. In that case the first response contains the **nextSliceKey** cursor for the second slice. Use it in the **nextSliceKey** query parameter to obtain the second slice, which contains **nextSliceKey** cursor for the third slice, and so on.
   *
   * Results can be distributed unevenly between slices and some slices might be empty.
   */
  getLogRecords: {
    parameters: {
      query: {
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two weeks is used (`now-2w`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * The desired amount of log records.
         *
         * The maximal allowed limit is 1000.
         *
         * If not set, 1000 is used.
         */
        limit?: number
        /**
         * The log search query.
         *
         * The query must use the [Dynatrace search query language](https://dt-url.net/pe03s6f).
         *
         * The query has a limit of 20 relations (logical operators between simple expressions (`AND`, `OR`) or comparison operators (`=`, `!=`, `<`, `<=`, `>`, `>=`) in simple expressions).
         */
        query?: string
        /**
         * Defines the ordering of the log records.
         *
         * Each field has a sign prefix (+/-) for sorting order. If no sign prefix is set, then the `+` option will be applied.
         *
         * Currently, ordering is available only for the timestamp (+timestamp for the oldest records first, or -timestamp for the newest records first).
         *
         * When millisecond resolution provided by the timestamp is not enough, log records are sorted based on the order in which they appear in the log source (remote process writing to REST API endpoint or remote process from which logs are collected).
         */
        sort?: string
        /**
         * The cursor for the next slice of results. You can find it in the **nextSliceKey** field of the previous response.
         *
         * The first slice is always returned if you don't specify this parameter.
         *
         * If this parameter is set, all other query parameters are ignored.
         */
        nextSliceKey?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['LogRecordsList']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  ingest: {
    responses: {
      /** The provided metric data points are accepted and will be processed in the background. */
      202: unknown
      /** Some data points are invalid. Valid data points are accepted and will be processed in the background. */
      400: unknown
    }
    /** Data points, provided in the [line protocol](https://dt-url.net/5d63ic1). Each line represents a single data point. */
    requestBody: {
      content: {
        'text/plain; charset=utf-8': string
      }
    }
  }

  /** This endpoint can be targeted by OpenTelemetry exporters. Ingested traces are forwarded to the server. */
  ingestTrace: {
    responses: {
      /** The request has been received and will be processed. */
      200: unknown
      /** The request could not be processed. This may happen if the message is malformed. */
      400: unknown
      /** The request could not be processed due to an internal server error. */
      500: unknown
      /** The service is currently unavailable. This may happen if the module is paused. */
      503: unknown
    }
    /** An ExportTraceServiceRequest message in binary protobuf format. */
    requestBody: {
      content: {
        'application/x-protobuf': string[]
      }
    }
  }

  getReleases: {
    parameters: {
      query: {
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two weeks is used (`now-2w`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of Releases in a single response payload.
         *
         * The maximal allowed page size is 1000.
         *
         * If not set, 100 is used.
         */
        pageSize?: number
        /** Get your Releases (`false`) or a set of demo Releases (`true`). */
        demo?: boolean
        /**
         * Defines the scope of the query. Only Releases matching the provided criteria are included in the response.
         *
         * You can add one or several of the criteria listed below.
         * * ManagementZone: type(PROCESS_GROUP_INSTANCE),mzName("ManagementZone-A"). Filters for all releases in the given ManagementZone. The filter is case-sensitive.
         * * Monitoring state: monitoringState("Active") or monitoringState("Inactive"). You can specify only one monitoring state.
         * * Health state: healthState("HEALTHY") or healthState("UNHEALTHY"). You can specify only one health state.
         * * Name: entityName("name"). Filters for all releases that contain the given value in their name. The filter is case-insensitive.
         * * Entity ID: entityId("id").
         * * Product: releasesProduct("product"). Filters for all releases that contain the given value in their product. The filter is case-insensitive.
         * * Stage: releasesStage("stage"). Filters for all releases that contain the given value in their stage. The filter is case-insensitive.
         * * Version: releasesVersion("version"). Filters for all releases that contain the given value in their version. The filter is case-insensitive.
         *
         * To set several criteria, separate them with comma (,). Only results matching all criteria are included in the response.
         * e.g., .../api/v2/releases?releasesSelector=name("Server"),monitoringState("Active"),healthState("HEALTHY"),releasesVersion("1.0.7").
         *
         * The special characters ~ and " need to be escaped using a ~ (e.g. double quote search entityName("~"").
         */
        releasesSelector?: string
        /**
         * Specifies the field that is used for sorting the releases list.
         * The field has a sign prefix (+/-) which corresponds to the sorting order ('+' for ascending and '-' for descending). If no sign prefix is set, then the default ascending sorting order will be applied. You can sort by the following properties:
         * * 'product': Product name
         * * 'name': Release name
         * * 'stage': Stage name
         * * 'version': Version
         * * 'instances': Instances
         * * 'traffic': Traffic
         *
         * If not set, the ascending order sorting for name is applied.
         */
        sort?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Releases']
        }
      }
    }
  }

  getSettingsObjectByObjectId: {
    parameters: {
      path: {
        /** The ID of the required settings object. */
        objectId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObject']
        }
      }
      /** No object available for the given objectId */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
        }
      }
    }
  }

  putSettingsObjectByObjectId: {
    parameters: {
      path: {
        /** The ID of the required settings object. */
        objectId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
        }
      }
      /** Failed. Schema validation failed. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
        }
      }
      /** Failed. Conflicting resource. */
      409: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
        }
      }
    }
    /** The JSON body of the request. Contains updated parameters of the settings object. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['SettingsObjectUpdate']
      }
    }
  }

  deleteSettingsObjectByObjectId: {
    parameters: {
      path: {
        /** The ID of the required settings object. */
        objectId: string
      }
      query: {
        /**
         * The update token of the object. You can use it to detect simultaneous modifications by different users.
         *
         * It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update.
         *
         * If omitted on update/deletion, the operation overrides the current value or deletes it without any checks.
         */
        updateToken?: string
      }
    }
    responses: {
      /** Success. Response doesn't have a body. */
      204: never
      /** Failed. Schema validation failed. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
        }
      }
      /** Failed. Conflicting resource. */
      409: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse']
        }
      }
    }
  }

  getSettingsObjects: {
    parameters: {
      query: {
        /**
         * A list of comma-separated schema IDs to which the requested objects belong.
         *
         * To load the first page, when the **nextPageKey** is not set, this parameter is required.
         */
        schemaIds?: string
        /**
         * A list of comma-separated scopes, that the requested objects target.
         *
         * The selection only matches objects directly targeting the specified scopes. For example, `environment` will not match objects that target a host within environment.
         *
         * To load the first page, when the **nextPageKey** is not set, this parameter is required.
         */
        scopes?: string
        /**
         * A list of fields to be included to the response. The provided set of fields replaces the default set.
         *
         *  Specify the required top-level fields, separated by commas (for example, `objectId,value`).
         */
        fields?: string
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of settings objects in a single response payload.
         *
         * The maximal allowed page size is 500.
         *
         * If not set, 100 is used.
         */
        pageSize?: number
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ObjectsList']
        }
      }
      /** Failed. The specified schema or scope is not found. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /** You can upload several objects at once. In that case each object returns its own response code. Check the response body for details. */
  postSettingsObjects: {
    parameters: {
      query: {
        /** If `true`, the request runs only validation of the submitted settings objects, without saving them. */
        validateOnly?: boolean
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse'][]
        }
      }
      /** Multi-status: different objects in the payload resulted in different statuses. */
      207: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse'][]
        }
      }
      /** Failed. Schema validation failed. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse'][]
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse'][]
        }
      }
      /** Failed. Conflicting resource. */
      409: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SettingsObjectResponse'][]
        }
      }
    }
    /** The JSON body of the request. Contains the settings objects. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['SettingsObjectCreate'][]
      }
    }
  }

  getAvailableSchemaDefinitions: {
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SchemaList']
        }
      }
    }
  }

  getSchemaDefinition: {
    parameters: {
      path: {
        /** The ID of the required schema. */
        schemaId: string
      }
      query: {
        /**
         * The version of the required schema.
         *
         *  If not set, the most recent version is returned.
         */
        schemaVersion?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SchemaDefinitionRestDto']
        }
      }
      /** Failed. The specified schema doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /**
   * By default the values are calculated for the SLO's own timeframe. You can use a custom timeframe:
   *
   * 1. Set the **timeFrame** parameter to `GTF`.
   * 2. Provide the timeframe in **from** and **to** parameters.
   */
  getSlo: {
    parameters: {
      query: {
        /**
         * The cursor for the next page of results. You can find it in the **nextPageKey** field of the previous response.
         *
         * The first page is always returned if you don't specify the **nextPageKey** query parameter.
         *
         * When the **nextPageKey** is set to obtain subsequent pages, you must omit all other query parameters.
         */
        nextPageKey?: string
        /**
         * The amount of SLOs in a single response payload.
         *
         * The maximal allowed page size is 10000.
         *
         * If not set, 10 is used.
         */
        pageSize?: number
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two weeks is used (`now-2w`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * The scope of the query. Only SLOs matching the provided criteria are included in the response.
         *
         * You can add one or several of the criteria listed below.
         * * ID: id("id"). Filters for an SLO with the given ID.
         * * Name: name("name"). Filters for an SLO with the given name. The filter is case-sensitive.
         * * Health state: healthState("HEALTHY") or healthState("UNHEALTHY"). You can specify only one health state.
         * * Text: text("value"). Filters for all SLOs that contain the given value in their name or description. The filter is case-insensitive.
         *
         * To set several criteria, separate them with comma (,). Only results matching all criteria are included in the response.
         * e.g., .../api/v2/slo?sloSelector=name("Service Availability"), .../api/v2/slo?sloSelector=id("id"), .../api/v2/slo?sloSelector=text("Description"),healthState("HEALTHY").
         *
         * The special characters ~ and " need to be escaped using a ~ (e.g. double quote search text("~"").
         */
        sloSelector?: string
        /**
         * The sorting of SLO entries:
         * * `name`: Names in ascending order.
         * * `-name`: Names in descending order.
         *
         * If not set, the ascending order is used.
         */
        sort?: string
        /**
         * The timeframe to calculate the SLO values:
         *
         * * `CURRENT`: SLO's own timeframe.
         * * `GTF`: timeframe specified by **from** and **to** parameters.
         *
         * If not set, the `CURRENT` value is used.
         */
        timeFrame?: 'CURRENT' | 'GTF'
        /** Only SLOs on the given page are included in the response. The first page has the index '1'. */
        pageIdx?: number
        /** Get your SLOs (`false`) or a set of demo SLOs (`true`). */
        demo?: boolean
        /** Get your SLOs without them being evaluated (`false`) or with evaluations (`true`) with maximum `pageSize` of 25. */
        evaluate?: boolean
        /** Get your enabled SLOs (`true`) or disabled ones (`false`) */
        enabledSlos?: boolean
        /** Get your global SLOs (`true`) regardless of the selected filter or filter them out (`false`). */
        showGlobalSlos?: boolean
      }
    }
    responses: {
      /** Success. The response contains the parameters and calculated values of the requested SLO. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SLOs']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  createSlo: {
    responses: {
      /** Success. The new SLO has been created. Response doesn't have a body. The **location** response header contains the ID of the new SLO. */
      201: unknown
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. Conflicting resource. */
      409: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Internal server error. */
      500: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** The JSON body of the request. Contains the parameters of the new SLO. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['SloCreate']
      }
    }
  }

  /** If **from** and **to** parameters are provided, the SLO is calculated for that timeframe; otherwise the SLO's own timeframe is used. */
  getSloById: {
    parameters: {
      query: {
        /**
         * The start of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the relative timeframe of two weeks is used (`now-2w`).
         */
        from?: string
        /**
         * The end of the requested timeframe.
         *
         * You can use one of the following formats:
         * * Timestamp in UTC milliseconds.
         * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
         * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
         * You can also specify relative timeframe without an alignment: `now-NU`.
         * Supported time units for the relative timeframe are:
         *    * `m`: minutes
         *    * `h`: hours
         *    * `d`: days
         *    * `w`: weeks
         *    * `M`: months
         *    * `y`: years
         *
         * If not set, the current timestamp is used.
         */
        to?: string
        /**
         * The timeframe to calculate the SLO values:
         *
         * * `CURRENT`: SLO's own timeframe.
         * * `GTF`: timeframe specified by **from** and **to** parameters.
         *
         * If not set, the `CURRENT` value is used.
         */
        timeFrame?: 'CURRENT' | 'GTF'
      }
      path: {
        /** The ID of the required SLO. */
        id: string
      }
    }
    responses: {
      /** Success. The response contains the parameters and calculated values of the requested SLO. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SLO']
        }
      }
      /** Failed. The input is invalid. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  updateSloById: {
    parameters: {
      path: {
        /** The ID of the required SLO. */
        id: string
      }
    }
    responses: {
      /** Success */
      200: unknown
      /** Failed. The requested resource doesn't exist. */
      404: unknown
      /** Internal server error. */
      500: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
    /** The JSON body of the request. Contains the updated parameters of the SLO. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['SloCreate']
      }
    }
  }

  deleteSlo: {
    parameters: {
      path: {
        /** The ID of the required SLO. */
        id: string
      }
    }
    responses: {
      /** Success. The SLO has been deleted. Response doesn't have a body. */
      204: never
      /** Failed. The requested resource doesn't exist. */
      404: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Failed. Conflicting resource. */
      409: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
      /** Internal server error. */
      500: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  getConfiguration: {
    responses: {
      /** Success. The response contains synthetic related parameters defined for whole tenant. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SyntheticConfigDto']
        }
      }
    }
  }

  updateConfiguration: {
    responses: {
      /** Success. The set of synthetic related parameters has been updated. Response doesn't have a body. */
      204: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SyntheticConfigDto']
        }
      }
    }
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['SyntheticConfigDto']
      }
    }
  }

  getExecutionResult: {
    parameters: {
      path: {
        /** Identifier of the HTTP monitor for which last execution result is returned. */
        monitorId: string
        /** Defines the result type of the last HTTP monitor's execution. */
        resultType: 'SUCCESS' | 'FAILED'
      }
      query: {
        /** Filters the results to those executed by specified Synthetic location. Specify the ID of the location. */
        locationId?: string
      }
    }
    responses: {
      /** Success. The response contains detailed data. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['MonitorExecutionResults']
        }
      }
    }
  }

  getLocations: {
    parameters: {
      query: {
        /** Filters the resulting set of locations to those which are hosted on a specific cloud platform. */
        cloudPlatform?: 'AWS' | 'AZURE' | 'ALIBABA' | 'GOOGLE_CLOUD' | 'OTHER'
        /** Filters the resulting set of locations to those of a specific type. */
        type?: 'PUBLIC' | 'PRIVATE'
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SyntheticLocations']
        }
      }
    }
  }

  addLocation: {
    responses: {
      /** Success. The private location has been created. The response contains the ID of the new location. */
      201: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SyntheticLocationIdsDto']
        }
      }
    }
    /** The JSON body of the request. Contains parameters of the new private synthetic location. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['PrivateSyntheticLocation']
      }
    }
  }

  getLocation: {
    parameters: {
      path: {
        /** The Dynatrace entity ID of the required location. */
        locationId: string
      }
    }
    responses: {
      /** Success. The response contains parameters of the synthetic location. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SyntheticLocation']
        }
      }
    }
  }

  /** For public locations you can only change the location status. */
  updateLocation: {
    parameters: {
      path: {
        /** The Dynatrace entity ID of the synthetic location to be updated. */
        locationId: string
      }
    }
    responses: {
      /** Success. The location has been updated. Response doesn't have a body. */
      204: never
    }
    /** The JSON body of the request. Contains updated parameters of the location. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['SyntheticLocationUpdate']
      }
    }
  }

  removeLocation: {
    parameters: {
      path: {
        /** The Dynatrace entity ID of the private synthetic location to be deleted. */
        locationId: string
      }
    }
    responses: {
      /** Success. The location has been deleted. Response doesn't have a body. */
      204: never
    }
  }

  getLocationsStatus: {
    responses: {
      /** Success. The response contains the public locations status. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['SyntheticPublicLocationsStatus']
        }
      }
    }
  }

  updateLocationsStatus: {
    responses: {
      /** Success. Locations status has been updated. */
      204: never
      /** Conflict. Public locations couldn't be disabled because there are monitors assigned to them. */
      409: unknown
    }
    /** The new status of public synthetic locations. */
    requestBody: {
      content: {
        'application/json; charset=utf-8': OASSchemas['SyntheticPublicLocationsStatus']
      }
    }
  }

  getNode: {
    parameters: {
      path: {
        /** The ID of the required synthetic node. */
        nodeId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Node']
        }
      }
    }
  }

  getNodes: {
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Nodes']
        }
      }
    }
  }

  /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
  cancelRotation: {
    responses: {
      /** Success. Rotation process has been cancelled. The current tenant token remains valid. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['TenantTokenConfig']
        }
      }
      /** Failed. There is no ongoing rotation process. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
  finishRotation: {
    responses: {
      /** Success. The rotation process is completed. The **active** field of the response contains the new tenant token. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['TenantTokenConfig']
        }
      }
      /** No ongoing rotation process. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  /** To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation. */
  startRotation: {
    responses: {
      /** Success. The new tenant token is created and will replace the old one. The **active** field of the response contains the new tenant token. */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['TenantTokenConfig']
        }
      }
      /** Failed. Another rotation process is already in progress. */
      400: {
        content: {
          'application/json; charset=utf-8': OASSchemas['ErrorEnvelope']
        }
      }
    }
  }

  unit: {
    parameters: {
      path: {
        /** The ID of the required unit. */
        unitId: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['Unit']
        }
      }
      /** Not found. The requested resource is not found or the query is incorrect. */
      404: unknown
    }
  }

  /** You can narrow down the output by providing filter criteria in the **unitSelector** field. */
  allUnits: {
    parameters: {
      query: {
        /**
         * Selects units to be included to the response. Available criteria:
         * * Compatibility: `compatibleTo("unit","display-format")`. Returns units that can be converted to the specified unit. The optional display format (`binary` or `decimal`) argument is supported by bit- and byte-based units and returns only units for the specified format.
         */
        unitSelector?: string
        /**
         * Defines the list of properties to be included in the response. The ID of the unit is **always** included. The following additional properties are available:
         *
         * * `displayName`: The display name of the unit.
         * * `symbol`: The symbol of the unit.
         * * `description`: A short description of the unit.
         *
         * By default, the ID, the display name, and the symbol are included.
         *
         * To add properties, list them with leading plus `+`. To exclude default properties, list them with leading minus `-`.
         *
         * To specify several properties, join them with a comma (for example `fields=+description,-symbol`).
         *
         * If you specify just one property, the response contains the unitId and the specified property. To return unit IDs only, specify `unitId` here.
         */
        fields?: string
      }
    }
    responses: {
      /** Success */
      200: {
        content: {
          'application/json; charset=utf-8': OASSchemas['UnitList']
        }
      }
    }
  }
}
