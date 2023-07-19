"use client"

import React, {useEffect, useMemo, useState} from 'react';
import {ITrack} from "@/models/track";
import axios from "axios";
import TrackItem from "@/components/TrackItem";

const TrackList = () => {

    const [tracks, setTracks] = useState<ITrack[]>([]);

    useEffect(() => {
        const getTracks = async () => {
            const response = await axios.get('api/track');
            const tracks = response.data as ITrack[];
            setTracks(tracks);
        }

        getTracks()
    }, [])

    return (
        <>
            <div>
            </div>
            <div className={"py-3 flex"}>
                {tracks?.map(track =>
                    <TrackItem key={track._id} track={track}/>
                )}
            </div>
        </>
    );
};

export default TrackList;