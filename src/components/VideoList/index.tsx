import Link from "next/link"
import VideoItem from "./VideoItem"
import { Prisma } from "@prisma/client"

export default function VideoListSection({ name, videos }: { name?: string, videos: Prisma.MovieCreateManyInput[] }) {
    return <div className="px-3">
        {name && <h1>{name}</h1>}
        <ul className="grid grid-cols-3 gap-x-4">
            {
                videos.map(i => <Link href={"#"}>
                    <VideoItem item={i} />
                </Link>)
            }
        </ul>
    </div>
}
