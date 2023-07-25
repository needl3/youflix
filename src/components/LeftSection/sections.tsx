import Home from "@/assets/sidebar/home.svg"
import Shorts from "@/assets/sidebar/shorts.svg"
import Watching from "@/assets/sidebar/watching.svg"
import Considering from "@/assets/sidebar/considering.svg"
import Completed from "@/assets/sidebar/completed.svg"

export type MainMenuSchema = {
    name: string,
    icon: React.ReactNode,
    href: string
}

export type FollowersSchema = {
    name: string,
    img: string,
    href: string
}

export const mainMenu: MainMenuSchema[] = [
    {
        name: "Home",
        icon: <Home />,
        href: "/"
    },
    {
        name: "Shorts",
        icon: <Shorts />,
        href: "/shorts"
    },
    {
        name: "Completed",
        icon: <Completed />,
        href: "/completed"
    },
    {
        name: "Considering",
        icon: <Considering />,
        href: "/considering"
    },
    {
        name: "Watching",
        icon: <Watching />,
        href: "/watching"
    },
]

export const dummyFollowers = [
    {
        name: "Anish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    },
    {
        name: "MAnish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    },
    {
        name: "TAnish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    },
    {
        name: "GAnish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    },
    {
        name: "ZAnish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    },
    {
        name: "CAnish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    },
    {
        name: "PAnish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    },
    {
        name: "QAnish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    },
    {
        name: "RAnish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    },
    {
        name: "SAnish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    },
    {
        name: "UAnish",
        img: "https://yt3.ggpht.com/Q7cJ7tF0hoEiCPjGrah6OuNAKwKPP1l6FZfDeN17GsSL-jpUT7kHiRP744qmUd8pPzipevz_SyM=s88-c-k-c0x00ffffff-no-rj",
        href: "#"
    }



]
