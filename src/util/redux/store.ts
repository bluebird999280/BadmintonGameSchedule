import { configureStore } from "@reduxjs/toolkit"
import search from "feature/search/slice"
import pagenation from "feature/pagenation/slice"

const store = configureStore({
  reducer: {
    search,
    pagenation,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
