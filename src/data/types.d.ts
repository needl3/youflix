import { Prisma } from "@prisma/client";

export type MovieDetail = {
} & Prisma.GetResult<Prisma.MovieSelectScalar>
