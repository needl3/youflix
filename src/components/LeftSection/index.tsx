"use client"

import { useAppSelector } from "@/redux/store"
import Link from "next/link"
import { mainMenu, dummyFollowers } from "./sections"
import { useState } from "react"
import Followers from "@/assets/sidebar/followers.svg"
import ToggleShowUp from "@/assets/sidebar/toggleup.svg"
import ToggleShowDown from "@/assets/sidebar/toggledown.svg"
import { STATES } from "@/redux/slices/misc-slice"

const DEFAULT_SHOW = 4

export default function LeftSection() {
    const mode = useAppSelector(state => state.miscReducer.mode)

    const active = useAppSelector(state => state.miscReducer.leftBarActive)
    const [followShowAll, setFollowShowAll] = useState(false)
    const [followers, setFollowers] = useState(dummyFollowers.slice(0, DEFAULT_SHOW))
    const [menuSelected, setMenuSelected] = useState(mainMenu[0])

    function fetchMoreFollowers() {
        //
        // Simulating fetching more follower list
        // Fetches only once per page reload
        //
        setTimeout(() => {
            if (followers.length <= DEFAULT_SHOW)
                setFollowers(dummyFollowers)
        }, 2000)
    }

    if (mode !== STATES.HOME) return <></>

    //
    // Major css bug
    // Padding changing in ul while toggling left side bar
    // Home icons should not change of it's position when toggling
    //
    return <ul className={`py-3 ${active ? "px-3" : ""}`}>
        {
            mainMenu.map(m => <Link href={m.href} key={m.name}>
                <li
                    className={`flex rounded-lg hover: cursor-pointer hover:bg-slate-400 items-center
                    ${active ? "text-sm pl-3 flex-row pr-16 py-2 gap-x-6" : "text-[10px] flex-col p-1 py-4"}
                    ${menuSelected === m ? "bg-slate-100" : ""}
                    `}
                >
                    {m.icon}
                    <h1>{m.name}</h1>
                </li>
            </Link>)
        }
        {active && <hr className="my-3" />}
        {
            active ?
                <>
                    {followers.slice(0, followShowAll ? -1 : DEFAULT_SHOW).map(f => <Link href={`profile/${f.href}`} key={f.name}>
                        <li className="flex rounded-lg hover: cursor-pointer hover:bg-slate-400 text-sm items-center py-2 gap-x-6 pl-3 pr-14">
                            <img src={f.img} className="rounded-full" width="25px" height="25px" referrerPolicy="no-referrer"/>
                            <h1>{f.name}</h1>
                        </li>
                    </Link>)
                    }
                    <li className="flex rounded-lg hover: cursor-pointer hover:bg-slate-400 text-sm items-center py-2 gap-x-6 pl-3 pr-14"
                        onClick={() => {
                            fetchMoreFollowers()
                            setFollowShowAll(!followShowAll)
                        }}
                    >
                        {followShowAll ? <ToggleShowUp /> : <ToggleShowDown />}
                        <span>{followShowAll ? "Show less" : "Show more"}</span>
                    </li>
                </>
                :
                <li className="flex flex-col rounded-lg hover: cursor-pointer hover:bg-slate-400 text-[10px] items-center px-1 py-4">
                    <Followers />
                    {/* ml-3 is temporary solution  ---------------------------*/}
                    <h1>Followers</h1>
                </li>
        }
    </ul>
}
