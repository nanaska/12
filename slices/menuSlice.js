import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    typeMenuu: 0,
    typeMenuu1: 0,
    typeMenuu2: 0,
    phoneChecker: false,
    promoChecker: ""

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
        },
        setPhoneCheck(state,action){
            state.phoneChecker = action.payload
        },
        setPromoCheck(state, action){
            state.promoChecker = action.payload
        }
    }
})
export const {setMenuFilter, setPhoneCheck, setPromoCheck} = menuSlice.actions

export default menuSlice.reducer