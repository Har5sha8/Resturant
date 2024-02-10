import {configureStore} from "@reduxjs/toolkit";
import restSlice from "./restSlice";

const store = configureStore({
    reducer:{
        restSlice: restSlice

    }
})
export default store;