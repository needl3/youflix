import { Prisma } from "@prisma/client"

function parsePublishedDate(d: Date): string {

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

function parseLength(ms: number) {
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
export default function VideoItem({ item }: { item: Prisma.MovieCreateInput}) {
    return <li>
        <div className="relative w-[350px] ease-in-out duration-300">
            <img src={item.image || "images/placeholder.png"} className="rounded-lg h-52 w-full" referrerPolicy="no-referrer"/>
            <div className="absolute top-0 left-0 z-10 bg-gradient-to-b from-[#00000000] to-[#000000ff] w-full h-52 rounded-lg"/>
            <h1 className="text-lg text-white absolute bottom-2 left-2 z-20 right-20">{item.name}</h1>
            {false && <span className="absolute bottom-1 right-1 bg-white rounded-md px-1 text-sm">{parseLength(/* item.length */0 * 60 * 60 * 1000)}</span>}
        </div>
    </li>
}
