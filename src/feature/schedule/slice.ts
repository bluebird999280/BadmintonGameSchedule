import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getAllGameList } from "./thunk"
import { IInitialState } from "./type"
import { ICompetitionData } from "feature/search/type"

const initialState: IInitialState = {
  competition: undefined,
  club: undefined,
  gameList: undefined,
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
