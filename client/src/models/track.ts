import {IComment} from "@/models/comment";

export interface ITrack {
    _id: string,
    name: string,
    artist: string,
    text: string,
    listeners: number,
    picture?: string,
    audio?: string,
    comments?: IComment[]
}