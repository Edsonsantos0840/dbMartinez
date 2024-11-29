const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@martinz.7fxzw.mongodb.net/?retryWrites=true&w=majority&appName=martinz`)

    console.log("Conectado com sucesso!")
}
main().catch((err) => console.log(err) )

module.exports = main;