import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import userSlices from "./Slices/userSlices";
const store=configureStore({
    reducer: {
        counterState:counterSlice.reducer,
        userSlices:userSlices.reducer
    }
})

export default store


