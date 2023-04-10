import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getAllGameList } from "./thunk"
import { ICompetitionData } from "feature/search/type"

interface ITeam {
  [club: string]: string[]
}

interface IIinitalState {
  competition?: ICompetitionData
  club?: string[]
  team?: ITeam
  gameList: any
}

const initialState: IIinitalState = {
  competition: undefined,
  club: undefined,
  team: undefined,
  gameList: {},
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
  extraReducers: (builder) => {
    builder.addCase(getAllGameList.fulfilled, (state, action) => {
      state.gameList = action.payload
    })
  },
})

export const { changeCompetition } = scheduleSlice.actions
export default scheduleSlice.reducer
