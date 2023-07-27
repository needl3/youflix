import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions, DefaultSession } from "next-auth";
import prisma from "@/server/prisma"
import GoogleProvider from "next-auth/providers/google"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
        } & DefaultSession["user"]
    }
}

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.G_CLIENT_ID || "",
            clientSecret: process.env.G_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
        session: async(props) => {
            delete props.session.user?.email
            if(!!props.token.sub)
                props.session.user.id = props.token.sub
            return props.session
        }
    },
    session: {
        strategy: "jwt"
    },
}

export default NextAuth(authOptions)
