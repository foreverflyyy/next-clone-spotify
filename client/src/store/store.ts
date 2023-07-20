import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {playerReducer} from "@/store/features/playerSlice";
import {tracksApi} from "@/store/services/tracksApi";
import {setupListeners} from "@reduxjs/toolkit/query";


const rootReducers = combineReducers({
    player: playerReducer,
    [tracksApi.reducerPath]: tracksApi.reducer
})

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat([tracksApi.middleware])
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;