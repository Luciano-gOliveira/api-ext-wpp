import express from "express"
const cors = require("cors")
import { db } from "./src/_libs/prisma"
const app = express()

app.use(cors)
app.use(express.json())

app.get("/", async(req, res) => {
    try{
        const messages = await db.message.findMany({})
        res.status(200).send(messages)
    }catch(error: any){
        res.status(500).send(error.message)
    }
})


const PORT = 8000
app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`)
})