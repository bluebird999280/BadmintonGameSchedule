import { configureStore } from "@reduxjs/toolkit"
import search from "feature/search/slice"
import schedule from "feature/schedule/slice"
import competition from "feature/competition/slice"
import club from "feature/club/slice"

const store = configureStore({
  reducer: {
    search,
    schedule,
    competition,
    club,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
