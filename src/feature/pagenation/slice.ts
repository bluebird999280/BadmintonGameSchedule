import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IInitialState } from "./type"

const initialState: IInitialState = {
  currentPage: 0,
}

export const pagenationSlice = createSlice({
  name: "pagenation",
  initialState,
  reducers: {
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
})

export const { changeCurrentPage } = pagenationSlice.actions
export default pagenationSlice.reducer
