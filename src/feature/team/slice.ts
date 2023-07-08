import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  pageStart: 0,
  currentPage: 0,
  query: "",
}

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
  },
  extraReducers: {},
})

export const { changeQuery } = teamSlice.actions
export default teamSlice.reducer
