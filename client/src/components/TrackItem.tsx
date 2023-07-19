import React from 'react';
import {ITrack} from "@/models/track";

interface TrackItemProps {
    track: ITrack;
}

const TrackItem = ({track}: TrackItemProps) => {
    return (
        <div className={"p-1"}>
            <div className={"rounded-md border-2 border-gray-600 p-2 flex flex-col"}>
                <h2 className={"font-medium text-xl"}>Track: {track.name}</h2>
                <div className={"flex flex-col"}>
                    <h2>Artist: {track.artist}</h2>
                    <h2>Text: {track.text}</h2>
                </div>
            </div>
        </div>
    );
};

export default TrackItem;