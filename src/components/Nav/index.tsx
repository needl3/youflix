"use client"

import ToggleButton from '@/assets/site/toggle.svg'
import SiteLogo from '@/assets/site/logo.svg'
import SearchBar from './SearchBar'
import User from './User'
import Notifications from './Notifications'
import SignIn from './SignIn'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function Nav() {
    const session = useSession()
    return (
        <nav className="flex justify-between px-4 items-center sticky w-full">
            <div className="flex items-center">
                <div className="p-2 rounded-full hover:bg-slate-200 hover:cursor-pointer">
                    <ToggleButton />
                </div>
                <div className="p-4 hover">
                    <Link href="/">
                        <SiteLogo />
                    </Link>
                </div>
            </div>
            <SearchBar />
            {
                session.data
                ?
                <div className="flex items-center">
                    <Notifications />
                    <User session={session.data}/>
                </div>
                :
                <SignIn />
            }
        </nav>
    )
}
