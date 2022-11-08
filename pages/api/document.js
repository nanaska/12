import fs from "fs"

export default async function handler(req, res) {
    const a = fs.readFile("/awd.pdf")
    res.status(200).json(a)
}
