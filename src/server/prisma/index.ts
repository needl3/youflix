import { PrismaClient } from "@prisma/client"

async function testDBConnection(db: PrismaClient){
    try{
        await db.$connect()
        console.log("\x1b[32mConnected to database\x1b[0m")
    }catch(e){
        console.error("\x1b[31m[WARNING] \x1b[33mCouldn't connect to database\x1b[0m")
    }
}

const prismaGlobal = global as typeof global & {
    db?: PrismaClient
}

const cachedDb = prismaGlobal.db
const db: PrismaClient = prismaGlobal.db || new PrismaClient()
if(typeof cachedDb !== typeof db)    testDBConnection(db)

export default db
