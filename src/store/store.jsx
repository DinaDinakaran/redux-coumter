import {configureStore,createSlice} from "@reduxjs/toolkit"

const counterslice = createSlice({
   name : "counter",
   initialState :{counter : 0},
   reducers :{
       inc (state,action){
         state.counter ++
      },
       dec (state,action){
       state.counter --
      },
      add (state,action){
         state.counter += action.payload
      }
   }
})



export const action = counterslice.actions

const store = configureStore({
   reducer : counterslice.reducer
})

export default store

