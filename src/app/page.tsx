import VerticalVideoListSection from '@/components/VerticalVideoList'
import HorizontalVideoListSection from '@/components/HorizontalVideoList'
import db from '@/server/prisma'
import { TAKE } from '@/data/misc'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

async function fetchMoreVertical(page: number) {
    'use server'

    const session = await getServerSession(authOptions)
    // if (!session) return [] // This should return normal videos without preferences

    // This should return videos user is highly to enjoy/related/preferance based
    const newVideos = await db.movie.findMany({
        skip: page * TAKE,
        take: TAKE,
    })

    return newVideos
}

async function fetchMoreHorizontal(page: number) {
    'use server'

    const session = await getServerSession(authOptions)
    if (!session) return []

    const newVideos = await db.movie.findMany({
        skip: page * TAKE,
        take: TAKE,
    })
    //getWatching({limit: TAKE, page, userId: session.user.id})

    return newVideos
}

export default async function Home() {
    //
    // This page should return X amount of recently popular movies by default
    // Then return recommended movies in infinite scrollable fashion
    //

    let verticalVideos = await fetchMoreVertical(0)
    let horizontalVideos = await fetchMoreHorizontal(0)

    return (
        <>
            <HorizontalVideoListSection
                name="Continue Watching"
                videos={horizontalVideos}
                fetchMore={fetchMoreHorizontal}
            />
            <VerticalVideoListSection
                videos={verticalVideos}
                fetchMore={fetchMoreVertical}
            />
        </>
    )
}
