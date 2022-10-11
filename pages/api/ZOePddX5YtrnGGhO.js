import prisma from "../../lib/prisma"

export default async function handler(req, res) {
    let metrics = await prisma.$metrics.json()
    prisma.$disconnect()


    res.status(200).json(metrics)
}
