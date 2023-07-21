"use client"

import TrackItem from "@/components/TrackItem";
import {useGetTracksQuery} from "@/store/services/tracksApi";
import {useState} from "react";
import SearchField from "@/components/SearchField";

const TrackList = () => {

    const [query, setQuery] = useState("");

    const {
        data: tracks,
    } = useGetTracksQuery({
        query
    });

    const changeQuerySearch = (query: string) => {
        setQuery(query);
    }

    return (
        <>
            <SearchField onChange={changeQuerySearch}/>
            <div className={"py-3 flex"}>
                {tracks?.map(track =>
                    <TrackItem key={track._id} track={track}/>
                )}
            </div>
        </>
    );
};

export default TrackList;