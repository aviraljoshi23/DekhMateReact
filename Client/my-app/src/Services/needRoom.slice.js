import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebService from "../WebWork/WebService";
import WebApi from "../WebWork/WebApi";

export const fetchNeedRoom =  createAsyncThunk("needRoom/fetchNeedRoom",async()=>{
    let res =  await WebService.getAPi(WebApi.NEED_ROOM_LIST);
    console.log(res.data.data);
    if(res.data.status){
        console.log(res.data.data);
        return res.data.data;
    }
})
const NeedRoomSlice = createSlice({
    name: 'needroom',
    initialState: {
        value: {
            findRoommateList: [],
            isLoading: false,
            error: ''
        }
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNeedRoom.pending, (state) => {
            state.value.isLoading = true;
        });
        builder.addCase(fetchNeedRoom.fulfilled, (state, action) => {
            state.value.findRoommateList = action.payload;
            state.value.isLoading = false;
        })
        builder.addCase(fetchNeedRoom.rejected, (state) => {
            state.value.error = "Something went Wrong.....";
            state.value.value.findRoommateList = [];
            state.value.isLoading = false;
        })
    }
})
export default NeedRoomSlice.reducer;