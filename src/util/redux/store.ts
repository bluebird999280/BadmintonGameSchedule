import { configureStore } from "@reduxjs/toolkit"
import search from "feature/search/slice"
import schedule from "feature/schedule/slice"

const store = configureStore({
  reducer: {
    search,
    schedule,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
