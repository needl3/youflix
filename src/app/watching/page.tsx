import VideoListSection from '@/components/VerticalVideoList'
import { TAKE } from '@/data/misc'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import getWatching from '@/server/prisma/RawQueries/watching'
import { Session, getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

async function fetchMore(page: number, session: Session) {
    'use server'

    const newVideos = await getWatching({
        limit: TAKE,
        page,
        userId: session.user.id,
    })
    return newVideos
}

export default async function Watching() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user.id) return redirect('/api/auth/signin') // TODO: Make a page to inform user to signup to use this feature

    const completed = await fetchMore(0, session)
    return (
        <>
            <VideoListSection videos={completed} fetchMore={fetchMore} />
        </>
    )
}
