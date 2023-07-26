import { Prisma } from "@prisma/client"
import db from ".."

export default async function getConsidering({ limit, page, userId }: { limit: number, page: number, userId: string }) {
    const res: Prisma.MovieCreateInput[] = await db.$queryRaw`SELECT * FROM "Movie" WHERE id IN (SELECT "movieId" FROM "Completed" WHERE "userId"=${userId}) OFFSET ${limit * page} LIMIT ${limit} ;`
    return res
}
