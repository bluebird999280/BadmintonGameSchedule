import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCompetitionByName } from "./thunk"
import { LIST_UNIT } from "util/constant"
import {
  IInitialState,
  IChangeCurrentPagePayload,
  IGetCompetitionByNamePayload,
} from "./type"

const initialState: IInitialState = {
  competition: {
    list: [],
    currentPage: 0,
  },
  club: {
    list: [],
    currentPage: 0,
  },
  team: {
    list: [],
    currentPage: 0,
  },
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeCurrentPage: (
      state,
      {
        payload: { name, currentPage },
      }: PayloadAction<IChangeCurrentPagePayload>
    ) => {
      state[name].currentPage = currentPage
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCompetitionByName.fulfilled,
      (state, action: PayloadAction<IGetCompetitionByNamePayload>) => {
        const temp = []
        const resultList = action.payload.data_list

        const { length } = resultList
        if (length === 0) return

        for (let i = 0; i < length / LIST_UNIT; i++)
          temp.push(resultList.slice(i * LIST_UNIT, (i + 1) * LIST_UNIT))

        state.competition.list = temp
      }
    )
  },
})

export const { changeCurrentPage } = searchSlice.actions
export default searchSlice.reducer
