"use client"

import { useAppSelector } from "@/redux/store";
import Genre from "../Genre";
import { STATES } from "@/redux/slices/misc-slice";

export default function RightSection({ children }: { children: React.ReactNode }) {
    const mode = useAppSelector(state => state.miscReducer.mode)

    return <div id="right-section" className="overflow-x-hidden pr-5">
        {
            mode === STATES.HOME &&
            <div id="genre-slider" className="flex gap-x-1 py-3 overflow-x-scroll no-scrollbar relative items-center scroll-smooth">
                <Genre />
            </div>
        }
        {children}
    </div>
}
