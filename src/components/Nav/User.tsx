import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import Notifications from './Notifications'
import SignIn from './SignIn'
import SignOut from '@/assets/site/signout.svg'

//
// Has list of user settings
//
const components = [
    {
        name: 'Sign Out',
        icon: <SignOut />,
        handler: signOut,
    },
]

export default function User({
    session,
}: {
    session: Session | null
}): React.ReactNode {
    const [settingActive, setSettingActive] = useState(false)

    const UserImage = (
        <img
            src={session?.user?.image || '#'}
            alt="pfp"
            width="32px"
            height="32px"
            className="rounded-full"
            onClick={() => setSettingActive(!settingActive)}
            referrerPolicy="no-referrer"
        />
    )

    return (
        <>
            {session ? (
                <div className="grid grid-cols-2 justify-items-center">
                    <Notifications />
                    <div className="px-3 py-1 relative">
                        <div className="cursor-pointer">{UserImage}</div>
                        {settingActive && (
                            <div className="bg-slate-300 rounded-2xl absolute top-0 right-14 w-72">
                                <div className="px-5 py-3 border-b flex items-center">
                                    {UserImage}
                                    <span className="px-5">
                                        {session.user?.name}
                                    </span>
                                </div>
                                <ul className="flex flex-col overflow-scroll py-2">
                                    {components.map(c => (
                                        <Link
                                            href="/api/auth/signout"
                                            key={c.name}
                                        >
                                            <li
                                                className="py-2 px-5 flex items-center hover:bg-slate-100 flex-grow"
                                                onClick={() => c.handler()}
                                            >
                                                {c.icon}
                                                <span className="px-4">
                                                    {c.name}
                                                </span>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <SignIn />
            )}
        </>
    )
}
