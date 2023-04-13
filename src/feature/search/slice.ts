import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCompetitionByName, getClubListByCompetition } from "./thunk"
import { LIST_UNIT } from "util/constant"
import {
  IInitialState,
  IGetCompetitionByNameResponse,
  IGetClubListByCompetitionResponse,
  IToggleTeamSelection,
} from "./type"

const initialState: IInitialState = {
  competitionList: [],
  clubList: [],
}

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleClubSelection: (state, action: PayloadAction<string>) => {
      const index = state.clubList.findIndex(
        (club) => club.name === action.payload
      )
      if (index === -1) return

      const currentClub = state.clubList[index]
      if (currentClub.selected) {
        currentClub.teamList.forEach((club) => (club.selected = false))
      }
      currentClub.selected = !currentClub.selected
    },

    toggleTeamSelection: (
      state,
      action: PayloadAction<IToggleTeamSelection>
    ) => {
      const { clubIndex, teamIndex } = action.payload
      state.clubList[clubIndex].teamList[teamIndex].selected =
        !state.clubList[clubIndex].teamList[teamIndex].selected
    },
    divideClubListByQuery: (state, action: PayloadAction<string>) => {
      state.clubList.map((club) => {
        if (club.name.search(action.payload) >= 0) {
          club.searched = true
        } else {
          club.searched = false
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCompetitionByName.fulfilled,
      (state, action: PayloadAction<IGetCompetitionByNameResponse>) => {
        const temp = []
        const resultList = action.payload.data_list

        const { length } = resultList
        if (length === 0) {
          state.competitionList = []
          return
        }

        for (let i = 0; i < length / LIST_UNIT; i++)
          temp.push(resultList.slice(i * LIST_UNIT, (i + 1) * LIST_UNIT))

        state.competitionList = temp
      }
    ),
      builder.addCase(
        getClubListByCompetition.fulfilled,
        (state, action: PayloadAction<IGetClubListByCompetitionResponse>) => {
          const { data_list } = action.payload

          state.clubList = []
          for (let i = 0; i < data_list.length; i++) {
            const clubName = data_list[i][0].CLUB_NM1
            state.clubList.push({
              name: clubName,
              count: data_list[i].length,
              teamList: data_list[i],
              searched: true,
            })
          }
        }
      )
  },
})

export const {
  toggleClubSelection,
  toggleTeamSelection,
  divideClubListByQuery,
} = searchSlice.actions
export default searchSlice.reducer
