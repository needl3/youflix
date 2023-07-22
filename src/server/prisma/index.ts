import { PrismaClient } from "@prisma/client"

const prismaGlobal = global as typeof global & {
    db?: PrismaClient
}

const db: PrismaClient = prismaGlobal.db || new PrismaClient()

export default db
