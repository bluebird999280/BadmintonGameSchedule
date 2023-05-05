import axiosInstance from "util/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { ICompetition } from "./type"
import { RootState } from "util/redux/store"
import { PAGE_UNIT, LIST_UNIT } from "util/constant"

export const fetchCompetitions = createAsyncThunk<
  ICompetition[],
  undefined,
  { state: RootState }
>("competition/fetchCompetitions", async (_, thunkAPI) => {
  const state = thunkAPI.getState()
  const { query, pageStart } = state.competition

  const response = await axiosInstance({
    method: "post",
    url: "mobile_tm_list.php",
    data: {
      DATA: JSON.stringify({
        schTmNm: query,
        pageStart,
        pageLimit: PAGE_UNIT * LIST_UNIT * 2,
      }),
    },
  })

  if (response.data.data_list.length === 0) {
    if (pageStart > 0) return thunkAPI.rejectWithValue("no more data")
    return thunkAPI.rejectWithValue("no data")
  }

  return response.data.data_list
})
