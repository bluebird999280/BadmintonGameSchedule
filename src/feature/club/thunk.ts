import axiosInstance from "util/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "util/redux/store"
import { ITeamData } from "./type"

export const fetchClubs = createAsyncThunk<
  ITeamData[][],
  undefined,
  { state: RootState }
>("competition/fetchClubs", async (_, thunkAPI) => {
  const state = thunkAPI.getState()
  const { competition } = {
    competition: state.competition.competition,
  }

  const response = await axiosInstance({
    method: "post",
    url: "usp_get_entry_list_by_group.php",
    data: {
      DATA: JSON.stringify({
        p_tournament_id: competition?.TOURNAMENT_ID ?? "",
        p_group_id: "",
      }),
    },
  })

  if (response.data.data_total === 0) thunkAPI.rejectWithValue("no data")

  return response.data.data_list
})
