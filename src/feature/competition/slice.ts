import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchCompetitions } from "./thunk"
import { IInitialState } from "./type"
import { LIST_UNIT } from "util/constant"

const initialState: IInitialState = {
  query: "",
  pageStart: 0,
  competition: undefined,
  competitionArray: [],
}

const competitionSlice = createSlice({
  name: "competition",
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    changePageStart: (state, action: PayloadAction<number>) => {
      state.pageStart = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompetitions.fulfilled, (state, action) => {
        const competitionArray = action.payload

        let index = state.competitionArray.length
        if (state.pageStart === 0) {
          index = 0
          state.competitionArray = []
        }

        for (let i = 0; i < competitionArray.length; i += LIST_UNIT) {
          state.competitionArray[index++] = competitionArray.slice(
            i,
            i + LIST_UNIT
          )
        }
      })
      .addCase(fetchCompetitions.rejected, (state, action) => {
        switch (action.payload) {
          case "no more data":
            break
          case "no data":
            state = { ...initialState, query: state.query }
            break
        }
      })
  },
})

export const { changeQuery, changePageStart } = competitionSlice.actions
export default competitionSlice.reducer
