import { IClubData } from "feature/club/type"

export interface IListProps {
  name: string
  data: IClubData
  onClick: () => void
}

export interface ITextContainerProps {
  selected?: boolean
}
