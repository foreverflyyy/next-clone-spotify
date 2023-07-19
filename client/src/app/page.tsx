import Link from "next/link";

export default function Home() {
  return (
    <div className={"h-full flex flex-col justify-center items-center"}>
        <h2 className={"text-2xl text-medium"}>Welcome on my music platform!</h2>
        <div className={"pt-2 flex items-center"}>
            <h2 className={"text-xl text-medium"}>Go to:</h2>
            <div className={"flex pl-3"}>
                <Link href={"/track"} className={"hover:text-gray-400 text-xl text-medium duration-300 mr-2"}>Tracks</Link>
                <Link href={"/album"} className={"hover:text-gray-400 text-xl text-medium duration-300"}>Albums</Link>
            </div>
        </div>
    </div>
  )
}
