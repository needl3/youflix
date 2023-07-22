import Link from "next/link"

export default function User() {
    return (
        <div className="pl-5 pr-3 py-1">
            <Link href={"/"}>
                <img src="https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj" alt="user-profile-photo" width='32px' height='32px' className="rounded-full" />
            </Link>
        </div>
    )
}
