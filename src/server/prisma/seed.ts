import { Prisma } from '@prisma/client'
import db from '../prisma'
import fs from 'fs'
import { exit } from 'process'

function parseDate(d: string) {
    const dt = new Date(d)
    if (dt.getTime() === dt.getTime()) return dt
    else return undefined
}

function parseCSV(filePath: string): Prisma.MovieCreateManyInput[] | null {
    try {
        const rawFile = fs.readFileSync(filePath)
        const lines = rawFile.toString().split('\n')
        const parsedLines: Prisma.MovieCreateManyInput[] = []
        for (const line of lines.splice(1)) {
            const splittedLine = line.split(' ||| ')
            if (!splittedLine[0] || !splittedLine[9]) continue
            parsedLines.push({
                name: splittedLine[0],
                image: splittedLine[1],
                description: splittedLine[2],
                rating: parseFloat(splittedLine[3]),
                released: parseDate(splittedLine[5]),
                genre: splittedLine[6] ? JSON.parse(splittedLine[6]) : [],
                origin: splittedLine[7] || 'NA',
                productionHouse: splittedLine[8]
                    ? JSON.parse(splittedLine[8])
                    : [],
                link: splittedLine[9],
            })
        }
        return parsedLines
    } catch (e) {
        console.error(e)
    }
    return null
}

console.log(process.env.SEED_DATA_FILE)
const parsedCSV = parseCSV(process.env.SEED_DATA_FILE as string)

if (!parsedCSV) exit(1)

db.movie.deleteMany().then(() => {
    db.movie
        .createMany({
            data: parsedCSV,
        })
        .then(() => console.log('Successfully inserted all data'))
        .catch(e => console.log('Cannot insert all data', e))
})
