import {
    createComment,
    updateComment,
    fetchMoreVideos,
    fetchMoreComments,
} from '@/app/movie/[id]/page'
import { Prisma } from '@prisma/client'

export type MovieDetail = {} & Prisma.GetResult<Prisma.MovieSelectScalar>

export type CommentDetail = {
    subCommentsCount: number
    likesCount: number
    userImage: string
} & Prisma.GetResult<Prisma.CommentSelectScalar>

export type CreateComment = {
    parentCommentId?: string
    movieId?: string
    content: string
}

export type createCommentFunctionType = typeof createComment
export type updateCommentFunctionType = typeof updateComment
export type fetchMoreVideosFunctionType = typeof fetchMoreVideos
export type fetchMoreCommentFunctionType = typeof fetchMoreComments
