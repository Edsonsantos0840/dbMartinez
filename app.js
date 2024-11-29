const express = require("express")
const app = express()

require("dotenv").config()
require("./db")

const port = process.env.Port || 4000

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`) )