import { IPlanDateProps } from "feature/schedule/type"

export interface IDateSelectionProps {
  currentSelectedDate?: string
  setCurrentSelectedDate: (date: string) => void
  planDateList: IPlanDateProps[]
}

export interface IOnClickDateProps {
  key: string
}
