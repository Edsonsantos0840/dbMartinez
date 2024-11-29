import express from 'express'

const app = express()

app.get("/", (req, res ) => {
    return res.json(message, 'tudo Ok!')
})

app.listen(3333, () => console.log("Servidor rodando") )