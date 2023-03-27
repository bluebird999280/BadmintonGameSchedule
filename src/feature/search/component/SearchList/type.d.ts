export type progressType = "schedule" | "progress" | "completion"

export interface ISearchListProps {
  progress: progressType
  title: string
  date: string
}

export interface IProgressBackgroundColor {
  [key: string]: string
}

export interface IProgressWrapper {
  type: progressType
}
