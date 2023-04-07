import { ITeamData } from "feature/search/type"

export interface IRowProps {
  data: IClubList
  selected?: boolean
  onClick: () => void
}

export interface ITextContainerProps {
  selected?: boolean
}
