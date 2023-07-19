import {ITrack} from "@/models/track";

export interface IPlayerState {
    active: null | ITrack,
    volume: number,
    duration: number,
    currentTime: number,
    pause: boolean
}