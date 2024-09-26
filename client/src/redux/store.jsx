import { configureStore } from '@reduxjs/toolkit'
import progressReducer from './progress/progressSlice.jsx'

export const store = configureStore({
  reducer: {
    progress: progressReducer
  },
})