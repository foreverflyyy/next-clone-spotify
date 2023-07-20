import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITrack} from "@/models/track";

export const tracksApi = createApi({
    reducerPath: "tracksApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/"
    }),
    endpoints: (builder) => ({
        getTracks: builder.query<ITrack[], null>({
            query: () => "track",
        }),
        getTrackById: builder.query<ITrack, {id: string}>({
            query: ({id}) => `track/${id}`,
        })
    })
})

export const {
    useGetTracksQuery,
    useGetTrackByIdQuery,
} = tracksApi;