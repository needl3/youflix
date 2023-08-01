import VideoWindow from "@/components/VideoWindow"
import VideoWindowSideBar from "@/components/VideoWindowSideBar"
import VideoWindowDescription from "@/components/VideoWindowDescription"
import VideoWindowCommentSection from "@/components/VideoWindowCommentSection"
import db from "@/server/prisma"
import { Prisma } from "@prisma/client"
import { TAKE } from "@/data/misc"
import { getServerSession } from "next-auth"
import { CommentDetail } from "@/data/types"
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

export async function createComment({ content, parentCommentId, movieId }: CommentDetail){
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

export async function updateComment({id, content}: {id: string, content: string}){
    "use server"

    console.log("updating comment")
}

export default async function Movie({ params }: { params: { "id": string, "season"?: string, "episode"?: string } }) {
    const videoInfo = await db.movie.findUnique({ where: { id: params.id } })
    const commentInfo = await fetchMoreComments(params.id)
    return <div className="flex">
        <div className="flex flex-col w-4/6 h-full">
            <VideoWindow source={params.id} season={params.season} episode={params.episode} />
            <VideoWindowDescription info={videoInfo} />
            <VideoWindowCommentSection items={commentInfo} fetchMore={fetchMoreComments} createComment={createComment} />
        </div>
        <VideoWindowSideBar info={videoInfo as Prisma.MovieCreateInput} />
    </div>
}
