"use client"

import Link from "next/link"
import VideoItem from "./VideoItem"
import { useState } from "react";

import RightSign from "@/assets/genre/right.svg"
import { Prisma } from "@prisma/client";


export default function VideoListSection({ name, videos, fetchMore }: { name?: string, videos: Prisma.MovieCreateInput[], fetchMore: Function }) {
    if (!videos.length) return <></>

    const [paginatingVideos, setPaginatingVideos] = useState(videos)
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)

    function moveLeft() {
        const slider = document.getElementById("slider")
        if (slider) slider.scrollLeft = slider.scrollLeft - 500
    }

    function moveRight() {
        const slider = document.getElementById("slider")
        if (slider) {
            const prevState = slider.scrollLeft
            slider.scrollLeft = slider.scrollLeft + 500
            if (slider.scrollLeft - prevState < 500) {
                setIsLoading(true)
                fetchMore(page).then((r: Prisma.MovieCreateInput[]) => {
                    setPaginatingVideos([...paginatingVideos, ...r])
                    setPage(page + 1)
                }).finally(() => setIsLoading(false))
            }
        }
    }

    return <div className="px-3 bg-gradient-to-b from-[#00000022] to-[#000000dd] bg-[#00000055] rounded-lg pb-3 mb-5">
        {name && <h1 className="py-2 text-lg">{name}</h1>}
        <div className="relative flex">
            <div className="bg-[#00000055] cursor-pointer hover:bg-[#00000000] transition duration-300 absolute self-center z-30 h-3/4 -left-3 fill-[#aaaaaaaa] rounded-md flex items-center" onClick={moveLeft}>
                <button className="rotate-90">
                    <RightSign />
                </button>
            </div>

            <ul className="gap-x-4 w-full h-full overflow-x-scroll flex no-scrollbar scroll-smooth" id="slider">
                {
                    paginatingVideos.map(i => <Link href={`/movie/${i.id}`} key={i.id}>
                        <VideoItem item={i} />
                    </Link>)
                }
                {isLoading && <li key="skeleton-watching">
                    <div className="w-[350px] h-full rounded-lg bg-slate-300 animate-pulse duration-300 bg-gradient-to-r from-[#00000000] to-[#000000ff]" />
                </li>}
            </ul>

            <div className="bg-[#00000055] cursor-pointer hover:bg-[#00000000] transition duration-300 absolute self-center z-30 h-3/4 -right-3 fill-[#aaaaaaaa] rounded-md flex items-center" onClick={moveRight}>
                <button className="-rotate-90">
                    <RightSign />
                </button>
            </div>
        </div>
    </div>
}
