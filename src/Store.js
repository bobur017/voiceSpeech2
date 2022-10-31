import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./MyReducer";
import Api from "./Api"

export default configureStore({
    reducer: {
        myReducer,
    },
    middleware: [Api],
});