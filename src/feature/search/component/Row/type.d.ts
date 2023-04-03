import { IDataList } from "feature/search/type"

export type progressType = "schedule" | "progress" | "completion"

export interface IRowProps {
  data: IDataList
}

export interface IProgressBackgroundColor {
  [key: string]: string
}

export interface IProgressWrapper {
  type: progressType
}
