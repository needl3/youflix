"use client"

import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "@/redux/store"

export default function ReduxContext(
    { children }:
    { children: ReactNode }
    ) {
    return <Provider store={store}>{children}</Provider>
}