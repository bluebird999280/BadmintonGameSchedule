import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCompetitionByName } from "./thunk"

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    response: {},
  },
  reducers: {
    changeQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCompetitionByName.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.response = action.payload
      }
    )
  },
})

export const { changeQuery } = searchSlice.actions
export default searchSlice.reducer
