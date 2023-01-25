import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "user",
    initialState:{
        value:{
            needroom: {}
        }
    },
    reducers:{
      setneedroom : (state,action)=>{
        console.log("action payload"+action.payload);
        state.value.needroom = action.payload;
          
      },
     
    }
});
export const {setneedroom} = slice.actions;
export default slice.reducer;