export default function VideoSkeleton({ items }: { items: number }) {
    return Array.from({ length: items }, (_, index) => (
        <li
            key={index}
            className="h-52 w-[19.5rem] rounded-lg bg-gradient-to-b from-[#00000000] to-black mb-8 animate-pulse"
        ></li>
    ))
}
