import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebService from "../WebWork/WebService";
import WebApi from "../WebWork/WebApi";

export const fetchFlats =  createAsyncThunk("flat/fetchFlat",async()=>{
    let res =  await WebService.getAPi(WebApi.LOAD_FLATS);
    if(res.data.status){
        return res.data.data;
    }
})
const flatSlice = createSlice({
    name: 'flat',
    initialState: {
        value: {
            flatList: [],
            isLoading: false,
            error: ''
        }
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFlats.pending, (state) => {
            state.value.isLoading = true;
        });
        builder.addCase(fetchFlats.fulfilled, (state, action) => {
            state.value.flatList = action.payload;
            state.value.isLoading = false;
        })
        builder.addCase(fetchFlats.rejected, (state) => {
            state.value.error = "Something went Wrong.....";
            state.value.value.flatList = [];
            state.value.isLoading = false;
        })
    }
})
export const { add } = flatSlice.actions;
export default flatSlice.reducer;