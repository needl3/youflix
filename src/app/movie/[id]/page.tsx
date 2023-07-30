import VideoWindow from "@/components/VideoWindow"
import VideoWindowSideBar from "@/components/VideoWindowSideBar"
import VideoWindowDescription from "@/components/VideoWindowDescription"
import VideoWindowCommentSection from "@/components/VideoWindowCommentSection"
import db from "@/server/prisma"
import { Prisma } from "@prisma/client"

export default async function Movie({ params }: { params: { "id": string, "season"?: string, "episode"?: string } }) {
    const videoInfo = await db.movie.findUnique({ where: { id: params.id} })
    return <div className="flex">
        <div className="flex flex-col w-4/6 h-full">
            <VideoWindow source={params.id} season={params.season} episode={params.episode} />
            <VideoWindowDescription info={videoInfo as Prisma.MovieCreateInput} />
            <VideoWindowCommentSection source={params.id} />
        </div>
        <VideoWindowSideBar info={videoInfo as Prisma.MovieCreateInput} />
    </div>
}
