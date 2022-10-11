import prisma from '../../../lib/prisma';
export default async function handler(req, res) {
    const product = await prisma.Product.deleteMany()
    const filter = await prisma.FilterType.deleteMany()
    prisma.$disconnect()


    res.status(200).json({product, filter})
}
