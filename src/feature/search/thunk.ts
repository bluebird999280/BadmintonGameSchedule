import axiosInstance from "util/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getCompetitionByName = createAsyncThunk(
  "search/getCompetitionByName",
  async (query: string, thunkAPI) => {
    const param = {
      pageStart: 0,
      pageLimit: 50,
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
