import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getAllGameList } from "./thunk"
import { IInitialState } from "./type"

const initialState: IInitialState = {
  competition: undefined,
  club: undefined,
  gameList: undefined,
  loading: false,
}

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    changeCompetition: (state, { payload }: PayloadAction<any>) => {
      state.competition = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGameList.fulfilled, (state, action) => {
      state.loading = false
      state.gameList = action.payload
    }),
      builder.addCase(getAllGameList.pending, (state, action) => {
        state.loading = true
      })
  },
})

export const { changeCompetition } = scheduleSlice.actions
export default scheduleSlice.reducer
