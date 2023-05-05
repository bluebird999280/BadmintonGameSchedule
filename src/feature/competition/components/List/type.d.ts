import { ICompetition } from "feature/competition/type"

export type progressType = "schedule" | "progress" | "completion"

export interface IListProps {
  data: ICompetition
  selected: boolean
  onClick: () => void
}

export interface IWrapperProps {
  selected: boolean
  type: progressType
}

export interface IProgressWrapperProps {
  type: progressType
}
