"use client"
import React, {useState} from 'react';
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";
import styles from "@/styles/global.module.scss"
import axios from "axios";
import FileUpload from "@/components/FileUpload";
import {ITrack} from "@/models/track";
import FormData from "form-data";

const LoadTrackForm = () => {

    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");

    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    const loadNewTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        /*const formData = new FormData();

        formData.append()*/

        const track: ITrack = {
            name,
            artist,
            text: "",
            picture,
            audio
        }

        await axios.post('../api/track/create', track);
        console.log("Successfully create!")
    }

    const check = (e: any) => {
        e.preventDefault();
        console.log(picture)
        console.log(audio)
    }

    return (
        <form
            className={styles.form}
            //onSubmit={loadNewTrack}
        >
            <MyInput
                type="text"
                placeholder={"Enter name track"}
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <MyInput
                type="text"
                placeholder={"Enter name artist"}
                value={artist}
                onChange={e => setArtist(e.target.value)}
            />
            <FileUpload setFile={setPicture} accept={"image/*"}/>
            <FileUpload setFile={setAudio} accept={"audio/*"}/>
            <MyButton
                onClick={e => check(e)}
            >Check Result</MyButton>
            <MyButton
                onClick={e => loadNewTrack(e)}
            >
                Create new track
            </MyButton>
        </form>
    );
};

export default LoadTrackForm;