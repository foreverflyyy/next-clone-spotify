import axios from "axios";

export async function GET(req: Request, res: Response) {
    try {
        const response = await axios.get(`${process.env.SERVER_PATH}/track`, {
            params: {
                limit: 10,
                offset: 0
            }
        })

        const tracks = JSON.stringify(response.data);
        return new Response(tracks)
    } catch(err) {
        return new Response("Invalid Request by request Get Tracks", {status: 400})
    }
}