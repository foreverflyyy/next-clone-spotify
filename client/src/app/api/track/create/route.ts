import axios from "axios";
import {ITrack} from "@/models/track";

export async function POST(req: Request, res: Response) {
    try {
        const track = await req.json();

        const newTrack: ITrack = {
            ...track,
            listeners: 0
        }

        console.log(newTrack)

        //await axios.post(`${process.env.SERVER_PATH}/track`, { newTrack })

        return new Response("Create successfully!");
    } catch(err) {
        return new Response("Invalid Request by request Create Track", {status: 400});
    }
}

