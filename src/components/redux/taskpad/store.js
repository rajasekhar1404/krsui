import { configureStore } from "@reduxjs/toolkit";
import taskpadReducer from "./reducer";

export default configureStore({
    reducer: taskpadReducer
})