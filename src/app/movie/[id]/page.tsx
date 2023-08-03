import VideoWindow from "@/components/VideoWindow"
import VideoWindowSideBar from "@/components/VideoWindowSideBar"
import VideoWindowDescription from "@/components/VideoWindowDescription"
import VideoWindowCommentSection from "@/components/VideoWindowCommentSection"
import db from "@/server/prisma"
import { Prisma } from "@prisma/client"
import { TAKE } from "@/data/misc"
import { getServerSession } from "next-auth"
import { CommentDetail, MovieDetail } from "@/data/types"
import { redirect } from "next/navigation"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

async function fetchMoreComments(movieId: string, page = 0, limit = TAKE) {
    "use server"

    return await db.comment.findMany({
        where: {
            movieId
        },
        skip: page * limit,
        take: limit
    })
}

export async function createComment({ content, parentCommentId, movieId }: CommentDetail) {
    "use server"

    const session = await getServerSession(authOptions)

    if (!session?.user.id)
        return redirect("/api/auth/signin")

    const res = await db.comment.create({
        data: {
            content,
            parentCommentId,
            movieId,
            userId: session?.user.id,
            publishedAt: new Date()
        }
    })

    return res
}

export async function updateComment({ id, content }: { id: string, content: string }) {
    "use server"

    console.log("updating comment")
}

export async function fetchMoreVideos({ filter, page, info }:
    { filter: any /* change to a more defined type */, page: number, info: MovieDetail }) {
    "use server"

    return await db.movie.findMany({
        where: filter,
        skip: page * TAKE,
        take: 3
    })
}

export default async function Movie({ params }: { params: { "id": string, "season"?: string, "episode"?: string } }) {
    const videoInfo = await db.movie.findUnique({ where: { id: params.id } })
    const commentInfo = await fetchMoreComments(params.id)
    const videos = await fetchMoreVideos({ page: 0, info: videoInfo, filter: {} })

    return <div className="flex pt-5">
        <div className="flex flex-col w-4/6 h-full">
            <VideoWindow source={params.id} season={params.season} episode={params.episode} />
            <VideoWindowDescription info={videoInfo} />
            <VideoWindowCommentSection items={commentInfo} fetchMore={fetchMoreComments} createComment={createComment} updateComment={updateComment} />
        </div>
        <VideoWindowSideBar videos={videos} fetchMore={fetchMoreVideos} info={videoInfo as Prisma.MovieCreateInput} />
    </div>
}
