import axiosInstance from "util/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

interface IGetAllGameListArgs {
  tournamentId: string
  planDate: string
  gym?: string
  timeOrCourt?: string
}

export const getAllGameList = createAsyncThunk(
  "schedule/getAllGameList",
  async ({
    tournamentId,
    planDate,
    gym = "",
    timeOrCourt = "T",
  }: IGetAllGameListArgs) => {
    const response = await axiosInstance({
      method: "post",
      url: "mobile_usp_match_all_list_order.php",
      data: {
        DATA: JSON.stringify({
          p_tournament_id: tournamentId,
          TOURNAMENT_ID: tournamentId,
          p_event_id: "",
          p_court_no: "0",
          p_plan_date: planDate,
          p_gym_cd: gym,
          p_match_sts: "11",
          p_div: timeOrCourt,
        }),
      },
    })

    return response.data
  }
)
