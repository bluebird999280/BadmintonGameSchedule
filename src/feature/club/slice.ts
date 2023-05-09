import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchClubs } from "./thunk"
import { IInitialState } from "./type"

const initialState: IInitialState = {
  query: "",
  currentPage: 0,
  clubTable: null,
}

const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    selectClub: (state, action: PayloadAction<string>) => {
      if (state.clubTable !== null) {
        state.clubTable[action.payload].selected =
          !state.clubTable[action.payload].selected
      }
    },
    searchClub: (state) => {
      Object.getOwnPropertyNames(state.clubTable).forEach((clubName) => {
        if (state.clubTable !== null) {
          if (clubName.search(state.query) !== -1)
            state.clubTable[clubName].searched = true
          else state.clubTable[clubName].searched = false
        }
      })
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
              searched: true,
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

export const { changeQuery, selectClub, searchClub } = clubSlice.actions
export default clubSlice.reducer
