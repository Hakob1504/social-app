import { EnumLogin } from './../../pages/LoginPage/type';
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState:EnumLogin = {
    title:'Login',
    inputsInfo :[
        {
            id:1,
            type:"text",
            placeholder:"email"
        },
        {
            id:2,
            type:"text",
            placeholder:"password"
        }
    ],
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