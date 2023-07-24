"use client"

import { useState } from "react";

import SearchIcon from "@/assets/site/search.svg"
import RightSign from "@/assets/genre/right.svg"
import LeftSign from "@/assets/genre/left.svg"

export default function Genre() {
    const genres = ["All", "Action", "Romance", "Slice of Life", "Horror", "Hentai", "Pervy", "Gym", "Workout", "Fight", "Thrilling", "Suspenseful", "Heartbreaking"]
    const [selected, setSelected] = useState(genres.at(0) || "All")

    function moveLeft() { }
    function moveRight() { }

    return <div id="genre-section-top" className="flex gap-x-1 py-2 overflow-x-scroll no-scrollbar relative items-center">
        {
            //
            // TODO: Replate selected requirement to element on View
            // TODO: Blur effect around right of this button
            //
            genres.indexOf(selected) !== 0 &&
            <button className="bg-slate-100 hover:bg-slate-200 transition duration-300 absolute left-0 rounded-full p-3 self-center" onClick={moveLeft}>
                <LeftSign />
            </button >
        }
        <button className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition duration-300 align-middle">
            <SearchIcon />
        </button>
        <ul className="flex gap-x-1 shrink-0">
            {
                genres.map(g =>
                    <li className={`px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition duration-300 ${selected === g ? "border border-cyan-400" : ""}`}
                        onClick={() => setSelected(g)} key={g}>
                        {g}
                    </li>
            )
            }
        </ul>
        {
            // Replate selected requirement to element on View
            genres.indexOf(selected) !== genres.length &&
            <button className="bg-slate-100 hover:bg-slate-200 transition duration-300 absolute right-0 rounded-full self-center" onClick={moveRight}>
                <RightSign />
            </button >
        }
    </div>
}
