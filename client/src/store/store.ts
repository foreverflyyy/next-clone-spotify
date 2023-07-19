import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";


const rootReducers = combineReducers({

})

const store = configureStore({
    reducer: rootReducers
})

//export const wrapper = createWrapper(configureStore);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;