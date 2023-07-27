export default function VideoSkeleton({ items }: { items: number }) {
    return Array.from({ length: items }, (_, index) => <li key={index} className="h-52 w-auto rounded-lg bg-slate-300 mb-8 animate-pulse"></li>)
}
