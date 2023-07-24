"use client"

import { useAppSelector } from "@/redux/store"
import Link from "next/link"
import { mainMenu, dummyFollowers } from "./sections"
import { useState } from "react"
import Followers from "@/assets/sidebar/followers.svg"
import ToggleShowUp from "@/assets/sidebar/toggleup.svg"
import ToggleShowDown from "@/assets/sidebar/toggledown.svg"

const DEFAULT_SHOW = 4

export default function LeftSection() {
    const active = useAppSelector(state => state.toggleLeftBar.leftBarActive)
    const [followShowAll, setFollowShowAll] = useState(false)
    const [followers, setFollowers] = useState(dummyFollowers.slice(0, DEFAULT_SHOW))

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

    //
    // Major css bug
    // Padding changing in ul while toggling left side bar
    // Home icons should not change of it's position when toggling
    //
    return <ul>
        {
            mainMenu.map(m => <Link href={m.href} key={m.name}>
                <li className={`flex rounded-lg hover: cursor-pointer hover:bg-slate-400 items-center ${active ? "text-sm pl-3 flex-row pr-16 py-2 gap-x-6" : "text-[10px] flex-col p-1 py-4"}`}>
                    {m.icon}
                    <h1>{m.name}</h1>
                </li>
            </Link>)
        }
        {active && <hr className="my-3" />}
        {
            active ?
                <>
                    {followers.slice(0, followShowAll ? -1 : DEFAULT_SHOW).map(f => <Link href={f.href} key={f.name}>
                        <li className="flex rounded-lg hover: cursor-pointer hover:bg-slate-400 text-sm items-center py-2 gap-x-6 pl-3 pr-16">
                            <img src={f.img} className="rounded-full" width='32px' height='32px' />
                            <h1>{f.name}</h1>
                        </li>
                    </Link>)
                    }
                    <li className="flex rounded-lg hover: cursor-pointer hover:bg-slate-400 text-sm items-center py-2 gap-x-6 pl-3 pr-16"
                        onClick={() => {
                            fetchMoreFollowers()
                            setFollowShowAll(!followShowAll)
                        }}
                    >
                        {followShowAll ? <ToggleShowUp /> : <ToggleShowDown />}
                        <span className="">{followShowAll ? "Show less" : "Show more"}</span>
                    </li>
                </>
                :
                <li className="flex flex-col rounded-lg hover: cursor-pointer hover:bg-slate-400 text-[10px] items-center p-1 py-4 w-2/3 ml-3">
                    <Followers />
                    {/* ml-3 is temporary solution  ---------------------------*/}
                    <h1>Followers</h1>
                </li>
        }
    </ul>
}
