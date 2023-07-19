"use client"
import React from 'react';
import {ITrack} from "@/models/track";
import {useRouter} from "next/navigation";
import MyButton from "@/components/UI/MyButton";

interface Props {
    params: {
        id: string
    }
}

const Page = ({params: {id}}: Props) => {

    const router = useRouter();

    const track: ITrack = {
        "_id": "64b6cea987a5ec39938ff6f8",
        "name": "HDMI 5",
        "artist": "Nekit",
        "text": "bla bla bla",
        "listeners": 0,
        "comments": []
    }

    return (
        <div>
            <MyButton
                className={"font-medium text-xl py-5"}
                onClick={() => router.push("/track")}
            >
                Back
            </MyButton>
            <div className={"p-1"}>
                <div className={"rounded-md border-2 border-gray-600 p-2 flex flex-col"}>
                    <h2 className={"font-medium text-xl"}>Track: {track.name}</h2>
                    <div className={"flex flex-col"}>
                        <h2>Artist: {track.artist}</h2>
                        <h2>Text: {track.text}</h2>
                        <h2>Id: {id}</h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Page;