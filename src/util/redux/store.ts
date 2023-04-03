import { configureStore } from "@reduxjs/toolkit"
import search from "feature/search/slice"

const store = configureStore({
  reducer: {
    search,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
