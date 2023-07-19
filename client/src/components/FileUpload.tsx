"use client"
import React, {ReactNode, useRef} from 'react';
import MyInput from "@/components/UI/MyInput";

interface FileUploadProps {
    setFile: Function,
    accept: string
}

const FileUpload = ({setFile, accept}: FileUploadProps) => {

    const ref = useRef<HTMLInputElement>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files)
            setFile(e.target.files[0]);
    }

    return (
        <MyInput
            type={"file"}
            accept={accept}
            className={"hidden"}
            onChange={onChange}
        />
    );
};

export default FileUpload;