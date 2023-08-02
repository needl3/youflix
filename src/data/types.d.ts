import { createComment, updateComment, fetchMoreVideos} from "@/app/movie/[id]/page";
import { Prisma } from "@prisma/client";

export type MovieDetail = {
} & Prisma.GetResult<Prisma.MovieSelectScalar>

export type CommentDetail = {
} & Prisma.GetResult<Prisma.CommentSelectScalar>

export type CreateComment= {
    parentCommentId?: string
    movieId?: string
    content: string
}


export type createCommentFunctionType = typeof createComment
export type updateCommentFunctionType = typeof updateComment
export type fetchMoreVideosFunctionType = typeof fetchMoreVideos
