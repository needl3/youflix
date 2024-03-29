'use client'

import { MovieDetail, fetchMoreVideosFunctionType } from '@/data/types'
import { Prisma } from '@prisma/client'
import { useEffect, useState } from 'react'
import {
    parseLength,
    parsePublishedDate,
    parseViews,
} from '../VerticalVideoList/VideoItem'
import Genre from '../Genre'
import Link from 'next/link'

export default function VideoWindowSidebar({
    fetchMore,
    info,
    videos,
}: {
    fetchMore: fetchMoreVideosFunctionType
    info: Prisma.MovieCreateInput
    videos: MovieDetail[]
}) {
    const [paginatingVideos, setPaginatingVideos] = useState(videos)
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
            isLoading
        ) {
            return
        }
        setIsLoading(true)
        fetchMore({ page, info, filter: {} })
            .then((r: any) => {
                setPaginatingVideos([...paginatingVideos, ...r])
                setPage(page + 1)
            })
            .catch((e: any) => console.error(e))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isLoading])

    return (
        <>
            <div
                id="genre-slider"
                className="flex gap-x-1 py-3 overflow-x-scroll no-scrollbar relative items-center scroll-smooth"
            >
                <Genre />
            </div>
            <ul>
                {paginatingVideos.map(video => (
                    <Link href={`${video.id}`} key={video.id}>
                        <li className="py-1 grid grid-cols-12">
                            <div className="relative flex-grow col-span-5">
                                <img
                                    src={
                                        video.image || 'images/placeholder.png'
                                    }
                                    className="rounded-lg h-24 w-full"
                                    referrerPolicy="no-referrer"
                                />
                                <span className="absolute bottom-1 right-1 bg-white rounded-md px-1 text-sm">
                                    {parseLength(
                                        /* item.length */ 0 * 60 * 60 * 1000
                                    )}
                                </span>
                            </div>
                            <div className="col-span-7 pl-2">
                                <h2 className="text-sm font-bold">
                                    {video.name}
                                </h2>
                                <h3 className="text-xs">
                                    {video.productionHouse[0]}
                                </h3>
                                <p className="text-xs">
                                    {parseViews(video.views || 40000)} •{' '}
                                    <span>
                                        {parsePublishedDate(video.released)}
                                    </span>
                                </p>
                                {new Date(video.released).getTime() >
                                Date.now() - 3 * 7 * 24 * 60 * 60 * 1000 ? (
                                    <span className="text-xs bg-slate-200 p-[2px]">
                                        New
                                    </span>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    )
}
