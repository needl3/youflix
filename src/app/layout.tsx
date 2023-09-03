import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import { getServerSession } from 'next-auth'
import authOptions from "@/pages/api/auth/[...nextauth]"
import SessionContext from '@/components/Context/SessionContext';
import ReduxContext from '@/components/Context/ReduxContext'

import LeftSection from "@/components/LeftSection";
import RightSection from '@/components/RightSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'YouFlix',
    description: 'Watch Movies Free For Life',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)
    return (
        <html lang="en">
            {/* @ts-expect-error Server Component */}
            <SessionContext session={session}>
                <ReduxContext>
                    <body className={inter.className}>
                        <Nav />
                        <div className="flex">
                            <LeftSection />
                            <RightSection children={children} />
                        </div>
                    </body>
                </ReduxContext>
            </SessionContext>
        </html>
    )
}
