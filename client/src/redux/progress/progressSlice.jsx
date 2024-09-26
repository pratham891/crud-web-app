import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    progressVal: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { progressVal } = progressSlice.actions

export default progressSlice.reducer