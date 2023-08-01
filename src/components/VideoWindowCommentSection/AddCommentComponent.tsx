"use client"

import { useSession } from "next-auth/react"
import Emoticon from "@/assets/comments/emoticon.svg"
import { ChangeEvent, useState } from "react"
import { CommentDetail, createCommentFunctionType } from "@/data/types"


export default function AddCommentComponent({ initialCommentDetail, createComment }: { initialCommentDetail?: CommentDetail, createComment: createCommentFunctionType }) {
    const [commentDetail, setCommentDetail] = useState(initialCommentDetail)
    const [activeComment, setActiveComment] = useState(false)

    const session = useSession()

    function handleCommentChange(e: ChangeEvent<HTMLInputElement>) {
        setCommentDetail({ ...commentDetail, [e.target.name]: e.target.value })
        console.log(commentDetail.content)
    }

    function cancelComment() {
        setCommentDetail(initialCommentDetail)
        setActiveComment(false)
    }

    return < div className="flex items-center gap-x-4 pb-5" >
        <img src={session.data?.user.image || "https://yt3.ggpht.com/a/default-user=s48-c-k-c0x00ffffff-no-rj"} className="h-11 w-auto rounded-full self-start" />
        <div className="w-full relative">
            <input name="content" type="text" placeholder="Add a comment..." onClick={() => setActiveComment(true)} className={`w-full mb-3 border-b transition duration-300 ${activeComment ? "border-b-black" : ""} focus:outline-none`} onChange={handleCommentChange} />
            {activeComment && <div className="flex justify-between items-center fr transition duration-1000">
                <div className="hover:bg-slate-200 p-2 rounded-full cursor-pointer">
                    <Emoticon />
                </div>
                <div className="flex gap-x-2">
                    <button className="px-3 py-1 hover:bg-slate-200 rounded-full transition duration-300" onClick={cancelComment}>Cancel</button>
                    <button className={`rounded-full px-3 py-2 transition duration-300 ${commentDetail.content.length > 0 ? "bg-blue-300" : "bg-slate-100 text-slate-500"}`}
                        onClick={() => createComment(commentDetail)}>
                        Comment
                    </button>
                </div>
            </div>
            }
        </div>
    </div >
}
