import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user.slice";
import flatReducer from "./flat.slice";
import NeedRoomReducer from "./needRoom.slice";
const store = configureStore({
    reducer:{
        user: UserReducer,
        flat:flatReducer,
        getRoommate:NeedRoomReducer
    }
});
export default store;