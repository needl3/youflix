import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import prisma from "@/server/prisma"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.G_CLIENT_ID || "",
            clientSecret: process.env.G_CLIENT_SECRET || ""
        })
    ],
    session: {
        strategy: "jwt"
    }, 
}

export default NextAuth(authOptions)
