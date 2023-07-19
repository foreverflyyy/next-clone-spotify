import React from 'react';
import Link from "next/link";

const links = [
    {path: "/", name: "Home"},
    {path: "/track", name: "Tracks"},
    {path: "/album", name: "Albums"},
]

const Navbar = () => {
    return (
        <div className={"h-[50px] bg-green-700 fixed left-0 right-0 top-0"}>
            <div className={"h-full md:container mx-auto flex justify-between items-center text-white"}>
                <Link
                    href={"/"}
                    className={"hover:text-black duration-300"}
                >
                    Music Platform by NUshakov
                </Link>
                <div>
                    {links.map(link =>
                        <Link
                            key={link.path}
                            href={link.path}
                            className={"pl-3 hover:text-black duration-300"}
                        >
                            {link.name}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;