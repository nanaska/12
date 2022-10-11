import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    const newData = req.body.filtertype.flat();

    const product = await prisma.Product.findMany({
        where: {
            filterType: {
                some: {
                    name: {
                        in: newData
                    }
                }
            },
            type: {
                name: {
                    in: req.body.producttype
                }
            },


        },

    })
    prisma.$disconnect()


    res.status(200).json(product)
}
