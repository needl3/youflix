"use client"

import Filter from "@/assets/comments/filter.svg"
import { useEffect, useState } from "react"
import AddCommentComponent from "./AddCommentComponent"
import { CommentDetail, createCommentFunctionType, updateCommentFunctionType } from "@/data/types"
import { useParams } from "next/navigation"
import CommentItem from "./CommentItem"


export default function CommentList({ items, fetchMore, createComment, updateComment}:
    {
        items: CommentDetail[],
        fetchMore: Function,
        createComment: createCommentFunctionType,
        updateComment: updateCommentFunctionType
    }) {
    const [paginatingComments, setPaginatingComments] = useState(items)
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)

    const params = useParams()

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        setIsLoading(true)
        fetchMore(page)
            .then((r: any) => {
                setPaginatingComments([...paginatingComments, ...r])
                setPage(page + 1)
            })
            .catch((e: any) => console.error(e))
            .finally(() => setIsLoading(false))
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);



    return <div className="w-full">
        <div className="flex gap-x-5 pb-5">
            <p className="text-xl">{paginatingComments.length || "432 Comments"}</p> {/* Remove this 432 text*/}
            <button className="font-bold flex gap-x-2"><Filter /> Sort By</button>
        </div>
        <AddCommentComponent initialCommentDetail={{
            content: "",
            movieId: params?.id
        }} createComment={createComment} />
        <ul>
            {
                paginatingComments.map(comment => <li>
                    <CommentItem createComment={createComment} updateComment={updateComment} info={comment} />
                </li>
                )
            }
        </ul>
    </div>
}
