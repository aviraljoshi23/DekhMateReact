import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user.slice";
const store = configureStore({
    reducer:{
        user: UserReducer,
    }
});
export default store;