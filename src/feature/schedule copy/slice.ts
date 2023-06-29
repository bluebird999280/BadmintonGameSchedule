import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getAllGameList } from "./thunk"
import { IInitialState } from "./type"

const initialState: IInitialState = {
  competition: undefined,
  club: undefined,
  gameList: undefined,
  planDateList: undefined,
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
      state.planDateList = action.payload.planDateList
      state.gameList = action.payload.data_list.reduce((acc: any, cur: any) => {
        if (acc[cur.EVENT_ID] === undefined)
          acc[cur.EVENT_ID] = { [cur.ENTRY_ID]: true }
        else acc[cur.EVENT_ID][cur.ENTRY_ID] = true
      }, {})
    })
  },
})

export const { changeCompetition } = scheduleSlice.actions
export default scheduleSlice.reducer
