import { configureStore } from "@reduxjs/toolkit";
import landingSlice from "./features/landing/landingSlice";
import registerSlice from "./features/register/registerSlice";
import loginSlice from "./features/login/loginSlice";

const store = configureStore({
    reducer: {
        landingData: landingSlice,
        registerData: registerSlice,
        loginData:loginSlice
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store