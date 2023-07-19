"use client"
import React, {useState} from 'react';
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";

const LoadTrackForm = () => {

    const [nameTrack, setNameTrack] = useState("");
    const [artistTrack, setArtistTrack] = useState("");

    const loadNewTrack = async () => {
        await axios.post(`${process.env.SERVER_PATH}/track`, {
            params: {

            }
        })
    }

    return (
        <form
            className={"py-10 flex flex-col"}
            onSubmit={loadNewTrack}
        >
            <MyInput
                type="text"
                placeholder={"Enter name track"}
                value={nameTrack}
                onChange={e => setNameTrack(e.target.value)}
            />
            <MyInput
                type="text"
                placeholder={"Enter name artist"}
                value={artistTrack}
                onChange={e => setArtistTrack(e.target.value)}
            />
            <MyButton

            >
                Create new track
            </MyButton>
        </form>
    );
};

export default LoadTrackForm;