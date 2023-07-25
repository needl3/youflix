"use client"

import { useState } from "react";

import SearchIcon from "@/assets/site/search.svg"
import RightSign from "@/assets/genre/right.svg"

export default function Genre() {
    //
    // Temporary data source
    //
    const genres = ["All", "Action", "Romance", "Slice of Life", "Horror", "Hentai", "Pervy", "Gym", "Workout", "Fight", "Thrilling", "Suspenseful", "Heartbreaking", "Primitive", "Studio Ghibli", "Depressing", "SciFi"]
    const [selected, setSelected] = useState(genres.at(0) || "All")

    function moveLeft() { }
    function moveRight() { }

    return <div id="genre-section-top" className="flex gap-x-1 py-3 overflow-x-scroll no-scrollbar relative items-center">
        {
            //
            // TODO: Replate selected requirement to element on View
            // TODO: Blur effect around right of this button
            //
            genres.indexOf(selected) !== 0 &&
            <button className="bg-white hover:bg-slate-200 transition duration-300 sticky left-0 rounded-full self-cente rotate-180" onClick={moveLeft}>
                <RightSign />
            </button >
        }
        <button className="px-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition duration-300 align-middle">
            <SearchIcon />
        </button>
        <ul className="flex gap-x-2 shrink-0">
            {
                genres.map(g =>
                    <li className={`text-sm px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition duration-300 ${selected === g ? "bg-slate-400" : ""}`}
                        onClick={() => setSelected(g)} key={g}>
                        {g}
                    </li>
            )
            }
        </ul>
        {
            // Replate selected requirement to element on View
            genres.indexOf(selected) !== genres.length-1 &&
            <button className="bg-white hover:bg-slate-200 transition duration-300 sticky right-0 rounded-full self-cente" onClick={moveRight}>
                <RightSign />
            </button >
        }
    </div>
}
