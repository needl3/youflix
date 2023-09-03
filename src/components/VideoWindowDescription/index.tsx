'use client'
import NotificationIcon from '@/assets/site/notification.svg'
import Arrow from '@/assets/genre/right.svg'
import LikeIcon from '@/assets/site/like.svg'
import ShareIcon from '@/assets/site/share.svg'
import { parsePublishedDate, parseViews } from '../VerticalVideoList/VideoItem'
import { MovieDetail } from '@/data/types'
import { useState } from 'react'

export default function VideoWindowDescription({
    info,
}: {
    info: MovieDetail
}) {
    const [descriptionActive, setDescriptionActive] = useState(false)

    return (
        <>
            <h1 className="text-lg font-bold">{info.name}</h1>
            <div className="flex justify-between">
                <div className="flex gap-x-3 items-center">
                    <img
                        src="https://lh3.googleusercontent.com/a/AAcHTtciQ-Y43Wmd66ghFxSf4XtSRDMCVqlv5q3Aauy1wDpxdjE=s96-c"
                        className="rounded-full h-10 w-auto"
                        referrerPolicy="no-referrer"
                    />
                    <div>
                        <h2 className="font-bold">
                            {(info.productionHouse as string[]).at(0) ||
                                'Not Available'}
                        </h2>
                        <p className="text-sm">{'10.3K Subscribers'}</p>
                    </div>
                    <div className="py-[0.5em] px-3 gap-x-1 bg-slate-200 rounded-full flex items-center cursor-pointer">
                        <NotificationIcon />
                        <button>Subscribe</button>
                        <div className="h-5 w-5">
                            <Arrow />
                        </div>
                    </div>
                </div>
                <div className="flex items-center text-center gap-x-3">
                    <div className="py-1 px-2 bg-slate-200 rounded-full flex items-center gap-x-3">
                        <button className="flex border-r-2 border-r-slate-400 pr-3">
                            <LikeIcon />
                            {'10K'}
                        </button>
                        <button className="rotate-180">
                            <LikeIcon />
                        </button>
                    </div>
                    <button className="py-2 px-3 bg-slate-200 rounded-full flex items-center gap-x-2">
                        <ShareIcon />
                        Share
                    </button>
                    <button className="py-2 px-3 bg-slate-200 rounded-full flex">
                        ...
                    </button>
                </div>
            </div>
            <div
                className={`${
                    descriptionActive ? 'h-fit' : 'h-24 overflow-hidden'
                } bg-slate-200 rounded-2xl p-3 relative`}
            >
                {/*
                Ignoring views warning. Ill make db schema later on
                */}
                <h2 className="font-bold">
                    {parseViews(info?.views || 0) || '15K views'}{' '}
                    {parsePublishedDate(
                        new Date(info.released || '2023-01-01')
                    )}
                </h2>
                <p>{info.description}</p>
                <button
                    className={`w-fit bottom-0 left-0 ${
                        !descriptionActive && 'absolute'
                    } bg-[#eeeeeeee] rounded-t-md px-2 text-left`}
                    onClick={() => setDescriptionActive(!descriptionActive)}
                >
                    {descriptionActive ? 'Show less' : 'Show more'}
                </button>
            </div>
        </>
    )
}
