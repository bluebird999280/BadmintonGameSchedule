import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchClubs } from "./thunk"
import { IInitialState, ISelectTeamPayload } from "./type"
import { LIST_UNIT } from "util/constant"

const initialState: IInitialState = {
  query: "",
  currentPage: 0,
  clubTable: null,
  searchedClubNameArray: [],
}

const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    selectClub: (state, action: PayloadAction<string>) => {
      if (state.clubTable !== null) {
        state.clubTable[action.payload].selected =
          !state.clubTable[action.payload].selected
      }
    },
    searchClub: (state) => {
      state.currentPage = 0

      if (state.clubTable === null) {
        state.searchedClubNameArray = []
      }
      if (state.clubTable !== null) {
        let index = 0
        state.searchedClubNameArray = [[]]
        Object.getOwnPropertyNames(state.clubTable).forEach((clubName) => {
          if (clubName.search(state.query) !== -1) {
            if (state.searchedClubNameArray[index].length < LIST_UNIT) {
              state.searchedClubNameArray[index].push(clubName)
            } else {
              state.searchedClubNameArray[++index] = [clubName]
            }
          }
        })
      }
    },
    selectTeam: (state, action: PayloadAction<ISelectTeamPayload>) => {
      if (state.clubTable !== null) {
        const { clubName, teamIndex } = action.payload
        state.clubTable[clubName].team[teamIndex].selected =
          !state.clubTable[clubName].team[teamIndex].selected
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClubs.fulfilled, (state, action) => {
        state.clubTable = null

        action.payload.forEach((club, index: number) => {
          state.clubTable = {
            ...state.clubTable,
            [club[0].CLUB_NM1]: {
              index: index,
              teamCount: club.length,
              selected: false,
              team: club,
            },
          }

          const idx = Math.floor(index / LIST_UNIT)
          if (index % LIST_UNIT)
            state.searchedClubNameArray[idx].push(club[0].CLUB_NM1)
          else state.searchedClubNameArray[idx] = [club[0].CLUB_NM1]
        })
      })
      .addCase(fetchClubs.rejected, (state, action) => {
        switch (action.payload) {
          case "no data":
            state.currentPage = 0
            state.clubTable = null
            state.searchedClubNameArray = []
        }
      })
  },
})

export const {
  changeQuery,
  changeCurrentPage,
  selectClub,
  searchClub,
  selectTeam,
} = clubSlice.actions
export default clubSlice.reducer
