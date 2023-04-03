import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IDataList } from "feature/search/type"

interface ITeam {
  [club: string]: string[]
}

interface IIinitalState {
  competition?: IDataList
  club?: string[]
  team?: ITeam
}

const initialState: IIinitalState = {
  competition: undefined,
  club: undefined,
  team: undefined,
}

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    changeCompetition: (state, { payload }: PayloadAction<IDataList>) => {
      state.competition = payload
    },
  },
})

export const { changeCompetition } = scheduleSlice.actions
export default scheduleSlice.reducer
