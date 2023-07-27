import VideoListSection from "@/components/HorizontalVideoList"
import { TAKE } from "@/data/misc"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import getCompleted from "@/server/prisma/RawQueries/considering"
import { Session, getServerSession } from "next-auth"
import { redirect } from "next/navigation"

async function fetchMore(page: number, session: Session) {
    "use server"

    const newVideos = await getCompleted({limit: TAKE, page, userId: session.user.id})

    return newVideos
}

export default async function Completed() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user.id)
        return redirect("/api/auth/signin") // TODO: Make a page to inform user to signup to use this feature

    const completed = await fetchMore(0, session)
    console.log(completed)

    return <>
        <VideoListSection name="Completed" videos={completed} fetchMore={fetchMore}/>
    </>
}
