import prisma from '../../lib/prisma';




export default async function handler(req, res) {

    const product = await prisma.Promo.create({
        data: {
            title: req.body.title,
            description: req.body.description
        }


    })

    prisma.$disconnect()
    res.status(200).json(product)
}
