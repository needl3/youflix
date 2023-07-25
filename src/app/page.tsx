import VideoListSection from "@/components/VideoList";
import db from "@/server/prisma";

export default async function Home() {

    //
    // This page should return X amount of recently popular movies by default
    // Then return recommended movies in infinite scrollable fashion
    //
    const videos = await db.movie.findMany({
        skip: 0,
        take: 10
    })

    return (
        <VideoListSection videos={videos}/>
    )
}
