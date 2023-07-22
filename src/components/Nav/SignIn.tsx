"use client"
import UserIcon from "@/assets/site/usericon-notloggeddin.svg"
import { signIn } from "next-auth/react"
import Link from "next/link"

export default function SignIn() {
    return (
        <Link href="/api/auth/signin">
            <div
                className="border flex rounded-full items-center flex-row pl-2 pr-3 h-9 hover:cursor-pointer hover:bg-slate-200 text-sm"
                onClick={
                    (e) => {
                        e.preventDefault()
                        signIn("google", { callbackUrl: "/" })
                    }
                }>
                <div className="pr-2">
                    <UserIcon />
                </div>
                Sign in
            </div>
        </Link>
    )
}
