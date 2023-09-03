import { PrismaClient } from '@prisma/client'

async function testDBConnection(db: PrismaClient) {
    try {
        await db.$connect()
        console.log('\x1b[32mConnected to database\x1b[0m')
    } catch (e) {
        console.error(
            "\x1b[31m[WARNING] \x1b[33mCouldn't connect to database\x1b[0m"
        )
    }
}

const globalForPrisma = global as unknown as { db: PrismaClient }

const db = globalForPrisma.db || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
    if (!!!globalForPrisma.db) testDBConnection(db)
    globalForPrisma.db = db
}

export default db
