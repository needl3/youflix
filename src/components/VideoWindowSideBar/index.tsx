import { Prisma } from "@prisma/client";

export default function({info}: {info: Prisma.MovieCreateInput}) {
    return <div className="border w-fit h-full">SideBar Section</div>
}
