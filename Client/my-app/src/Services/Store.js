import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user.slice";
import NeedRoom from './NeedRoom';
const store = configureStore({
    reducer:{
        user: UserReducer,
        needroom:NeedRoom
    }
});
export default store;