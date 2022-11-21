import prisma from "../../lib/prisma";

export default async function handler(req, res) {

    const product = await prisma.Promo.findMany({
        where: {
            title: req.body.promo


        },

    })

    if (product.length > 0){
        res.status(200).json({desc: product[0].description, msg:true} )
    }
    if (product.length === 0){
        res.status(200).json({msg: false})
    }
    prisma.$disconnect()



}
