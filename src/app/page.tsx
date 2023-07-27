import VideoListSection from "@/components/VideoList";
import db from "@/server/prisma";
import { TAKE } from "@/data/misc";


async function fetchMore(page: number) {
    "use server"
    const newVideos = await db.movie.findMany({
        skip: page * TAKE,
        take: TAKE
    })

    return newVideos
}

export default async function Home() {
    //
    // This page should return X amount of recently popular movies by default
    // Then return recommended movies in infinite scrollable fashion
    //

    let videos = await db.movie.findMany({
        skip: 0,
        take: TAKE
    })

    return (
        <VideoListSection videos={videos} fetchMore={fetchMore} />
    )
}
