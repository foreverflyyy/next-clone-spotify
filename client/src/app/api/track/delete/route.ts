import axios from "axios";

export async function POST(req: Request, res: Response) {
    try {
        const {id} = await req.json();
        await axios.delete(`${process.env.SERVER_PATH}/track/${id}`);

        return new Response("Deleted successfully!");
        return new Response("tracks")
    } catch(err) {
        return new Response("Invalid Request by request Delete Track", {status: 400});
    }
}