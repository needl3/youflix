import ToggleButton from '@/assets/site/toggle.svg'
import SiteLogo from '@/assets/site/logo.svg'
import SearchBar from './SearchBar'
import User from './User'
import Notifications from './Notifications'
import SignIn from './SignIn'
import Link from 'next/link'

const loggedIn = false

export default function Nav() {
    return (
        <nav className="flex justify-between px-4 items-center fixed w-full">
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
                loggedIn
                ?
                <div className="flex items-center">
                    <Notifications />
                    <User />
                </div>
                :
                <SignIn />
            }
        </nav>
    )
}
