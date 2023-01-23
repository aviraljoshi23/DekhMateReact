import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user.slice";
import flatReducer from "./flat.slice";
const store = configureStore({
    reducer:{
        user: UserReducer,
        flat:flatReducer
    }
});
export default store;