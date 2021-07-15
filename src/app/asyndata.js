import { createAsyncThunk, createSlice,nanoid } from '@reduxjs/toolkit'


const fetchUserById = createAsyncThunk(
 
    async () => {
      const API = await fetch('http://www.omdbapi.com/?s=movie&apikey=263d22d8')
      const APIJSON = await API.json()
      return APIJSON
    }
)

const asyn = []

export const data= createSlice({
  name: 'data',
  initialState= asyn,
  reducers: {
      
  },
})
console.log(data)
