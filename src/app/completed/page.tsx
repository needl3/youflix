import VideoListSection from "@/components/VideoList"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import getCompleted from "@/server/prisma/Queries/completed"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Completed() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user.id)
        return redirect("/api/auth/signin") // TODO: Make a page to inform user to signup to use this feature

    const completed = await getCompleted({limit: 10, page: 0, userId: session.user.id})
    console.log(completed)

    return <>
        <VideoListSection name="Completed" videos={completed}/>
    </>
}
