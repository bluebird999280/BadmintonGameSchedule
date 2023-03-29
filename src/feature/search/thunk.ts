import axiosInstance from "util/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { IgetCompetitionByName } from "./type"

export const getCompetitionByName = createAsyncThunk(
  "search/getCompetitionByName",
  async ({ query, pageStart, pageLimit }: IgetCompetitionByName) => {
    const param = {
      pageStart,
      pageLimit,
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
