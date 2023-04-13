import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCompetitionByName, getClubListByCompetition } from "./thunk"
import { LIST_UNIT } from "util/constant"
import { IInitialState, IToggleTeamSelection } from "./type"

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
    builder.addCase(getCompetitionByName.fulfilled, (state, action) => {
      const list = action.payload.data_list

      let pageIndex = 0
      state.competitionList = []

      for (let i = 0; i < list.length; i++) {
        if (i % LIST_UNIT === 0) {
          pageIndex = Math.floor(i / LIST_UNIT)
          state.competitionList.push([list[i]])
        } else {
          state.competitionList[pageIndex].push(list[i])
        }
      }
    }),
      builder.addCase(getCompetitionByName.rejected, (state, action) => {
        if (action.payload === "no data") state.competitionList = []
      }),
      builder.addCase(getClubListByCompetition.fulfilled, (state, action) => {
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
      })
  },
})

export const {
  toggleClubSelection,
  toggleTeamSelection,
  divideClubListByQuery,
} = searchSlice.actions
export default searchSlice.reducer
