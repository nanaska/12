import prisma from '../../../lib/prisma';

export default async function handler(req, res) {

    const product = await prisma.Product.updateMany({
        where: {
           id: {in : req.body.productid}
    },
        data:{
            counterForRelevant:{ increment: 1}
        }
    })
    prisma.$disconnect()
    res.status(200).json(product)
}
