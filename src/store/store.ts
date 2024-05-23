import { configureStore } from "@reduxjs/toolkit";
import landingSlice from "./slices/landingSlice";
import registerSlice from "./slices/registerSlice";

const store = configureStore({
    reducer: {
        landingData: landingSlice,
        registerData: registerSlice
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store