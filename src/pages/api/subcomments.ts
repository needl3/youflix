import db from '@/server/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { skip = 0 } = req.query

    skip = parseInt(skip as string)

    if (typeof skip !== 'number') skip = 0

    return res.json({
        comments: await db.comment.findMany({
            skip: skip,
            take: skip * 2 || 5,
        }),
    })
}
