'use client'

import ToggleButton from '@/assets/site/toggle.svg'
import SiteLogo from '@/assets/site/logo.svg'
import SearchBar from './SearchBar'
import User from './User'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { toggleLeftBar } from '@/redux/slices/misc-slice'

export default function Nav() {
    const dispatch = useDispatch()
    const session = useSession()
    return (
        <>
            <nav className="flex justify-between px-4 items-center sticky w-full z-10">
                <div className="flex items-center">
                    <div
                        className="p-2 rounded-full hover:bg-slate-200 hover:cursor-pointer"
                        onClick={() => dispatch(toggleLeftBar())}
                    >
                        <ToggleButton />
                    </div>
                    <div className="p-4 hover">
                        <Link href="/">
                            <SiteLogo />
                        </Link>
                    </div>
                </div>
                <SearchBar />
                <User session={session.data} />
            </nav>
        </>
    )
}
