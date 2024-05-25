import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    loginError: ''
}

const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        setLoginError: (state, action: PayloadAction<string>) => {
            state.loginError = action.payload;
        }
    }
})

export const { setLoginError } = loginSlice.actions;
export default loginSlice.reducer;