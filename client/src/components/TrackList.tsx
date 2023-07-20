"use client"

import TrackItem from "@/components/TrackItem";
import {useGetTracksQuery} from "@/store/services/tracksApi";

const TrackList = () => {

    const {isLoading, error, data: tracks} = useGetTracksQuery(null);

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