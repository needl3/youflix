import { Prisma } from "@prisma/client"

export function parseViews(views: number): string {
    const sizeNum = String(views).length
    let toReturn = String(views)

    if (sizeNum >= 4)
        toReturn = String(views / 1000) + "K"
    else if (sizeNum >= 7)
        toReturn = String(views / 1000000) + "M"
    else if (sizeNum >= 10)
        toReturn = String(views / 1000000000) + "B"

    return toReturn + " views"
}

export function parsePublishedDate(d: Date): string {

    //
    // Return X if publishedDate is not available or data not suitable
    //
    if (d.getTime() !== d.getTime())
        return "X"

    const secondsElasped = Date.now() / 1000 - d.getTime() / 1000

    const oneYear = 365 * 24 * 60 * 60
    const oneMonth = oneYear / 12
    const oneWeek = oneMonth / 4
    const oneDay = oneWeek / 7
    const oneHour = oneDay / 24
    const oneMin = oneHour / 60
    const oneSec = oneMin / 60

    let parsedTime = ""
    if (secondsElasped > oneYear)
        parsedTime = String(Math.floor(secondsElasped / oneYear)) + " years"
    else if (secondsElasped > oneMonth)
        parsedTime = String(Math.floor(secondsElasped / oneMonth)) + " month"
    else if (secondsElasped > oneWeek)
        parsedTime = String(Math.floor(secondsElasped / oneWeek)) + " weeks"
    else if (secondsElasped > oneDay)
        parsedTime = String(Math.floor(secondsElasped / oneDay)) + " days"
    else if (secondsElasped > oneHour)
        parsedTime = String(Math.floor(secondsElasped / oneHour)) + " hours"
    else if (secondsElasped > oneMin)
        parsedTime = String(Math.floor(secondsElasped / oneMin)) + " minutes"
    else
        parsedTime = String(Math.floor(secondsElasped / oneSec)) + " seconds"

    return parsedTime + " ago"
}

export function parseLength(ms: number) {
    const oneHour = 60 * 60 * 1000
    const oneMin = oneHour / 60
    const oneSec = oneMin / 60

    let parsedLength = ""
    const hr = Math.floor(ms / oneHour)
    const min = Math.floor((ms - hr * oneHour) / oneMin)
    const secs = Math.floor((ms - hr * oneHour - min * oneMin) / oneSec)

    if (ms > oneHour)
        parsedLength += String(hr) + ":"
    parsedLength += String(min) + ":"
    parsedLength += String(secs).padStart(2, "0")

    return parsedLength
}

//
// Extending length and other types which are to be added in future
//
export default function VideoItem({ item }: { item: Prisma.MovieCreateManyInput }) {
    return <li className="w-[19.5rem]">
        <div className="relative">
            <img src={item.image || "images/placeholder.png"} className="rounded-lg h-52 w-full" />

            {/* Length of movie */}
            {false && <span className="absolute bottom-1 right-1 bg-white rounded-md px-1 text-sm">{parseLength(/* item.length */0 * 60 * 60 * 1000)}</span>}
        </div>

        <div className="flex pt-3 pb-8 gap-x-3">
            {false && <img src={"supposed-to-be-studio-image"} className="rounded-full bg-slate-300 w-10 h-10" />}
            <div>
                <h1 className="text-lg">{item.name}</h1>
                {item.productionHouse ? <p className="text-sm">{(item.productionHouse as string[])[0]}</p> : <></>}
                <p className="text-sm">{`${parseViews(/* item.views || */ 0)} - ${item.released && parsePublishedDate(new Date(item.released))}`}</p>
            </div>
        </div>
    </li>
}
