import { Session } from "next-auth"
import Link from "next/link"

export default function User({session}: {session: Session}) {
    return (
        <div className="pl-5 pr-3 py-1">
            <Link href={"/"}>
                <img src={session.user?.image} alt="user-profile-photo" width='32px' height='32px' className="rounded-full" />
            </Link>
        </div>
    )
}
