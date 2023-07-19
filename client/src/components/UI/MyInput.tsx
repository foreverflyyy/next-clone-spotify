import React from 'react';

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

const MyInput = ({...props}: MyInputProps) => {
    return (
        <input
            {...props}
            className={"my-1 rounded-md border-2 border-gray-600 py-1 px-3"}
        />
    );
};

export default MyInput;