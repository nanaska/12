import prisma from '../../../lib/prisma';

export default async function handler(req, res) {

    const product = await prisma.Product.findMany({
        orderBy: {
            counterForRelevant: 'desc',
        },
        take: 6 ,

    })
    prisma.$disconnect()


    res.status(200).json(product)
}
