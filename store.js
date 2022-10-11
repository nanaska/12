import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/sliceCounter";
import busketSlice from "./slices/busketSlice";
import relevantSlice from "./slices/relevantSlice";
import menuSlice from "./slices/menuSlice";
export default configureStore({
    reducer: {
        busketSlice,
        menuSlice,
        relevantSlice
    }
})