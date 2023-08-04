"use client"

import { STATES, misc } from "@/redux/slices/misc-slice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function VideoWindow({ source, episode, season }: { source: string, episode?: string, season?: string }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(misc.actions.selectMode(STATES.MOVIE))
    }, [])

    return <div className="h-[26em] bg-gradient-to-br from-[#00000000] to-[#000000aa] animate-pulse">
    </div>
}

