"use client"

import { useAppSelector } from "@/redux/store";
import Genre from "../Genre";
import { STATES } from "@/redux/slices/misc-slice";

export default function RightSection({ children }: { children: React.ReactNode }) {
    const mode = useAppSelector(state => state.miscReducer.mode)

    return <div id="right-section" className="ml-8 overflow-x-hidden pr-3">
        {mode === STATES.HOME && <Genre />}
        {children}
    </div>
}
