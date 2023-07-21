import React from 'react';
import TrackList from "@/components/TrackList";
import Link from "next/link";

export const metadata = {
    title: 'Tracks',
    description: 'List of tracks',
}

const Page = () => {
    return (
        <div className={"flex flex-col items-center pt-10"} title={"Tracks"}>
            <Link
                href={"/track/load"}
                className={"font-medium text-xl flex hover:text-green-500 duration-200"}
            >
                Load new track
            </Link>
            <div className={"py-5"}>
                <h2 className={"font-medium text-2xl"}>All tracks:</h2>
            </div>
            <TrackList/>
        </div>
    );
};

export default Page;