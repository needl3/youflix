import LeftSection from "@/components/LeftSection";
import GenreSection from "@/components/RightSection/Genre";
import VideoListSection from "@/components/RightSection/VideoList";

export default function Home() {
    return (
        <div className="flex">
            <LeftSection />
            <div id="right-section" className="flex flex-col items-start w-full">
                <GenreSection />
                <VideoListSection />
            </div>
        </div>
    )
}
