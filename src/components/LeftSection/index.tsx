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

    return <ul className="w-fit p-2 overflow-y-scroll flex flex-col">
        {
            mainMenu.map(m => <Link href={m.href} key={m.name}>
                <li className={`flex rounded-lg hover: cursor-pointer hover:bg-slate-400 text-sm ${active ? "pr-14 pl-3 py-2 " : "px-3 py-5 justify-center"}`}>
                    {m.icon}
                    {active && <h1 className="px-6">{m.name}</h1>}
                </li>
            </Link>)
        }
        {active && <hr className="my-3" />}
        {
            active ?
                <>
                    {followers.slice(0, followShowAll ?  -1 : DEFAULT_SHOW).map(f => <Link href={f.href} key={f.name}>
                        <li className="flex rounded-lg pr-14 pl-3 py-2 hover: cursor-pointer hover:bg-slate-400 text-sm items-center">
                            <img src={f.img} className="rounded-full" width='32px' height='32px' />
                            <h1 className="px-6">{f.name}</h1>
                        </li>
                    </Link>)
                    }
                    <li className="flex rounded-lg hover: cursor-pointer hover:bg-slate-400 text-sm pr-14 pl-3 py-2"
                        onClick={() => {
                            fetchMoreFollowers()
                            setFollowShowAll(!followShowAll)
                        }}
                    >
                        {followShowAll ? <ToggleShowUp /> : <ToggleShowDown />}
                        <span className="px-6">{followShowAll ? "Show less" : "Show more"}</span>
                    </li>
                </>
                :
                <li className={`flex rounded-lg hover: cursor-pointer hover:bg-slate-400 text-sm ${active ? "pr-14 pl-3 py-2 " : "px-3 py-6 justify-center"}`}>
                    <Followers />
                </li>
        }
    </ul>
}
