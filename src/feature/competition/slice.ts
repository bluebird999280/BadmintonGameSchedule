import { ICompetition } from "./type.d"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LIST_UNIT, PAGE_UNIT } from "util/constant"
import { fetchCompetitions } from "./thunk"
import { IInitialState } from "./type"

const initialState: IInitialState = {
  query: "",
  pageStart: 0,
  currentPage: 0,
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
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    changeCompetition: (
      state,
      action: PayloadAction<ICompetition | undefined>
    ) => {
      state.competition = action.payload
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

        state.pageStart = state.competitionArray.length * LIST_UNIT
      })
      .addCase(fetchCompetitions.rejected, (state, action) => {
        switch (action.payload) {
          case "no more data":
            state.pageStart += 1
            state.currentPage -= PAGE_UNIT
            break
          case "no data":
            state = { ...initialState, query: state.query }
            break
        }
      })
  },
})

export const {
  changeQuery,
  changePageStart,
  changeCurrentPage,
  changeCompetition,
} = competitionSlice.actions
export default competitionSlice.reducer
