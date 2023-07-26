import VideoListSection from "@/components/VideoList"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import getConsidering from "@/server/prisma/Queries/completed"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Completed() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user.id)
        return redirect("/api/auth/signin") // TODO: Make a page to inform user to signup to use this feature

    const completed = await getConsidering({limit: 10, page: 0, userId: session.user.id})

    return <>
        <VideoListSection name="Considering" videos={completed}/>
    </>
}


