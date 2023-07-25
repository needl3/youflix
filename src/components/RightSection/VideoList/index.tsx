import Link from "next/link"
import VideoItem from "./VideoItem"
import { videoData } from "./video_data"

export default function VideoListSection() {
    return <div className="px-3">
        <ul className="grid grid-cols-3 gap-x-4">
            {
                videoData.map(i => <Link href={"#"}>
                    <VideoItem item={i} />
                </Link>)
            }
        </ul>
    </div>
}
