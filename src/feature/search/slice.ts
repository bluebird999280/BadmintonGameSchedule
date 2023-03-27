import axiosInstance from "util/axios"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

export const getCompetitionByName = createAsyncThunk(
  "search/getCompetitionByName",
  async (query: string, thunkAPI) => {
    const param = {
      GRADE: "",
      grade: "30",
      pageStart: 0,
      pageLimit: 10,
      schTmNm: query,
    }

    const response = await axiosInstance({
      method: "post",
      url: "mobile_tm_list.php",
      data: {
        DATA: JSON.stringify(param),
      },
    })

    return response.data
  }
)

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    list: [],
  },
  reducers: {
    changeQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCompetitionByName.fulfilled, (state, action) => {
      state.list = action.payload
    })
  },
})

export const { changeQuery } = searchSlice.actions
export default searchSlice.reducer
