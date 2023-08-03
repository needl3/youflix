"use client"

import { MovieDetail, fetchMoreVideosFunctionType } from "@/data/types";
import { Prisma } from "@prisma/client";
import { useState } from "react";
import { parseLength, parsePublishedDate, parseViews } from "../VerticalVideoList/VideoItem";
import Genre from "../Genre";

export default function VideoWindowSidebar({ fetchMore, info, videos }: { fetchMore: fetchMoreVideosFunctionType, info: Prisma.MovieCreateInput, videos: MovieDetail[] }) {
    const [paginatingVideos, setPaginatingVideos] = useState(videos)
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)


    return <div id="right-section" className="ml-8 overflow-x-hidden pr-3 w-96">
        <Genre />
        <ul>
            {paginatingVideos.map(video => <li key={video.id} className="py-1 grid grid-cols-10">
                <div className="relative h-fit w-full col-span-4">
                    <img src={video.image || "images/placeholder.png"} className="rounded-lg" />
                    <span className="absolute bottom-1 right-1 bg-white rounded-md px-1 text-sm">{parseLength(/* item.length */0 * 60 * 60 * 1000)}</span>
                </div>
                <div className="col-span-6 pl-3">
                    <h2 className="text-sm">{video.name}</h2>
                    <h3 className="text-xs">{video.productionHouse[0]}</h3>
                    <p className="text-xs">{parseViews(video.views || 40000)} • <span>{parsePublishedDate(video.released)}</span></p>
                    {new Date(video.released).getTime() > Date.now() - 3 * 7 * 24 * 60 * 60 * 1000 ? <span className="text-xs bg-slate-200 p-[2px]">New</span> : <></>}
                </div>
            </li>
            )}
        </ul>
    </div>

}
