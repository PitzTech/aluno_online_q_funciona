import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/testando-se-funfou-msm", (req, res) => {
  res.send("ÓIA QUE FUNFOU")
})

app.listen(3000, () => {
  console.log("APLICATIVO TA NO AR 🐱‍🏍")
})

// Para executar, digite node server.js

// instalem a extensão Thunder Client

// endereço local: localhost ou 127.0.0.1
