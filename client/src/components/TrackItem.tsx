import React from 'react';
import {ITrack} from "@/models/track";
import {useRouter} from "next/navigation";
import Image from 'next/image'
import axios from "axios";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem = ({track, active = false}: TrackItemProps) => {

    const router = useRouter();

    const playTrack = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        console.log("play")
    }

    const deleteTrack = async (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation();
        await axios.post('api/track/delete', { id: track._id });
        console.log("delete")
    }

    return (
        <div className={"p-2"}>
            <div
                className={"h-full rounded-md border-2 border-gray-600 p-2 flex flex-col justify-between hover:scale-[1.05] duration-300"}
                 onClick={() => router.push(`/track/${track._id}`)}
            >
                <div className={"flex py-2 font-normal text-xl text-left"}>
                    <div className={"pr-8"}>
                        <h2>Track: {track.name}</h2>
                        <h2>Artist: {track.artist}</h2>
                    </div>
                    <img
                        src={`http://localhost:5000/${track.picture}`}
                        width={50}
                        height={50}
                        alt="Picture track"
                        className={"hover:scale-[1.1] duration-300"}
                    />
                </div>
                <div className={"flex justify-between"}>
                    {active
                        ? (
                            <Image
                                src={"/pause.png"}
                                width={35}
                                height={35}
                                alt="Picture play"
                                className={"cursor-pointer hover:scale-[1.2] duration-300"}
                                onClick={e => playTrack(e)}
                            />
                        )
                        : (
                            <Image
                                src={"/play-button.png"}
                                width={35}
                                height={35}
                                alt="Picture play"
                                className={"cursor-pointer hover:scale-[1.2] duration-300"}
                                onClick={e => playTrack(e)}
                            />
                        )
                    }

                    <Image
                        src={"/delete.svg"}
                        width={35}
                        height={35}
                        alt="Picture trash"
                        className={"cursor-pointer hover:translate-y-[-5px] duration-300"}
                        onClick={e => deleteTrack(e)}
                    />
                </div>
            </div>
        </div>
    );
};

export default TrackItem;