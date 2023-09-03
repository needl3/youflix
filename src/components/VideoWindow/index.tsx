"use client"

import { STATES, misc } from "@/redux/slices/misc-slice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function VideoWindow({ source, episode, season }: { source: string, episode?: string, season?: string }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(misc.actions.selectMode(STATES.MOVIE))
    }, [])

    return <>
    </>
}

