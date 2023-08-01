"use client"

import { CommentDetail, createCommentFunctionType, updateCommentFunctionType } from "@/data/types"

export default function({ createComment, updateComment, info }: { createComment: createCommentFunctionType, updateComment: updateCommentFunctionType, info: CommentDetail }) {
    return <>CommentItem</>
}
