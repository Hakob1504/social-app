import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../pages/LandingPage/type";

const initialState: InitialState = {
    title: 'Landing page',
    buttonsInfo: [
        {
            id: 1,
            text: "Log in",
            className: 'login_btn',
            path: "login"
        },
        {
            id: 2,
            text: "Register",
            className: 'register_btn',
            path: "register"
        }
    ]
}

const landingSlice = createSlice({
    name: "landingSlice",
    initialState,
    reducers: {}
})

export default landingSlice.reducer