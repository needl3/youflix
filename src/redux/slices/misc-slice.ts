import { createSlice } from "@reduxjs/toolkit";

export const misc = createSlice({
    name: "misc",
    initialState: {
        leftBarActive: false
    },
    reducers: {
        toggleLeftBar: (state) => {
            state.leftBarActive = !state.leftBarActive
        }
    }
})

export const { toggleLeftBar } = misc.actions
export default misc.reducer
