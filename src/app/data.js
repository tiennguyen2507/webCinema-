import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = []

export const data= createSlice({
  name: 'data',
  initialState,
  reducers: {
      adddata: (state,action) =>{
          state.push({
              id:nanoid(),
              title:action.payload
          })
      }
  },
})
console.log(data)
