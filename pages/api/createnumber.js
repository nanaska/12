import prisma from '../../lib/prisma';




export default async function handler(req, res) {

    const product = await prisma.Number.create({
        data: {
            number: req.body.number
        }


    })

    prisma.$disconnect()
    res.status(200).json(product)
}
