import LeftSection from "@/components/LeftSection";
import GenreSection from "@/components/RightSection/Genre";
import VideoListSection from "@/components/RightSection/VideoList";

export default function Home() {
    return (
        <div className="flex">
            <LeftSection />
            <div id="right-section" className="ml-8 overflow-x-hidden">
                <GenreSection />
                <VideoListSection />
            </div>
        </div>
    )
}
