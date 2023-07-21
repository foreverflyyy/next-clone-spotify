import React from 'react';
import {ITrack} from "@/models/track";
import axios from "axios";
import Head from "next/head";
import {Metadata} from "next";

export async function generateMetadata(
    {params: {id}}: { params: { id: string }}
): Promise<Metadata>{

    const track: ITrack = await getTrackById(id);

    return {
        title: `Track: ${track.name}, artist: ${track.artist}`,
    }
}

async function getTrackById(id: string) {
    const response = await axios.get(`http://localhost:5000/track/${id}`);
    return response.data;
}

const Page = async ({params: {id}}: { params: { id: string }}) => {
    const track: ITrack = await getTrackById(id);

    return (
        <div>
            <div className={"p-1"}>
                <div className={"rounded-md border-2 border-gray-600 p-2 flex flex-col"}>
                    <h2 className={"font-medium text-xl"}>Track: {track.name}</h2>
                    <div className={"flex flex-col"}>
                        <h2>Artist: {track.artist}</h2>
                        <h2>Text: {track.text}</h2>
                        <h2>Id: {id}</h2>
                    </div>
                    <img
                        src={`http://localhost:5000/${track.picture}`}
                        width={50}
                        height={50}
                        alt="Picture track"
                        className={"hover:scale-[1.1] duration-300"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Page;