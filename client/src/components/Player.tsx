"use client"
import React, {useEffect} from 'react';
import Image from "next/image";
import {ITrack} from "@/models/track";
import TrackProgress from "@/components/TrackProgress";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {setCurrentTime, setDuration, setPause, setVolume} from "@/store/features/playerSlice";

let audio: any = null;

const Player = () => {

    const {
        active,
        volume,
        pause,
        duration,
        currentTime
    } = useAppSelector(state => state.player);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!active) {
            audio = new Audio();
        } else {
            setAudio();
            play();
        }
    }, [active])

    useEffect(() => {
        if(pause) {
            stop();
        } else {
            play();
        }

    }, [pause])

    const setAudio = () => {
        if(active) {
            audio.src = "http://localhost:5000/" + active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                dispatch(setDuration(Math.ceil(audio.duration)));
            }
            audio.ontimeupdate = () => {
                dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
            }
        }
    }

    const play = () => {
        audio.play();
        dispatch(setPause(false));
    }

    const stop = () => {
        audio.pause();
        dispatch(setPause(true));
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        dispatch(setVolume(Number(e.target.value)));
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        dispatch(setCurrentTime(Number(e.target.value)));
    }

    if(!active)
        return null;

    return (
        <div className={"fixed bottom-0 h-[60px] w-full flex items-center justify-between bg-gray-200 px-10 py-4"}>
            {pause
                ? (
                    <Image
                        src={"/play-button.png"}
                        width={35}
                        height={35}
                        alt="Play"
                        className={"cursor-pointer hover:scale-[1.2] duration-300"}
                        onClick={play}
                    />
                )
                : (
                    <Image
                        src={"/pause.png"}
                        width={35}
                        height={35}
                        alt="Pause"
                        className={"cursor-pointer hover:scale-[1.2] duration-300"}
                        onClick={stop}
                    />
                )
            }
            <div className={"flex flex-col"}>
                <h2 className={"font-semibold text-xl"}>{active?.name}</h2>
                <h2>{active?.artist}</h2>
            </div>
            <TrackProgress
                left={currentTime}
                right={duration}
                onChange={changeCurrentTime}
            />
            <div className={"flex"}>
                <Image
                    src={"/volume.png"}
                    width={35}
                    height={35}
                    alt="volume"
                    className={"cursor-pointer hover:scale-[1.2] duration-300"}
                    onClick={() => console.log("volume")}
                />
                <TrackProgress
                    left={volume}
                    right={100}
                    onChange={changeVolume}
                />
            </div>
        </div>
    );
};

export default Player;