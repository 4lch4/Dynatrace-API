import {
  IEntity,
  IEntityTag,
  IManagementZone,
  ImpactLevel,
  SeverityLevel,
  Status
} from './index.js'

export interface IProblem {
  problemId: string
  displayId: string
  title: string
  impactLevel: ImpactLevel
  severityLevel: SeverityLevel
  status: Status
  affectedEntities: IEntity[]
  impactedEntities: IEntity[]
  rootCauseEntity: IEntity | null
  managementZones: IManagementZone[]
  entityTags: IEntityTag[]
  problemFilters: IManagementZone[]
  startTime: number
  endTime: number
}
