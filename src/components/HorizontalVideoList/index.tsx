"use client"

import Link from "next/link"
import VideoItem from "./VideoItem"
import { useState } from "react";
import { MovieDetail } from "@/data/types";
import VideoSkeleton from "./VideoSkeleton";
import { TAKE } from "@/data/misc";

import RightSign from "@/assets/genre/right.svg"


export default function VideoListSection({ name, videos, fetchMore }: { name?: string, videos: MovieDetail[], fetchMore: Function }) {
    if (!videos) return <></>

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
                setTimeout(() => {
                    fetchMore(page).then((r: MovieDetail[]) => {
                        setPaginatingVideos([...paginatingVideos, ...r])
                        setPage(page + 1)
                    }).finally(() => setIsLoading(false))
                }, 30000)
            }
        }
    }

    return <div className="px-3 bg-gradient-to-b from-[#00000022] to-[#000000dd] bg-[#00000055] rounded-lg pb-3 mb-5">
        {name && <h1 className="py-2 text-lg">{name}</h1>}
        <div className="relative flex">
            <button className="bg-[#00000055] hover:bg-[#00000000] transition duration-300 absolute self-center rotate-180 z-30 h-3/4 -left-3 fill-[#aaaaaaaa] rounded-md" onClick={moveLeft}>
                <RightSign />
            </button >

            <ul className="gap-x-4 w-full h-full overflow-x-scroll flex no-scrollbar scroll-smooth" id="slider">
                {
                    paginatingVideos.map(i => <Link href={"#"} key={i.name}>
                        <VideoItem item={i} />
                    </Link>)
                }
                {isLoading && <li key="skeleton-watching">
                    <div className="w-[350px] h-full rounded-lg bg-slate-300 animate-pulse duration-300 bg-gradient-to-r from-[#00000000] to-[#000000ff]" />
                </li>}
            </ul>

            <button className="bg-[#00000055] hover:bg-[#00000000] transition duration-300 absolute self-center z-30 h-3/4 -right-3 fill-[#aaaaaaaa] rounded-md" onClick={moveRight}>
                <RightSign />
            </button >
        </div>
    </div>
}
