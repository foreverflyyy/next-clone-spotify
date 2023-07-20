import {IPlayerState} from "@/models/player";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITrack} from "@/models/track";

const initialState: IPlayerState = {
    active: null,
    volume: 50,
    currentTime: 0,
    duration: 0,
    pause: true
}

const playerSlice = createSlice({
    name: "playerSlice",
    initialState,
    reducers: {
        setPause(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                pause: action.payload
            }
        },
        setCurrentTime(state, action: PayloadAction<number>) {
            return {
                ...state,
                currentTime: action.payload
            }
        },
        setVolume(state, action: PayloadAction<number>) {
            return {
                ...state,
                volume: action.payload
            }
        },
        setDuration(state, action: PayloadAction<number>) {
            return {
                ...state,
                duration: action.payload
            }
        },
        setActive(state, action: PayloadAction<ITrack | null>){
            return {
                ...state,
                active: action.payload
            }
        }
    }
})

export const playerReducer = playerSlice.reducer;
export const {
    setPause,
    setActive,
    setVolume,
    setDuration,
    setCurrentTime
} = playerSlice.actions;