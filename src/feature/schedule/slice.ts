import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICompetitionData } from "feature/search/type"

interface ITeam {
  [club: string]: string[]
}

interface IIinitalState {
  competition?: ICompetitionData
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
    changeCompetition: (
      state,
      { payload }: PayloadAction<ICompetitionData>
    ) => {
      state.competition = payload
    },
  },
})

export const { changeCompetition } = scheduleSlice.actions
export default scheduleSlice.reducer
