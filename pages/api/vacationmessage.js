

export default async function handler(req, res) {
        const work = req.body.work
        const name = req.body.name
        const age = req.body.age
        const phone = req.body.phone
        const previousWork = req.body.previousWork

        const a = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=-765946569&text=Поступила заявка на работу ${work}:%0A-------------------%0AИмя: ${name}%0AВозраст: ${age}%0AПрошлые места работы: ${previousWork}%0AНомер телефона: ${phone}`)
        res.status(200).json({message: a.ok})



}
