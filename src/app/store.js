import { configureStore } from '@reduxjs/toolkit';
import {data} from '../app/data'



const rootreducer = {
  datas :  data.reducer
}
export const store = configureStore({
  reducer: rootreducer
})
