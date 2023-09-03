import VideoListSection from '@/components/HorizontalVideoList'
import { TAKE } from '@/data/misc'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import getConsidering from '@/server/prisma/RawQueries/completed'
import { Session, getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

async function fetchMore(page: number, session: Session) {
    'use server'

    const newVideos = await getConsidering({
        limit: TAKE,
        page,
        userId: session.user.id,
    })

    return newVideos
}

export default async function Considering() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user.id) return redirect('/api/auth/signin') // TODO: Make a page to inform user to signup to use this feature

    const completed = await getConsidering({
        limit: TAKE,
        page: 0,
        userId: session.user.id,
    })

    return (
        <>
            <VideoListSection
                name="Considering"
                videos={completed}
                fetchMore={fetchMore}
            />
        </>
    )
}
