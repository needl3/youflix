"use client"
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react"
import Search from "@/assets/site/search.svg"
import Mic from "@/assets/site/mic.svg"

export default function SearchBar() {
    const [queryVal, setQueryVal] = useState('')

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setQueryVal(e.currentTarget.value)
    }
    function searchHandler(e: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) {
        if (e.key == 'Enter')
            console.log("Haha")
        else
            console.log(e.target.value)
    }

    return (
        <div className="flex w-[40rem] gap-x-4 h-10 items-center text-center">
            <div className="items-center flex h-full w-full">
                <div className="border rounded-l-full border-[#aaaaaa] pl-4 bg-white h-full w-full" onKeyDown={searchHandler}>
                    <input type="text" placeholder="Search" name="query-bar" onChange={onChange} className="focus:outline-none text-lg h-full w-full" />
                </div>
                <button onClick={searchHandler} className="px-2 border border-l-0 border-[#aaaaaa] rounded-r-full h-full flex">
                    <Search />
                </button>
            </div>
            <button onClick={searchHandler} className="p-2 rounded-full h-full bg-slate-200">
                <Mic/>
            </button>
        </div>
    )
}
