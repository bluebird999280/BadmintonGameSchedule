import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchClubs } from "./thunk"
import { IInitialState } from "./type"
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
        })
      })
      .addCase(fetchClubs.rejected, (state, action) => {
        switch (action.payload) {
          case "no data":
            state.currentPage = 0
            state.clubTable = null
        }
      })
  },
})

export const { changeQuery, changeCurrentPage, selectClub, searchClub } =
  clubSlice.actions
export default clubSlice.reducer
