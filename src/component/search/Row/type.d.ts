import { IDataList } from "feature/search/type"

export type progressType = "schedule" | "progress" | "completion"

export interface IRowProps {
  data: IDataList
  selected: boolean
  onClick: () => void
}

export interface IProgressBackgroundColor {
  [key: string]: number[]
}
export interface IWrapperProps {
  selected: boolean
  type: progressType
}

export interface IProgressWrapper {
  type: progressType
}
