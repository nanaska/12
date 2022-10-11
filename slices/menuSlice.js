import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    typeMenuu: 0,
    typeMenuu1: 0,
    typeMenuu2: 0

}
const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {

        setMenuFilter(state,action){
            state.typeMenuu = action.payload
        },
        setMenuFilter1(state,action){
            state.typeMenuu1 = action.payload
        },
        setMenuFilter2(state,action){
            state.typeMenuu2 = action.payload
        }
    }
})
export const {setMenuFilter} = menuSlice.actions

export default menuSlice.reducer