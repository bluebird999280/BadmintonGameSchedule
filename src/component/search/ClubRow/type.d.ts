import { ITeamData } from "feature/search/type"

export interface IRowProps {
  data: ITeamData
  selected: boolean
  onClick: () => void
}

export interface IWrapperProps {
  selected: boolean
}
