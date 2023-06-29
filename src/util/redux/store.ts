import { configureStore } from "@reduxjs/toolkit"
import schedule from "feature/schedule/slice"
import competition from "feature/competition/slice"
import club from "feature/club/slice"
import team from "feature/team/slice"

const store = configureStore({
  reducer: {
    schedule,
    competition,
    club,
    team,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
