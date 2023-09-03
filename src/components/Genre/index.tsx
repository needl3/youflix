"use client"

import { useState } from "react";

import SearchIcon from "@/assets/site/search.svg"
import RightSign from "@/assets/genre/right.svg"
import genre from "@/data/genre";
import { useDispatch } from "react-redux";
import { setGenre } from "@/redux/slices/misc-slice";

export default function Genre() {
    //
    // Temporary data source
    //
    const [selected, setSelected] = useState(genre.at(0) || "All")
    const [scrollStatus, setScrollStatus] = useState(-1)
    const dispatch = useDispatch()

    function moveLeft() {
        const slider = document.getElementById("genre-slider")
        if (slider) {
            const prevState = slider?.scrollLeft
            slider.scrollLeft = slider.scrollLeft - 500
            if (prevState - slider.scrollLeft < 500) setScrollStatus(-1)
        }
    }

    function moveRight() {
        const slider = document.getElementById("genre-slider")
        if (slider) {
            const prevState = slider?.scrollLeft
            slider.scrollLeft = slider.scrollLeft + 500
            if (prevState - slider.scrollLeft < 500) setScrollStatus(1)
        }
    }

    return <>
        {
            //
            // TODO: Replate selected requirement to element on View
            // TODO: Blur effect around right of this button
            //
            scrollStatus !== -1 &&
            <button className="bg-white hover:bg-slate-200 transition duration-300 sticky left-0 rounded-full self-cente p-2 rotate-90" onClick={moveLeft}>
                <RightSign />
            </button >
        }
        <button className="px-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition duration-300 align-middle cursor-pointer">
            <SearchIcon />
        </button>
        <ul className="flex gap-x-2 shrink-0">
            {
                genre.map(g =>
                    <li className={`text-sm px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition duration-300 ${selected === g ? "bg-slate-400" : ""} cursor-pointer`}
                        onClick={() => {
                            setSelected(g)
                            dispatch(setGenre(g))
                        }} key={g}>
                        {g}
                    </li>
                )
            }
        </ul>
        {
            // Replate selected requirement to element on View
            scrollStatus !== 1 &&
            <button className="bg-white hover:bg-slate-200 transition duration-300 sticky right-0 rounded-full self-cente p-2 -rotate-90" onClick={moveRight}>
                <RightSign />
            </button >
        }
    </>
}
