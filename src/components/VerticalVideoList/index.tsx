"use client"

import Link from "next/link"
import VideoItem from "./VideoItem"
import { useEffect, useState } from "react";
import { MovieDetail } from "@/data/types";
import VideoSkeleton from "./VideoSkeleton";
import { TAKE } from "@/data/misc";

export default function VideoListSection({ name, videos, fetchMore }: { name?: string, videos: MovieDetail[], fetchMore: Function }) {
    const [paginatingVideos, setPaginatingVideos] = useState(videos)
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        setIsLoading(true)
        fetchMore(page)
            .then((r: any) => {
                setPaginatingVideos([...paginatingVideos, ...r])
                setPage(page + 1)
            })
            .catch((e: any) => console.error(e))
            .finally(() => setIsLoading(false))
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    return <div className="px-3">
        {name && <h1>{name}</h1>}
        <ul className="grid grid-cols-3 gap-x-4">
            {
                paginatingVideos.map(i => <Link href={"#"} key={i.name}>
                    <VideoItem item={i} />
                </Link>)
            }
            {isLoading && <VideoSkeleton items={TAKE} />}
        </ul>
    </div>
}
