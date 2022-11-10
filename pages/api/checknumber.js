import prisma from "../../lib/prisma";

export default async function handler(req, res) {

    const product = await prisma.Number.findMany({
        where: {
            number: req.body.number


        },

    })

    if (product.length > 0){
        res.status(200).json({msg: true})
    }
    if (product.length === 0){
        res.status(200).json({msg: false})
    }
    prisma.$disconnect()



}
