import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCompetitionByName } from "./thunk"
import { IInitialState, IPayload } from "./type"

const initialState: IInitialState = {
  query: "",
  competionList: [],
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCompetitionByName.fulfilled,
      (state, action: PayloadAction<IPayload>) => {
        state.competionList = action.payload.data_list
      }
    )
  },
})

export const { changeQuery } = searchSlice.actions
export default searchSlice.reducer
