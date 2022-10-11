import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    relevants: [],


}
const relevantSlice = createSlice({
    name: "relevant",
    initialState,
    reducers: {
        initialize(state, action){

            state.relevants = [action.payload]

        },

    }
})
export const {initialize} = relevantSlice.actions

export default relevantSlice.reducer