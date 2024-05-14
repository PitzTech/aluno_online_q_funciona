import "reflect-metadata"

import express from "express"
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

const PORT = 8080

app.listen(PORT, () => console.log("Servidor rodando"))
