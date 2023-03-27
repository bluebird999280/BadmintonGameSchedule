export type progressType = "schedule" | "progress" | "completion"

export interface IProgressBackgroundColor {
  [key: string]: string
}

export interface IProgressWrapper {
  type: progressType
}
