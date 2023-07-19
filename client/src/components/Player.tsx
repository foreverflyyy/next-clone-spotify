"use client"

import React, {useState} from 'react';
import Image from "next/image";
import {ITrack} from "@/models/track";
import TrackProgress from "@/components/TrackProgress";

const Player = () => {

    const [active, setActive] = useState(false);

    const track: ITrack = {
        "_id": "64b6cea987a5ec39938ff6f8",
        "name": "HDMI 5",
        "artist": "Nekit",
        "text": "bla bla bla",
        "listeners": 0,
        "comments": []
    }

    const changeActive = () => {
        setActive(!active);
    }

    return (
        <div className={"fixed bottom-0 h-[60px] w-full flex items-center justify-between bg-gray-200 px-10 py-4"}>
            {active
                ? (
                    <Image
                        src={"/pause.png"}
                        width={35}
                        height={35}
                        alt="Pause"
                        className={"cursor-pointer hover:scale-[1.2] duration-300"}
                        onClick={changeActive}
                    />
                )
                : (
                    <Image
                        src={"/play-button.png"}
                        width={35}
                        height={35}
                        alt="Play"
                        className={"cursor-pointer hover:scale-[1.2] duration-300"}
                        onClick={changeActive}
                    />
                )
            }
            <div className={"flex flex-col"}>
                <h2 className={"font-semibold text-xl"}>{track.name}</h2>
                <h2>{track.artist}</h2>
            </div>
            <TrackProgress
                right={100}
                left={0}
                onChange={(e) => {}}
            />
            <div className={"flex"}>
                <Image
                    src={"/volume.png"}
                    width={35}
                    height={35}
                    alt="volume"
                    className={"cursor-pointer hover:scale-[1.2] duration-300"}
                    onClick={changeActive}
                />
                <TrackProgress
                    right={100}
                    left={0}
                    onChange={(e) => {}}
                />
            </div>
        </div>
    );
};

export default Player;