"use client"
import React, {useState} from 'react';
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";
import styles from "@/styles/global.module.scss"
import axios from "axios";
import FileUpload from "@/components/FileUpload";
import {useInput} from "@/hooks/useInput";
import {useRouter} from "next/navigation";

const LoadTrackForm = () => {

    const router = useRouter();

    const name = useInput("");
    const artist = useInput("");
    const text = useInput("");

    const [picture, setPicture] = useState<any>(null);
    const [audio, setAudio] = useState<any>(null);

    const loadNewTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name.value);
        formData.append("artist", artist.value);
        formData.append("text", text.value);
        formData.append("picture", picture);
        formData.append("audio", audio);

        await axios.post('http://localhost:5000/track', formData)
            .then(() => router.push('/track'))
            .catch(e => console.log(e));
    }

    return (
        <form
            className={styles.form}
        >
            <MyInput
                type="text"
                placeholder={"Enter name track"}
                {...name}
            />
            <MyInput
                type="text"
                placeholder={"Enter name artist"}
                {...artist}
            />
            <MyInput
                type="text"
                placeholder={"Enter name text of track"}
                {...text}
            />
            <FileUpload setFile={setPicture} accept={"image/*"}/>
            <FileUpload setFile={setAudio} accept={"audio/*"}/>
            <MyButton
                onClick={e => loadNewTrack(e)}
            >
                Create new track
            </MyButton>
        </form>
    );
};

export default LoadTrackForm;