'use client'

import {
    CommentDetail,
    createCommentFunctionType,
    updateCommentFunctionType,
} from '@/data/types'
import { useSession } from 'next-auth/react'
import { parsePublishedDate } from '../VerticalVideoList/VideoItem'
import Arrow from '@/assets/genre/right.svg'
import { useState } from 'react'
import ShowMore from '@/assets/comments/showmore.svg'

export default function CommentItem({
    disableSubComments,
    createComment,
    updateComment,
    info,
}: {
    disableSubComments: boolean
    createComment: createCommentFunctionType
    updateComment: updateCommentFunctionType
    info: CommentDetail
}) {
    const [subComments, setSubComments] = useState([] as CommentDetail[])
    const session = useSession()

    function fetchSubComments() {
        fetch(`/api/subcomments?skip=${subComments.length}`)
            .then((r: CommentDetail) => r.json())
            .then((r: CommentDetail) =>
                setSubComments([...subComments, ...r.comments])
            )
            .catch(e => console.error(e))
    }

    return (
        <div className="flex items-center gap-x-4 pb-5">
            <img
                src={
                    session.data?.user.image ||
                    'https://yt3.ggpht.com/a/default-user=s48-c-k-c0x00ffffff-no-rj'
                }
                className="h-10 w-auto rounded-full self-start"
                referrerPolicy="no-referrer"
            />
            <div>
                <div className="flex items-center gap-x-1 text-xs">
                    <h3 className="font-bold">{'@Name'}</h3>
                    <span className="text-gray-600">
                        {parsePublishedDate(new Date(info.publishedAt))}
                    </span>
                </div>
                <p>{info.content}</p>
                <div>{/* Like Unlike */}</div>
                {!disableSubComments /* && (info.subCommentsCount.length !== 0) */ ? (
                    <div
                        className="text-blue-500 text-sm flex cursor-pointer hover:bg-blue-200 p-2 rounded-full fill-blue-500"
                        onClick={fetchSubComments}
                    >
                        <Arrow />
                        <p className="pl-1 font-bold">{`${
                            info.subCommentsCount || 0
                        } replies`}</p>
                    </div>
                ) : (
                    <></>
                )}
                <ul>
                    {subComments.map(comment => (
                        <li key={comment.id}>
                            <CommentItem
                                disableSubComments={true}
                                info={comment}
                                createComment={createComment}
                                updateComment={updateComment}
                            />
                        </li>
                    ))}
                </ul>
                {!disableSubComments && subComments.length ? (
                    <button
                        className="p-2 flex w-fit items-center gap-x-1 hover:bg-blue-200 rounded-full"
                        onClick={fetchSubComments}
                    >
                        <ShowMore />
                        <p className="text-sm text-blue-500 font-bold">
                            Show More Replies
                        </p>
                    </button>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}
