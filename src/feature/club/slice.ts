import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchClubs } from "./thunk"
import { IInitialState } from "./type"

const initialState: IInitialState = {
  query: "",
  currentPage: 0,
  clubArray: [],
  clubTable: null,
}

const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    searchClub: (state) => {
      state.clubArray.forEach((club) => {
        if (state.clubTable !== null) {
          const clubName = club[0].CLUB_NM1
          if (clubName.search(state.query) !== -1)
            state.clubTable[clubName].searched = true
          else state.clubTable[clubName].searched = false
        }
      })
    },
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClubs.fulfilled, (state, action) => {
        state.clubTable = null
        state.clubArray = action.payload

        state.clubArray.forEach((club, index: number) => {
          state.clubTable = {
            ...state.clubTable,
            [club[0].CLUB_NM1]: {
              index: index,
              teamCount: club.length,
              selected: false,
              searched: false,
            },
          }
        })
      })
      .addCase(fetchClubs.rejected, (state, action) => {
        switch (action.payload) {
          case "no data":
            state.currentPage = 0
            state.clubArray = []
            state.clubTable = null
        }
      })
  },
})

export const { searchClub, changeQuery } = clubSlice.actions
export default clubSlice.reducer
