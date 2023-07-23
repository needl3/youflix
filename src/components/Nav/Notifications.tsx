"use client"
import Notification from '@/assets/site/notification.svg'
import { useState } from 'react'

const notifsArr: NotificationInterface[] = [
    {
        title: "First title",
        uploader: "https://yt3.ggpht.com/ytc/AOPolaT-bsfkO28q6yOROoasYT4tTvUjchqJ1GE6GGwJeA=s48-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Second title",
        uploader: "https://yt3.ggpht.com/ytc/AOPolaT-bsfkO28q6yOROoasYT4tTvUjchqJ1GE6GGwJeA=s48-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Third title",
        uploader: "https://yt3.ggpht.com/ytc/AOPolaT-bsfkO28q6yOROoasYT4tTvUjchqJ1GE6GGwJeA=s48-c-k-c0x00ffffff-no-rj"
    }
]

interface NotificationInterface {
    title: string,
    uploader: string
}

export default function Notifications() {
    const [active, setActive] = useState(false)
    const notifs: NotificationInterface[] = notifsArr

    return <>
        <div className="relative">
            <div className="p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full w-fit" onClick={() => setActive(!active)}>
                <Notification />
            </div>
            {
                active &&
                <div className='absolute border top-0 right-10 w-96 bg-slate-100 rounded-2xl'>
                    <h1 className='p-3'>Notifications</h1>
                    <hr/>
                    <ul>
                        {
                            notifs.map((n: NotificationInterface) => {
                                return <li key={n.title} className='flex items-center p-4'>
                                    <img src={n.uploader} alt={`${n.title} image thumbnail`} width="60em"/>
                                    <h2 className='pl-4'>{n.title}</h2>
                                </li>
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    </>
}
