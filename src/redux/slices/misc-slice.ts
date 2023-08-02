import { createSlice } from "@reduxjs/toolkit";

export enum STATES {
    HOME,
    MOVIE,
    SERIES,
    PROFILE
}

export const misc = createSlice({
    name: "misc",
    initialState: {
        leftBarActive: true,
        mode: STATES.HOME,
        genre: ""
    },
    reducers: {
        toggleLeftBar: (state) => {
            state.leftBarActive = !state.leftBarActive
        },
        selectMode: (state, { payload }) => {
            state.mode = payload.data
        },
        setGenre: (state, { payload }) => {
            state.genre = payload.data
        }
    }
})

export const { toggleLeftBar, selectMode, setGenre } = misc.actions
export default misc.reducer
