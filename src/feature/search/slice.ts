import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCompetitionByName } from "./thunk"
import { pageLimit } from "util/constant"
import { IInitialState, IDataList, IGetCompetitionByNamePayload } from "./type"

const initialState: IInitialState = {
  query: "",
  pageStart: 0,
  previousPage: -1,
  currentPage: 0,
  pageCompetionList: [],
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload
    },
    changePageStart: (state, { payload }: PayloadAction<number>) => {
      state.pageStart = payload
    },
    changeCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.previousPage = state.currentPage
      state.currentPage = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCompetitionByName.fulfilled,
      (state, action: PayloadAction<IGetCompetitionByNamePayload>) => {
        const totalPageList = action.payload.data_list
        const { pageStart } = state
        const tempPageCompetionList: IDataList[][] = []

        if (totalPageList.length !== 0) {
          for (let i = 0; i < totalPageList.length / pageLimit; i++)
            tempPageCompetionList.push(
              totalPageList?.slice(
                pageStart + i * pageLimit,
                pageStart + (i + 1) * pageLimit
              )
            )
        }
        state.pageCompetionList = tempPageCompetionList
      }
    )
  },
})

export const { changeQuery, changePageStart, changeCurrentPage } =
  searchSlice.actions
export default searchSlice.reducer
