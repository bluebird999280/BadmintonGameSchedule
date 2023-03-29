import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCompetitionByName } from "./thunk"
import { IInitialState, IDataList, IGetCompetitionByNamePayload } from "./type"

const initialState: IInitialState = {
  query: "",
  index: 0,
  pageStart: 0,
  pageLimit: 10,
  previousPage: -1,
  currentPage: 0,
  pageUnit: 5,
  pageCompetionList: undefined,
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
      state.currentPage = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCompetitionByName.fulfilled,
      (state, action: PayloadAction<IGetCompetitionByNamePayload>) => {
        const totalPageList = action.payload.data_list
        const { pageStart, pageLimit } = state
        const tempPageCompetionList: IDataList[][] = []

        if (totalPageList !== undefined) {
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
