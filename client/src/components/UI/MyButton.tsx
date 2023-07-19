import React, {ReactNode} from 'react';

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

const MyButton = ({children, ...props}: MyButtonProps) => {
    return (
        <button
            {...props}
            className={"px-3 py-1 rounded-md border-2 border-gray-600 hover:bg-gray-600 hover:text-white duration-500"}
        >
            {children}
        </button>
    );
};

export default MyButton;