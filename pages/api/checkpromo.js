import prisma from "../../lib/prisma";

export default async function handler(req, res) {

    const product = await prisma.Promo.findMany({
        where: {
            title: req.body.promo


        },

    })

    if (product.length > 0){
        res.status(200).json(product[0].description)
    }
    if (product.length === 0){
        res.status(200).json({msg: "Промокод не найден"})
    }
    prisma.$disconnect()



}
